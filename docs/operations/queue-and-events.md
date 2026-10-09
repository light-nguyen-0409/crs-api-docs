---
title: Queue and events
sidebar_position: 4
---

# Queue and events

Events and queue jobs create state changes outside the immediate controller response. The local source proves registration and handler code, not worker delivery in deployment.

## Registered event/listener paths

| Trigger | Listener | Observed effect |
| --- | --- | --- |
| Appointment repository save | AppointmentUpdateListener | Recalculate candidate aggregate/filter progress |
| Escalated issue repository save | EscalatedIssueUpdateListener | Recalculate candidate aggregate/filter progress |
| RTW approval branch in CandidateService::updateCandidate | OverallApproveListener | If alternative-bank conditions pass, request OnePay account and send email |

## Welfare certificate job

The welfare endpoint dispatches GenerateWorkerWelfareCheckCertificateJob after saving the welfare-check score. The job implements ShouldQueue, reloads the check and files, generates a PDF, stores certificate_file_id, syncs a MatchMaker contact log/attachment and then sends a failure email when the score is below CandidateWelfareCheck::PASS_SCORE_THRESHOLD (75.0).


Important boundaries:

- Queue execution can be synchronous or asynchronous depending on queue connection.
- No explicit tries, backoff or dedup guard is documented in the job.
- certificate_file_id is saved before the MatchMaker sync, so certificate existence is not proof of external contact-log delivery.
- Check certificate, contact log, worker identity and api_result_logs before retrying.

## Event dispatch timing

**Approved GAP-691 cleanup — NOT YET DEPLOYED (2026-10-09).** Permanent intake dispatches `SyncPermanentCandidateToMatchMakerJob` directly to Redis/default after the local transaction. HTTP 202 reports pending processing; the worker reuses the required scalar prepared profile/answers supplied by submit, hydrates only missing worker data, generates/reuses the PDF, syncs MatchMaker and completes the candidate only after success. The typed Job DTO requires both the form snapshot and prepared profile at construction. The former standalone scalar MatchMaker entry point has no production caller and is removed. The unused Permanent submit Event/Listener and their registration are scheduled for removal. The table above describes the intended remaining registrations. Transient background errors retry; non-retryable/state errors fail without completion. An enqueue failure returns the existing HTTP 502 after local persistence. See [Permanent intake](/docs/flows/permanent-intake) for the exact boundaries.

Appointment and issue listeners recalculate progress after source mutation. A successful source mutation and a successful listener effect should be checked separately when debugging progress.

## Related pages

- [Permanent intake](/docs/flows/permanent-intake)
- [External integrations](/docs/operations/external-integrations)
- [Scheduled processes](/docs/operations/scheduled-processes)
