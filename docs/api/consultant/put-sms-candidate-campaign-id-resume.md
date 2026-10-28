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

## Campaign edit & review

During the 5-minute review delay, consultants can resume/edit the campaign to modify both SMS and Email details:
- `send_email`: Boolean flag.
- `email_subject`: String (max 255 chars). Required when `send_email` is `true`.
- `email_content`: String (HTML / Rich Text, min 10 chars). Required when `send_email` is `true`. Supports `{candidate_first_name}` placeholder.
- Resuming resets the 5-minute review countdown timer (`updated_at = NOW()`).

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
| `send_email` | boolean | No | `sometimes\|boolean` |
| `email_subject` | string | Conditional | `required_if:send_email,true\|nullable\|string\|max:255` |
| `email_content` | string | Conditional | `required_if:send_email,true\|nullable\|string\|min:10` |

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK — Returns the updated `SmsCampaign` resource in `PENDING` status. | application/json |

Example:

```json
{
  "id": 105,
  "user_id": 5,
  "user_name": "Consultant Name",
  "receivers_count": 45,
  "branch_id": 3,
  "subject": "Updated SMS Subject",
  "content": "Updated SMS Content...",
  "send_email": true,
  "email_subject": "Updated Email Subject",
  "email_content": "<p>Hello {candidate_first_name}, updated email content...</p>",
  "email_sent_at": null,
  "status": "PENDING",
  "failure_message": "",
  "estimated_cost": 2.25,
  "credits": 1,
  "sent_at": "",
  "first_received_at": ""
}
```

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-021](/docs/operations/external-integrations) — SMS campaign.
