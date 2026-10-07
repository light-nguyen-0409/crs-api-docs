---
title: "POST /api/compliance/candidates/{id}/update_status"
sidebar_label: "POST /api/compliance/candidates/{id}/update_status"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/compliance/candidates/{id}/update_status"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\CandidateController@updateStatus"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-017 — Compliance approval"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Compliance.yaml"
openapi_path: "/api/compliance/candidates/{id}/update_status"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/compliance/candidates/{id}/update_status`

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

Flow baseline: [SPEC-017](/docs/flows/staff-review-and-support) — Compliance approval.
