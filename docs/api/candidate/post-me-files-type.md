---
title: "POST /api/candidate/me/files/{type}"
sidebar_label: "POST /api/candidate/me/files/{type}"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/files/{type}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeFileController@upload"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-009 — Files"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/me/files/{type}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/candidate/me/files/{type}`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

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
| `type` | Yes | `type` | OpenAPI name matches. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

| Required | Content types | Description |
|---|---|---|
| No | multipart/form-data | OpenAPI requestBody |

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `201` | Created | application/json |
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `500` | Internal Server Error | application/json |


## Errors

| Status | Description | Content types |
|---|---|---|
| `400` | Bad Request | application/json |
| `401` | Unauthorized | application/json |
| `500` | Internal Server Error | application/json |

## Flow

Flow baseline: [SPEC-009](/docs/flows/candidate-lifecycle) — Files.


## GAP-691 CV image upload contract

Approved contract, pending backend verification (2026-10-08). Deployment to STG/production has not been verified. This section supersedes the generic request placeholders above only for `type=cv`.

Send a required multipart field `file` with a Candidate Bearer token. CV files are candidate-scoped and do not require `Gap-Job-ID`. Candidate edit locks and upload blocking still apply, and every upload must pass ClamAV scanning.

| Accepted extensions | Accepted MIME types |
|---|---|
| pdf | application/pdf |
| doc | application/msword |
| docx | application/vnd.openxmlformats-officedocument.wordprocessingml.document |
| png | image/png |
| jpg, jpeg | image/jpeg |

The maximum file size is 10 MiB (10,240 KiB). Laravel validates the detected file type and MIME; changing the filename or multipart Content-Type alone does not bypass validation. PNG/JPEG support expands the previous PDF/Word-only CV contract. Other file types retain their existing rules; the Permanent Candidate Form still requires PDF.

```bash
curl --location 'http://localhost:8081/api/candidate/me/files/cv' \
  --header 'Authorization: Bearer <candidate-token>' \
  --form 'file=@"/path/to/cv.png"'
```

Success returns HTTP `201` with a top-level File object (no `data` wrapper):

```json
{
  "id": 123,
  "type": "cv",
  "url": "https://files.example.test/cv.png?signature=example",
  "converted_file_url": "",
  "status": "uploaded",
  "original_file_name": "cv.png",
  "uploaded_at": 1791417600,
  "toe_signed_ip": ""
}
```

URLs are temporary. The converted-file value follows existing storage configuration; clients should use the returned value rather than assume conversion of image CVs. Use the returned `id` and `type` when referencing this CV in Permanent intake.

Invalid MIME/extension or a file exceeding the size limit returns HTTP `400`, `wrongParameter` (code `1006`), before file storage or metadata creation. For example, an oversized file returns:

```json
{
  "success": false,
  "message": "",
  "detail": "Wrong Parameters",
  "errors": [
    {
      "code": 1006,
      "message": ["The file must not be greater than 10240 kilobytes."]
    }
  ]
}
```

An unsupported MIME returns the same envelope with a file-type validation message instead. Missing/invalid Candidate authentication remains HTTP `401`. ClamAV rejection and upload blocking retain the existing error handling and candidate-blocking behavior.


## Permanent form PDF metadata

Planned GAP-691 integration, not yet deployed: FE embeds the [persisted Agreement first-click metadata](/docs/api/candidate/post-me-jobs-jobid-work-finder-agreement-click#gap-691-first-click-metadata-contract) in the PDF before uploading type `permanent_candidate_form` with `Gap-Job-ID`. Upload still accepts PDF for this type and returns the existing File resource. Backend does not edit or attest to the rendered IP/time in the uploaded PDF; consult stored Candidate/job timing for the source values.
