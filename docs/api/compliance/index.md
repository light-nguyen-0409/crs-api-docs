---
id: api-compliance-index
title: Compliance API
sidebar_position: 1
---

# Compliance API

Compliance candidate review, branch, email-template, user, and escalated-issue endpoints.

## Coverage summary

| Metric | Count |
|---|---:|
| Runtime route entries | 42 |
| PARTIAL (OpenAPI match) | 34 |
| CODE_ONLY (runtime only) | 8 |
| Exact method/path matches | 34 |
| Parameter-name drift matches | 0 |

Runtime route entries are the canonical page set. PARTIAL means an OpenAPI operation was found; request, response, error, and runtime behavior still require source tracing.

## Endpoints

| Method | Runtime path | Status | OpenAPI reference | Page |
|---|---|---|---|---|
| GET / HEAD | `/api/compliance/branches` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /branches` | [Open](/docs/api/compliance/get-branches) |
| POST | `/api/compliance/branches` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`POST /branches` | [Open](/docs/api/compliance/post-branches) |
| DELETE | `/api/compliance/branches/{id}` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`DELETE /branches/{id}` | [Open](/docs/api/compliance/delete-branches-id) |
| GET / HEAD | `/api/compliance/branches/{id}` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /branches/{id}` | [Open](/docs/api/compliance/get-branches-id) |
| PUT | `/api/compliance/branches/{id}` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`PUT /branches/{id}` | [Open](/docs/api/compliance/put-branches-id) |
| GET / HEAD | `/api/compliance/candidates` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /candidates` | [Open](/docs/api/compliance/get-candidates) |
| DELETE | `/api/compliance/candidates/{id}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/compliance/delete-candidates-id) |
| GET / HEAD | `/api/compliance/candidates/{id}` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /candidates/{id}` | [Open](/docs/api/compliance/get-candidates-id) |
| PUT | `/api/compliance/candidates/{id}` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`PUT /candidates/{id}` | [Open](/docs/api/compliance/put-candidates-id) |
| POST | `/api/compliance/candidates/{id}/approve` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`POST /candidates/{id}/approve` | [Open](/docs/api/compliance/post-candidates-id-approve) |
| PUT | `/api/compliance/candidates/{id}/bank-account` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`PUT /candidates/{id}/bank-account` | [Open](/docs/api/compliance/put-candidates-id-bank-account) |
| GET / HEAD | `/api/compliance/candidates/{id}/communication_note` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /candidates/{id}/communication_note` | [Open](/docs/api/compliance/get-candidates-id-communication-note) |
| GET / HEAD | `/api/compliance/candidates/{id}/contact_logs` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /candidates/{id}/contact_logs` | [Open](/docs/api/compliance/get-candidates-id-contact-logs) |
| GET / HEAD | `/api/compliance/candidates/{id}/employee_histories` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /candidates/{id}/employee_histories` | [Open](/docs/api/compliance/get-candidates-id-employee-histories) |
| POST | `/api/compliance/candidates/{id}/escalated_issues` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`POST /candidates/{id}/escalated_issues` | [Open](/docs/api/compliance/post-candidates-id-escalated-issues) |
| GET / HEAD | `/api/compliance/candidates/{id}/face_matching_rates/{type}` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /candidates/{id}/face_matching_rates/{type}` | [Open](/docs/api/compliance/get-candidates-id-face-matching-rates-type) |
| DELETE | `/api/compliance/candidates/{id}/files/{fileId}` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/compliance/delete-candidates-id-files-fileid) |
| PUT | `/api/compliance/candidates/{id}/files/{fileId}/status` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`PUT /candidates/{id}/files/{fileId}/status` | [Open](/docs/api/compliance/put-candidates-id-files-fileid-status) |
| GET / HEAD | `/api/compliance/candidates/{id}/files/{type}` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /candidates/{id}/files/{type}` | [Open](/docs/api/compliance/get-candidates-id-files-type) |
| POST | `/api/compliance/candidates/{id}/files/{type}` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`POST /candidates/{id}/files/{type}` | [Open](/docs/api/compliance/post-candidates-id-files-type) |
| GET / HEAD | `/api/compliance/candidates/{id}/missing_document_requests` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/compliance/get-candidates-id-missing-document-requests) |
| POST | `/api/compliance/candidates/{id}/missing_document_requests` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`POST /candidates/{id}/missing_document_requests` | [Open](/docs/api/compliance/post-candidates-id-missing-document-requests) |
| GET / HEAD | `/api/compliance/candidates/{id}/question_groups/{type}` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /candidates/{id}/question_groups/{type}` | [Open](/docs/api/compliance/get-candidates-id-question-groups-type) |
| GET / HEAD | `/api/compliance/candidates/{id}/skills` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /candidates/{id}/skills` | [Open](/docs/api/compliance/get-candidates-id-skills) |
| POST | `/api/compliance/candidates/{id}/update_status` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`POST /candidates/{id}/update_status` | [Open](/docs/api/compliance/post-candidates-id-update-status) |
| GET / HEAD | `/api/compliance/candidates/escalated_issues` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /candidates/escalated_issues` | [Open](/docs/api/compliance/get-candidates-escalated-issues) |
| POST | `/api/compliance/candidates/expiry_date` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/compliance/post-candidates-expiry-date) |
| POST | `/api/compliance/candidates/files/{fileId}/approve` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/compliance/post-candidates-files-fileid-approve) |
| POST | `/api/compliance/candidates/matchmaker/export` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/compliance/post-candidates-matchmaker-export) |
| GET / HEAD | `/api/compliance/email_templates` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /email_templates` | [Open](/docs/api/compliance/get-email-templates) |
| GET / HEAD | `/api/compliance/email_templates/{id}` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /email_templates/{id}` | [Open](/docs/api/compliance/get-email-templates-id) |
| PUT | `/api/compliance/email_templates/{id}` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`PUT /email_templates/{id}` | [Open](/docs/api/compliance/put-email-templates-id) |
| DELETE | `/api/compliance/escalated_issues/{id}` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`DELETE /escalated_issues/{id}` | [Open](/docs/api/compliance/delete-escalated-issues-id) |
| PUT | `/api/compliance/escalated_issues/{id}` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`PUT /escalated_issues/{id}` | [Open](/docs/api/compliance/put-escalated-issues-id) |
| POST | `/api/compliance/escalated_issues/{id}/assign` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`POST /escalated_issues/{id}/assign` | [Open](/docs/api/compliance/post-escalated-issues-id-assign) |
| GET / HEAD | `/api/compliance/escalated_issues/{id}/logs` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /escalated_issues/{id}/logs` | [Open](/docs/api/compliance/get-escalated-issues-id-logs) |
| POST | `/api/compliance/escalated_issues/{id}/logs` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`POST /escalated_issues/{id}/logs` | [Open](/docs/api/compliance/post-escalated-issues-id-logs) |
| GET / HEAD | `/api/compliance/escalated_issues/assignees` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /escalated_issues/assignees` | [Open](/docs/api/compliance/get-escalated-issues-assignees) |
| GET / HEAD | `/api/compliance/jobs` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/compliance/get-jobs) |
| GET / HEAD | `/api/compliance/legal_entities` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /legal_entities` | [Open](/docs/api/compliance/get-legal-entities) |
| GET / HEAD | `/api/compliance/status` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/compliance/get-status) |
| GET / HEAD | `/api/compliance/users` | PARTIAL | `documents/Gap-API-Compliance.yaml`<br />`GET /users` | [Open](/docs/api/compliance/get-users) |
