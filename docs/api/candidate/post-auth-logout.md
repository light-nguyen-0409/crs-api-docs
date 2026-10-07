---
title: "POST /api/candidate/auth/logout"
sidebar_label: "POST /api/candidate/auth/logout"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/auth/logout"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\AuthController@logout"
middleware: "api"
flow_spec: "SPEC-002 / SPEC-003 — Candidate authentication"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/auth/logout"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/candidate/auth/logout`

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
