---
title: "GET /api/candidate/ethnicities"
sidebar_label: "GET /api/candidate/ethnicities"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/candidate/ethnicities"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\EthnicityController@index"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-037 — Staff/master data/catalogs"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/ethnicities"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/candidate/ethnicities`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:candidateApi` |
| `checkCandidateLockEdit` |

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

Flow baseline: [SPEC-037](/docs/flows/staff-review-and-support) — Staff/master data/catalogs.
