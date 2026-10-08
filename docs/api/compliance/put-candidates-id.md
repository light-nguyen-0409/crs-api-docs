---
title: "PUT /api/compliance/candidates/{id}"
sidebar_label: "PUT /api/compliance/candidates/{id}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/compliance/candidates/{id}"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\CandidateController@update"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-017 — Compliance approval"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Compliance.yaml"
openapi_path: "/api/compliance/candidates/{id}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/compliance/candidates/{id}`

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

#### `application/json` payload (`CandidateUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| first_name | string | Not specified |  |
| middle_name | string | Not specified |  |
| last_name | string | Not specified |  |
| email | string | Not specified |  |
| phone_number_country_code | string | Not specified |  |
| phone_number | string | Not specified |  |
| date_of_birth | string | Not specified | YYYY-MM-DD |
| contact_date | `array<string>` | Not specified |  |
| contact_time | `array<string>` | Not specified |  |
| title | string | Not specified |  |
| journey_type | string | Not specified |  |
| is_pathway_unlocked | boolean | Not specified |  |
| screen_call_note_content | string | Not specified |  |
| right_to_work_approval_status | string | Not specified | Right to work approval must be approved / rejected |
| right_to_work_face_matching_approval_status | string | Not specified | Right to work face matching approval must be approved / rejected |
| right_to_work_warning_label | string | Not specified | Right to work warning label must be further_action_required / more_information_required / escalate_further |
| is_all_escalated_issues_approved | string | Not specified | General approval for candidate escalated issues |
| escalated_issues_warning_label | string | Not specified | escalated issue label must be more_information_required / more_action_required / halt_candidate_journey |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "first_name": "string",
  "middle_name": "string",
  "last_name": "string",
  "email": "string",
  "phone_number_country_code": "string",
  "phone_number": "string",
  "date_of_birth": "string",
  "contact_date": [
    "string"
  ],
  "contact_time": [
    "string"
  ],
  "title": "string",
  "journey_type": "string",
  "is_pathway_unlocked": true,
  "screen_call_note_content": "string",
  "right_to_work_approval_status": "string",
  "right_to_work_face_matching_approval_status": "string",
  "right_to_work_warning_label": "string",
  "is_all_escalated_issues_approved": "string",
  "escalated_issues_warning_label": "string"
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

Flow baseline: [SPEC-017](/docs/flows/staff-review-and-support) — Compliance approval.
