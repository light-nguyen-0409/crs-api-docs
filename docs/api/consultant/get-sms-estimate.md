---
title: "GET /api/consultant/sms/estimate"
sidebar_label: "GET /api/consultant/sms/estimate"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/consultant/sms/estimate"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\SmsController@estimateCandidateCampaign"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-021 — SMS campaign"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/sms/estimate"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
gap_727_status: "LOCAL_IMPLEMENTATION_NOT_DEPLOYED"
---

# `GET /api/consultant/sms/estimate`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

### OpenAPI summary

get estimate sms

## GAP-727 — Local implementation contract (not deployed)

The behavior below is the approved GAP-727 change in the local backend implementation. It is not deployed until the backend change and verification are complete.

When `all_branches=true` (Global Search), the estimate may include candidates outside the consultant's current branch/legal entity only when all of these conditions are true:

- `job_status[]` contains only `matchmaker` (selecting `matchmaker` together with another job status keeps the existing branch-scoped behavior).
- `mm_status[]` contains only `rrr`.
- At least one `skill_ids[]` value is selected.
- The authenticated user has `can_access_all_branches=true`; this permission is taken from the authenticated user and cannot be supplied by the query string.

When any condition is not met, Global Search does not expand the SMS candidate scope. Existing candidate filters and recipient exclusions remain applied.

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

No path parameters are identified in the runtime route template.

### Query parameters

The matched OpenAPI operation does not declare query parameters. The local runtime implementation accepts the existing candidate-search query parameters, including:

| Parameter | Type | Description |
|---|---|---|
| `all_branches` | boolean | Global Search flag; expands SMS candidate scope only under the GAP-727 conditions above, including the authenticated user's `can_access_all_branches` permission. |
| `job_status[]` | array | Candidate job status filter. Cross-branch SMS requires only `matchmaker`. |
| `mm_status[]` | array | MatchMaker status filter. Cross-branch SMS requires only `rrr`. |
| `skill_ids[]` | array | Candidate skill filter. At least one skill is required for cross-branch SMS. |
| Existing candidate filters | varies | Search text, location/client radius and other supported candidate filters remain applied. |

`can_access_all_branches` is not a client-controlled query parameter. If the authenticated user does not have this permission, `all_branches=true` keeps the existing branch-scoped SMS behavior.

The query behavior is a local GAP-727 contract and remains not deployed until backend verification is complete.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

The matched OpenAPI operation does not declare a request body. Runtime body behavior remains UNVERIFIED.

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |


## Errors

If the filtered recipient count exceeds the configured/provider maximum, the endpoint returns the existing `operationNotAllowed` error and does not create a pre-campaign. Other controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-021](/docs/operations/external-integrations) — SMS campaign.
