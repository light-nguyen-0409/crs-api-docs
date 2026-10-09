---
title: Permanent candidate intake
sidebar_position: 5
---

# Permanent candidate intake

**GAP-691 approved planned contract — NOT YET DEPLOYED (2026-10-08).** The async workflow below supersedes the earlier synchronous submission and FE-exported form handoff.

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
6. Before the transaction it captures validated payload, CV/agreement names and first-click IP/raw timestamp into a scalar snapshot. After local commit it enqueues `SyncPermanentCandidateToMatchMakerJob` on the dedicated Redis `permanent_intake` connection/queue; the snapshot is serialized in the queue payload. Only successful enqueue returns HTTP 202 with candidate_id, job_id, candidate_job_id and submission_status=pending.
7. The job verifies candidate/job/file state under a candidate lock, renders an A4 PDF using the Welfare certificate layout and GetStartedPerm titles/labels, stores a job-scoped `permanent_candidate_form` File, then synchronizes MM with CV → Agreement → generated form attachments.
8. Only job success sets is_permanent=true. There is no submission table, submission ID, status history or polling endpoint. Failed processing is managed through queue retries/failed jobs and logs.


## Data and side effects

| Area | Current implementation |
|---|---|
| Database | candidates, candidate_jobs, candidate_addresses, answers, candidate_timings and files metadata |
| File storage | CV and Work Finder Agreement are existing files; the queued job generates and stores the Permanent form PDF and metadata |
| MatchMaker | Sync is called from the background job after PDF generation; status mapping remains PERM/perm |
| Response | PermanentCandidateIntakeResult contains candidate_id, job_id, candidate_job_id and submission_status=pending; HTTP 202 |
| Visibility | Candidate collection filters can hide is_permanent=true; ID-based authorized detail/action lookups do not have a global permanent filter |
| Schema caveat | is_permanent is a candidate column; no intake/sync-state table is introduced. Production migration/data state is UNVERIFIED. |

## Failure and retry boundary

| Failure | Observed state / guidance |
|---|---|
| Candidate/job/file precondition | No intake transaction should start; resolve candidate/job/file state before retry. |
| Validation/conflict | Candidate returns configured Candidate Status error; do not retry without changing the input/state. |
| Local transaction failure | Profile/address/answer writes should roll back together; verify database state before retry. |
| MatchMaker transient/non-retryable/state failure | Failure occurs in the background; no later HTTP 502 is sent to the accepted request. Transient errors retry up to three processing attempts; non-retryable/state errors fail immediately. is_permanent remains false. Check failed queue jobs, external worker and api_result_logs before manual retry. |
| Redis enqueue failure | Local profile remains saved; HTTP 502/code 1017, no pending response. No DB/Redis atomicity guarantee is claimed. |
| Duplicate submit after successful sync | permanentIntakeConflict prevents a second submit once is_permanent is true. |

No idempotency key or exactly-once MatchMaker guarantee is implemented in the current flow. That is an implementation limitation, not a client promise.


## GAP-691 CV upload formats

Approved contract, pending backend verification (2026-10-08); STG/production deployment remains unverified. Upload the CV through `POST /api/candidate/me/files/cv` before submitting its returned file ID. Accepted CV formats are PDF, DOC, DOCX, PNG, JPG and JPEG, with detected MIME validation, ClamAV scanning and a maximum size of 10 MiB. See the [CV upload contract](/docs/api/candidate/post-me-files-type#gap-691-cv-image-upload-contract) for request, response and validation examples. This change only expands CV upload formats; it does not change the Permanent intake submission shape or MatchMaker workflow.


## Backend PDF and first-click metadata

The job snapshot includes persisted Candidate/job first-click timestamp and IP. BE renders **Agreement first clicked at** with the raw stored timestamp, and **Agreement first click IP**; missing legacy values display `Not recorded`. No browser IP/clock is used, no timezone is inferred, and click time is not consent/submit time. The intake flow does not require FE to export/upload the form. Generic candidate upload of permanent_candidate_form remains supported with Gap-Job-ID and normal validation (approved compatibility amendment; not yet deployed); intake still generates its own attachment and accepts only CV/Agreement references.

**GAP-691 approved certificate presentation amendment — NOT YET DEPLOYED (2026-10-08).** PDF header/footer reuse `pdf.layouts.certificate`, including logos. The main heading is **Permanent Candidate Registration**, with no header or section subtitles. The candidate name is prominent and derived from the validated queued first/middle/last names, with no profile reload. Completed information uses grouped certificate styling, without input-like underline rows or blank signature areas. English GetStartedPerm section titles/captions remain: Personal information; Address; When can we contact you?; Transportation; Right to work status; CV; Work Finder Agreement. All submitted data, file references and stored click metadata remain present. A4 content may span pages; text is not truncated to force one page. Welfare/GBG certification claims are not carried into this registration PDF. Payload/DB label changes after enqueue do not alter queued PDF content; existing stored PDFs are not restyled automatically. Public API schemas/errors, queue behavior and shared Welfare presentation are unchanged.

**GAP-691 approved footer branding amendment — NOT YET DEPLOYED (2026-10-09).** Newly generated Permanent PDFs display four footer logos on one A4 row: Gap Personnel, Driving Force Recruitment, Gap Technical, then Hawk3 Talent Solutions. The fourth image uses `company.logo_hawk3_talen_solutions_thumbnail`; its configured local asset must be deployed. An unavailable Hawk3 path is omitted using the existing missing-logo fallback. Welfare certificates retain their three-logo footer. Stored PDFs are still reused without automatic restyling. API schemas, queue and MatchMaker attachment behavior are unchanged.

## Question option labels from the database

**GAP-691 approved amendment — NOT YET DEPLOYED (2026-10-08).** Submitted dropdown values are raw keys. Transport, travel distance and recruitment source display labels come from `questions.data.options` for categories `primary_method_of_transport`, `willing_to_travel` and `where_did_you_hear_about_us_candidate_answer` respectively. `answer_options` provides answer associations, not display labels.

Submit resolves these three labels using its existing questions batch read and serializes selected labels in an internal `display_labels` map alongside unchanged raw payload values. New jobs render those labels without reading question options again. A DB label change after enqueue does not change the queued PDF. Missing question/options/key, null/empty/non-string label falls back to the raw submitted value; no hardcoded fallback or new input validation is introduced.

Older queued snapshots without `display_labels` resolve the three categories in one DB read before rendering. Their labels reflect current DB data because no historical label snapshot exists. Already stored PDFs remain unchanged. Section titles and field captions remain aligned with FE; title, journey type and contact day/time mappings are outside these three question categories. Request/response schemas, error contracts and routes are unchanged.

## Queue operational dependency

Use a dedicated Redis connection `permanent_intake`, queue `permanent_intake`; do not use the default sync driver or the recruitment `jobs` table. Run a dedicated worker with timeout 300s and retry_after 600s; candidate lock TTL 360s, using a shared Redis cache store. Lock contention releases the job without concurrent MM processing; attempts policy must account for contention. Preserve the existing default worker settings.

Redis availability, durable queue configuration and a running worker are release prerequisites. File identity is a deterministic snapshot fingerprint; retries reuse a stored form only when its metadata and storage object both exist. This does not guarantee exactly-once external MM attachments or pending-submit deduplication. FE handles 202 as accepted/processing, without polling or claiming completion.
