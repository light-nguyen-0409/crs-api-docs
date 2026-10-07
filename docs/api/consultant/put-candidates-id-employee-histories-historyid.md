---
title: "PUT /api/consultant/candidates/{id}/employee_histories/{historyId}"
sidebar_label: "PUT /api/consultant/candidates/{id}/employee_histories/{historyId}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/consultant/candidates/{id}/employee_histories/{historyId}"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateEmployeeHistoryController@update"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-006 — Employment history/referee"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/candidates/{id}/employee_histories/{historyId}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `PUT /api/consultant/candidates/{id}/employee_histories/{historyId}`

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

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | Yes | `id` | OpenAPI name matches. |
| `historyId` | Yes | `historyId` | OpenAPI name matches. |

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
| `requestBody` | UNVERIFIED | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `requestBody` | UNVERIFIED | application/json |

## Flow

Flow baseline: [SPEC-006](/docs/flows/candidate-lifecycle) — Employment history/referee.
