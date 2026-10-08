---
title: "POST /api/candidate/tracking_records"
sidebar_label: "POST /api/candidate/tracking_records"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/tracking_records"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\General\\TrackingRecordController@add"
middleware: "api"
flow_spec: "SPEC-029 — Tracking/address"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/tracking_records"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `POST /api/candidate/tracking_records`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

### OpenAPI description

For registering tracking record for Mixpanel.

## Authentication and middleware

| Middleware |
|---|
| `api` |

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

#### `application/json` payload (`AddTrackRecord`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| message | string | Yes | ex. Create a user account |
| candidate_id | integer | Yes |  |
| job_id | integer | Yes |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "message": "string",
  "candidate_id": 1,
  "job_id": 1
}
```

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |
| `400` | Bad Request | application/json |
| `500` | Internal Server Error | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `400` | Bad Request | application/json |
| `500` | Internal Server Error | application/json |

## Flow

Flow baseline: [SPEC-029](/docs/operations/external-integrations) — Tracking/address.
