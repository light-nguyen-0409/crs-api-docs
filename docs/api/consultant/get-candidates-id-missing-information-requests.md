---
title: "GET /api/consultant/candidates/{id}/missing_information_requests"
sidebar_label: "GET /api/consultant/candidates/{id}/missing_information_requests"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/consultant/candidates/{id}/missing_information_requests"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\MissingInformationController@get"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-015 — Missing information/document"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/candidates/{id}/missing_information_requests"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/consultant/candidates/{id}/missing_information_requests`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectBranchForConsultant` |
| `autoLogout` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | Yes | `id` | OpenAPI name matches. |

### Query parameters

| Parameter | Required | Schema | Description |
|---|---|---|---|
| `limit` | No | `integer` | UNVERIFIED |
| `offset` | No | `integer` | UNVERIFIED |

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

Flow baseline: [SPEC-015](/docs/flows/staff-review-and-support) — Missing information/document.
