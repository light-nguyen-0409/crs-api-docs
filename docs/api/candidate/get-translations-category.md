---
title: "GET /api/candidate/translations/{category}"
sidebar_label: "GET /api/candidate/translations/{category}"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/candidate/translations/{category}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\TranslationController@index"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-037 — Staff/master data/catalogs"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/translations/{category}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/candidate/translations/{category}`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:candidateApi` |
| `checkCandidateLockEdit` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `category` | Yes | `category` | OpenAPI name matches. |

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

Flow baseline: [SPEC-037](/docs/flows/staff-review-and-support) — Staff/master data/catalogs.
