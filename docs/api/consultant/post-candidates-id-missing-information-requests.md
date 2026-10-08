---
title: "POST /api/consultant/candidates/{id}/missing_information_requests"
sidebar_label: "POST /api/consultant/candidates/{id}/missing_information_requests"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/consultant/candidates/{id}/missing_information_requests"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\MissingInformationController@create"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-015 — Missing information/document"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/candidates/{id}/missing_information_requests"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `POST /api/consultant/candidates/{id}/missing_information_requests`

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

#### `application/json` payload (`ActivityLogUpdate`)

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
| `201` | Created | application/json |
| `` | UNVERIFIED | UNVERIFIED |


## Errors

| Status | Description | Content types |
|---|---|---|
| `` | UNVERIFIED | UNVERIFIED |

## Flow

Flow baseline: [SPEC-015](/docs/flows/staff-review-and-support) — Missing information/document.
