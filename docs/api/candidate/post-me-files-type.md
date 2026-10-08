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
last_verified: "2026-10-08"
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
| `type` | Yes | `type` | See [file type values](/docs/api/path-parameter-values#file-types). |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication). For file types outside the [candidate-associated file type list](/docs/api/path-parameter-values#candidate-associated-file-types), send the job ID in `Gap-Job-ID`.

### Body

| Required | Content types | Description |
|---|---|---|
| Yes (runtime) | multipart/form-data | Required `file` upload; OpenAPI omits runtime requiredness |


#### Payload schema

The file field is required by the runtime controller even though OpenAPI marks the request body optional.

#### `multipart/form-data` payload

| Field | Type | Required | Description |
|---|---|---|---|
| file | binary file | Yes (runtime) | Uploaded file part required by the backend. |

Send each field as a multipart form part. The backend requires the `file` part.

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

The maximum file size is 10 MiB (10,240 KiB). Laravel validates the detected file type and MIME; changing the filename or multipart Content-Type alone does not bypass validation. PNG/JPEG support expands the previous PDF/Word-only CV contract. Other file types retain their existing rules. The approved backend-generated Permanent form contract below supersedes client form PDF upload.

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


## Backend-generated Permanent Candidate Form

**GAP-691 approved upload compatibility amendment — NOT YET DEPLOYED (2026-10-08).** Candidate upload with `type=permanent_candidate_form` remains supported through the normal upload flow. Send Candidate authentication, `Gap-Job-ID`, and multipart `file`. Normal antivirus, supported-extension and upload-blocking checks apply. Success returns HTTP `201` with the existing File metadata response; missing `Gap-Job-ID` returns HTTP `400`/`wrongParameter` (code `1006`). There is no special backend-generated-form rejection.

Permanent intake still accepts only CV and Work Finder Agreement IDs and generates its own PDF in the background MM sync job from submitted payload and persisted click metadata. A separately uploaded form is not an intake input and does not replace that generated attachment. Existing stored files and file-read routes remain supported. See [Permanent intake](/docs/api/candidate/post-me-permanent-intake).
