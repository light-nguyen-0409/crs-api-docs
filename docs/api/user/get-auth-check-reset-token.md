---
title: "GET /api/user/auth/check_reset_token"
sidebar_label: "GET /api/user/auth/check_reset_token"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/user/auth/check_reset_token"
domain: "user"
controller: "App\\Http\\Controllers\\Api\\User\\PasswordController@check"
middleware: "api"
flow_spec: "SPEC-035 — Authentication/access/lock"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-User.yaml"
openapi_path: "/api/user/auth/check_reset_token"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/user/auth/check_reset_token`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

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

The matched OpenAPI operation does not declare a request body. Runtime body behavior remains UNVERIFIED.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-035](/docs/flows/authentication-and-access) — Authentication/access/lock.
