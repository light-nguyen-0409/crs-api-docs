---
title: "PUT /api/admin/candidates/unblock_upload/{id}"
sidebar_label: "PUT /api/admin/candidates/unblock_upload/{id}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/admin/candidates/unblock_upload/{id}"
domain: "admin"
controller: "App\\Http\\Controllers\\Api\\Admin\\CandidateController@unblockUpload"
middleware: "api, auth:userApi, detectAdmin"
flow_spec: "SPEC-027 — Admin operation"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `PUT /api/admin/candidates/unblock_upload/{id}`

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

The runtime controller does not consume a request body for this action.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-027](/docs/flows/staff-review-and-support) — Admin operation.
