---
id: api-consultant-index
title: Consultant API
sidebar_position: 1
---

# Consultant API

Consultant candidate operations, appointments, jobs, progress, issues, SMS, and MatchMaker/welfare integrations.

## Coverage summary

| Metric | Count |
|---|---:|
| Runtime route entries | 87 |
| PARTIAL (OpenAPI match) | 52 |
| CODE_ONLY (runtime only) | 35 |
| Exact method/path matches | 50 |
| Parameter-name drift matches | 2 |

Runtime route entries are the canonical page set. PARTIAL means an OpenAPI operation was found; request, response, error, and runtime behavior still require source tracing.

## Endpoints

| Method | Runtime path | Status | OpenAPI reference | Page |
|---|---|---|---|---|
| GET / HEAD | `/api/consultant/agencies` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-agencies) |
| GET / HEAD | `/api/consultant/agencies/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-agencies-id) |
| GET / HEAD | `/api/consultant/appointments` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /appointments` | [Open](/docs/api/consultant/get-appointments) |
| POST | `/api/consultant/appointments/{id}/cancel` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/post-appointments-id-cancel) |
| GET / HEAD | `/api/consultant/branches` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /branches` | [Open](/docs/api/consultant/get-branches) |
| GET / HEAD | `/api/consultant/candidates` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates` | [Open](/docs/api/consultant/get-candidates) |
| GET / HEAD | `/api/consultant/candidates/{id}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}` | [Open](/docs/api/consultant/get-candidates-id) |
| PUT | `/api/consultant/candidates/{id}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`PUT /candidates/{id}` | [Open](/docs/api/consultant/put-candidates-id) |
| POST | `/api/consultant/candidates/{id}/application_pack` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/post-candidates-id-application-pack) |
| POST | `/api/consultant/candidates/{id}/appointments` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /candidates/{id}/appointments` | [Open](/docs/api/consultant/post-candidates-id-appointments) |
| PUT | `/api/consultant/candidates/{id}/appointments/{appointmentId}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/put-candidates-id-appointments-appointmentid) |
| PUT | `/api/consultant/candidates/{id}/change_journey` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/put-candidates-id-change-journey) |
| GET / HEAD | `/api/consultant/candidates/{id}/communication_note` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}/communication_note` | [Open](/docs/api/consultant/get-candidates-id-communication-note) |
| PUT | `/api/consultant/candidates/{id}/communication_note` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`PUT /candidates/{id}/communication_note` | [Open](/docs/api/consultant/put-candidates-id-communication-note) |
| GET / HEAD | `/api/consultant/candidates/{id}/contact_logs` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}/contact_logs` | [Open](/docs/api/consultant/get-candidates-id-contact-logs) |
| POST | `/api/consultant/candidates/{id}/contact_logs` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /candidates/{id}/contact_logs` | [Open](/docs/api/consultant/post-candidates-id-contact-logs) |
| POST | `/api/consultant/candidates/{id}/request_bank_update` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/post-candidates-id-request-bank-update) |
| GET / HEAD | `/api/consultant/candidates/{id}/declaration` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-candidates-id-declaration) |
| GET / HEAD | `/api/consultant/candidates/{id}/employee_histories` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}/employee_histories` | [Open](/docs/api/consultant/get-candidates-id-employee-histories) |
| POST | `/api/consultant/candidates/{id}/employee_histories` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /candidates/{id}/employee_histories` | [Open](/docs/api/consultant/post-candidates-id-employee-histories) |
| GET / HEAD | `/api/consultant/candidates/{id}/employee_histories/{employee_history_id}/export` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}/employee_histories/{employee_history_id}/export` | [Open](/docs/api/consultant/get-candidates-id-employee-histories-employee-history-id-export) |
| DELETE | `/api/consultant/candidates/{id}/employee_histories/{historyId}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`DELETE /candidates/{id}/employee_histories/{historyId}` | [Open](/docs/api/consultant/delete-candidates-id-employee-histories-historyid) |
| PUT | `/api/consultant/candidates/{id}/employee_histories/{historyId}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`PUT /candidates/{id}/employee_histories/{historyId}` | [Open](/docs/api/consultant/put-candidates-id-employee-histories-historyid) |
| POST | `/api/consultant/candidates/{id}/escalated_issues` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /candidates/{id}/escalated_issues` | [Open](/docs/api/consultant/post-candidates-id-escalated-issues) |
| GET / HEAD | `/api/consultant/candidates/{id}/escalated_issues/assignees` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}/escalated_issues/assignees` | [Open](/docs/api/consultant/get-candidates-id-escalated-issues-assignees) |
| GET / HEAD | `/api/consultant/candidates/{id}/face_matching_rates/{type}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}/face_matching_rates/{type}` | [Open](/docs/api/consultant/get-candidates-id-face-matching-rates-type) |
| DELETE | `/api/consultant/candidates/{id}/files/{fileId}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`DELETE /candidates/{id}/files/{fileId}` | [Open](/docs/api/consultant/delete-candidates-id-files-fileid) |
| PUT | `/api/consultant/candidates/{id}/files/{fileId}/status` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`PUT /candidates/{id}/files/{fileId}/status` | [Open](/docs/api/consultant/put-candidates-id-files-fileid-status) |
| GET / HEAD | `/api/consultant/candidates/{id}/files/{type}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}/files/{type}` | [Open](/docs/api/consultant/get-candidates-id-files-type) |
| POST | `/api/consultant/candidates/{id}/files/{type}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /candidates/{id}/files/{type}` | [Open](/docs/api/consultant/post-candidates-id-files-type) |
| GET / HEAD | `/api/consultant/candidates/{id}/jobs` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}/jobs` | [Open](/docs/api/consultant/get-candidates-id-jobs) |
| PUT | `/api/consultant/candidates/{id}/jobs/{jobId}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`PUT /candidates/{id}/jobs/{jobId}` | [Open](/docs/api/consultant/put-candidates-id-jobs-jobid) |
| POST | `/api/consultant/candidates/{id}/jobs/{jobId}/contract_document/release` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /candidates/{id}/jobs/{jobId}/contract_document/release` | [Open](/docs/api/consultant/post-candidates-id-jobs-jobid-contract-document-release) |
| DELETE | `/api/consultant/candidates/{id}/jobs/{jobId}/files/{fileId}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`DELETE /candidates/{id}/jobs/{jobId}/files/{id}` | [Open](/docs/api/consultant/delete-candidates-id-jobs-jobid-files-fileid) |
| GET / HEAD | `/api/consultant/candidates/{id}/jobs/{jobId}/files/{type}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}/jobs/{jobId}/files/{type}` | [Open](/docs/api/consultant/get-candidates-id-jobs-jobid-files-type) |
| POST | `/api/consultant/candidates/{id}/jobs/{jobId}/files/{type}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /candidates/{id}/jobs/{jobId}/files/{type}` | [Open](/docs/api/consultant/post-candidates-id-jobs-jobid-files-type) |
| PUT | `/api/consultant/candidates/{id}/jobs/{jobId}/files/{type}/status` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/put-candidates-id-jobs-jobid-files-type-status) |
| POST | `/api/consultant/candidates/{id}/match_maker` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/post-candidates-id-match-maker) |
| GET / HEAD | `/api/consultant/candidates/{id}/missing_document_requests` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-candidates-id-missing-document-requests) |
| POST | `/api/consultant/candidates/{id}/missing_document_requests` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /candidates/{id}/missing_document_requests` | [Open](/docs/api/consultant/post-candidates-id-missing-document-requests) |
| GET / HEAD | `/api/consultant/candidates/{id}/missing_information_requests` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}/missing_information_requests` | [Open](/docs/api/consultant/get-candidates-id-missing-information-requests) |
| POST | `/api/consultant/candidates/{id}/missing_information_requests` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /candidates/{id}/missing_information_requests` | [Open](/docs/api/consultant/post-candidates-id-missing-information-requests) |
| GET / HEAD | `/api/consultant/candidates/{id}/question_groups/{type}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}/question_groups/{type}` | [Open](/docs/api/consultant/get-candidates-id-question-groups-type) |
| POST | `/api/consultant/candidates/{id}/question_groups/{type}/answers` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /candidates/{id}/question_groups/{type}/answers` | [Open](/docs/api/consultant/post-candidates-id-question-groups-type-answers) |
| POST | `/api/consultant/candidates/{id}/send_login_link` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /candidates/{id}/send_login_link` | [Open](/docs/api/consultant/post-candidates-id-send-login-link) |
| GET / HEAD | `/api/consultant/candidates/{id}/skills` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}/skills` | [Open](/docs/api/consultant/get-candidates-id-skills) |
| POST | `/api/consultant/candidates/{id}/skills` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /candidates/{id}/skills` | [Open](/docs/api/consultant/post-candidates-id-skills) |
| DELETE | `/api/consultant/candidates/{id}/skills/{skillId}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`DELETE /candidates/{id}/skills/{skill_id}` | [Open](/docs/api/consultant/delete-candidates-id-skills-skillid) |
| GET / HEAD | `/api/consultant/candidates/{id}/snapshots/{snapshotId}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/{id}/snapshots/{snapshotId}` | [Open](/docs/api/consultant/get-candidates-id-snapshots-snapshotid) |
| PUT | `/api/consultant/candidates/{id}/star` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/put-candidates-id-star) |
| POST | `/api/consultant/candidates/{id}/switch_legal_entity_request` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/post-candidates-id-switch-legal-entity-request) |
| POST | `/api/consultant/candidates/{id}/unlock_profile` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/post-candidates-id-unlock-profile) |
| PUT | `/api/consultant/candidates/{id}/unstar` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/put-candidates-id-unstar) |
| POST | `/api/consultant/candidates/{id}/worker_welfare_check` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/post-candidates-id-worker-welfare-check) |
| GET / HEAD | `/api/consultant/candidates/{id}/worker_welfare_checks` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-candidates-id-worker-welfare-checks) |
| GET / HEAD | `/api/consultant/candidates/declaration_template` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/declaration_template` | [Open](/docs/api/consultant/get-candidates-declaration-template) |
| GET / HEAD | `/api/consultant/candidates/employee_histories/blocking_email_domains` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/employee_histories/blocking_email_domains` | [Open](/docs/api/consultant/get-candidates-employee-histories-blocking-email-domains) |
| GET / HEAD | `/api/consultant/candidates/escalated_issues` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /candidates/escalated_issues` | [Open](/docs/api/consultant/get-candidates-escalated-issues) |
| POST | `/api/consultant/candidates/invite` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/post-candidates-invite) |
| GET / HEAD | `/api/consultant/candidates/switch_legal_entity/approve/{hash}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-candidates-switch-legal-entity-approve-hash) |
| GET / HEAD | `/api/consultant/candidates/switch_legal_entity/decline/{hash}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-candidates-switch-legal-entity-decline-hash) |
| GET / HEAD | `/api/consultant/consultants` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /consultants` | [Open](/docs/api/consultant/get-consultants) |
| GET / HEAD | `/api/consultant/current_time` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-current-time) |
| DELETE | `/api/consultant/escalated_issues/{id}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`DELETE /escalated_issues/{id}` | [Open](/docs/api/consultant/delete-escalated-issues-id) |
| GET / HEAD | `/api/consultant/escalated_issues/{id}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /escalated_issues/{id}` | [Open](/docs/api/consultant/get-escalated-issues-id) |
| PUT | `/api/consultant/escalated_issues/{id}` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`PUT /escalated_issues/{id}` | [Open](/docs/api/consultant/put-escalated-issues-id) |
| POST | `/api/consultant/escalated_issues/{id}/assign` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /escalated_issues/{id}/assign` | [Open](/docs/api/consultant/post-escalated-issues-id-assign) |
| GET / HEAD | `/api/consultant/escalated_issues/{id}/logs` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /escalated_issues/{id}/logs` | [Open](/docs/api/consultant/get-escalated-issues-id-logs) |
| POST | `/api/consultant/escalated_issues/{id}/logs` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`POST /escalated_issues/{id}/logs` | [Open](/docs/api/consultant/post-escalated-issues-id-logs) |
| GET / HEAD | `/api/consultant/jobs` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /jobs` | [Open](/docs/api/consultant/get-jobs) |
| GET / HEAD | `/api/consultant/jobs/job_refs` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-jobs-job-refs) |
| GET / HEAD | `/api/consultant/progresses/{candidateId}/{jobId}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-progresses-candidateid-jobid) |
| PUT | `/api/consultant/progresses/{candidateId}/{jobId}/{type}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/put-progresses-candidateid-jobid-type) |
| GET / HEAD | `/api/consultant/skills` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /skills` | [Open](/docs/api/consultant/get-skills) |
| GET / HEAD | `/api/consultant/skills/stored_skills` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-skills-stored-skills) |
| POST | `/api/consultant/sms/candidate_campaign` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/post-sms-candidate-campaign) |
| PUT | `/api/consultant/sms/candidate_campaign/{id}/cancel` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/put-sms-candidate-campaign-id-cancel) |
| GET / HEAD | `/api/consultant/sms/candidate_campaign/{id}/report` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-sms-candidate-campaign-id-report) |
| PUT | `/api/consultant/sms/candidate_campaign/{id}/resume` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/put-sms-candidate-campaign-id-resume) |
| GET / HEAD | `/api/consultant/sms/candidate_campaigns` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /sms/candidate_campaigns` | [Open](/docs/api/consultant/get-sms-candidate-campaigns) |
| GET / HEAD | `/api/consultant/sms/estimate` | PARTIAL | `documents/Gap-API-Consultant.yaml`<br />`GET /sms/estimate` | [Open](/docs/api/consultant/get-sms-estimate) |
| POST | `/api/consultant/sms/observe` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/post-sms-observe) |
| GET / HEAD | `/api/consultant/status` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-status) |
| GET / HEAD | `/api/consultant/tags` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-tags) |
| POST | `/api/consultant/tags` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/post-tags) |
| GET / HEAD | `/api/consultant/tags/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/get-tags-id) |
| POST | `/api/consultant/tags/candidate` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/consultant/post-tags-candidate) |
