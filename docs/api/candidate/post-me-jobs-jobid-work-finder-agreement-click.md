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

Implemented and verified in the backend workspace (2026-10-08); STG/production deployment has not been verified. This section supersedes the generic response placeholders above. Affected tests passed (142 tests, 7,100 assertions); full default PHPUnit passed (612 tests, 9,114 assertions). Frontend PDF implementation/QA remains a separate handoff.

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
  "clicked_at": "2026-10-08T09:15:30+00:00",
  "ip": "192.0.2.10"
}
```

| Field | Contract |
|---|---|
| success | boolean, true |
| message | string, Agreement click recorded |
| detail | string, empty |
| clicked_at | required string/date-time; persisted first click, ISO 8601 UTC (+00:00), second precision |
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

### FE PDF export handoff

Wait for successful metadata before exporting `permanent_candidate_form`. Render **Agreement first clicked at** with UTC/offset and **Agreement first click IP**; render `Not recorded` for a null IP. Use these server-returned values, not the browser clock or a separate client-IP lookup. On request failure/timeout, preserve the form and stop export/upload until retry succeeds. Store metadata per signed-in Candidate/job and refresh it when that context changes.

After embedding the metadata, upload the PDF through the [existing file upload endpoint](/docs/api/candidate/post-me-files-type) with type `permanent_candidate_form` and `Gap-Job-ID`, then submit its returned file ID. The backend does not alter the PDF or verify its displayed metadata. Database timing is the audit reference. Frontend implementation/QA is a separate handoff; it has not been verified here.
