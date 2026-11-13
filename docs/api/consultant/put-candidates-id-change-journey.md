---
title: "PUT /api/consultant/candidates/{id}/change_journey"
sidebar_label: "PUT /api/consultant/candidates/{id}/change_journey"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/consultant/candidates/{id}/change_journey"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateController@changeJourney"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-036 — Tags/skills/support operations"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `PUT /api/consultant/candidates/{id}/change_journey`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## GAP-753 planned behavior

**GAP-753 planned contract — NOT YET DEPLOYED (2026-11-13).**

- If the candidate has approved identity images (the latest `profile_image` and `capturerd_candidate_face_image` are `approved` and, unless `journey_type = others`, the latest `profile_image_of_passport` or `profile_image_of_right_to_work` is `approved`), the request is rejected with HTTP `403` / `operationNotAllowed` (code `1004`), message `Candidate identity has been approved. Right to work check and journey can no longer be changed.` No file or status is changed.
- Otherwise, on success the backend deletes the candidate's face images of type `profile_image_of_right_to_work`, `profile_image_of_passport` and `capturerd_candidate_face_image` (the selfie `profile_image` is kept). Images referenced by a worker welfare check are kept. Then `journey_type` is updated and `right_to_work_approval_status` and `right_to_work_face_matching_approval_status` are reset to `pending`.
- Existing validation is unchanged: an unsupported journey or the same journey as the current one is still rejected.

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
| `id` | UNVERIFIED | UNVERIFIED | UNVERIFIED |

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

Send a JSON object (`Content-Type: application/json`). The fields below come from the backend request class; validation rules are listed where defined.

| Field | Type | Required | Runtime validation |
|---|---|---|---|
| `journey_type` | string | Yes | `required\|string\|in:passport,share_code,others` |

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-036](/docs/flows/staff-review-and-support) — Tags/skills/support operations.
