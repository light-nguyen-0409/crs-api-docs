---
title: "POST /api/consultant/candidates/{id}/application_pack"
sidebar_label: "POST /api/consultant/candidates/{id}/application_pack"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/consultant/candidates/{id}/application_pack"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateController@generateApplicationPack"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-012 — Contract/application pack"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `POST /api/consultant/candidates/{id}/application_pack`

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
| `id` | UNVERIFIED | UNVERIFIED | UNVERIFIED |

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

The runtime handler reads request input fields: `branch_id`. The controller does not declare a field-level JSON body schema for these inputs; route scope may supply some values through headers or middleware attributes.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-012](/docs/flows/candidate-lifecycle) — Contract/application pack.
