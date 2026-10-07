---
title: "POST /api/candidate/me/permanent-intake"
sidebar_label: "POST /api/candidate/me/permanent-intake"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/permanent-intake"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\PermanentCandidateIntakeController@submit"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-039 — Permanent candidate intake"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/permanent-intake"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/candidate/me/permanent-intake`

## Contract status

`PARTIAL` — a matching OpenAPI operation exists with the same method and path template. Request, response, and error behavior still require source tracing.

### OpenAPI summary

Submit Candidate Permanent intake

## Authentication and middleware

| Middleware | Evidence |
|---|---|
| `api` | Runtime route inventory |
| `auth:candidateApi` | Runtime route inventory |
| `checkCandidateLockEdit` | Runtime route inventory |

For protected routes, send `Authorization: Bearer <access_token>` from the matching candidateApi or userApi login flow. See the [Authentication guide](/docs/authentication) for token handling and scope headers.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

For protected routes, send `Authorization: Bearer <access_token>`; add `Gap-Branch-ID` or `Gap-Job-ID` only when the route middleware requires it.

### Body

| Required | Content types | Description |
|---|---|---|
| Yes | application/json | OpenAPI requestBody |

## Response

### Success and declared responses

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `200` | Permanent intake submitted and synchronized | application/json | OpenAPI declaration |
| `400` | FormRequest validation failed | application/json | OpenAPI declaration |
| `401` | Unauthorized | application/json | OpenAPI declaration |
| `404` | Candidate job or file not found | application/json | OpenAPI declaration |
| `409` | Permanent intake already submitted | application/json | OpenAPI declaration |
| `422` | Business input error | application/json | OpenAPI declaration |
| `502` | MatchMaker synchronization failed after GAP persistence | application/json | OpenAPI declaration |

Runtime Resource/DTO mapping is UNVERIFIED.

## Errors

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `400` | FormRequest validation failed | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `401` | Unauthorized | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `404` | Candidate job or file not found | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `409` | Permanent intake already submitted | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `422` | Business input error | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `502` | MatchMaker synchronization failed after GAP persistence | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |

## Business flow and side effects

Flow baseline: [SPEC-039](/docs/flows/permanent-intake) — Permanent candidate intake.

Detailed transitions, mutations, external calls, and side effects are UNVERIFIED at endpoint-page granularity. Trace the controller/service call chain against the canonical business-flow and database-relationship specifications before relying on this page as a behavior contract.

## Source and verification notes

| Source | Value |
|---|---|
| Runtime route | `routes/candidate.php` |
| Controller action | `App\Http\Controllers\Api\Candidate\PermanentCandidateIntakeController@submit` |
| OpenAPI reference | `documents/Gap-API-Candidate.yaml` operation `POST /me/permanent-intake` |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
