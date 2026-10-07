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

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

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

Flow baseline: [SPEC-038](/docs/flows/staff-review-and-support) — Candidate search/detail.
