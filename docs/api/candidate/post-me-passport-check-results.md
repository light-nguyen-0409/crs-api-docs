---
title: "POST /api/candidate/me/passport/check_results"
sidebar_label: "POST /api/candidate/me/passport/check_results"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/passport/check_results"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\GBGIdspCertifiedPassportCheckController@saveCheckResults"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-010 — GBG passport"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `POST /api/candidate/me/passport/check_results`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## GAP-753 planned behavior

**GAP-753 planned contract — NOT YET DEPLOYED (2026-11-13).**

- If the candidate has approved identity images (the latest `profile_image` and `capturerd_candidate_face_image` are `approved` and, unless `journey_type = others`, the latest `profile_image_of_passport` or `profile_image_of_right_to_work` is `approved`), the request is rejected with HTTP `403` / `operationNotAllowed` (code `1004`) before GBG results are fetched.
- **Redo RTW**: if the candidate already has a stored `passport_check_result` and the new GBG result is fetched, the backend deletes the interview image (`capturerd_candidate_face_image`, except images referenced by a worker welfare check) and resets `right_to_work_face_matching_approval_status` to `pending` before storing the new passport files.

**GAP-753 follow-up planned contract — NOT YET DEPLOYED (2026-11-19).**

- **Redo RTW (follow-up)**: in addition to the reset above, the backend also deletes the stored selfie ↔ interview face matching score (`candidate_face_matching_rates.type = selfie_to_captured_face_image_from_online_mtg`). A new score is calculated when staff upload a new interview image.

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

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

Send a JSON object (`Content-Type: application/json`). The fields below come from the backend request class; validation rules are listed where defined.

| Field | Type | Required | Runtime validation |
|---|---|---|---|
| `person_entry_id` | string | Not enforced by request rules | `No field rule declared` |

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-010](/docs/operations/webhooks) — GBG passport.
