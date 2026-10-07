---
title: "PUT /api/admin/candidates/mm_status/{id}"
sidebar_label: "PUT /api/admin/candidates/mm_status/{id}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/admin/candidates/mm_status/{id}"
domain: "admin"
controller: "App\\Http\\Controllers\\Api\\Admin\\CandidateController@updateMatchMakerStatus"
middleware: "api, auth:userApi, detectAdmin"
flow_spec: "SPEC-027 — Admin operation"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Admin.yaml"
openapi_path: "/api/admin/candidates/mm_status/{id}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `PUT /api/admin/candidates/mm_status/{id}`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

### OpenAPI summary

Update machmaker status

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

| Required | Content types | Description |
|---|---|---|
| No | application/json | OpenAPI requestBody |

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-027](/docs/flows/staff-review-and-support) — Admin operation.
