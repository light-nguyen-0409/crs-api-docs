---
title: "GET /api/candidate/skills"
sidebar_label: "GET /api/candidate/skills"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/candidate/skills"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\SkillController@index"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-036 — Tags/skills/support operations"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/skills"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/candidate/skills`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

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

No path parameters are identified in the runtime route template.

### Query parameters

| Parameter | Required | Schema | Description |
|---|---|---|---|
| `offset` | No | `integer` | UNVERIFIED |
| `limit` | No | `integer` | UNVERIFIED |
| `filter` | No | `string` | filter skills |

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
| Controller action | `App\Http\Controllers\Api\Candidate\SkillController@index` |
| OpenAPI reference | `documents/Gap-API-Candidate.yaml` operation `GET /skills` |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
