---
title: "PUT /api/candidate/files/{id}/status"
sidebar_label: "PUT /api/candidate/files/{id}/status"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/candidate/files/{id}/status"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeFileController@updateStatus"
middleware: "api, auth:candidateApi, checkCandidateLockEdit, detectJobForCandidate"
flow_spec: "SPEC-009 — Files"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `PUT /api/candidate/files/{id}/status`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:candidateApi` |
| `checkCandidateLockEdit` |
| `detectJobForCandidate` |

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

UNVERIFIED — request body schema is not represented in the runtime route inventory.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-009](/docs/flows/candidate-lifecycle) — Files.
