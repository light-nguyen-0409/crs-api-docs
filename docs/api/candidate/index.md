---
id: api-candidate-index
title: Candidate API
sidebar_position: 1
---

# Candidate API

Candidate-facing authentication, profile, application, identity, file, referee, tracking, and permanent-intake endpoints.

## Coverage summary

| Metric | Count |
|---|---:|
| Runtime route entries | 69 |
| PARTIAL (OpenAPI match) | 48 |
| CODE_ONLY (runtime only) | 21 |
| Exact method/path matches | 46 |
| Parameter-name drift matches | 2 |

Runtime route entries are the canonical page set. PARTIAL means an OpenAPI operation was found; request, response, error, and runtime behavior still require source tracing.

## Endpoints

| Method | Runtime path | Status | OpenAPI reference | Page |
|---|---|---|---|---|
| GET / HEAD | `/api/candidate/auth/check_reset_token` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /auth/check_reset_token` | [Open](/docs/api/candidate/get-auth-check-reset-token) |
| POST | `/api/candidate/auth/forgot_password` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /auth/forgot_password` | [Open](/docs/api/candidate/post-auth-forgot-password) |
| POST | `/api/candidate/auth/login` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /auth/login` | [Open](/docs/api/candidate/post-auth-login) |
| POST | `/api/candidate/auth/logout` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /auth/logout` | [Open](/docs/api/candidate/post-auth-logout) |
| POST | `/api/candidate/auth/refresh` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/post-auth-refresh) |
| POST | `/api/candidate/auth/reset_password` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /auth/reset_password` | [Open](/docs/api/candidate/post-auth-reset-password) |
| POST | `/api/candidate/auth/signup` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /auth/signup` | [Open](/docs/api/candidate/post-auth-signup) |
| GET / HEAD | `/api/candidate/countries` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /countries` | [Open](/docs/api/candidate/get-countries) |
| GET / HEAD | `/api/candidate/countries/{code}/regions` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /countries/{code}/regions` | [Open](/docs/api/candidate/get-countries-code-regions) |
| GET / HEAD | `/api/candidate/ethnicities` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /ethnicities` | [Open](/docs/api/candidate/get-ethnicities) |
| DELETE | `/api/candidate/files/{id}` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`DELETE /files/{id}` | [Open](/docs/api/candidate/delete-files-id) |
| GET / HEAD | `/api/candidate/files/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/get-files-id) |
| PUT | `/api/candidate/files/{id}/status` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/put-files-id-status) |
| POST | `/api/candidate/gbg/webhook` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/post-gbg-webhook) |
| GET / HEAD | `/api/candidate/me` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /me` | [Open](/docs/api/candidate/get-me) |
| PUT | `/api/candidate/me` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`PUT /me` | [Open](/docs/api/candidate/put-me) |
| GET / HEAD | `/api/candidate/me/address` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /me/address` | [Open](/docs/api/candidate/get-me-address) |
| PUT | `/api/candidate/me/address` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`PUT /me/address` | [Open](/docs/api/candidate/put-me-address) |
| GET / HEAD | `/api/candidate/me/agencies` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/get-me-agencies) |
| GET / HEAD | `/api/candidate/me/agencies/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/get-me-agencies-id) |
| GET / HEAD | `/api/candidate/me/bank_account` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /me/bank_account` | [Open](/docs/api/candidate/get-me-bank-account) |
| POST | `/api/candidate/me/bank_account/submit_financial_info` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/post-me-bank-account-submit-financial-info) |
| POST | `/api/candidate/me/bank_account/update_live` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/post-me-bank-account-update-live) |
| GET / HEAD | `/api/candidate/me/emergency_contact` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /me/emergency_contact` | [Open](/docs/api/candidate/get-me-emergency-contact) |
| PUT | `/api/candidate/me/emergency_contact` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`PUT /me/emergency_contact` | [Open](/docs/api/candidate/put-me-emergency-contact) |
| GET / HEAD | `/api/candidate/me/employee_histories` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /me/employee_histories` | [Open](/docs/api/candidate/get-me-employee-histories) |
| POST | `/api/candidate/me/employee_histories` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /me/employee_histories` | [Open](/docs/api/candidate/post-me-employee-histories) |
| DELETE | `/api/candidate/me/employee_histories/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/delete-me-employee-histories-id) |
| GET / HEAD | `/api/candidate/me/employee_histories/{id}` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /me/employee_histories/{id}` | [Open](/docs/api/candidate/get-me-employee-histories-id) |
| PUT | `/api/candidate/me/employee_histories/{id}` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`PUT /me/employee_histories/{id}` | [Open](/docs/api/candidate/put-me-employee-histories-id) |
| GET / HEAD | `/api/candidate/me/employee_histories/blocking_email_domains` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /me/employee_histories/blocking_email_domains` | [Open](/docs/api/candidate/get-me-employee-histories-blocking-email-domains) |
| GET / HEAD | `/api/candidate/me/files/{type}` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /me/files/{type}` | [Open](/docs/api/candidate/get-me-files-type) |
| POST | `/api/candidate/me/files/{type}` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /me/files/{type}` | [Open](/docs/api/candidate/post-me-files-type) |
| POST | `/api/candidate/me/files/{type}/sign` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /me/files/{fileId}/sign` | [Open](/docs/api/candidate/post-me-files-type-sign) |
| POST | `/api/candidate/me/inquiries/request_help_face_photo_taking` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /me/inquiries/request_help_face_photo_taking` | [Open](/docs/api/candidate/post-me-inquiries-request-help-face-photo-taking) |
| GET / HEAD | `/api/candidate/me/jobs` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /me/jobs` | [Open](/docs/api/candidate/get-me-jobs) |
| POST | `/api/candidate/me/jobs` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /me/jobs` | [Open](/docs/api/candidate/post-me-jobs) |
| GET / HEAD | `/api/candidate/me/permanent-intake/config?job_id={jobId}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/get-me-permanent-intake-config-job-id-jobid) |
| POST | `/api/candidate/me/permanent-intake` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /me/permanent-intake` | [Open](/docs/api/candidate/post-me-permanent-intake) |
| POST | `/api/candidate/me/jobs/{jobId}/work_finder_agreement/click` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /me/jobs/{jobId}/work_finder_agreement/click` | [Open](/docs/api/candidate/post-me-jobs-jobid-work-finder-agreement-click) |
| POST | `/api/candidate/me/jobs/{jobId}/key_information_document/mark_as_read` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/post-me-jobs-jobid-key-information-document-mark-as-read) |
| GET / HEAD | `/api/candidate/me/mm_ni_numbers` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/get-me-mm-ni-numbers) |
| POST | `/api/candidate/me/passport/check_results` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/post-me-passport-check-results) |
| GET / HEAD | `/api/candidate/me/passport/token` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/get-me-passport-token) |
| PUT | `/api/candidate/me/password` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`PUT /me/password` | [Open](/docs/api/candidate/put-me-password) |
| GET / HEAD | `/api/candidate/me/resend_mm_token` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /me/resend_mm_token` | [Open](/docs/api/candidate/get-me-resend-mm-token) |
| GET / HEAD | `/api/candidate/me/share_codes/{code}` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /me/share_codes/{share_code}` | [Open](/docs/api/candidate/get-me-share-codes-code) |
| GET / HEAD | `/api/candidate/me/skills` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /me/skills` | [Open](/docs/api/candidate/get-me-skills) |
| PUT | `/api/candidate/me/skills` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/put-me-skills) |
| DELETE | `/api/candidate/me/skills/{id}` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`DELETE /me/skills/{id}` | [Open](/docs/api/candidate/delete-me-skills-id) |
| POST | `/api/candidate/me/submit_declaration` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/post-me-submit-declaration) |
| POST | `/api/candidate/me/submit_ppe` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/post-me-submit-ppe) |
| POST | `/api/candidate/me/verify_mm_ni_number` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /me/verify_mm_ni_number` | [Open](/docs/api/candidate/post-me-verify-mm-ni-number) |
| POST | `/api/candidate/me/verify_mm_profile_picture` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /me/verify_mm_profile_picture` | [Open](/docs/api/candidate/post-me-verify-mm-profile-picture) |
| POST | `/api/candidate/me/verify_mm_token` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /me/verify_mm_token` | [Open](/docs/api/candidate/post-me-verify-mm-token) |
| GET / HEAD | `/api/candidate/nationalities` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /nationalities` | [Open](/docs/api/candidate/get-nationalities) |
| GET / HEAD | `/api/candidate/progresses` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /progresses` | [Open](/docs/api/candidate/get-progresses) |
| PUT | `/api/candidate/progresses/{type}` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`PUT /progresses/{type}` | [Open](/docs/api/candidate/put-progresses-type) |
| GET / HEAD | `/api/candidate/question_groups/{type}` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /question_groups/{type}` | [Open](/docs/api/candidate/get-question-groups-type) |
| POST | `/api/candidate/question_groups/{type}/answers` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /question_groups/{type}/answers` | [Open](/docs/api/candidate/post-question-groups-type-answers) |
| PUT | `/api/candidate/referee/employment_history_references/{id}` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`PUT /referee/employment_history_references/{id}` | [Open](/docs/api/candidate/put-referee-employment-history-references-id) |
| GET / HEAD | `/api/candidate/referee/employment_history_references/{token}` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /referee/employment_history_references/{token}` | [Open](/docs/api/candidate/get-referee-employment-history-references-token) |
| GET / HEAD | `/api/candidate/skills` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /skills` | [Open](/docs/api/candidate/get-skills) |
| GET / HEAD | `/api/candidate/status` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/get-status) |
| GET / HEAD | `/api/candidate/stop_remind_me/{id}/{hash}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/get-stop-remind-me-id-hash) |
| GET / HEAD | `/api/candidate/third_party_terms_and_conditions/passport_checking_service` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/get-third-party-terms-and-conditions-passport-checking-service) |
| POST | `/api/candidate/tracking_records` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`POST /tracking_records` | [Open](/docs/api/candidate/post-tracking-records) |
| POST | `/api/candidate/tracking_records/welcome` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/candidate/post-tracking-records-welcome) |
| GET / HEAD | `/api/candidate/translations/{category}` | PARTIAL | `documents/Gap-API-Candidate.yaml`<br />`GET /translations/{category}` | [Open](/docs/api/candidate/get-translations-category) |
