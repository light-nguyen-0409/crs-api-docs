---
title: "POST /api/compliance/candidates/expiry_date"
sidebar_label: "POST /api/compliance/candidates/expiry_date"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/compliance/candidates/expiry_date"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\CandidateController@setExpiryDate"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-017 — Compliance approval"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `POST /api/compliance/candidates/expiry_date`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectBranchForCompliance` |

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
| `candidate_id` | integer | Yes | `required\|integer` |
| `expiry_date` | date string | No validator rule | The controller parses the supplied value as a date; send a valid date such as `2026-12-31` |

Example:

```json
{
  "candidate_id": 42,
  "expiry_date": "2026-12-31"
}
```

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-017](/docs/flows/staff-review-and-support) — Compliance approval.
