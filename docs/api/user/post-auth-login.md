---
title: "POST /api/user/auth/login"
sidebar_label: "POST /api/user/auth/login"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/user/auth/login"
domain: "user"
controller: "App\\Http\\Controllers\\Api\\User\\AuthController@login"
middleware: "api"
flow_spec: "SPEC-035 — Authentication/access/lock"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-User.yaml"
openapi_path: "/api/user/auth/login"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/user/auth/login`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

### OpenAPI description

User sign in with email and password. If user can sign in successfully, it returns access & refresh tokens.

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

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json, application/xml |
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `500` | Internal Server Error | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `500` | Internal Server Error | application/json |

## Flow

Flow baseline: [SPEC-035](/docs/flows/authentication-and-access) — Authentication/access/lock.
