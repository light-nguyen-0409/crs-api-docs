---
title: "PUT /api/compliance/candidates/{id}/files/{fileId}/status"
sidebar_label: "PUT /api/compliance/candidates/{id}/files/{fileId}/status"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/compliance/candidates/{id}/files/{fileId}/status"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\CandidateFileController@updateStatusById"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-009 — Files"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Compliance.yaml"
openapi_path: "/api/compliance/candidates/{id}/files/{fileId}/status"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `PUT /api/compliance/candidates/{id}/files/{fileId}/status`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectBranchForCompliance` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | Yes | `id` | OpenAPI name matches. |
| `fileId` | Yes | `fileId` | OpenAPI name matches. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

| Required | Content types | Description |
|---|---|---|
| No | application/json | OpenAPI requestBody |

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-009](/docs/flows/candidate-lifecycle) — Files.
