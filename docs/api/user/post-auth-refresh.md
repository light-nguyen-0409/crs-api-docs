---
title: "POST /api/user/auth/refresh"
sidebar_label: "POST /api/user/auth/refresh"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/user/auth/refresh"
domain: "user"
controller: "App\\Http\\Controllers\\Api\\User\\AuthController@refresh"
middleware: "api, auth:userApi"
flow_spec: "SPEC-035 — Authentication/access/lock"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `POST /api/user/auth/refresh`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

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

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

The runtime controller does not consume a request body for this action.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-035](/docs/flows/authentication-and-access) — Authentication/access/lock.
