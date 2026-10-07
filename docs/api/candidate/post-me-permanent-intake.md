---
title: "POST /api/candidate/me/permanent-intake"
sidebar_label: "POST /api/candidate/me/permanent-intake"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/permanent-intake"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\PermanentCandidateIntakeController@submit"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-039 — Permanent candidate intake"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/permanent-intake"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/candidate/me/permanent-intake`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

### OpenAPI summary

Submit Candidate Permanent intake

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

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

| Required | Content types | Description |
|---|---|---|
| Yes | application/json | OpenAPI requestBody |

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | Permanent intake submitted and synchronized | application/json |
| `400` | FormRequest validation failed | application/json |
| `401` | Unauthorized | application/json |
| `404` | Candidate job or file not found | application/json |
| `409` | Permanent intake already submitted | application/json |
| `422` | Business input error | application/json |
| `502` | MatchMaker synchronization failed after GAP persistence | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `400` | FormRequest validation failed | application/json |
| `401` | Unauthorized | application/json |
| `404` | Candidate job or file not found | application/json |
| `409` | Permanent intake already submitted | application/json |
| `422` | Business input error | application/json |
| `502` | MatchMaker synchronization failed after GAP persistence | application/json |

## Flow

Flow baseline: [SPEC-039](/docs/flows/permanent-intake) — Permanent candidate intake.
