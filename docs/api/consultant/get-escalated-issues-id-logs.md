---
title: "GET /api/consultant/escalated_issues/{id}/logs"
sidebar_label: "GET /api/consultant/escalated_issues/{id}/logs"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/consultant/escalated_issues/{id}/logs"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\EscalatedIssueLogController@index"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-016 — Escalated issue"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/escalated_issues/{id}/logs"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/consultant/escalated_issues/{id}/logs`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

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

### Query parameters

| Parameter | Required | Schema | Description |
|---|---|---|---|
| `offset` | No | `integer` | UNVERIFIED |
| `limit` | No | `integer` | UNVERIFIED |

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

Flow baseline: [SPEC-016](/docs/flows/staff-review-and-support) — Escalated issue.
