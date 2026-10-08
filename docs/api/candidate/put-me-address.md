---
title: "PUT /api/candidate/me/address"
sidebar_label: "PUT /api/candidate/me/address"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/candidate/me/address"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeAddressController@update"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-004 — Candidate profile/MM identity"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/address"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/candidate/me/address`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:candidateApi` |
| `checkCandidateLockEdit` |

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

#### `application/json` payload (`AddressUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| building | string | Not specified |  |
| street | string | Not specified |  |
| town_city | string | Not specified |  |
| county | string | Not specified |  |
| postcode | string | Not specified |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "building": "string",
  "street": "string",
  "town_city": "string",
  "county": "string",
  "postcode": "string"
}
```

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `500` | Internal Server Error | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `500` | Internal Server Error | application/json |

## Flow

Flow baseline: [SPEC-004](/docs/flows/candidate-lifecycle) — Candidate profile/MM identity.
