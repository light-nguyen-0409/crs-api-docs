---
title: "PUT /api/compliance/branches/{id}"
sidebar_label: "PUT /api/compliance/branches/{id}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/compliance/branches/{id}"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\BranchController@update"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-037 — Staff/master data/catalogs"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Compliance.yaml"
openapi_path: "/api/compliance/branches/{id}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/compliance/branches/{id}`

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

#### `application/json` payload (`BranchUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| external_id | string | Not specified |  |
| name | string | Not specified |  |
| type | string | Not specified | Branch type branch, onsite, subsite |
| legal_entity | LegalEntity | Not specified |  |
| email | string | Not specified |  |
| phone_number | string | Not specified |  |
| phone_number_country_code | string | Not specified |  |
| manager_name | string | Not specified |  |
| director_name | string | Not specified |  |
| client_name | string | Not specified |  |
| map_link | string | Not specified |  |
| parent_branch_id | number | Not specified | Parent branch id required if branch type is onsite or subsite |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "external_id": "string",
  "name": "string",
  "type": "string",
  "legal_entity": {
  },
  "email": "string",
  "phone_number": "string",
  "phone_number_country_code": "string",
  "manager_name": "string",
  "director_name": "string",
  "client_name": "string",
  "map_link": "string",
  "parent_branch_id": 1
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

Flow baseline: [SPEC-037](/docs/flows/staff-review-and-support) — Staff/master data/catalogs.
