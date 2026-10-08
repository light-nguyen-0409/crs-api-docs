---
title: "POST /api/candidate/me/permanent-intake"
sidebar_label: "POST /api/candidate/me/permanent-intake"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/permanent-intake"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\PermanentCandidateIntakeController@submit"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-039 — Permanent candidate intake"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/permanent-intake"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `POST /api/candidate/me/permanent-intake`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

### OpenAPI summary

Submit Candidate Permanent intake

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
| Yes | application/json | OpenAPI requestBody |


#### Payload schema

Field types and descriptions below come from the matched OpenAPI schema. A `Not specified` required value means OpenAPI omits that requiredness; backend validation can add constraints.

#### `application/json` payload (`PermanentIntakeRequest`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| job_id | integer | Yes |  |
| title | string | Yes |  |
| first_name | string | Yes |  |
| middle_name | string | No |  |
| last_name | string | Yes |  |
| email | string | Yes |  |
| phone_number | string | Yes |  |
| phone_number_country_code | string | No |  |
| date_of_birth | string | Yes |  |
| address | object | Yes |  |
| address.building | string | Yes |  |
| address.street | string | Yes |  |
| address.town_city | string | Yes |  |
| address.county | string | Yes |  |
| address.postcode | string | Yes |  |
| contact_dates | `array<string>` | Yes |  |
| contact_times | `array<string>` | Yes |  |
| transportation_method | string | Yes |  |
| transportation_distance | string | Yes |  |
| recruitment_source | string | Yes |  |
| journey_type | string | Yes | Allowed values: passport, share_code, others. |
| journey_type_other_document | string | No |  |
| work_finder_agreement_accepted | boolean | Yes |  |
| files | `array<object>` | Yes | Exactly three files are required, one CV, one Work Finder Agreement and one Permanent Candidate Form PDF. Upload the form to /me/files/permanent_candidate_form with Gap-Job-ID before submitting; send its returned File ID here. |
| files[].file_id | integer | Yes |  |
| files[].type | string | Yes | Allowed values: cv, work_finder_agreement, permanent_candidate_form. |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "job_id": 1,
  "title": "string",
  "first_name": "string",
  "middle_name": "string",
  "last_name": "string",
  "email": "string",
  "phone_number": "string",
  "phone_number_country_code": "string",
  "date_of_birth": "YYYY-MM-DD",
  "address": {
    "building": "string",
    "street": "string",
    "town_city": "string",
    "county": "string",
    "postcode": "string"
  },
  "contact_dates": [
    "string"
  ],
  "contact_times": [
    "string"
  ],
  "transportation_method": "string",
  "transportation_distance": "string",
  "recruitment_source": "string",
  "journey_type": "passport",
  "journey_type_other_document": "string",
  "work_finder_agreement_accepted": true,
  "files": [
    {
      "file_id": 1,
      "type": "cv"
    }
  ]
}
```

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | Permanent intake submitted and synchronized | application/json |
| `400` | FormRequest validation failed | application/json |
| `401` | Unauthorized | application/json |
| `404` | Candidate job or file not found | application/json |
| `409` | Permanent intake already submitted | application/json |
| `422` | Business input error | application/json |
| `502` | MatchMaker synchronization failed after GAP persistence | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `400` | FormRequest validation failed | application/json |
| `401` | Unauthorized | application/json |
| `404` | Candidate job or file not found | application/json |
| `409` | Permanent intake already submitted | application/json |
| `422` | Business input error | application/json |
| `502` | MatchMaker synchronization failed after GAP persistence | application/json |

## Flow

Flow baseline: [SPEC-039](/docs/flows/permanent-intake) — Permanent candidate intake.
