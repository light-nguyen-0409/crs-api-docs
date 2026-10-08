---
title: "POST /api/candidate/tracking_records/welcome"
sidebar_label: "POST /api/candidate/tracking_records/welcome"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/tracking_records/welcome"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\General\\TrackingRecordController@registerAdvertReaction"
middleware: "api"
flow_spec: "SPEC-029 — Tracking/address"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `POST /api/candidate/tracking_records/welcome`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## Authentication and middleware

| Middleware |
|---|
| `api` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

Send a JSON object (`Content-Type: application/json`). The fields below come from the backend request class; validation rules are listed where defined.

| Field | Type | Required | Runtime validation |
|---|---|---|---|
| `branch_id` | branch identifier | Yes | Required; backend checks presence and forwards the value without an integer rule |
| `external_job_id` | external job identifier | Yes | Required; backend checks presence and forwards the value without a type rule |
| `job_ref` | string | Yes | Required; backend checks presence |
| `referrer` | string (URL expected) | Yes | Required; backend checks presence |
| `utm_source` | string | No | Optional tracking value read by the backend |
| `utm_medium` | string | No | Optional tracking value read by the backend |
| `utm_campaign` | string | No | Optional tracking value read by the backend |

```json
{
  "branch_id": 1,
  "external_job_id": 12345,
  "job_ref": "job_ref",
  "referrer": "https://example.com/jobs/12345",
  "utm_source": "newsletter",
  "utm_medium": "email",
  "utm_campaign": "autumn-hiring"
}
```

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-029](/docs/operations/external-integrations) — Tracking/address.
