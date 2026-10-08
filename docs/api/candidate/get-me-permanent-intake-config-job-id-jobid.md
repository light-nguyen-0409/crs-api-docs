---
title: "GET /api/candidate/me/permanent-intake/config?job_id={jobId}"
sidebar_label: "GET /api/candidate/me/permanent-intake/config?job_id={jobId}"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/candidate/me/permanent-intake/config?job_id={jobId}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\PermanentCandidateIntakeController@config"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-039 — Permanent candidate intake"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `GET /api/candidate/me/permanent-intake/config?job_id={jobId}`

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

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `jobId` | UNVERIFIED | UNVERIFIED | UNVERIFIED |

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

Flow baseline: [SPEC-039](/docs/flows/permanent-intake) — Permanent candidate intake.
