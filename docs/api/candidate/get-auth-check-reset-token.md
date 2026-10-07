---
title: "GET /api/candidate/auth/check_reset_token"
sidebar_label: "GET /api/candidate/auth/check_reset_token"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/candidate/auth/check_reset_token"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\PasswordController@check"
middleware: "api"
flow_spec: "SPEC-002 / SPEC-003 — Candidate authentication"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/auth/check_reset_token"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/candidate/auth/check_reset_token`

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

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-002](/docs/flows/authentication-and-access) / [SPEC-003](/docs/flows/authentication-and-access) — Candidate authentication.
