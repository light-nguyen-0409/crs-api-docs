---
title: "PUT /api/consultant/candidates/{id}/jobs/{jobId}"
sidebar_label: "PUT /api/consultant/candidates/{id}/jobs/{jobId}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/consultant/candidates/{id}/jobs/{jobId}"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateJobController@update"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-007 — Candidate/job application"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/candidates/{id}/jobs/{jobId}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/consultant/candidates/{id}/jobs/{jobId}`

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
| `jobId` | Yes | `jobId` | OpenAPI name matches. |

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

#### `application/json` payload (`CandidateJobUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| status | string | Yes |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "status": "string"
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

Flow baseline: [SPEC-007](/docs/flows/candidate-lifecycle) — Candidate/job application.
