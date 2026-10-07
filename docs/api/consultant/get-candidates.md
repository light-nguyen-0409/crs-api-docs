---
title: "GET /api/consultant/candidates"
sidebar_label: "GET /api/consultant/candidates"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/consultant/candidates"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateController@index"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-038 — Candidate search/detail"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/candidates"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/consultant/candidates`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — a matching OpenAPI operation exists with the same method and path template. Request, response, and error behavior still require source tracing.

## Authentication and middleware

| Middleware | Evidence |
|---|---|
| `api` | Runtime route inventory |
| `auth:userApi` | Runtime route inventory |
| `detectBranchForConsultant` | Runtime route inventory |
| `autoLogout` | Runtime route inventory |

For protected routes, send `Authorization: Bearer <access_token>` from the matching candidateApi or userApi login flow. See the [Authentication guide](/docs/authentication) for token handling and scope headers.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

### Query parameters

| Parameter | Required | Schema | Description |
|---|---|---|---|
| `offset` | No | `string` | UNVERIFIED |
| `limit` | No | `string` | UNVERIFIED |
| `order` | No | `string` | sort order column ( job_id, contact_date, contact_time ) |
| `filter` | No | `string` | full text search |
| `job_ids` | No | `array` | list of job_id for filter |
| `contact_dates` | No | `array` | list of contact dates for filter |
| `contact_times` | No | `string` | list of contact times for filter |
| `interview_methods` | No | `string` | list of interview method splitted by , for filter |
| `interview_from_date` | No | `string` | start of interview date range, YYYY-MM-DD format |
| `interview_to_date` | No | `string` | end of interview date range, YYYY-MM-DD format |
| `direction` | No | `string` | order direction ( desc or asc, default is asc ) |
| `job_status` | No | `string` | one of screening_call / interview / archived / matchmaker |
| `interviewer_id` | No | `string` | UNVERIFIED |

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

Flow baseline: [SPEC-038](/docs/flows/staff-review-and-support) — Candidate search/detail.

Detailed transitions, mutations, external calls, and side effects are UNVERIFIED at endpoint-page granularity. Trace the controller/service call chain against the canonical business-flow and database-relationship specifications before relying on this page as a behavior contract.

## Source and verification notes

| Source | Value |
|---|---|
| Runtime route | `routes/consultant.php` |
| Controller action | `App\Http\Controllers\Api\Consultant\CandidateController@index` |
| OpenAPI reference | `documents/Gap-API-Consultant.yaml` operation `GET /candidates` |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
