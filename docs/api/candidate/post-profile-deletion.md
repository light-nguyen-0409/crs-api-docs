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
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE — no matching OpenAPI operation"
last_verified: "2026-10-19"
---

# `POST /api/candidate/profile_deletion`

> **GAP-534 code-verified contract (2026-10-19).** This public ID/hash endpoint synchronously purges CRS candidate data; production deployment remains an operational concern.

## Authentication

No candidate login, JWT, password, OTP, or edit-lock middleware is required. Send the candidate ID and deterministic archive-email token in the request body:

```http
Accept: application/json
Content-Type: application/json
```

The token is `StringUtility::uniqueHash(id)`. It is not a random token, is not stored in a database, and has no expiry or one-time consumption state.

## Request

```json
{
  "id": 101,
  "token": "<sha256-app-key-plus-id>"
}
```

`id` is the candidate ID from the archive email. `token` must equal `StringUtility::uniqueHash(id)`. The client does not send a separate `confirmed` field.

## Response

### HTTP 200

The response contains exactly one field and is returned only after synchronous CRS storage cleanup and the database transaction commit:

```json
{
  "deleted": true
}
```

The database purge is atomic within the transaction. Storage deletion runs after a successful database commit; an orphaned storage file is the recoverable failure mode if storage cleanup fails. MatchMaker/provider data, sent email, and backups are outside this CRS scope.

The endpoint does not dispatch a purge job and does not expose cleanup status for polling. Replaying the link after the candidate is force-deleted fails because the candidate no longer exists.

## Errors

| HTTP | Planned condition | Internal key / behavior |
|---:|---|---|
| 400 | Missing/malformed `id` or `token`, or unexpected body | Existing validation contract |
| 403 | `token` does not equal `StringUtility::uniqueHash(id)` | `profileDeletionTokenInvalid` |
| 409 | Candidate state conflict during deletion | `profileDeletionStateConflict` |
| 404 | Candidate does not exist or is not eligible for this flow | Existing candidate-not-found/eligibility contract |
| 429 | Confirmation throttle | Existing throttle response |
| 500 | Storage or database purge failure | Existing server error contract; never return `deleted=true` |

Numeric custom error codes: `profileDeletionTokenInvalid` is 1021/403, `profileDeletionTokenUnavailable` is 1022/410, and `profileDeletionStateConflict` is 1023/409 in `config/api.php`.

## Flow

Flow baseline: [GAP-534 — bulk soft archive and one-time profile deletion](/docs/flows/candidate-lifecycle).
