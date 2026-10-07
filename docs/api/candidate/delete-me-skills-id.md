---
title: "DELETE /api/candidate/me/skills/{id}"
sidebar_label: "DELETE /api/candidate/me/skills/{id}"
method: "DELETE"
runtime_method_declaration: "DELETE"
path: "/api/candidate/me/skills/{id}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeSkillController@delete"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-036 — Tags/skills/support operations"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/skills/{id}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `DELETE /api/candidate/me/skills/{id}`

## Contract status

`PARTIAL` — a matching OpenAPI operation exists with the same method and path template. Request, response, and error behavior still require source tracing.

## Authentication and middleware

| Middleware | Evidence |
|---|---|
| `api` | Runtime route inventory |
| `auth:candidateApi` | Runtime route inventory |
| `checkCandidateLockEdit` | Runtime route inventory |

Authentication and authorization outcomes are UNVERIFIED beyond the middleware names recorded above.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | Yes | `id` | OpenAPI name matches. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

UNVERIFIED — header requirements are not represented in the runtime route inventory.

### Body

The matched OpenAPI operation does not declare a request body. Runtime body behavior remains UNVERIFIED.

## Response

### Success and declared responses

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `200` | OK | application/json | OpenAPI declaration |
| `400` | Bad Request | application/json | OpenAPI declaration |
| `401` | Unauthorized | application/json | OpenAPI declaration |
| `500` | Internal Server Error | application/json | OpenAPI declaration |

Runtime Resource/DTO mapping is UNVERIFIED.

## Errors

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `400` | Bad Request | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `401` | Unauthorized | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `500` | Internal Server Error | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |

## Business flow and side effects

Flow baseline: [SPEC-036](/docs/flows/staff-review-and-support) — Tags/skills/support operations.

Detailed transitions, mutations, external calls, and side effects are UNVERIFIED at endpoint-page granularity. Trace the controller/service call chain against the canonical business-flow and database-relationship specifications before relying on this page as a behavior contract.

## Source and verification notes

| Source | Value |
|---|---|
| Runtime route | `routes/candidate.php` |
| Controller action | `App\Http\Controllers\Api\Candidate\MeSkillController@delete` |
| OpenAPI reference | `documents/Gap-API-Candidate.yaml` operation `DELETE /me/skills/{id}` |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
