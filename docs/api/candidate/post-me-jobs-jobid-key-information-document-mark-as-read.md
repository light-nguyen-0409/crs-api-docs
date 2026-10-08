---
title: "POST /api/candidate/me/jobs/{jobId}/key_information_document/mark_as_read"
sidebar_label: "POST /api/candidate/me/jobs/{jobId}/key_information_document/mark_as_read"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/jobs/{jobId}/key_information_document/mark_as_read"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeJobController@markKeyInformationDocumentAsRead"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-012 — Contract/application pack"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `POST /api/candidate/me/jobs/{jobId}/key_information_document/mark_as_read`

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

The runtime controller does not consume a request body for this action.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-012](/docs/flows/candidate-lifecycle) — Contract/application pack.
