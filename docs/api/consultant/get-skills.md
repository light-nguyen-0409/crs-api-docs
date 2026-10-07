---
title: "GET /api/consultant/skills"
sidebar_label: "GET /api/consultant/skills"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/consultant/skills"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\SkillController@index"
middleware: "api, auth:userApi"
flow_spec: "SPEC-036 — Tags/skills/support operations"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/skills"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/consultant/skills`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

### Query parameters

| Parameter | Required | Schema | Description |
|---|---|---|---|
| `filter` | No | `string` | UNVERIFIED |

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

Flow baseline: [SPEC-036](/docs/flows/staff-review-and-support) — Tags/skills/support operations.
