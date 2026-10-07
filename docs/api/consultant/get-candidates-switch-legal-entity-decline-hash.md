---
title: "GET /api/consultant/candidates/switch_legal_entity/decline/{hash}"
sidebar_label: "GET /api/consultant/candidates/switch_legal_entity/decline/{hash}"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/consultant/candidates/switch_legal_entity/decline/{hash}"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateController@declineLegalEntitySwitch"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-033 — Legal entity switching"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `GET /api/consultant/candidates/switch_legal_entity/decline/{hash}`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectBranchForConsultant` |
| `autoLogout` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `hash` | UNVERIFIED | UNVERIFIED | UNVERIFIED |

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

UNVERIFIED — request body schema is not represented in the runtime route inventory.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-033](/docs/flows/staff-review-and-support) — Legal entity switching.
