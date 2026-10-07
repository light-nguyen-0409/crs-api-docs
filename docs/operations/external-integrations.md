---
title: External integrations
sidebar_position: 2
---

# External integrations

External calls are business side effects, not standalone API success. The local implementation logs provider outcomes through ApiLog where the adapter supports it; deployment delivery and provider semantics remain UNVERIFIED.

## Integration matrix

| Provider/system | CRS entry points | Local effect | Trace/retry boundary |
|---|---|---|---|
| MatchMaker / Epsilon | Candidate transfer, status/on-plan/marketing sync, permanent intake, welfare contact log | candidate/MM identity, job state, files, answers, contact logs | Use peo_no + db_source, exact URL/status/body and local post-state. Idempotency is not implemented for all flows. |
| GBG Passport / Face Match / Bank | Passport token/result, face verification, welfare check, bank check, REFER cron | files, face rates, RTW state, bank review, issues | Distinguish provider rejection, transport error and local file/state failure. |
| OnePay / Microsoft Graph | Alternative bank request, mailbox ingestion | bank account and candidate NI/tax data | Check email identity, account number and prior ingestion before retry. |
| Esendex | SMS estimate/send/callback/observe | SMS campaign and receiver state | Provider callback XML is parsed by the observe route; dedup/replay behavior needs provider/runtime verification. |
| SharePoint | Employment/reference or file-related flows when enabled | external document/reference side effects | Deployment credentials and delivery are UNVERIFIED. |
| Loqate/Data8 and Google Maps | Address search/drill-down and branch map/location helpers | address result or branch map URL | Address lookup should not be treated as candidate persistence; candidate profile update is a separate write. |
| Storage/PDF/Mail | File upload, agreement/document/application pack/welfare certificate, email | files metadata, storage binary, email delivery | A saved local file or state does not prove email/external delivery. |

## Observability

The database relationship baseline identifies api_result_logs as the external response/error store. Trace by api_name, url, type, http_code, message, extra_info and created_at. Current adapters use provider-specific ApiResultLog constants, including MATCH_MAKER, EPSILON, GBG_PASSPORT, GBG_FACEMATCH, ONE_PAY, SHAREPOINT and Google Maps.

A provider exception may be logged with no HTTP code, while a provider response may have a status/body. Keep those cases separate during support analysis.

## Retry matrix

| Flow | Before retry | Current evidence |
|---|---|---|
| MatchMaker candidate transfer | Check worker existence in the selected db_source, current/previous peo_no, local candidate/job state and last API log. | No global idempotency guard; partial external calls can precede local finalization. |
| Permanent intake | Confirm local transaction committed, is_permanent state, CV/agreement IDs and external worker state. | Failure after local commit returns 502 with is_permanent still false; no route-level resync documented. |
| Welfare certificate | Check certificate_file_id, contact log and MatchMaker worker before rerunning. | Queue job has no explicit tries/backoff/dedup and certificate is written before MM sync. |
| OnePay mailbox | Check mailbox message identity and existing account/NI state. | Reprocessing must not attach data to the wrong candidate; production mailbox semantics are UNVERIFIED. |
| GBG webhook | Check raw webhook log and any separately processed result. | Current action is log-only and has no dedup evidence. |
| SMS send/callback | Check campaign/receiver state and provider result. | withoutOverlapping limits scheduler overlap; it is not exactly-once delivery. |

## Related flows

- [Candidate lifecycle](/docs/flows/candidate-lifecycle)
- [Permanent intake](/docs/flows/permanent-intake)
- [Scheduled processes](/docs/operations/scheduled-processes)
- [Webhook behavior](/docs/operations/webhooks)
