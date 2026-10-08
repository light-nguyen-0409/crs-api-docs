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

**GAP-691 approved planned contract — NOT YET DEPLOYED (2026-10-08).** This page describes the approved async backend-generated form contract. Deployment and workers remain unverified.

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
| files | `array<object>` | Yes | Exactly two files: CV and Work Finder Agreement. The background backend job generates the Permanent Candidate Form PDF from the validated submitted payload. Do not upload or submit a Permanent form file ID. |
| files[].file_id | integer | Yes |  |
| files[].type | string | Yes | Allowed values: cv, work_finder_agreement. |

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
    },
    {
      "file_id": 2,
      "type": "work_finder_agreement"
    }
  ]
}
```

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `202` | Permanent intake saved and queued for background processing | application/json |
| `400` | FormRequest validation failed | application/json |
| `401` | Unauthorized | application/json |
| `404` | Candidate job or file not found | application/json |
| `409` | Permanent intake already submitted | application/json |
| `422` | Business input error | application/json |
| `502` | Queue dispatch failed after GAP persistence; intake was not accepted for background processing | application/json |


### Accepted response (202)

```json
{
  "candidate_id": 1,
  "job_id": 2,
  "candidate_job_id": 3,
  "submission_status": "pending"
}
```

This top-level response confirms enqueue only. There is no submission ID or polling endpoint. Do not display MatchMaker synchronization as complete. The candidate becomes permanent only after the job succeeds. Background PDF/storage/MM failures use queue retries, failed jobs and logs; they do not change the already-returned response.

Local profile/address/answer writes commit before Redis enqueue. If enqueue fails, the endpoint returns configured `permanentMatchMakerSyncFailed` (HTTP 502, code 1017) with a dispatch-failure message; saved local profile data remains and `is_permanent` is false. No false pending response is returned. A lost HTTP response may still follow a successful enqueue; there is no exactly-once submit guarantee.

## Errors

| Status | Description | Content types |
|---|---|---|
| `400` | FormRequest validation failed | application/json |
| `401` | Unauthorized | application/json |
| `404` | Candidate job or file not found | application/json |
| `409` | Permanent intake already submitted | application/json |
| `422` | Business input error | application/json |
| `502` | Queue dispatch failed after GAP persistence; intake was not accepted for background processing | application/json |

## Flow

Flow baseline: [SPEC-039](/docs/flows/permanent-intake) — Permanent candidate intake.
