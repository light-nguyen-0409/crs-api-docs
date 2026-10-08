---
title: "GET /api/candidate/me/mm_ni_numbers"
sidebar_label: "GET /api/candidate/me/mm_ni_numbers"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/candidate/me/mm_ni_numbers"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeController@getMatchMakerNiNumbers"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-004 — Candidate profile/MM identity"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `GET /api/candidate/me/mm_ni_numbers`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

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

Flow baseline: [SPEC-004](/docs/flows/candidate-lifecycle) — Candidate profile/MM identity.
