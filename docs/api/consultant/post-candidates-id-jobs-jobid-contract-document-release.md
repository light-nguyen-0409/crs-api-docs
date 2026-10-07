---
title: "POST /api/consultant/candidates/{id}/jobs/{jobId}/contract_document/release"
sidebar_label: "POST /api/consultant/candidates/{id}/jobs/{jobId}/contract_document/release"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/consultant/candidates/{id}/jobs/{jobId}/contract_document/release"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateJobController@releaseContractDocument"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-012 — Contract/application pack"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/candidates/{id}/jobs/{jobId}/contract_document/release"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/consultant/candidates/{id}/jobs/{jobId}/contract_document/release`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

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
| `id` | Yes | `id` | OpenAPI name matches. |
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
| `200` | OK | application/json |


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-012](/docs/flows/candidate-lifecycle) — Contract/application pack.
