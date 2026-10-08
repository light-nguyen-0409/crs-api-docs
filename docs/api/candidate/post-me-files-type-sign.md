---
title: "POST /api/candidate/me/files/{type}/sign"
sidebar_label: "POST /api/candidate/me/files/{type}/sign"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/files/{type}/sign"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeFileController@sign"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-009 — Files"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/files/{fileId}/sign"
openapi_match: "PARAMETER_NAME_DRIFT"
last_verified: "2026-10-08"
---

# `POST /api/candidate/me/files/{type}/sign`

## Contract status

`PARTIAL` — a matching OpenAPI operation exists after normalizing path placeholders, but the runtime path `/api/candidate/me/files/{type}/sign` and OpenAPI path `/api/candidate/me/files/{fileId}/sign` use different placeholder names. Request, response, and error behavior still require source tracing.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:candidateApi` |
| `checkCandidateLockEdit` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `type` | Yes | `fileId` | Use [contract-signature file types](/docs/api/path-parameter-values#contract-signature-file-types). The runtime parameter is `type`; OpenAPI names this placeholder `fileId`. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication). `Gap-Job-ID` is required for the job whose contract is being signed.

### Body

| Required | Content types | Description |
|---|---|---|
| Yes (runtime) | multipart/form-data | Required PNG `file` upload; OpenAPI omits runtime requiredness |


#### Payload schema

The file field is required by the runtime controller even though OpenAPI marks the request body optional.

#### `multipart/form-data` payload

| Field | Type | Required | Description |
|---|---|---|---|
| file | binary file | Yes (runtime) | Required upload; backend accepts PNG only. |

Send each field as a multipart form part. The backend requires the `file` part.

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `201` | Created | application/json |
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `500` | Internal Server Error | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `500` | Internal Server Error | application/json |

## Flow

Flow baseline: [SPEC-009](/docs/flows/candidate-lifecycle) — Files.
