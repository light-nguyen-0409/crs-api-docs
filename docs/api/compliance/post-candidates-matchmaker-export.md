---
title: "POST /api/compliance/candidates/matchmaker/export"
sidebar_label: "POST /api/compliance/candidates/matchmaker/export"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/compliance/candidates/matchmaker/export"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\CandidateController@exportMatchmakerCandidates"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-017 — Compliance approval"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `POST /api/compliance/candidates/matchmaker/export`

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
| `start_date_time` | string (date) | Yes | `required\|date` |
| `end_date_time` | string (date) | Yes | `required\|date\|after_or_equal:start_date_time` |
| `legal_entity_id` | integer | Yes | `required\|integer` |
| `branch_ids` | array | Yes | `required\|array` |
| `branch_ids.*` | integer | No | `integer` |

Send `start_date_time` and `end_date_time` as date/date-time strings accepted by Laravel's date validator. Example:

```json
{
  "start_date_time": "2026-10-01T00:00:00Z",
  "end_date_time": "2026-10-08T23:59:59Z",
  "legal_entity_id": 12,
  "branch_ids": [34, 35]
}
```

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-017](/docs/flows/staff-review-and-support) — Compliance approval.
