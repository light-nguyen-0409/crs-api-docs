---
title: "POST /api/candidate/me/jobs/{jobId}/work_finder_agreement/click"
sidebar_label: "POST /api/candidate/me/jobs/{jobId}/work_finder_agreement/click"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/jobs/{jobId}/work_finder_agreement/click"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\PermanentCandidateIntakeController@agreementClick"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-039 — Permanent candidate intake"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/jobs/{jobId}/work_finder_agreement/click"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/candidate/me/jobs/{jobId}/work_finder_agreement/click`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

### OpenAPI summary

Record the first Work Finder agreement click

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
| `jobId` | Yes | `jobId` | OpenAPI name matches. |

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
| `200` | Agreement click recorded | application/json |
| `401` | Unauthorized | application/json |
| `404` | Candidate job not found | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `401` | Unauthorized | application/json |
| `404` | Candidate job not found | application/json |

## Flow

Flow baseline: [SPEC-039](/docs/flows/permanent-intake) — Permanent candidate intake.
