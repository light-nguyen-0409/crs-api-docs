---
title: "PUT /api/candidate/me/employee_histories/{id}"
sidebar_label: "PUT /api/candidate/me/employee_histories/{id}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/candidate/me/employee_histories/{id}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeEmployeeHistoryController@update"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-006 — Employment history/referee"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/employee_histories/{id}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/candidate/me/employee_histories/{id}`

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

#### `application/json` payload (`EployeeHistoryUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| company_name | string | Not specified |  |
| job_title | string | Not specified |  |
| start_date | string | Not specified |  |
| end_date | string | Not specified | null if the person is still working |
| history_type | string | Not specified | employment / education / other |
| employment_status | string | Not specified | fulltime / parttime |
| job_description | string | Not specified |  |
| reference_name | string | Not specified |  |
| reference_position | string | Not specified |  |
| reference_phone | string | Not specified |  |
| reference_email | string | Not specified |  |
| can_reference_contact_immediately | boolean | Not specified |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "company_name": "string",
  "job_title": "string",
  "start_date": "string",
  "end_date": "string",
  "history_type": "string",
  "employment_status": "string",
  "job_description": "string",
  "reference_name": "string",
  "reference_position": "string",
  "reference_phone": "string",
  "reference_email": "string",
  "can_reference_contact_immediately": true
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

Flow baseline: [SPEC-006](/docs/flows/candidate-lifecycle) — Employment history/referee.
