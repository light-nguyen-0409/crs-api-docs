---
id: api-admin-index
title: Admin API
sidebar_position: 1
---

# Admin API

Administrative candidate, branch, legal-entity, user, tag, agency, and status endpoints.

## Coverage summary

| Metric | Count |
|---|---:|
| Runtime route entries | 34 |
| PARTIAL (OpenAPI match) | 15 |
| CODE_ONLY (runtime only) | 19 |
| Exact method/path matches | 14 |
| Parameter-name drift matches | 1 |

Runtime route entries are the canonical page set. PARTIAL means an OpenAPI operation was found; request, response, error, and runtime behavior still require source tracing.

## Endpoints

| Method | Runtime path | Status | OpenAPI reference | Page |
|---|---|---|---|---|
| GET / HEAD | `/api/admin/agencies` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/get-agencies) |
| POST | `/api/admin/agencies` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/post-agencies) |
| DELETE | `/api/admin/agencies/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/delete-agencies-id) |
| GET / HEAD | `/api/admin/agencies/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/get-agencies-id) |
| PUT | `/api/admin/agencies/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/put-agencies-id) |
| GET / HEAD | `/api/admin/branches` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`GET /branches` | [Open](/docs/api/admin/get-branches) |
| POST | `/api/admin/branches` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`POST /branches` | [Open](/docs/api/admin/post-branches) |
| DELETE | `/api/admin/branches/{id}` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`DELETE /branches/{id}` | [Open](/docs/api/admin/delete-branches-id) |
| GET / HEAD | `/api/admin/branches/{id}` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`GET /branches/{id}` | [Open](/docs/api/admin/get-branches-id) |
| PUT | `/api/admin/branches/{id}` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`PUT /branches/{id}` | [Open](/docs/api/admin/put-branches-id) |
| GET / HEAD | `/api/admin/branches/right_to_work_check_results` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`GET /branches/right_to_work_check_results` | [Open](/docs/api/admin/get-branches-right-to-work-check-results) |
| POST | `/api/admin/branches/rtw_report` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/post-branches-rtw-report) |
| GET / HEAD | `/api/admin/candidates` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`GET /candidates` | [Open](/docs/api/admin/get-candidates) |
| DELETE | `/api/admin/candidates/{candidateId}/files/{fileId}` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`DELETE /candidates/{id}/files/{fileId}` | [Open](/docs/api/admin/delete-candidates-candidateid-files-fileid) |
| DELETE | `/api/admin/candidates/{id}` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`DELETE /candidates/{id}` | [Open](/docs/api/admin/delete-candidates-id) |
| GET / HEAD | `/api/admin/candidates/{id}` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`GET /candidates/{id}` | [Open](/docs/api/admin/get-candidates-id) |
| DELETE | `/api/admin/candidates/{id}/nok` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/delete-candidates-id-nok) |
| POST | `/api/admin/candidates/apply_branch_link/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/post-candidates-apply-branch-link-id) |
| PUT | `/api/admin/candidates/mm_status/{id}` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`PUT /candidates/mm_status/{id}` | [Open](/docs/api/admin/put-candidates-mm-status-id) |
| PUT | `/api/admin/candidates/reset_passport_result/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/put-candidates-reset-passport-result-id) |
| PUT | `/api/admin/candidates/reset/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/put-candidates-reset-id) |
| PUT | `/api/admin/candidates/unblock_upload/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/put-candidates-unblock-upload-id) |
| GET / HEAD | `/api/admin/legal_entities` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`GET /legal_entities` | [Open](/docs/api/admin/get-legal-entities) |
| GET / HEAD | `/api/admin/status` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/get-status) |
| GET / HEAD | `/api/admin/tags` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/get-tags) |
| DELETE | `/api/admin/tags/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/delete-tags-id) |
| GET / HEAD | `/api/admin/tags/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/get-tags-id) |
| PUT | `/api/admin/tags/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/put-tags-id) |
| POST | `/api/admin/tags/merge` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/post-tags-merge) |
| GET / HEAD | `/api/admin/users` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`GET /users` | [Open](/docs/api/admin/get-users) |
| POST | `/api/admin/users` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`POST /users` | [Open](/docs/api/admin/post-users) |
| GET / HEAD | `/api/admin/users/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/get-users-id) |
| PUT | `/api/admin/users/{id}` | PARTIAL | `documents/Gap-API-Admin.yaml`<br />`PUT /users/{id}` | [Open](/docs/api/admin/put-users-id) |
| GET / HEAD | `/api/admin/users/unlock/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/admin/get-users-unlock-id) |
