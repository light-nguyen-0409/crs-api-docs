---
title: "GET /api/candidate/me/share_codes/{code}"
sidebar_label: "GET /api/candidate/me/share_codes/{code}"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/candidate/me/share_codes/{code}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeShareCodeController@check"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-011 — RTW share code"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/share_codes/{share_code}"
openapi_match: "PARAMETER_NAME_DRIFT"
last_verified: "2026-10-07"
---

# `GET /api/candidate/me/share_codes/{code}`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — a matching OpenAPI operation exists after normalizing path placeholders, but the runtime path `/api/candidate/me/share_codes/{code}` and OpenAPI path `/api/candidate/me/share_codes/{share_code}` use different placeholder names. Request, response, and error behavior still require source tracing.

### OpenAPI summary

Check share code status in UK gov site.

## GAP-753 planned behavior

**GAP-753 planned contract — NOT YET DEPLOYED (2026-11-13).**

- Submitting the same share code as the stored one still returns `200` without any check (unchanged).
- If the candidate has approved identity images (the latest `profile_image` and `capturerd_candidate_face_image` are `approved` and, unless `journey_type = others`, the latest `profile_image_of_passport` or `profile_image_of_right_to_work` is `approved`), any other share code is rejected with HTTP `403` / `operationNotAllowed` (code `1004`) before the external check runs.
- **Redo RTW**: if the candidate already has a stored share code and the new check returns a valid result, the backend deletes the interview image (`capturerd_candidate_face_image`, except images referenced by a worker welfare check) and resets `right_to_work_face_matching_approval_status` to `pending` before storing the new right-to-work files.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:candidateApi` |
| `checkCandidateLockEdit` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `code` | Yes | `share_code` | OpenAPI uses `share_code` for this placeholder. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

The matched OpenAPI operation does not declare a request body. Runtime body behavior remains UNVERIFIED.

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `404` | Not Found | application/json |
| `500` | Internal Server Error | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `404` | Not Found | application/json |
| `500` | Internal Server Error | application/json |

## Flow

Flow baseline: [SPEC-011](/docs/flows/candidate-lifecycle) — RTW share code.
