---
title: "POST /api/consultant/sms/candidate_campaign"
sidebar_label: "POST /api/consultant/sms/candidate_campaign"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/consultant/sms/candidate_campaign"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\SmsController@createCandidateCampaign"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-021 — SMS campaign"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
gap_745_status: "LOCAL_IMPLEMENTATION_NOT_DEPLOYED"
---

# `POST /api/consultant/sms/candidate_campaign`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## GAP-745 — Local implementation contract (not deployed)

The behavior below is the approved GAP-745 change to support email communication alongside Bulk SMS. It is not deployed until the backend change and verification are complete.

When creating a campaign, consultants can optionally choose to send an email alongside the SMS:
- `send_email`: Boolean flag (default `false`). If `true`, the campaign will deliver both SMS and email to all targeted candidates once the 5-minute review delay expires.
- `email_subject`: String (max 255 chars). Required when `send_email` is `true`.
- `email_content`: String (HTML / Rich Text, min 10 chars). Required when `send_email` is `true`. Supports `{candidate_first_name}` merge field. The email is automatically wrapped in the Legal Entity header and Branch footer layout, and appends the standard group GDPR disclaimer.

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
| `pre_campaign_id` | string | Yes | `required` |
| `subject` | string | Yes | `required` |
| `content` | string | Yes | `required\|string\|min:10\|max:612` |
| `send_email` | boolean | No | `sometimes\|boolean` (Added in GAP-745) |
| `email_subject` | string | Conditional | `required_if:send_email,true\|nullable\|string\|max:255` (Added in GAP-745) |
| `email_content` | string | Conditional | `required_if:send_email,true\|nullable\|string\|min:10` (Added in GAP-745) |

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK — Returns the created `SmsCampaign` resource in `PENDING` status. | application/json |

Example:

```json
{
  "id": 105,
  "user_id": 5,
  "user_name": "Consultant Name",
  "receivers_count": 45,
  "branch_id": 3,
  "subject": "SMS Urgent Shifts Available",
  "content": "Hi there, we have urgent shifts available this week.",
  "send_email": true,
  "email_subject": "Exciting Job Opportunities at GAP Personnel",
  "email_content": "<p>Hello {candidate_first_name},</p><p>We have exciting shifts available for you!</p>",
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
