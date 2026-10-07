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
last_verified: "2026-10-07"
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
| `type` | Yes | `fileId` | OpenAPI uses `fileId` for this placeholder. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

| Required | Content types | Description |
|---|---|---|
| No | multipart/form-data | OpenAPI requestBody |

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
