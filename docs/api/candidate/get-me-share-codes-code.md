---
title: "GET /api/candidate/me/share_codes/{code}"
sidebar_label: "GET /api/candidate/me/share_codes/{code}"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/candidate/me/share_codes/{code}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeShareCodeController@check"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-011 — RTW share code"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/share_codes/{share_code}"
openapi_match: "PARAMETER_NAME_DRIFT"
last_verified: "2026-10-07"
---

# `GET /api/candidate/me/share_codes/{code}`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — a matching OpenAPI operation exists after normalizing path placeholders, but the runtime path `/api/candidate/me/share_codes/{code}` and OpenAPI path `/api/candidate/me/share_codes/{share_code}` use different placeholder names. Request, response, and error behavior still require source tracing.

### OpenAPI summary

Check share code status in UK gov site.

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
| `code` | Yes | `share_code` | OpenAPI uses `share_code` for this placeholder. |

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
| `404` | Not Found | application/json |
| `500` | Internal Server Error | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `404` | Not Found | application/json |
| `500` | Internal Server Error | application/json |

## Flow

Flow baseline: [SPEC-011](/docs/flows/candidate-lifecycle) — RTW share code.
