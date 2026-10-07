---
title: "GET /api/admin/candidates/{id}"
sidebar_label: "GET /api/admin/candidates/{id}"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/admin/candidates/{id}"
domain: "admin"
controller: "App\\Http\\Controllers\\Api\\Admin\\CandidateController@get"
middleware: "api, auth:userApi, detectAdmin"
flow_spec: "SPEC-027 — Admin operation"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Admin.yaml"
openapi_path: "/api/admin/candidates/{id}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/admin/candidates/{id}`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

### OpenAPI summary

Get candidate by ID

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
| `id` | Yes | `id` | OpenAPI name matches. |

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

Flow baseline: [SPEC-027](/docs/flows/staff-review-and-support) — Admin operation.
