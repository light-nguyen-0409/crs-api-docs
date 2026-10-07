---
title: "POST /api/candidate/me/bank_account/update_live"
sidebar_label: "POST /api/candidate/me/bank_account/update_live"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/bank_account/update_live"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeBankAccountController@updateLive"
middleware: "api, auth:candidateApi"
flow_spec: "SPEC-008 — Bank/financial"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `POST /api/candidate/me/bank_account/update_live`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:candidateApi` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

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

Flow baseline: [SPEC-008](/docs/flows/candidate-lifecycle) — Bank/financial.
