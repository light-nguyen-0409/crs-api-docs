---
title: "POST /api/user/auth/reset_password"
sidebar_label: "POST /api/user/auth/reset_password"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/user/auth/reset_password"
domain: "user"
controller: "App\\Http\\Controllers\\Api\\User\\PasswordController@reset"
middleware: "api"
flow_spec: "SPEC-035 — Authentication/access/lock"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-User.yaml"
openapi_path: "/api/user/auth/reset_password"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `POST /api/user/auth/reset_password`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |

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

#### `application/json` payload (`ResetPasswordRequest`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| token | string | Yes |  |
| password | string | Yes |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "token": "string",
  "password": "string"
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

Flow baseline: [SPEC-035](/docs/flows/authentication-and-access) — Authentication/access/lock.
