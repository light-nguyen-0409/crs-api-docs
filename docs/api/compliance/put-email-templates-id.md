---
title: "PUT /api/compliance/email_templates/{id}"
sidebar_label: "PUT /api/compliance/email_templates/{id}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/compliance/email_templates/{id}"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\EmailTemplateController@update"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-028 — Email template"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Compliance.yaml"
openapi_path: "/api/compliance/email_templates/{id}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/compliance/email_templates/{id}`

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

#### `application/json` payload (`EmailTemplateUpdate`)

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

Flow baseline: [SPEC-028](/docs/flows/staff-review-and-support) — Email template.
