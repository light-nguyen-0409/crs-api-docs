---
title: Permanent candidate intake
sidebar_position: 5
---

# Permanent candidate intake

Permanent intake is a post-signup candidate flow. It reuses the existing candidate and candidate-job records; it does not create a separate intake table.

## Entry points

- [Config](/docs/api/candidate/get-me-permanent-intake-config-job-id-jobid)
- Work Finder Agreement generation is a service/storage operation in the intake flow; no separate endpoint page is present in the current 245-entry runtime inventory.
- [Record Agreement click](/docs/api/candidate/post-me-jobs-jobid-work-finder-agreement-click)
- [Submit intake](/docs/api/candidate/post-me-permanent-intake)
- CV and agreement files use the existing [candidate file upload](/docs/api/candidate/post-me-files-type) flow.

The config controller requires job_id >= 1 and verifies candidate ownership through the service.

## Request contract

The FormRequest requires:

| Group | Evidence-backed fields |
|---|---|
| Candidate/job | job_id, title, first_name, last_name, email, phone_number, date_of_birth |
| Address | address.building, street, town_city, county, postcode |
| Availability | contact_dates array, contact_times array |
| Intake answers | transportation_method, transportation_distance, recruitment_source, journey_type |
| Agreement | work_finder_agreement_accepted must be accepted |
| Files | exactly two files entries; each file_id is integer/distinct and type is CV or work_finder_agreement, with distinct types |

The exact error serialization for framework validation remains UNVERIFIED.

## Submission sequence

1. Service resolves the candidate_job for the signed-in candidate and rejects an already permanent candidate with permanentIntakeConflict.
2. It batch-loads submitted files by ID, checks candidate ownership and declared type, requires a CV and a Work Finder Agreement tied to the submitted job and existing storage.
3. It verifies the submitted email equals the signed-in candidate email.
4. It reads the existing address, answers and question options before the mutation transaction.
5. The transaction writes candidate profile fields, address and three answer records. first_applied_at is set only when empty.
6. After the transaction, it dispatches PermanentCandidateSubmittedEvent with candidate/job/CV/agreement IDs. The registered listener calls MatchMaker synchronization.
7. Only after the event returns successfully does the service set is_permanent=true and return candidate_id, job_id, candidate_job_id and submission_status=submitted.


## Data and side effects

| Area | Current implementation |
|---|---|
| Database | candidates, candidate_jobs, candidate_addresses, answers, candidate_timings and files metadata |
| File storage | CV and Work Finder Agreement are existing files; agreement generation writes PDF/storage and then file metadata |
| MatchMaker | Sync is called from the event listener using candidate/job/file IDs; status mapping is PERM/perm, not LIVE |
| Response | PermanentCandidateIntakeResult contains candidate_id, job_id, candidate_job_id and submission_status |
| Visibility | Candidate collection filters can hide is_permanent=true; ID-based authorized detail/action lookups do not have a global permanent filter |
| Schema caveat | is_permanent is a candidate column; no intake/sync-state table is introduced. Production migration/data state is UNVERIFIED. |

## Failure and retry boundary

| Failure | Observed state / guidance |
|---|---|
| Candidate/job/file precondition | No intake transaction should start; resolve candidate/job/file state before retry. |
| Validation/conflict | Candidate returns configured Candidate Status error; do not retry without changing the input/state. |
| Local transaction failure | Profile/address/answer writes should roll back together; verify database state before retry. |
| MatchMaker transient/non-retryable/state failure | Local transaction has already committed; is_permanent remains false and the service returns configured 502 permanentMatchMakerSyncFailed. There is no documented route-level resync action; check external worker and api_result_logs before any manual retry. |
| Duplicate submit after successful sync | permanentIntakeConflict prevents a second submit once is_permanent is true. |

No idempotency key or exactly-once MatchMaker guarantee is implemented in the current flow. That is an implementation limitation, not a client promise.


## GAP-691 CV upload formats

Approved contract, pending backend verification (2026-10-08); STG/production deployment remains unverified. Upload the CV through `POST /api/candidate/me/files/cv` before submitting its returned file ID. Accepted CV formats are PDF, DOC, DOCX, PNG, JPG and JPEG, with detected MIME validation, ClamAV scanning and a maximum size of 10 MiB. See the [CV upload contract](/docs/api/candidate/post-me-files-type#gap-691-cv-image-upload-contract) for request, response and validation examples. This change only expands CV upload formats; it does not change the Permanent intake submission shape or MatchMaker workflow.


## Agreement metadata for FE form PDF export

GAP-691 contract implemented and verified in the backend workspace (2026-10-08); deployment remains unverified: the [Agreement click API](/docs/api/candidate/post-me-jobs-jobid-work-finder-agreement-click#gap-691-first-click-metadata-contract) returns stored first-click `clicked_at` (ISO 8601 UTC) and `ip` at the top level alongside the existing success fields. Repeated calls return the original pair, and legacy missing IP is null.

FE waits for a successful click response, associates metadata with the Candidate/job, and embeds it in the form PDF under **Agreement first clicked at** and **Agreement first click IP** (null IP: `Not recorded`). Preserve timezone/offset. A failed request blocks export/upload until retry succeeds; preserve entered form data. Then upload `permanent_candidate_form` with `Gap-Job-ID` and use the returned file ID in the existing submit workflow. These fields do not represent consent/signature/submit time. Backend PDF processing and the upload/submit/MatchMaker behavior are unchanged; FE implementation and deployed behavior remain unverified.
