---
title: "POST /api/candidate/me/jobs/{jobId}/work_finder_agreement/click"
sidebar_label: "POST /api/candidate/me/jobs/{jobId}/work_finder_agreement/click"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/jobs/{jobId}/work_finder_agreement/click"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\PermanentCandidateIntakeController@agreementClick"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-039 — Permanent candidate intake"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/jobs/{jobId}/work_finder_agreement/click"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/candidate/me/jobs/{jobId}/work_finder_agreement/click`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

### OpenAPI summary

Record the first Work Finder agreement click

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:candidateApi` |
| `checkCandidateLockEdit` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `jobId` | Yes | `jobId` | OpenAPI name matches. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

The matched OpenAPI operation does not declare a request body. Runtime body behavior remains UNVERIFIED.

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | Agreement click recorded | application/json |
| `401` | Unauthorized | application/json |
| `404` | Candidate job not found | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `401` | Unauthorized | application/json |
| `404` | Candidate job not found | application/json |

## Flow

Flow baseline: [SPEC-039](/docs/flows/permanent-intake) — Permanent candidate intake.


## GAP-691 first-click metadata contract

Raw-timestamp amendment implemented and verified in the backend workspace (2026-10-08); STG/production deployment remains unverified. This section supersedes the previous ISO/UTC contract and the generic response placeholders above. Raw-contract verification passed: focused 13 tests / 67 assertions, affected 142 / 7,100 and full default PHPUnit 612 / 9,114. Frontend PDF implementation/QA remains a separate handoff.

Use a Candidate Bearer token and the owned job ID in the path. No request body or `Gap-Job-ID` header is required. Candidate/job ownership and edit-lock middleware still apply. Body fields such as `ip`, `clicked_at`, `candidate_id` or `job_id` do not supply the metadata.

```bash
curl --request POST 'http://localhost:8081/api/candidate/me/jobs/123/work_finder_agreement/click' \
  --header 'Authorization: Bearer <candidate-token>'
```

HTTP `200` returns exactly five top-level fields, without a `data` wrapper or success `errors` array:

```json
{
  "success": true,
  "message": "Agreement click recorded",
  "detail": "",
  "clicked_at": "2026-10-08 09:15:30",
  "ip": "192.0.2.10"
}
```

| Field | Contract |
|---|---|
| success | boolean, true |
| message | string, Agreement click recorded |
| detail | string, empty |
| clicked_at | required string; raw persisted first-click timestamp, returned unchanged without formatting, timezone conversion or precision truncation |
| ip | required property, string or null; persisted first-click IPv4/IPv6; null for legacy missing IP |

If another request arrives later from `192.0.2.11`, it returns the same timestamp and `192.0.2.10`. Both values come from the stored timing row after persistence, rather than the latest request context. A pre-existing timing is preserved. A legacy row with a timestamp and no IP returns the stored timestamp and `ip: null`; it is not backfilled with the current IP.

These values describe the **first opening/click of the Agreement**, not acceptance, signing or intake submission. The IP is resolved server-side using existing trusted-proxy middleware; deployment proxy correctness remains unverified.

### Errors

| HTTP | Existing Candidate Status error contract |
|---|---|
| 400 | Candidate profile or job state locked; existing middleware envelope |
| 401 | Missing/invalid Candidate authentication |
| 404 | candidateJobNotFound, code 1015; job missing or not owned |
| 500 | severError, code 1005; persisted click timestamp unavailable |

Errors contain `success`, `message`, `detail`, `errors` and do not expose `clicked_at` or `ip`. The 500 missing-metadata example is:

```json
{
  "success": false,
  "message": "",
  "detail": "Server error",
  "errors": [{"code": 1005, "message": "Agreement click metadata is unavailable."}]
}
```

### Backend PDF handoff — approved, not yet deployed

GAP-691 now plans backend-generated Permanent form PDFs in a background MM job. This supersedes the earlier FE export/upload instructions. BE reads persisted Candidate/job first-click metadata into the queued snapshot and renders the raw timestamp unchanged, without inferring a timezone. Missing legacy metadata displays `Not recorded`. FE submits CV + Agreement only and does not send IP/time back to populate the PDF. The click endpoint itself is outside this task's API-response changes. See [Permanent intake](/docs/flows/permanent-intake).
