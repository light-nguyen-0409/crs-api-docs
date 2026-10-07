---
title: "DELETE /api/admin/candidates/{candidateId}/files/{fileId}"
sidebar_label: "DELETE /api/admin/candidates/{candidateId}/files/{fileId}"
method: "DELETE"
runtime_method_declaration: "DELETE"
path: "/api/admin/candidates/{candidateId}/files/{fileId}"
domain: "admin"
controller: "App\\Http\\Controllers\\Api\\Admin\\FileController@deleteCandidateFile"
middleware: "api, auth:userApi, detectAdmin"
flow_spec: "SPEC-009 — Files"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Admin.yaml"
openapi_path: "/api/admin/candidates/{id}/files/{fileId}"
openapi_match: "PARAMETER_NAME_DRIFT"
last_verified: "2026-10-07"
---

# `DELETE /api/admin/candidates/{candidateId}/files/{fileId}`

## Contract status

`PARTIAL` — a matching OpenAPI operation exists after normalizing path placeholders, but the runtime path `/api/admin/candidates/{candidateId}/files/{fileId}` and OpenAPI path `/api/admin/candidates/{id}/files/{fileId}` use different placeholder names. Request, response, and error behavior still require source tracing.

### OpenAPI summary

Delete file by ID

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectAdmin` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `candidateId` | Yes | `id` | OpenAPI uses `id` for this placeholder. |
| `fileId` | Yes | `fileId` | OpenAPI name matches. |

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
