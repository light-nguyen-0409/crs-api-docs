---
title: "PUT /api/candidate/me/emergency_contact"
sidebar_label: "PUT /api/candidate/me/emergency_contact"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/candidate/me/emergency_contact"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeEmergencyContactController@update"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-004 — Candidate profile/MM identity"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/emergency_contact"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/candidate/me/emergency_contact`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

### OpenAPI description

Update user's emergency contact information. Data won't be updated if key is missing. ( for ex, if request data has no "first_name" key, first_name information won't be updated.

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

#### `application/json` payload (`ContactUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| first_name | string | Yes |  |
| middle_name | string | Yes |  |
| last_name | string | Yes |  |
| relationship | string | Yes |  |
| phone_number_country_code | string | Yes |  |
| phone_number | string | Yes |  |
| email | string | Yes |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "first_name": "string",
  "middle_name": "string",
  "last_name": "string",
  "relationship": "string",
  "phone_number_country_code": "string",
  "phone_number": "string",
  "email": "string"
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
