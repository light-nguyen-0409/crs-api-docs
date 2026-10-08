---
title: "POST /api/compliance/escalated_issues/{id}/logs"
sidebar_label: "POST /api/compliance/escalated_issues/{id}/logs"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/compliance/escalated_issues/{id}/logs"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\EscalatedIssueLogController@add"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-016 — Escalated issue"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Compliance.yaml"
openapi_path: "/api/compliance/escalated_issues/{id}/logs"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `POST /api/compliance/escalated_issues/{id}/logs`

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


#### Payload schema

Field types and descriptions below come from the matched OpenAPI schema. A `Not specified` required value means OpenAPI omits that requiredness; backend validation can add constraints.

#### `application/json` payload (`EscalatedIssueLogUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| content | string | Not specified |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "content": "string"
}
```

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-016](/docs/flows/staff-review-and-support) — Escalated issue.
