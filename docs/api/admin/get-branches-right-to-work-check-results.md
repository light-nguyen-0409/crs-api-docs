---
title: "GET /api/admin/branches/right_to_work_check_results"
sidebar_label: "GET /api/admin/branches/right_to_work_check_results"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/admin/branches/right_to_work_check_results"
domain: "admin"
controller: "App\\Http\\Controllers\\Api\\Admin\\BranchController@getRightToWorkCheckResults"
middleware: "api, auth:userApi, detectAdmin"
flow_spec: "SPEC-037 — Staff/master data/catalogs"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Admin.yaml"
openapi_path: "/api/admin/branches/right_to_work_check_results"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/admin/branches/right_to_work_check_results`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — a matching OpenAPI operation exists with the same method and path template. Request, response, and error behavior still require source tracing.

### OpenAPI summary

This endpoint will return the right to work check results (Approved/Rejected) per branch.

## Authentication and middleware

| Middleware | Evidence |
|---|---|
| `api` | Runtime route inventory |
| `auth:userApi` | Runtime route inventory |
| `detectAdmin` | Runtime route inventory |

Authentication and authorization outcomes are UNVERIFIED beyond the middleware names recorded above.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

### Query parameters

| Parameter | Required | Schema | Description |
|---|---|---|---|
| `offset` | No | `string` | UNVERIFIED |
| `limit` | No | `string` | UNVERIFIED |
| `order` | No | `string` | sort order column ( id, name, ... ) |
| `direction` | No | `string` | sort direction (asc, desc) |

### Headers

UNVERIFIED — header requirements are not represented in the runtime route inventory.

### Body

The matched OpenAPI operation does not declare a request body. Runtime body behavior remains UNVERIFIED.

## Response

### Success and declared responses

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `200` | OK | application/json | OpenAPI declaration |

Runtime Resource/DTO mapping is UNVERIFIED.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Business flow and side effects

Flow baseline: [SPEC-037](/docs/flows/staff-review-and-support) — Staff/master data/catalogs.

Detailed transitions, mutations, external calls, and side effects are UNVERIFIED at endpoint-page granularity. Trace the controller/service call chain against the canonical business-flow and database-relationship specifications before relying on this page as a behavior contract.

## Source and verification notes

| Source | Value |
|---|---|
| Runtime route | `routes/admin.php` |
| Controller action | `App\Http\Controllers\Api\Admin\BranchController@getRightToWorkCheckResults` |
| OpenAPI reference | `documents/Gap-API-Admin.yaml` operation `GET /branches/right_to_work_check_results` |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
