---
title: "POST /api/consultant/candidates/invite"
sidebar_label: "POST /api/consultant/candidates/invite"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/consultant/candidates/invite"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateController@sendRegistrationInvitationLink"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-032 — Invitation"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `POST /api/consultant/candidates/invite`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

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

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

Send a JSON object (`Content-Type: application/json`). The request fields, required values, optional GAP-734 `job_id`, and examples are documented in [the GAP-734 request schema below](#request-schema). The `job_id` extension is present in the local backend implementation; deployment is unverified.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-032](/docs/flows/staff-review-and-support) — Invitation.

## GAP-734 — Local implementation (deployment unverified)

GAP-734 Phase 2 implements optional job selection in the backend workspace. Deployment to STG/production has not been verified. Existing contract-status metadata above describes the historical inventory. The contract below supersedes the earlier unverified request/response placeholders for GAP-734.

### Request schema

| Header | Required | Meaning |
|---|---|---|
| `Authorization` | Yes | `Bearer <token>` for a consultant user. |
| `Gap-Branch-ID` | Yes | Internal branch ID; middleware checks consultant access. |
| `Content-Type` | Yes | `application/json`. |

| Body field | Required | Validation/meaning |
|---|---|---|
| `name` | Yes | Existing `required` validation. |
| `email` | Yes | Existing `required` and `email` validation. |
| `job_id` | No | New nullable integer, minimum 1; internal `jobs.id`, not the external ID. |
| `phone` | No | Existing phone value. |
| `tag_ids` | No | Existing array of tag IDs. |
| `skill_ids` | No | Existing array of skill IDs. |
| `screening_call_note` | No | Existing invitation note. |
| `postcode`, `building`, `street`, `town_city`, `county` | No | Existing address fields; processed when postcode is supplied. |

Only `name` and `email` have required rules in the current request. GAP-734 adds `nullable|integer|min:1` for `job_id`; it does not add validation changes for legacy optional fields.

Default selection (omitting `job_id` is equivalent):

```json
{
  "name": "Example Candidate",
  "email": "candidate@example.com",
  "job_id": null
}
```

Specific job selection:

```json
{
  "name": "Example Candidate",
  "email": "candidate@example.com",
  "job_id": 42
}
```

Zero, negative IDs, arrays, and noninteger values are rejected. A positive ID must also resolve to a job belonging to the header branch. Client-supplied URLs, external IDs, titles, or references are not sources for resolving the invitation link.

### Link resolution and side effects

The GAP-734 external-ID validation amendment is documented before backend implementation; deployment remains unverified.

1. Authenticate the consultant and authorize the header branch.
2. Validate the request and read the branch registration link. A link is required for both default and specific-job selection.
3. Omitted/null `job_id`: use the original registration link unchanged.
4. Specific `job_id`: look up the job by internal ID and branch ID; require a nonblank external ID, a title, and a nonblank job reference before any invitation write or email. External IDs may contain digits, letters, or both; the internal request `job_id` remains a positive integer.
5. Replace only the values of the existing job parameters using this mapping:

| Registration-link key (unchanged) | Selected job source |
|---|---|
| `job_id` | `jobs.external_id` |
| `job_title` | `jobs.title` |
| `job_ref` | `jobs.job_reference` |

Keep the URL scheme, host, path, fragment route, branch parameters, tracking parameters, and UTM values. Support both ordinary-query and hash-route links. Encode replacement values correctly; do not rename URL keys to response field names. Malformed or conflicting query/fragment job contexts fail before writes/email.

6. Preserve the existing candidate/legal-entity check and invitation upsert with optional tags, address, and skills.
7. Send the resolved link in the invitation email and return the existing response. The stored branch registration link is not modified.

Inviting does not create a job or candidate application. After the candidate opens the email link, the later application API creates/resolves the job and saves the application reference. Tracking/UTM remains derived from the branch base link; this feature does not reconstruct an advert-specific original URL.

### Success response

HTTP `200`; the existing schema is unchanged:

| Field | Meaning |
|---|---|
| `name` | Invited candidate name. |
| `email` | Invited email address. |
| `sent_date` | Invitation send timestamp serialized by the existing resource. |

```json
{
  "name": "Example Candidate",
  "email": "candidate@example.com",
  "sent_date": "2026-10-08T10:00:00.000000Z"
}
```

The timestamp above is illustrative; GAP-734 does not change serialization or return the resolved URL/job selection.

### Error contract

| HTTP | Error | Condition |
|---|---|---|
| `400` | Existing JsonRequest validation response | Invalid name/email or `job_id` shape/value. |
| `400` | `wrongParameter`, code `1006` | Unknown/stale job or job outside the header branch. |
| `400` | `wrongParameter`, code `1006` | Selected job missing required external ID, title, or reference. |
| `401` | Authentication middleware | Missing/invalid token. |
| `400` | `wrongParameter`, code `1006` | Missing/zero branch header. |
| `403` | `branchAccessNotAllowed`, code `1007` | Branch access denied. |
| `500` | `serverSideError`, code `1010` | Branch/link configuration error, existing candidate gate failure, or email failure. |

Selected-job failures use the custom `InvalidInvitationJobException`, caught before the controller's existing generic exception handler. They occur before invitation writes and mail. Legacy error behavior remains unchanged. Mail failure can still occur after an invitation has been saved.

Selection error example (detail text is illustrative):

```json
{
  "success": false,
  "errorCode": 1006,
  "detail": "Selected job is not available for this branch"
}
```

Use [GET jobs](/docs/api/consultant/get-jobs) for branch jobs and `invitation_default_job`. The default option's `external_id` is informational; do not submit it as the request's internal `job_id`.
