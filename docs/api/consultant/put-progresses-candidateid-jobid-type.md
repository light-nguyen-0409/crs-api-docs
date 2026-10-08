---
title: "PUT /api/consultant/progresses/{candidateId}/{jobId}/{type}"
sidebar_label: "PUT /api/consultant/progresses/{candidateId}/{jobId}/{type}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/consultant/progresses/{candidateId}/{jobId}/{type}"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\ProgressController@update"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-013 — Registration progress"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `PUT /api/consultant/progresses/{candidateId}/{jobId}/{type}`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectBranchForConsultant` |
| `autoLogout` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `candidateId` | Yes | — | Integer candidate ID. |
| `jobId` | Yes | — | Integer job ID associated with the candidate. |
| `type` | Yes | — | See [Registration progress values](/docs/api/path-parameter-values#registration-progress). |

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

Send a JSON object with the required `progress` field. The controller requires this field but does not enforce a fixed status enum; these values are used by the registration flow:

| Field | Type | Required | Values / behavior |
|---|---|---|---|
| `progress` | string | Yes | `locked`, `no_info`, `in_progress`, or `completed`. |

`escalated` is calculated by the backend from unresolved issues; it is not a client update value.

```json
{
  "progress": "completed"
}
```

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-013](/docs/flows/candidate-lifecycle) — Registration progress.
