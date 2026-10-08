---
title: "PUT /api/candidate/referee/employment_history_references/{id}"
sidebar_label: "PUT /api/candidate/referee/employment_history_references/{id}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/candidate/referee/employment_history_references/{id}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\RefereeEmploymentHistoryReferenceController@update"
middleware: "api"
flow_spec: "SPEC-006 — Employment history/referee"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/referee/employment_history_references/{id}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/candidate/referee/employment_history_references/{id}`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

### OpenAPI summary

update referee employment history reference

## Authentication and middleware

| Middleware |
|---|
| `api` |

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

#### `application/json` payload (`EmploymentHistoryReferenceUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| job_title | string | Yes |  |
| start_date | string | No |  |
| end_date | string | No | null if the person is still working |
| candidate_comment | string | No |  |
| is_detail_reference_allowed | boolean | Yes |  |
| reason_for_leaving | string | No |  |
| can_reemploy | boolean | No |  |
| rate_punctuality | integer | No | Numerical rating 1-10 - Optional |
| rate_reliability | integer | No | Numerical rating 1-10 - Optional |
| rate_honesty | integer | No | Numerical rating 1-10 - Optional |
| rate_flexibility | integer | No | Numerical rating 1-10 - Optional |
| rate_teamwork | integer | No | Numerical rating 1-10 - Optional |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "job_title": "string",
  "start_date": "string",
  "end_date": "string",
  "candidate_comment": "string",
  "is_detail_reference_allowed": true,
  "reason_for_leaving": "string",
  "can_reemploy": true,
  "rate_punctuality": 1,
  "rate_reliability": 1,
  "rate_honesty": 1,
  "rate_flexibility": 1,
  "rate_teamwork": 1
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

Flow baseline: [SPEC-006](/docs/flows/candidate-lifecycle) — Employment history/referee.
