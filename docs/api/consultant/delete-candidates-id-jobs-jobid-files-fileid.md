---
title: "DELETE /api/consultant/candidates/{id}/jobs/{jobId}/files/{fileId}"
sidebar_label: "DELETE /api/consultant/candidates/{id}/jobs/{jobId}/files/{fileId}"
method: "DELETE"
runtime_method_declaration: "DELETE"
path: "/api/consultant/candidates/{id}/jobs/{jobId}/files/{fileId}"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateFileController@delete"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-009 — Files"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/candidates/{id}/jobs/{jobId}/files/{id}"
openapi_match: "PARAMETER_NAME_DRIFT"
last_verified: "2026-10-07"
---

# `DELETE /api/consultant/candidates/{id}/jobs/{jobId}/files/{fileId}`

## Contract status

`PARTIAL` — a matching OpenAPI operation exists after normalizing path placeholders, but the runtime path `/api/consultant/candidates/{id}/jobs/{jobId}/files/{fileId}` and OpenAPI path `/api/consultant/candidates/{id}/jobs/{jobId}/files/{id}` use different placeholder names. Request, response, and error behavior still require source tracing.

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
| `jobId` | Yes | `jobId` | OpenAPI name matches. |
| `fileId` | UNVERIFIED | UNVERIFIED | UNVERIFIED |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

The matched OpenAPI operation does not declare a request body. Runtime body behavior remains UNVERIFIED.

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-009](/docs/flows/candidate-lifecycle) — Files.
