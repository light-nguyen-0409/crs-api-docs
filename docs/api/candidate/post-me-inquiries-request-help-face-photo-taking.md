---
title: "POST /api/candidate/me/inquiries/request_help_face_photo_taking"
sidebar_label: "POST /api/candidate/me/inquiries/request_help_face_photo_taking"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/inquiries/request_help_face_photo_taking"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeInquiryController@sendEmailAboutCannotTakePhotoForConsultant"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-036 — Tags/skills/support operations"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/inquiries/request_help_face_photo_taking"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `POST /api/candidate/me/inquiries/request_help_face_photo_taking`

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

#### `application/json` payload (`MeCannotTakePhotoRequest`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| cannot_take_photo_by_candidate | string | Not specified |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "cannot_take_photo_by_candidate": "string"
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

Flow baseline: [SPEC-036](/docs/flows/staff-review-and-support) — Tags/skills/support operations.
