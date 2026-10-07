---
title: "GET /api/compliance/candidates/{id}/contact_logs"
sidebar_label: "GET /api/compliance/candidates/{id}/contact_logs"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/compliance/candidates/{id}/contact_logs"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\ActivityLogController@contactLogs"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-030 — Audit/integration logs"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Compliance.yaml"
openapi_path: "/api/compliance/candidates/{id}/contact_logs"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/compliance/candidates/{id}/contact_logs`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

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

| Parameter | Required | Schema | Description |
|---|---|---|---|
| `offset` | No | `string` | UNVERIFIED |
| `limit` | No | `string` | UNVERIFIED |

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

Flow baseline: [SPEC-030](/docs/operations/external-integrations) — Audit/integration logs.
