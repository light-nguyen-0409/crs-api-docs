---
title: "POST /api/consultant/candidates/bulk_archive"
sidebar_label: "POST /api/consultant/candidates/bulk_archive"
method: "POST"
runtime_method_declaration: "PLANNED"
path: "/api/consultant/candidates/bulk_archive"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateController@bulkArchive"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "GAP-534 — Bulk soft archive & one-time profile deletion"
contract_status: "PLANNED_NOT_DEPLOYED"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE — no matching OpenAPI operation"
last_verified: "2026-10-19"
---

# `POST /api/consultant/candidates/bulk_archive`

> **GAP-534 approved contract — NOT YET DEPLOYED (2026-10-19).** The revised archive/delete integration is not available until backend implementation and deployment are verified.

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

The backend validates candidate/job ownership and eligibility. Candidates must have a qualifying `SCREENING_CALL` or `INTERVIEW` application in the selected branch. The bulk job update reuses `CandidateRepositoryInterface::archiveCandidateJobsByBranch()` and only updates matching `candidate_jobs.status` and `candidate_jobs.updated_at` rows in that branch. It does not update MatchMaker/approved jobs or jobs in another branch. Permanent, approved, MatchMaker and cross-branch active-work states are rejected before mutation.

## Response

### Success — HTTP 200 or 202

The response contains exactly these two top-level fields:

```json
{
  "archived_candidate_ids": [101],
  "already_archived_candidate_ids": [102]
}
```

`archived_candidate_ids` are candidates newly soft-archived in this request. `already_archived_candidate_ids` are matching no-op candidates determined from candidate/job state; no archive-log table is written. The endpoint does not return token, email, count, batch, or queue-delivery fields.

Archive database mutations are atomic. Email dispatch occurs only after commit and is not proof that delivery completed. For `send_email=true`, the archive email link contains the candidate `id` and `StringUtility::uniqueHash(id)`. Retrying a no-op does not create an archive-log record or issue a new token.

## Errors

| HTTP | Planned condition | Internal key |
|---:|---|---|
| 400 | Invalid body or validation failure | Existing validation/not-found convention |
| 401 | Staff authentication failure | Existing auth contract |
| 403 | Branch access or candidate ownership failure | Existing branch/role contract |
| 409 | Ineligible, legacy archive, or concurrent state change | `bulkArchiveStateConflict` |
| 429 | Rate limit | Existing throttle response |
| 500 | Unexpected write failure; batch is rolled back | Existing server error contract |

Numeric custom error code: `bulkArchiveStateConflict` is 1020/409 in `config/api.php`.

For a pre-mutation eligibility failure, `invalidParams` identifies every
rejected candidate. A candidate may contain more than one reason; valid
candidates in the same request are not partially archived.

```json
{
  "success": false,
  "errorCode": 1020,
  "detail": "One or more candidates cannot be archived.",
  "invalidParams": [
    {
      "candidate_id": 123,
      "reasons": ["not_available_in_selected_branch"]
    },
    {
      "candidate_id": 456,
      "reasons": ["candidate_is_permanent"]
    },
    {
      "candidate_id": 789,
      "reasons": ["candidate_has_blocked_job"],
      "blocked_statuses": ["approved"]
    }
  ]
}
```

Supported eligibility reasons are `not_available_in_selected_branch`,
`candidate_is_permanent`, `matchmaker_status_not_archivable`,
`no_archivable_candidate_job`, `candidate_has_blocked_job`, and
`archived_state_conflict`. A matching already-archived cycle is idempotently
valid and is returned in `already_archived_candidate_ids` instead.

## Flow

Flow baseline: [GAP-534 — bulk soft archive and one-time profile deletion](/docs/flows/candidate-lifecycle).
