---
title: "POST /api/candidate/question_groups/{type}/answers"
sidebar_label: "POST /api/candidate/question_groups/{type}/answers"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/question_groups/{type}/answers"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\QuestionController@answerQuestionsForGroup"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-005 — Questions/declaration/PPE"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/question_groups/{type}/answers"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/candidate/question_groups/{type}/answers`

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

Flow baseline: [SPEC-005](/docs/flows/candidate-lifecycle) — Questions/declaration/PPE.
