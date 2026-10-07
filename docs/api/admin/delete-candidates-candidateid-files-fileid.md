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

| Middleware | Evidence |
|---|---|
| `api` | Runtime route inventory |
| `auth:userApi` | Runtime route inventory |
| `detectAdmin` | Runtime route inventory |

For protected routes, send `Authorization: Bearer <access_token>` from the matching candidateApi or userApi login flow. See the [Authentication guide](/docs/authentication) for token handling and scope headers.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `candidateId` | Yes | `id` | OpenAPI uses `id` for this placeholder. |
| `fileId` | Yes | `fileId` | OpenAPI name matches. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

For protected routes, send `Authorization: Bearer <access_token>`; add `Gap-Branch-ID` or `Gap-Job-ID` only when the route middleware requires it.

### Body

The matched OpenAPI operation does not declare a request body. Runtime body behavior remains UNVERIFIED.

## Response

### Success and declared responses

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `200` | OK | application/json | OpenAPI declaration |

Runtime Resource/DTO mapping is UNVERIFIED.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Business flow and side effects

Flow baseline: [SPEC-009](/docs/flows/candidate-lifecycle) — Files.

Detailed transitions, mutations, external calls, and side effects are UNVERIFIED at endpoint-page granularity. Trace the controller/service call chain against the canonical business-flow and database-relationship specifications before relying on this page as a behavior contract.

## Source and verification notes

| Source | Value |
|---|---|
| Runtime route | `routes/admin.php` |
| Controller action | `App\Http\Controllers\Api\Admin\FileController@deleteCandidateFile` |
| OpenAPI reference | `documents/Gap-API-Admin.yaml` operation `DELETE /candidates/{id}/files/{fileId}` |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
