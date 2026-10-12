---
title: "POST /api/candidate/profile_deletion"
sidebar_label: "POST /api/candidate/profile_deletion"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/profile_deletion"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeController@confirmProfileDeletion"
middleware: "api"
flow_spec: "GAP-534 — Bulk soft archive & one-time profile deletion"
contract_status: "PLANNED — NOT YET DEPLOYED"
openapi_source: "UNVERIFIED — planned contract"
openapi_path: "UNVERIFIED — planned contract"
openapi_match: "NONE — runtime route not deployed"
last_verified: "2026-10-12"
---

# `POST /api/candidate/profile_deletion`

> **GAP-534 approved planned contract — NOT YET DEPLOYED (2026-10-12).** This public token endpoint synchronously purges CRS candidate data after implementation; it is not currently available.

## Authentication

No candidate login, JWT, password, OTP, or edit-lock middleware is required. Send the archive-email token in this header:

```http
Accept: application/json
X-Profile-Deletion-Token: <raw-token>
```

The token is accepted only in the header. It is not accepted in the body, query string, or path.

## Request

There are no path/query parameters and no request body. The valid token itself is the confirmation; the client does not send a candidate ID or a separate `confirmed` field.

## Response

### HTTP 200

The response contains exactly one field and is returned only after synchronous CRS storage cleanup and the database transaction commit:

```json
{
  "deleted": true
}
```

The database purge is atomic within the transaction. Storage deletion is performed before the transaction and is idempotent where possible, but cannot be rolled back automatically if the database transaction later fails. MatchMaker/provider data, sent email, and backups are outside this CRS scope.

The endpoint does not dispatch a purge job and does not expose cleanup status for polling. Replaying a committed token returns HTTP 410.

## Errors

| HTTP | Planned condition | Internal key / behavior |
|---:|---|---|
| 400 | Missing/malformed token or unexpected body | Existing validation contract |
| 403 | Token owner mismatch | `profileDeletionTokenInvalid` |
| 409 | Concurrent claim or state conflict | `profileDeletionStateConflict` |
| 410 | Expired, revoked, used, or stale token | `profileDeletionTokenUnavailable` |
| 429 | Confirmation throttle | Existing throttle response |
| 500 | Storage or database purge failure | Existing server error contract; never return `deleted=true` |

Numeric custom error codes remain pending backend implementation and must be added to the configured error catalog before this page is marked deployed.

## Flow

Flow baseline: [GAP-534 — bulk soft archive and one-time profile deletion](/docs/flows/candidate-lifecycle).
