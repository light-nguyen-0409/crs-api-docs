---
title: Candidate lifecycle
sidebar_position: 3
---

# Candidate lifecycle

The lifecycle below is the current implementation map across candidate, consultant and compliance actors. It is not a universal state machine: stored progress, aggregate progress, candidate status, job status, RTW approval and MatchMaker status are separate state surfaces.

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

## Evidence-backed stage notes

### Invitation and signup

The invitation flow writes invitation data before sending the invitation email. During signup, tracking cookie data supplies branch/job/referrer context and CandidateService resolves branch, job and MatchMaker context before creating or updating candidate state. A late email or provider failure is not evidence that all prior writes rolled back. See SPEC-002 and SPEC-032.

### Profile, identity and questions

Candidate profile changes can trigger duplicate checks and, for sensitive updates after approved RTW evidence, an escalated issue. MM token verification, NI verification and profile image verification set separate pieces of state; token_verified must not be treated as proof that face matching or RTW approval is complete. Questions and answers update answer records and registration progress; required-answer semantics need endpoint-specific validator tracing.

### Job, file and RTW context

candidate_jobs is the candidate-to-job ownership boundary. Appointment/job/file queries must retain candidate_id and job_id scope where the flow requires it. Files store metadata in files while binary/PDF content lives in storage. RTW approval is distinct from candidate approval and depends on approved evidence, face evidence and issue state in the compliance flow.

### Progress and review

Stored candidate/candidate-job progresses are different from aggregate/filter progress. Appointment and escalated-issue listeners recalculate aggregate progress after source mutation. An issue category can override a progress component; reading a single status field is not enough to diagnose a UI mismatch.

### Contract and MatchMaker transfer

Contract release requires personal, RTW and interview aggregate progress to be complete. Signing KID, work/terms and medical documents moves different contract states and can lock the profile. MatchMaker transfer performs multiple external calls before all local state is finalized; inspect api_result_logs and local post-state before retrying.

## Database ownership notes

- Candidate-to-job queries use candidate_jobs; do not join candidates directly to jobs.
- Files may be scoped by candidate_id and job_id; archive uses original_candidate_id and does not mean a generic ARCHIVED status.
- match_maker_candidates maps logically by email, peo_no and db_source; it does not have a candidate_id foreign key in the current migration.
- candidate_timings is the existing candidate/job timing row and stores contract timing plus Permanent Agreement first-click time/IP.
- Production schema and data cleanliness remain UNVERIFIED.

## Primary sources

- .business-spec/backend-business-flow-spec.md: SPEC-002, SPEC-004 through SPEC-020, SPEC-032 through SPEC-034 and SPEC-039
- app/Services/CandidateService.php
- app/Services/RegistrationProgressService.php
- app/Utilities/RegistrationProgressUtility.php
- app/Services/MatchMakerService.php
- app/Models/Candidate.php
- .business-spec/backend-database-relationship.md
