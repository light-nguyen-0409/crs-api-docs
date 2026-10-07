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
