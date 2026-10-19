---
title: "GET /api/candidate/profile_deletion"
sidebar_label: "GET /api/candidate/profile_deletion"
method: "GET"
runtime_method_declaration: "PLANNED"
path: "/api/candidate/profile_deletion"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeController@previewProfileDeletion"
middleware: "api"
flow_spec: "GAP-534 — Bulk soft archive & one-time profile deletion"
contract_status: "PLANNED_NOT_DEPLOYED"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE — no matching OpenAPI operation"
last_verified: "2026-10-19"
---

# `GET /api/candidate/profile_deletion`

> **GAP-534 approved contract — NOT YET DEPLOYED (2026-10-19).** This revision supersedes the previous header-based random-token contract. Do not treat the revised request shape as available until backend implementation and deployment are verified.

## Authentication

This endpoint does not require candidate login, JWT, password, OTP, or edit-lock middleware. It uses the candidate ID and deterministic token from the archive email:

```http
Accept: application/json
```

The token is `StringUtility::uniqueHash(id)`. It is not a random token, is not stored in a database, and has no expiry or one-time consumption state.

## Request

### Query parameters

| Field | Required | Type | Notes |
|---|---|---|---|
| `id` | Yes | integer | Candidate ID from the archive email. |
| `token` | Yes | string | Must equal `StringUtility::uniqueHash(id)`. |

## Response

### HTTP 200

The response contains exactly one field:

```json
{
  "can_delete": true
}
```

`can_delete` is `true` only when the ID/token pair is valid and the candidate is still soft-deleted and eligible for deletion. An unknown candidate, invalid hash, restored candidate, purged candidate, or already-deleted candidate returns the same HTTP 200 shape with `false`:

```json
{
  "can_delete": false
}
```

GET/HEAD never consumes the token, mutates state, dispatches a job, or returns candidate PII, expiry, log ID, or lifecycle status.

## Errors

| HTTP | Planned condition | Internal key |
|---:|---|---|
| 400 | Missing or malformed `id`/`token` query parameters | Existing validation contract |
| 429 | Preview throttle | Existing throttle response |
| 500 | Unexpected read/system failure | Existing server error contract |

Token invalidity is represented as `can_delete=false` after format validation; it is not a successful deletion signal.

## Flow

Flow baseline: [GAP-534 — bulk soft archive and one-time profile deletion](/docs/flows/candidate-lifecycle).
