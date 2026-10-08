---
title: "PUT /api/consultant/escalated_issues/{id}"
sidebar_label: "PUT /api/consultant/escalated_issues/{id}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/consultant/escalated_issues/{id}"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\EscalatedIssueController@update"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-016 — Escalated issue"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/escalated_issues/{id}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/consultant/escalated_issues/{id}`

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

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

| Required | Content types | Description |
|---|---|---|
| No | application/json | OpenAPI requestBody |


#### Payload schema

Field types and descriptions below come from the matched OpenAPI schema. A `Not specified` required value means OpenAPI omits that requiredness; backend validation can add constraints.

#### `application/json` payload (`EscalatedIssueUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| candidate_id | integer | Yes |  |
| type | string | Yes |  |
| content | string | Yes |  |
| category | string | Yes |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "candidate_id": 1,
  "type": "string",
  "content": "string",
  "category": "string"
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
