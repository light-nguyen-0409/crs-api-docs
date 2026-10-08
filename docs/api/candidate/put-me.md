---
title: "PUT /api/candidate/me"
sidebar_label: "PUT /api/candidate/me"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/candidate/me"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeController@update"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-004 — Candidate profile/MM identity"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/candidate/me`

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

#### `application/json` payload (`MeUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| title | string | Not specified |  |
| first_name | string | Not specified |  |
| middle_name | string | Not specified |  |
| last_name | string | Not specified |  |
| date_of_birth | string | Not specified | Format: YYYY-MM-DD |
| journey_type | string | Not specified | passport / share_code / other |
| phone_number | string | Not specified |  |
| phone_number_country_code | string | Not specified |  |
| contact_dates | `array<string>` | Not specified | array of dates ( YYYY-MM-DD formats ) |
| contact_times | `array<string>` | Not specified |  |
| gender | string | Not specified | male / female / other |
| nationality_code | string | Not specified |  |
| ethnicity_code | string | Not specified |  |
| should_delete_personal_info | string | Not specified |  |
| national_insurance_number | string | Not specified |  |
| unable_to_provide_national_insurance_number | string | Not specified |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "title": "string",
  "first_name": "string",
  "middle_name": "string",
  "last_name": "string",
  "date_of_birth": "string",
  "journey_type": "string",
  "phone_number": "string",
  "phone_number_country_code": "string",
  "contact_dates": [
    "string"
  ],
  "contact_times": [
    "string"
  ],
  "gender": "string",
  "nationality_code": "string",
  "ethnicity_code": "string",
  "should_delete_personal_info": "string",
  "national_insurance_number": "string",
  "unable_to_provide_national_insurance_number": "string"
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
