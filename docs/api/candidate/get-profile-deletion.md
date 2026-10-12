---
title: "GET /api/candidate/profile_deletion"
sidebar_label: "GET /api/candidate/profile_deletion"
method: "GET"
runtime_method_declaration: "GET"
path: "/api/candidate/profile_deletion"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeController@previewProfileDeletion"
middleware: "api"
flow_spec: "GAP-534 — Bulk soft archive & one-time profile deletion"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE — no matching OpenAPI operation"
last_verified: "2026-10-12"
---

# `GET /api/candidate/profile_deletion`

> **GAP-534 code-verified contract (2026-10-12).** This public token endpoint is implemented in the backend; production deployment remains an operational concern.

## Authentication

This endpoint does not require candidate login, JWT, password, OTP, or edit-lock middleware. It requires the one-time token from the archive email:

```http
Accept: application/json
X-Profile-Deletion-Token: <raw-token>
```

The raw token is a 43-character Base64URL value. It must be sent in the header only; do not send it in the body, query string, or path.

## Request

This endpoint has no path/query parameters and no request body.

## Response

### HTTP 200

The response contains exactly one field:

```json
{
  "can_delete": true
}
```

`can_delete` is `true` only when the token is valid, unexpired, unused, bound to the latest archive cycle, and the candidate is still soft-deleted. Unknown, expired, used, stale, restored, purged, or already-deleted tokens return the same HTTP 200 shape with `false`:

```json
{
  "can_delete": false
}
```

GET/HEAD never consumes the token, mutates state, dispatches a job, or returns candidate PII, expiry, log ID, or lifecycle status.

## Errors

| HTTP | Planned condition | Internal key |
|---:|---|---|
| 400 | Missing or malformed token header | Existing validation contract |
| 429 | Preview throttle | Existing throttle response |
| 500 | Unexpected read/system failure | Existing server error contract |

Token invalidity is represented as `can_delete=false` after format validation; it is not a successful deletion signal.

## Flow

Flow baseline: [GAP-534 — bulk soft archive and one-time profile deletion](/docs/flows/candidate-lifecycle).
