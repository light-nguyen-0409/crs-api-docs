---
title: "GET /api/admin/users/{id}"
sidebar_label: "GET /api/admin/users/{id}"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/admin/users/{id}"
domain: "admin"
controller: "App\\Http\\Controllers\\Api\\Admin\\UserController@get"
middleware: "api, auth:userApi, detectAdmin"
flow_spec: "SPEC-037 / SPEC-035 — Staff/master data/catalogs / Authentication/access/lock"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `GET /api/admin/users/{id}`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectAdmin` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | UNVERIFIED | UNVERIFIED | UNVERIFIED |

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

This operation does not define a request body; send inputs through the documented path or query parameters.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-037](/docs/flows/staff-review-and-support) / [SPEC-035](/docs/flows/authentication-and-access) — Staff/master data/catalogs / Authentication/access/lock.
