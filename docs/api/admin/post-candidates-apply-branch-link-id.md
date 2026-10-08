---
title: "POST /api/admin/candidates/apply_branch_link/{id}"
sidebar_label: "POST /api/admin/candidates/apply_branch_link/{id}"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/admin/candidates/apply_branch_link/{id}"
domain: "admin"
controller: "App\\Http\\Controllers\\Api\\Admin\\CandidateController@applyBranchLink"
middleware: "api, auth:userApi, detectAdmin"
flow_spec: "SPEC-033 — Legal entity switching"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `POST /api/admin/candidates/apply_branch_link/{id}`

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

Send a JSON object (`Content-Type: application/json`). The fields below come from the backend request class; validation rules are listed where defined.

| Field | Type | Required | Runtime validation |
|---|---|---|---|
| `branch_id` | integer | Yes | `required\|integer` |

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-033](/docs/flows/staff-review-and-support) — Legal entity switching.
