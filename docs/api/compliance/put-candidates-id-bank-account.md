---
title: "PUT /api/compliance/candidates/{id}/bank-account"
sidebar_label: "PUT /api/compliance/candidates/{id}/bank-account"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/compliance/candidates/{id}/bank-account"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\CandidateController@updateBankAccount"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-008 — Bank/financial"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Compliance.yaml"
openapi_path: "/api/compliance/candidates/{id}/bank-account"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/compliance/candidates/{id}/bank-account`

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
| `id` | UNVERIFIED | UNVERIFIED | UNVERIFIED |

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

#### `application/json` payload (`BankAccountUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| bank_name | string | Not specified |  |
| account_number | string | Not specified |  |
| account_name | string | Not specified |  |
| bank_sort_code | string | Not specified |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "bank_name": "string",
  "account_number": "string",
  "account_name": "string",
  "bank_sort_code": "string"
}
```

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `404` | Not Found | application/json |
| `500` | Internal Server Error | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `404` | Not Found | application/json |
| `500` | Internal Server Error | application/json |

## Flow

Flow baseline: [SPEC-008](/docs/flows/candidate-lifecycle) — Bank/financial.
