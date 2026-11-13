---
title: "GET /api/candidate/me/passport/token"
sidebar_label: "GET /api/candidate/me/passport/token"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/candidate/me/passport/token"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\GBGIdspCertifiedPassportCheckController@getToken"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-010 — GBG passport"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `GET /api/candidate/me/passport/token`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## GAP-753 planned behavior

**GAP-753 planned contract — NOT YET DEPLOYED (2026-11-13).**

- If the candidate has approved identity images (the latest `profile_image` and `capturerd_candidate_face_image` are `approved` and, unless `journey_type = others`, the latest `profile_image_of_passport` or `profile_image_of_right_to_work` is `approved`), the request is rejected with HTTP `403` / `operationNotAllowed` (code `1004`) and no GBG token is requested.

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

This operation does not define a request body; send inputs through the documented path or query parameters.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-010](/docs/operations/webhooks) — GBG passport.
