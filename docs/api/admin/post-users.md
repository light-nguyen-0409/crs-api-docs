---
title: "POST /api/admin/users"
sidebar_label: "POST /api/admin/users"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/admin/users"
domain: "admin"
controller: "App\\Http\\Controllers\\Api\\Admin\\UserController@create"
middleware: "api, auth:userApi, detectAdmin"
flow_spec: "SPEC-037 / SPEC-035 — Staff/master data/catalogs / Authentication/access/lock"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Admin.yaml"
openapi_path: "/api/admin/users"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `POST /api/admin/users`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectAdmin` |

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

#### `application/json` payload (`UserAdd`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| name | string | Not specified |  |
| email | string | Not specified |  |
| mmid | string | Not specified |  |
| roles | `array<—>` | Not specified |  |
| status | string | Not specified |  |
| can_access_all_branches | boolean | Not specified |  |
| branches | `array<—>` | Not specified |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "name": "string",
  "email": "string",
  "mmid": "string",
  "roles": [
    {
    }
  ],
  "status": "string",
  "can_access_all_branches": true,
  "branches": [
    {
    }
  ]
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

Flow baseline: [SPEC-037](/docs/flows/staff-review-and-support) / [SPEC-035](/docs/flows/authentication-and-access) — Staff/master data/catalogs / Authentication/access/lock.
