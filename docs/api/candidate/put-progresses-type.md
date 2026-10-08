---
title: "PUT /api/candidate/progresses/{type}"
sidebar_label: "PUT /api/candidate/progresses/{type}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/candidate/progresses/{type}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\ProgressController@update"
middleware: "api, auth:candidateApi, checkCandidateLockEdit, detectJobForCandidate"
flow_spec: "SPEC-013 — Registration progress"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/progresses/{type}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/candidate/progresses/{type}`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:candidateApi` |
| `checkCandidateLockEdit` |
| `detectJobForCandidate` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `type` | Yes | `type` | See [Registration progress values](/docs/api/path-parameter-values#registration-progress). |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

Send a JSON object with the required `progress` field. The controller requires this field but does not enforce a fixed status enum; these values are used by the registration flow:

| Field | Type | Required | Values / behavior |
|---|---|---|---|
| `progress` | string | Yes | `locked`, `no_info`, `in_progress`, or `completed`. Locking is allowed only for `right_to_work_proofs` and `contracts`. |

`escalated` is calculated by the backend from unresolved issues; it is not a client update value.

```json
{
  "progress": "completed"
}
```

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-013](/docs/flows/candidate-lifecycle) — Registration progress.
