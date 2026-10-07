---
title: "PUT /api/consultant/candidates/{id}/jobs/{jobId}"
sidebar_label: "PUT /api/consultant/candidates/{id}/jobs/{jobId}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/consultant/candidates/{id}/jobs/{jobId}"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateJobController@update"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-007 — Candidate/job application"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/candidates/{id}/jobs/{jobId}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `PUT /api/consultant/candidates/{id}/jobs/{jobId}`

## Contract status

`PARTIAL` — a matching OpenAPI operation exists with the same method and path template. Request, response, and error behavior still require source tracing.

## Authentication and middleware

| Middleware | Evidence |
|---|---|
| `api` | Runtime route inventory |
| `auth:userApi` | Runtime route inventory |
| `detectBranchForConsultant` | Runtime route inventory |
| `autoLogout` | Runtime route inventory |

Authentication and authorization outcomes are UNVERIFIED beyond the middleware names recorded above.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | Yes | `id` | OpenAPI name matches. |
| `jobId` | Yes | `jobId` | OpenAPI name matches. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

UNVERIFIED — header requirements are not represented in the runtime route inventory.

### Body

| Required | Content types | Description |
|---|---|---|
| No | application/json | OpenAPI requestBody |

## Response

### Success and declared responses

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `200` | OK | application/json | OpenAPI declaration |

Runtime Resource/DTO mapping is UNVERIFIED.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Business flow and side effects

Flow baseline: [SPEC-007](/docs/flows/candidate-lifecycle) — Candidate/job application.

Detailed transitions, mutations, external calls, and side effects are UNVERIFIED at endpoint-page granularity. Trace the controller/service call chain against the canonical business-flow and database-relationship specifications before relying on this page as a behavior contract.

## Source and verification notes

| Source | Value |
|---|---|
| Runtime route | `routes/consultant.php` |
| Controller action | `App\Http\Controllers\Api\Consultant\CandidateJobController@update` |
| OpenAPI reference | `documents/Gap-API-Consultant.yaml` operation `PUT /candidates/{id}/jobs/{jobId}` |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
