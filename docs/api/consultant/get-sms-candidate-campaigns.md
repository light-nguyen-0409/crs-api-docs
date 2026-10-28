---
title: "GET /api/consultant/sms/candidate_campaigns"
sidebar_label: "GET /api/consultant/sms/candidate_campaigns"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/consultant/sms/candidate_campaigns"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\SmsController@getCandidateCampaigns"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-021 — SMS campaign"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/sms/candidate_campaigns"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/consultant/sms/candidate_campaigns`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

### OpenAPI summary

get sms campaigns

## Email campaign details

The returned campaign items include email campaign details:
- `send_email`: Boolean flag indicating if email was configured for this campaign.
- `email_subject`: Subject of the email (nullable string).
- `email_content`: Content of the email (nullable string).
- `email_sent_at`: Timestamp string when the email batch was sent (`d/m/Y H:i` format, or null).

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

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

The matched OpenAPI operation does not declare a request body. Runtime body behavior remains UNVERIFIED.

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |

### Response body (200 OK)

Returns a paginated list of SMS campaigns with candidate counts.

Example:

```json
{
  "campaigns": [
    {
      "id": 105,
      "user_id": 5,
      "user_name": "Consultant Name",
      "receivers_count": 45,
      "branch_id": 3,
      "subject": "SMS Urgent Shifts Available",
      "content": "Hi there...",
      "send_email": true,
      "email_subject": "Exciting Job Opportunities at GAP Personnel",
      "email_content": "<p>Hello {candidate_first_name}...</p>",
      "email_sent_at": "28/10/2026 10:15",
      "status": "SENT",
      "failure_message": "",
      "estimated_cost": 2.25,
      "credits": 1,
      "sent_at": "28/10/2026 10:15",
      "first_received_at": "28/10/2026 10:16"
    }
  ],
  "count": 1
}
```


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-021](/docs/operations/external-integrations) — SMS campaign.
