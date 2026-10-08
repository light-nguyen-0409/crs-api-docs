---
title: "POST /api/admin/branches/rtw_report"
sidebar_label: "POST /api/admin/branches/rtw_report"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/admin/branches/rtw_report"
domain: "admin"
controller: "App\\Http\\Controllers\\Api\\Admin\\BranchController@sendRightToWorkReport"
middleware: "api, auth:userApi, detectAdmin"
flow_spec: "SPEC-037 — Staff/master data/catalogs"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `POST /api/admin/branches/rtw_report`

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

No path parameters are identified in the runtime route template.

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

Send a JSON object (`Content-Type: application/json`). The fields below come from the backend request class; validation rules are listed where defined.

| Field | Type | Required | Runtime validation |
|---|---|---|---|
| `branchId` | integer | Yes | Required; backend casts to integer before sending the report |

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-037](/docs/flows/staff-review-and-support) — Staff/master data/catalogs.
