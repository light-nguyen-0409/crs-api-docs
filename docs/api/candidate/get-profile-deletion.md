---
title: "GET /api/candidate/profile_deletion"
sidebar_label: "GET /api/candidate/profile_deletion"
method: "GET"
runtime_method_declaration: "GET"
path: "/api/candidate/profile_deletion"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeController@previewProfileDeletion"
middleware: "api"
flow_spec: "GAP-534 — Bulk archive & profile deletion"
contract_status: "PLANNED_NOT_DEPLOYED"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE — no matching OpenAPI operation"
last_verified: "2026-10-19"
---

# `GET /api/candidate/profile_deletion`

> **GAP-534 planned contract (2026-10-19).** This revision is approved for implementation but is not deployed. Backend implementation and verification are pending.

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

`can_delete` is `true` only when the ID/token pair is valid and the candidate has an eligible archived job. Archive does not soft-delete or hide the Candidate account. An unknown candidate, invalid hash, non-archived candidate, purged candidate, or already-deleted candidate returns the same HTTP 200 shape with `false`:

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

Flow baseline: [GAP-534 — bulk archive and profile deletion](/docs/flows/candidate-lifecycle).
