---
title: Candidate lifecycle
sidebar_position: 3
---

# Candidate lifecycle

The lifecycle below is the current implementation map across candidate, consultant and compliance actors. It is not a universal state machine: stored progress, aggregate progress, candidate status, job status, RTW approval and MatchMaker status are separate state surfaces.

> **GAP-534 code-verified flow (2026-10-14).** The bulk archive, consultant branch-membership guard and token-based profile deletion flow below are implemented in the backend; production deployment remains an operational concern.

## Lifecycle map

| Stage | Primary actor | Representative endpoints | Main data | External/side effect |
|---|---|---|---|---|
| Invitation/tracking | Consultant or browser | [Invite](/docs/api/consultant/post-candidates-invite), [tracking](/docs/api/candidate/post-tracking-records) | candidate_invitations, tracking_record_histories | Invitation email, attribution history |
| Signup | Candidate | [Signup](/docs/api/candidate/post-auth-signup), [login](/docs/api/candidate/post-auth-login) | candidates, candidate_jobs, tokens, authentication logs | MatchMaker lookup may occur; JWT issued |
| Profile and identity | Candidate | [Profile](/docs/api/candidate/get-me), [update](/docs/api/candidate/put-me), [MM token verification](/docs/api/candidate/post-me-verify-mm-token) | candidates, addresses, duplication process, files, face rates | MatchMaker, GBG/liveness, storage |
| Questions and work history | Candidate/consultant | [Question answers](/docs/api/candidate/post-question-groups-type-answers), [employment history](/docs/api/candidate/post-me-employee-histories) | questions, answer_options, answers, employment histories | Email/reference flow when enabled |
| Job application | Candidate | [Apply job](/docs/api/candidate/post-me-jobs), [jobs](/docs/api/candidate/get-me-jobs) | jobs, candidate_jobs, candidate_timings | Legal entity/category and MatchMaker context checks |
| Files and RTW | Candidate/consultant/compliance | [File upload](/docs/api/candidate/post-me-files-type), [share code](/docs/api/candidate/get-me-share-codes-code), [compliance approval](/docs/api/compliance/post-candidates-files-fileid-approve) | files, candidates, candidate_jobs, face rates, issues | GBG, UK GOV automation, storage, email |
| Review and contract | Consultant/compliance | [Appointment](/docs/api/consultant/post-candidates-id-appointments), [release contract](/docs/api/consultant/post-candidates-id-jobs-jobid-contract-document-release), [progress](/docs/api/consultant/get-progresses-candidateid-jobid) | appointments, candidate_job_appointments, progress, issues, files | Email, events and generated PDFs |
| MatchMaker transfer | Consultant | [Transfer](/docs/api/consultant/post-candidates-id-match-maker), [application pack](/docs/api/consultant/post-candidates-id-application-pack) | candidates, candidate_jobs, files, answers, match_maker_candidates | MatchMaker/Epsilon, contact logs, pack/PDF |
| Worker welfare | Consultant/queue worker | [Welfare check](/docs/api/consultant/post-candidates-id-worker-welfare-check), [history](/docs/api/consultant/get-candidates-id-worker-welfare-checks) | candidate_welfare_checks, files, candidates | GBG Face Match, PDF, MatchMaker contact log, compliance email |

## Stage notes

### Invitation and signup

The invitation flow writes invitation data before sending the invitation email. During signup, tracking cookie data supplies branch/job/referrer context before candidate state is created or updated. A late email or provider failure does not prove that earlier writes rolled back.

### Profile, identity and questions

Candidate profile changes can trigger duplicate checks and, for sensitive updates after approved RTW evidence, an escalated issue. MM token verification, NI verification and profile image verification set separate pieces of state; token_verified must not be treated as proof that face matching or RTW approval is complete. Questions and answers update answer records and registration progress; required-answer semantics need endpoint-specific validator tracing.

### Job, file and RTW context

candidate_jobs is the candidate-to-job ownership boundary. Appointment/job/file queries must retain candidate_id and job_id scope where the flow requires it. Files store metadata in files while binary/PDF content lives in storage. RTW approval is distinct from candidate approval and depends on approved evidence, face evidence and issue state in the compliance flow.

### Progress and review

Stored candidate/candidate-job progresses are different from aggregate/filter progress. Appointment and escalated-issue listeners recalculate aggregate progress after source mutation. An issue category can override a progress component; reading a single status field is not enough to diagnose a UI mismatch.

### Contract and MatchMaker transfer

Contract release requires personal, RTW and interview aggregate progress to be complete. Signing KID, work/terms and medical documents moves different contract states and can lock the profile. MatchMaker transfer performs multiple external calls before all local state is finalized; inspect api_result_logs and local post-state before retrying.

## GAP-534 archive and CRS profile deletion

1. The `detectBranchForConsultant` middleware validates the `Gap-Branch-ID` header against the authenticated consultant's `user_branches` membership. A consultant assigned to another branch receives `branchAccessNotAllowed` before the archive controller runs; no candidate, job, star, archive-log, or email-job mutation occurs.
2. A consultant submits `POST /api/consultant/candidates/bulk_archive` with candidate IDs and the required Yes/No email choice.
3. CRS validates all candidates in the selected branch, atomically soft-archives eligible candidates, updates eligible application jobs, detaches the acting consultant's stars, and writes one archive receipt per candidate.
4. For Yes, CRS queues one email job per newly archived candidate using the existing email content and a one-time seven-day deletion token. For No, no token or email job is created.
5. The candidate opens the email link and calls `GET /api/candidate/profile_deletion` with the token header. This only returns `can_delete` and does not mutate state.
6. The candidate confirms with `POST /api/candidate/profile_deletion` and no body. CRS deletes owned storage synchronously, then deletes CRS candidate data in one database transaction and returns `deleted=true` only after commit.

The database transaction is atomic, but storage deletion cannot be rolled back automatically if the transaction later fails. MatchMaker/provider records, sent email, external tracking events and backups are outside this CRS-only flow. Production deployment and worker delivery remain operational concerns.

## Database ownership notes

- Candidate-to-job queries use candidate_jobs; do not join candidates directly to jobs.
- Files may be scoped by candidate_id and job_id; archive uses original_candidate_id and does not mean a generic ARCHIVED status.
- match_maker_candidates maps logically by email, peo_no and db_source; it does not have a candidate_id foreign key in the current migration.
- candidate_timings is the existing candidate/job timing row and stores contract timing plus Permanent Agreement first-click time/IP.
- Production schema and data cleanliness remain UNVERIFIED.
