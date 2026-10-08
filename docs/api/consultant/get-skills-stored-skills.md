---
title: "GET /api/consultant/skills/stored_skills"
sidebar_label: "GET /api/consultant/skills/stored_skills"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/consultant/skills/stored_skills"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\SkillController@index"
middleware: "api, auth:userApi"
flow_spec: "SPEC-036 — Tags/skills/support operations"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `GET /api/consultant/skills/stored_skills`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

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

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

This operation does not define a request body; send inputs through the documented path or query parameters.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-036](/docs/flows/staff-review-and-support) — Tags/skills/support operations.
