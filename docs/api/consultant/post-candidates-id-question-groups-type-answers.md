---
title: "POST /api/consultant/candidates/{id}/question_groups/{type}/answers"
sidebar_label: "POST /api/consultant/candidates/{id}/question_groups/{type}/answers"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/consultant/candidates/{id}/question_groups/{type}/answers"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\QuestionController@answers"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-005 — Questions/declaration/PPE"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/candidates/{id}/question_groups/{type}/answers"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/consultant/candidates/{id}/question_groups/{type}/answers`

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
| `type` | Yes | `type` | OpenAPI name matches. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

| Required | Content types | Description |
|---|---|---|
| No | application/json | OpenAPI requestBody |

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | UNVERIFIED |


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-005](/docs/flows/candidate-lifecycle) — Questions/declaration/PPE.
