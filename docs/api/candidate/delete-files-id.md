---
title: "DELETE /api/candidate/files/{id}"
sidebar_label: "DELETE /api/candidate/files/{id}"
method: "DELETE"
runtime_method_declaration: "DELETE"
path: "/api/candidate/files/{id}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeFileController@delete"
middleware: "api, auth:candidateApi, checkCandidateLockEdit, detectJobForCandidate"
flow_spec: "SPEC-009 — Files"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/files/{id}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `DELETE /api/candidate/files/{id}`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

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
| `id` | Yes | `id` | OpenAPI name matches. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

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

Flow baseline: [SPEC-009](/docs/flows/candidate-lifecycle) — Files.
