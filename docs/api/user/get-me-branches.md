---
title: "GET /api/user/me/branches"
sidebar_label: "GET /api/user/me/branches"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/user/me/branches"
domain: "user"
controller: "App\\Http\\Controllers\\Api\\User\\MeBranchController@index"
middleware: "api, auth:userApi"
flow_spec: "SPEC-035 — Authentication/access/lock"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-User.yaml"
openapi_path: "/api/user/me/branches"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/user/me/branches`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

The matched OpenAPI operation does not declare a request body. Runtime body behavior remains UNVERIFIED.

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-035](/docs/flows/authentication-and-access) — Authentication/access/lock.
