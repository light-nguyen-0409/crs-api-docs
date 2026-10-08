---
title: "POST /api/candidate/me/jobs"
sidebar_label: "POST /api/candidate/me/jobs"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/jobs"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeJobController@add"
middleware: "api, auth:candidateApi"
flow_spec: "SPEC-007 — Candidate/job application"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/jobs"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `POST /api/candidate/me/jobs`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:candidateApi` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

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

#### `application/json` payload (`JobUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| external_id | string | Yes |  |
| title | string | Yes |  |
| branch_id | string | Yes |  |
| job_reference | string | Yes |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "external_id": "string",
  "title": "string",
  "branch_id": "string",
  "job_reference": "string"
}
```

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `201` | Created | application/json |


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-007](/docs/flows/candidate-lifecycle) — Candidate/job application.
