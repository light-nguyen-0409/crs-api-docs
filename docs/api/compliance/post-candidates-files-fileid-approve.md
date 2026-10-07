---
title: "POST /api/compliance/candidates/files/{fileId}/approve"
sidebar_label: "POST /api/compliance/candidates/files/{fileId}/approve"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/compliance/candidates/files/{fileId}/approve"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\CandidateFileController@approveWithExpiryDate"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-009 — Files"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `POST /api/compliance/candidates/files/{fileId}/approve`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

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
| `fileId` | UNVERIFIED | UNVERIFIED | UNVERIFIED |

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

UNVERIFIED — request body schema is not represented in the runtime route inventory.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-009](/docs/flows/candidate-lifecycle) — Files.
