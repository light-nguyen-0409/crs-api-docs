---
title: "POST /api/consultant/candidates/{id}/files/{type}"
sidebar_label: "POST /api/consultant/candidates/{id}/files/{type}"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/consultant/candidates/{id}/files/{type}"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateFileController@upload"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-009 — Files"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/candidates/{id}/files/{type}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `POST /api/consultant/candidates/{id}/files/{type}`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectBranchForConsultant` |
| `autoLogout` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | Yes | `id` | OpenAPI name matches. |
| `type` | Yes | `type` | See [file type values](/docs/api/path-parameter-values#file-types). |

### Query parameters

For file types outside the [candidate-associated file type list](/docs/api/path-parameter-values#candidate-associated-file-types), `job_id` is required and identifies the candidate's job. Candidate-associated types do not require it.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

| Required | Content types | Description |
|---|---|---|
| Yes (runtime) | multipart/form-data | Required `file` upload |


#### Payload schema

The file field is required by the runtime controller even though OpenAPI marks the request body optional.

#### `multipart/form-data` payload

| Field | Type | Required | Description |
|---|---|---|---|
| file | binary file | Yes (runtime) | Uploaded file part required by the backend. |

Send each field as a multipart form part. The backend requires the `file` part.

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `201` | Created | application/json |


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-009](/docs/flows/candidate-lifecycle) — Files.
