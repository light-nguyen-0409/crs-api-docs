---
title: "POST /api/consultant/tags/candidate"
sidebar_label: "POST /api/consultant/tags/candidate"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/consultant/tags/candidate"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\TagController@tagCandidate"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-036 — Tags/skills/support operations"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `POST /api/consultant/tags/candidate`

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

No path parameters are identified in the runtime route template.

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

Send a JSON object (`Content-Type: application/json`). The fields below come from the backend request class; validation rules are listed where defined.

| Field | Type | Required | Runtime validation |
|---|---|---|---|
| `tag_ids` | array of integer IDs | Yes | `required\|array`; backend attaches each supplied ID as a tag |
| `candidate_id` | integer | Yes | `required`; candidate ID |

```json
{
  "tag_ids": [1, 2],
  "candidate_id": 42
}
```

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-036](/docs/flows/staff-review-and-support) — Tags/skills/support operations.
