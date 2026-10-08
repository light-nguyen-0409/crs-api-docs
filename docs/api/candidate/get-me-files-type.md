---
title: "GET /api/candidate/me/files/{type}"
sidebar_label: "GET /api/candidate/me/files/{type}"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/candidate/me/files/{type}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeFileController@list"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-009 — Files"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/files/{type}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `GET /api/candidate/me/files/{type}`

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

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `type` | Yes | `type` | See [file type values](/docs/api/path-parameter-values#file-types). |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication). For file types outside the [candidate-associated file type list](/docs/api/path-parameter-values#candidate-associated-file-types), send the job ID in `Gap-Job-ID`.

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
