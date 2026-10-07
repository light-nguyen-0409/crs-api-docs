---
title: "POST /api/candidate/me/jobs/{jobId}/work_finder_agreement/click"
sidebar_label: "POST /api/candidate/me/jobs/{jobId}/work_finder_agreement/click"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/jobs/{jobId}/work_finder_agreement/click"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\PermanentCandidateIntakeController@agreementClick"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-039 — Permanent candidate intake"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/jobs/{jobId}/work_finder_agreement/click"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/candidate/me/jobs/{jobId}/work_finder_agreement/click`

## Contract status

`PARTIAL` — a matching OpenAPI operation exists with the same method and path template. Request, response, and error behavior still require source tracing.

### OpenAPI summary

Record the first Work Finder agreement click

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
| `jobId` | Yes | `jobId` | OpenAPI name matches. |

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
| `200` | Agreement click recorded | application/json | OpenAPI declaration |
| `401` | Unauthorized | application/json | OpenAPI declaration |
| `404` | Candidate job not found | application/json | OpenAPI declaration |

Runtime Resource/DTO mapping is UNVERIFIED.

## Errors

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `401` | Unauthorized | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `404` | Candidate job not found | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |

## Business flow and side effects

Flow baseline: [SPEC-039](/docs/flows/permanent-intake) — Permanent candidate intake.

Detailed transitions, mutations, external calls, and side effects are UNVERIFIED at endpoint-page granularity. Trace the controller/service call chain against the canonical business-flow and database-relationship specifications before relying on this page as a behavior contract.

## Source and verification notes

| Source | Value |
|---|---|
| Runtime route | `routes/candidate.php` |
| Controller action | `App\Http\Controllers\Api\Candidate\PermanentCandidateIntakeController@agreementClick` |
| OpenAPI reference | `documents/Gap-API-Candidate.yaml` operation `POST /me/jobs/{jobId}/work_finder_agreement/click` |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
