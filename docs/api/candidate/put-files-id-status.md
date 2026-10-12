---
title: "PUT /api/candidate/files/{id}/status"
sidebar_label: "PUT /api/candidate/files/{id}/status"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/candidate/files/{id}/status"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeFileController@updateStatus"
middleware: "api, auth:candidateApi, checkCandidateLockEdit, detectJobForCandidate"
flow_spec: "SPEC-009 — Files"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `PUT /api/candidate/files/{id}/status`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

**GAP-722 approved planned contract — NOT YET DEPLOYED (2026-10-12).** The backend implementation must scope the file lookup to the authenticated candidate, the resolved job context, and the requested file ID. This planned behavior is documented before backend implementation and must not be treated as deployed until the backend release is verified.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:candidateApi` |
| `checkCandidateLockEdit` |
| `detectJobForCandidate` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | Yes | `id` | File ID. The backend must find the file by this ID together with the authenticated candidate ID and the exact resolved job ID. |

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication). Send `Gap-Job-ID` when the candidate has more than one job; when the candidate has one job, the middleware resolves that job if the header is omitted. The middleware validates that the resolved job belongs to the authenticated candidate.

### Body

Send a JSON object (`Content-Type: application/json`).

| Field | Type | Required | Runtime validation |
|---|---|---|---|
| `status` | string | Yes | Required; planned candidate allowlist is `uploaded`, `released`, `read`, or `signed`. `approved`, `rejected`, `expired`, and other values are rejected before the update. |

Example:

```json
{
  "status": "read"
}
```

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | The status was updated and the File resource is returned as a top-level JSON object. | application/json |
| `400` | Invalid status, missing/invalid job context, or the file is not in the exact candidate/job scope. | application/json |
| `401` | Candidate authentication is missing or invalid. | application/json |

## Errors

| Status | Condition | Contract |
|---|---|---|
| `400` | Invalid status or the file cannot be found in the exact `file_id + authenticated candidate_id + resolved job_id` scope. | Existing candidate error envelope with `success: false`, `detail`, and `errors`; do not disclose whether an out-of-scope file exists. |
| `401` | Missing or invalid candidate authentication. | Existing authentication error envelope. |

An exact job match is required. A file stored with `job_id = 0` is not implicitly included when the resolved request job has another ID; the planned lookup does not broaden `[job_id, 0]`.

## Security scope

The route parameter alone is not sufficient for authorization. The planned backend lookup must require all three values to match:

```text
files.id = {id}
files.candidate_id = authenticated candidate ID
files.job_id = resolved job ID
```

The current global file-ID update behavior is retained only for existing staff/system callers outside this candidate endpoint.

## Flow

Flow baseline: [SPEC-009](/docs/flows/candidate-lifecycle) — Files.
