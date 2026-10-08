---
title: "PUT /api/candidate/me/password"
sidebar_label: "PUT /api/candidate/me/password"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/candidate/me/password"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MePasswordController@update"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-003 — Candidate authentication"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/password"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/candidate/me/password`

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

#### `application/json` payload (`PasswordUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| current_password | string | Yes |  |
| new_password | string | Yes |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "current_password": "string",
  "new_password": "string"
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

Flow baseline: [SPEC-003](/docs/flows/authentication-and-access) — Candidate authentication.
