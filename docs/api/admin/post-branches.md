---
title: "POST /api/admin/branches"
sidebar_label: "POST /api/admin/branches"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/admin/branches"
domain: "admin"
controller: "App\\Http\\Controllers\\Api\\Admin\\BranchController@add"
middleware: "api, auth:userApi, detectAdmin"
flow_spec: "SPEC-037 — Staff/master data/catalogs"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Admin.yaml"
openapi_path: "/api/admin/branches"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `POST /api/admin/branches`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectAdmin` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

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

#### `application/json` payload (`BranchAdd`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| branch_id | number | Not specified |  |
| external_id | string | Not specified |  |
| name | string | Not specified |  |
| type | string | Not specified | Branch type branch, onsite, subsite |
| legal_entity | LegalEntity | Not specified |  |
| email | string | Not specified |  |
| phone_number | string | Not specified |  |
| phone_number_country_code | string | Not specified |  |
| address | string | Not specified |  |
| manager_name | string | Not specified |  |
| director_name | string | Not specified |  |
| client_name | string | Not specified |  |
| map_link | string | Not specified |  |
| parent_branch_id | number | Not specified | Parent branch id required if branch type is onsite or subsite |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "branch_id": 1,
  "external_id": "string",
  "name": "string",
  "type": "string",
  "legal_entity": {
  },
  "email": "string",
  "phone_number": "string",
  "phone_number_country_code": "string",
  "address": "string",
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
