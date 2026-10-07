---
title: "GET /api/candidate/me/share_codes/{code}"
sidebar_label: "GET /api/candidate/me/share_codes/{code}"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/candidate/me/share_codes/{code}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeShareCodeController@check"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-011 — RTW share code"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/share_codes/{share_code}"
openapi_match: "PARAMETER_NAME_DRIFT"
last_verified: "2026-10-07"
---

# `GET /api/candidate/me/share_codes/{code}`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — a matching OpenAPI operation exists after normalizing path placeholders, but the runtime path `/api/candidate/me/share_codes/{code}` and OpenAPI path `/api/candidate/me/share_codes/{share_code}` use different placeholder names. Request, response, and error behavior still require source tracing.

### OpenAPI summary

Check share code status in UK gov site.

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
| `code` | Yes | `share_code` | OpenAPI uses `share_code` for this placeholder. |

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
| `404` | Not Found | application/json | OpenAPI declaration |
| `500` | Internal Server Error | application/json | OpenAPI declaration |

Runtime Resource/DTO mapping is UNVERIFIED.

## Errors

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `400` | Bad Request | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `401` | Unauthorized | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `404` | Not Found | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `500` | Internal Server Error | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |

## Business flow and side effects

Flow baseline: [SPEC-011](/docs/flows/candidate-lifecycle) — RTW share code.

Detailed transitions, mutations, external calls, and side effects are UNVERIFIED at endpoint-page granularity. Trace the controller/service call chain against the canonical business-flow and database-relationship specifications before relying on this page as a behavior contract.

## Source and verification notes

| Source | Value |
|---|---|
| Runtime route | `routes/candidate.php` |
| Controller action | `App\Http\Controllers\Api\Candidate\MeShareCodeController@check` |
| OpenAPI reference | `documents/Gap-API-Candidate.yaml` operation `GET /me/share_codes/{share_code}` |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
