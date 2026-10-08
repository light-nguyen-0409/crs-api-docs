---
title: "DELETE /api/candidate/me/employee_histories/{id}"
sidebar_label: "DELETE /api/candidate/me/employee_histories/{id}"
method: "DELETE"
runtime_method_declaration: "DELETE"
path: "/api/candidate/me/employee_histories/{id}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeEmployeeHistoryController@delete"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-006 — Employment history/referee"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `DELETE /api/candidate/me/employee_histories/{id}`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

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
| `id` | UNVERIFIED | UNVERIFIED | UNVERIFIED |

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

This operation does not define a request body; send inputs through the documented path or query parameters.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-006](/docs/flows/candidate-lifecycle) — Employment history/referee.
