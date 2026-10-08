---
title: "GET /api/consultant/candidates/{id}/question_groups/{type}"
sidebar_label: "GET /api/consultant/candidates/{id}/question_groups/{type}"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/consultant/candidates/{id}/question_groups/{type}"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\QuestionController@getGroup"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-005 — Questions/declaration/PPE"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/candidates/{id}/question_groups/{type}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `GET /api/consultant/candidates/{id}/question_groups/{type}`

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

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | Yes | `id` | OpenAPI name matches. |
| `type` | Yes | `type` | See [Staff question-group values](/docs/api/path-parameter-values#question-groups). |

### Query parameters

| Parameter | Required | Schema | Description |
|---|---|---|---|
| `job_id` | No | `string` | UNVERIFIED |

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

Flow baseline: [SPEC-005](/docs/flows/candidate-lifecycle) — Questions/declaration/PPE.
