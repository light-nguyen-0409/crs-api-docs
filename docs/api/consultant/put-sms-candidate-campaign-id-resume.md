---
title: "PUT /api/consultant/sms/candidate_campaign/{id}/resume"
sidebar_label: "PUT /api/consultant/sms/candidate_campaign/{id}/resume"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/consultant/sms/candidate_campaign/{id}/resume"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\SmsController@resumeCandidateCampaign"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-021 — SMS campaign"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `PUT /api/consultant/sms/candidate_campaign/{id}/resume`

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
| `id` | UNVERIFIED | UNVERIFIED | UNVERIFIED |

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

Send a JSON object (`Content-Type: application/json`). The fields below come from the backend request class; validation rules are listed where defined.

| Field | Type | Required | Runtime validation |
|---|---|---|---|
| `subject` | string | Yes | `required` |
| `content` | string | Yes | `required\|string\|min:10\|max:612` |

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-021](/docs/operations/external-integrations) — SMS campaign.
