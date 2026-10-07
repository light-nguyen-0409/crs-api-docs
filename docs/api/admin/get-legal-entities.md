---
title: "GET /api/admin/legal_entities"
sidebar_label: "GET /api/admin/legal_entities"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/admin/legal_entities"
domain: "admin"
controller: "App\\Http\\Controllers\\Api\\Admin\\LegalEntityController@index"
middleware: "api, auth:userApi, detectAdmin"
flow_spec: "SPEC-037 — Staff/master data/catalogs"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Admin.yaml"
openapi_path: "/api/admin/legal_entities"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/admin/legal_entities`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

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

| Parameter | Required | Schema | Description |
|---|---|---|---|
| `offset` | No | `string` | UNVERIFIED |
| `limit` | No | `string` | UNVERIFIED |
| `order` | No | `string` | sort order column ( id, name, ... ) |
| `direction` | No | `string` | sort direction (asc, desc) |
| `filter` | No | `string` | full text search |

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
