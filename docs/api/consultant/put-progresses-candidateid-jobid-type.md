---
title: "PUT /api/consultant/progresses/{candidateId}/{jobId}/{type}"
sidebar_label: "PUT /api/consultant/progresses/{candidateId}/{jobId}/{type}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/consultant/progresses/{candidateId}/{jobId}/{type}"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\ProgressController@update"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-013 — Registration progress"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `PUT /api/consultant/progresses/{candidateId}/{jobId}/{type}`

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
| `candidateId` | UNVERIFIED | UNVERIFIED | UNVERIFIED |
| `jobId` | UNVERIFIED | UNVERIFIED | UNVERIFIED |
| `type` | UNVERIFIED | UNVERIFIED | UNVERIFIED |

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

Flow baseline: [SPEC-013](/docs/flows/candidate-lifecycle) — Registration progress.
