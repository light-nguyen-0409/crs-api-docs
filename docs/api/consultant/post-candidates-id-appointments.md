---
title: "POST /api/consultant/candidates/{id}/appointments"
sidebar_label: "POST /api/consultant/candidates/{id}/appointments"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/consultant/candidates/{id}/appointments"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\AppointmentController@add"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-014 — Appointment"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/candidates/{id}/appointments"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `POST /api/consultant/candidates/{id}/appointments`

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

#### `application/json` payload (`AppointmentUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| type | string | Yes | appointment type: Now only has "interview" |
| candidate_id | integer | Yes |  |
| job_id | integer | Yes |  |
| branch_id | integer | No | Required only when the type is "in_branch" |
| method | string | Yes | "remote" / "in_branch" / "client_location" |
| meeting_url | string | No | required only when type is "remote" |
| documents | `array<string>` | No | required only when type is "in_branch" |
| location_detail | string | No | requires only when type is "client_location" |
| date | string | Yes | YYYY-MM-DD format |
| time | string | Yes | hh:mm format |
| note | string | No |  |
| status | string | No | "booked" / "finished" / "canceled", default value is "booked" |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "type": "string",
  "candidate_id": 1,
  "job_id": 1,
  "branch_id": 1,
  "method": "string",
  "meeting_url": "string",
  "documents": [
    "string"
  ],
  "location_detail": "string",
  "date": "string",
  "time": "string",
  "note": "string",
  "status": "string"
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

Flow baseline: [SPEC-014](/docs/flows/staff-review-and-support) — Appointment.
