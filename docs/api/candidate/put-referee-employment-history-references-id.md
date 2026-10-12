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

**GAP-723 approved planned contract — NOT YET DEPLOYED (2026-10-12).** The update must require the referee token and validate the token against the path `id` before any write or notification.

### OpenAPI summary

update referee employment history reference

## Authentication and middleware

| Middleware |
|---|
| `api` |

This is a public referee link endpoint. No candidate or user authentication header is required. The request is still subject to the default `api` middleware rate limit of 120 requests per minute per client IP; excess requests receive `429`.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | Yes | `id` | OpenAPI name matches. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

No Authorization header is required for the public referee link. No route-specific scope header is required.

### Body

| Required | Content types | Description |
|---|---|---|
| Yes | application/json | The referee token and update fields. The token is required to authorize the update for this reference ID. |


#### Payload schema

Field types and descriptions below come from the matched OpenAPI schema. A `Not specified` required value means OpenAPI omits that requiredness; backend validation can add constraints.

#### `application/json` payload (`EmploymentHistoryReferenceUpdate`)

| Field | Type | Required by planned contract | Description |
|---|---|---|---|
| token | string | Yes | Referee token received from the public referee link. It must match the token stored for the path `id`. |
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
  "token": "referee-token",
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

| Status | When | Behavior |
|---|---|---|
| `400` | Token is missing, blank, malformed, or form validation fails | Reject without writing or notifying the branch. |
| `400` | The reference ID does not exist or the token does not match it | Return the same generic not-found/invalid-token behavior; do not reveal whether the ID or token was the mismatch. |
| `429` | Default API rate limit is exceeded | Reject the request without writing or notifying the branch. |

The token is not expired, revoked, or consumed by this contract. Repeated use remains allowed while the submitted token exactly matches the stored token. The successful response does not expose the token.

## Flow

Flow baseline: [SPEC-006](/docs/flows/candidate-lifecycle) — Employment history/referee.
