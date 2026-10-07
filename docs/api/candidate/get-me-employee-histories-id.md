---
title: "GET /api/candidate/me/employee_histories/{id}"
sidebar_label: "GET /api/candidate/me/employee_histories/{id}"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/candidate/me/employee_histories/{id}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeEmployeeHistoryController@get"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-006 — Employment history/referee"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/employee_histories/{id}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/candidate/me/employee_histories/{id}`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:candidateApi` |
| `checkCandidateLockEdit` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | Yes | `id` | OpenAPI name matches. |

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
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `404` | Not Found | application/json |
| `500` | Internal Server Error | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `404` | Not Found | application/json |
| `500` | Internal Server Error | application/json |

## Flow

Flow baseline: [SPEC-006](/docs/flows/candidate-lifecycle) — Employment history/referee.
