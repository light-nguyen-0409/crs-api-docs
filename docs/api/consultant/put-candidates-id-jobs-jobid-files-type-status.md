---
title: "PUT /api/consultant/candidates/{id}/jobs/{jobId}/files/{type}/status"
sidebar_label: "PUT /api/consultant/candidates/{id}/jobs/{jobId}/files/{type}/status"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/consultant/candidates/{id}/jobs/{jobId}/files/{type}/status"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateFileController@updateStatus"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-009 — Files"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `PUT /api/consultant/candidates/{id}/jobs/{jobId}/files/{type}/status`

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
| `id` | UNVERIFIED | UNVERIFIED | UNVERIFIED |
| `jobId` | UNVERIFIED | UNVERIFIED | UNVERIFIED |
| `type` | Yes | — | Use a job-associated file type or `all_job_associated_documents`; see [file type values](/docs/api/path-parameter-values#file-types). |

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

Send a JSON object (`Content-Type: application/json`). The fields below come from the backend request class; validation rules are listed where defined.

| Field | Type | Required | Runtime validation |
|---|---|---|---|
| `status` | string | Required by runtime behavior | Use [file status values](/docs/api/path-parameter-values#file-status-values). |

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-009](/docs/flows/candidate-lifecycle) — Files.
