---
title: "POST /api/candidate/me/submit_ppe"
sidebar_label: "POST /api/candidate/me/submit_ppe"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/submit_ppe"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\QuestionController@submitPPE"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-005 — Questions/declaration/PPE"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `POST /api/candidate/me/submit_ppe`

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

No path parameters are identified in the runtime route template.

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

Send a JSON object (`Content-Type: application/json`). The fields below come from the backend request class; validation rules are listed where defined.

| Field | Type | Required | Runtime validation |
|---|---|---|---|
| `answers` | array of answer objects | Required by runtime behavior | Must not be empty; each item has `question_id` and an `answer` array whose values depend on the question |

The answer item shape is shared with [question-group answer submissions](/docs/api/candidate/post-question-groups-type-answers). The `answer` values must match the selected question's configured type/options.

```json
{
  "answers": [
    { "question_id": 123, "answer": ["yes"] }
  ]
}
```

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-005](/docs/flows/candidate-lifecycle) — Questions/declaration/PPE.
