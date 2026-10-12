---
title: "POST /api/consultant/candidates/bulk_archive"
sidebar_label: "POST /api/consultant/candidates/bulk_archive"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/consultant/candidates/bulk_archive"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateController@bulkArchive"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "GAP-534 — Bulk soft archive & one-time profile deletion"
contract_status: "PLANNED — NOT YET DEPLOYED"
openapi_source: "UNVERIFIED — planned contract"
openapi_path: "UNVERIFIED — planned contract"
openapi_match: "NONE — runtime route not deployed"
last_verified: "2026-10-12"
---

# `POST /api/consultant/candidates/bulk_archive`

> **GAP-534 approved planned contract — NOT YET DEPLOYED (2026-10-12).** This page documents the approved target contract. It is not evidence that the route exists in the current runtime.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectBranchForConsultant` |
| `autoLogout` |

Use a staff bearer token and one `Gap-Branch-ID` header. The request is scoped to one consultant branch; `branch_id`, `all_branches`, and target status are not accepted in the body.

## Request

### Headers

```http
Authorization: Bearer <staff-access-token>
Gap-Branch-ID: <branch_id>
Accept: application/json
Content-Type: application/json
```

### Body

```json
{
  "candidate_ids": [101, 102],
  "send_email": true
}
```

| Field | Required | Type | Notes |
|---|---|---|---|
| `candidate_ids` | Yes | integer[] | 1–100 distinct positive IDs; all candidates are validated as one batch. |
| `send_email` | Yes | boolean | `true` queues one archive email per newly archived candidate; `false` archives without issuing a deletion token or email job. |

The backend validates candidate/job ownership and eligibility. Candidates must have a qualifying `SCREENING_CALL` or `INTERVIEW` application in the selected branch. Permanent, approved, MatchMaker and cross-branch active-work states are rejected before mutation.

## Response

### Success — HTTP 200 or 202

The response contains exactly these two top-level fields:

```json
{
  "archived_candidate_ids": [101],
  "already_archived_candidate_ids": [102]
}
```

`archived_candidate_ids` are candidates newly soft-archived in this request. `already_archived_candidate_ids` are matching no-op candidates. The endpoint does not return token, email, count, batch, or queue-delivery fields.

Archive database mutations are atomic. Email dispatch occurs only after commit and is not proof that delivery completed. Retrying a no-op does not issue a new token or resend an email.

## Errors

| HTTP | Planned condition | Internal key |
|---:|---|---|
| 400 | Invalid body or validation failure | Existing validation/not-found convention |
| 401 | Staff authentication failure | Existing auth contract |
| 403 | Branch access or candidate ownership failure | Existing branch/role contract |
| 409 | Ineligible, legacy archive, or concurrent state change | `bulkArchiveStateConflict` |
| 429 | Rate limit | Existing throttle response |
| 500 | Unexpected write failure; batch is rolled back | Existing server error contract |

Numeric custom error codes remain pending backend implementation and must be added to the configured error catalog before this page is marked deployed.

## Flow

Flow baseline: [GAP-534 — bulk soft archive and one-time profile deletion](/docs/flows/candidate-lifecycle).
