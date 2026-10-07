---
title: "PUT /api/candidate/progresses/{type}"
sidebar_label: "PUT /api/candidate/progresses/{type}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/candidate/progresses/{type}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\ProgressController@update"
middleware: "api, auth:candidateApi, checkCandidateLockEdit, detectJobForCandidate"
flow_spec: "SPEC-013 — Registration progress"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/progresses/{type}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `PUT /api/candidate/progresses/{type}`

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
| `type` | Yes | `type` | OpenAPI name matches. |

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

Flow baseline: [SPEC-013](/docs/flows/candidate-lifecycle) — Registration progress.
