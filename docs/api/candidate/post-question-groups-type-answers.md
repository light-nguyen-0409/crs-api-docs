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
last_verified: "2026-10-08"
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
| `type` | Yes | `type` | See [Candidate question-group values](/docs/api/path-parameter-values#candidate-question-groups). |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

| Required | Content types | Description |
|---|---|---|
| No | application/json | OpenAPI requestBody |


#### Payload schema

Field types and descriptions below come from the matched OpenAPI schema. A `Not specified` required value means OpenAPI omits that requiredness; backend validation can add constraints.

#### `application/json` payload (`AnswersUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| answers | `array<AnswerUpdate>` | Yes |  |
| answers[].question_id | integer | Yes |  |
| answers[].answer | `array<string>` | Yes |  |

Each `question_id` must belong to the selected group. Answer values depend on that question's type and configured options.

Example shape (placeholder values; apply the field constraints above):

```json
{
  "answers": [
    {
      "question_id": 1,
      "answer": [
        "string"
      ]
    }
  ]
}
```

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
