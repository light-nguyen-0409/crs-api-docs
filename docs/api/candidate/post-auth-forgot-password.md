---
title: "POST /api/candidate/auth/forgot_password"
sidebar_label: "POST /api/candidate/auth/forgot_password"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/auth/forgot_password"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\PasswordController@forgot"
middleware: "api"
flow_spec: "SPEC-002 / SPEC-003 — Candidate authentication"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/auth/forgot_password"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/candidate/auth/forgot_password`

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

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |
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

Flow baseline: [SPEC-002](/docs/flows/authentication-and-access) / [SPEC-003](/docs/flows/authentication-and-access) — Candidate authentication.
