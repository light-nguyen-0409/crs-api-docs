---
title: "PUT /api/consultant/candidates/{id}/appointments/{appointmentId}"
sidebar_label: "PUT /api/consultant/candidates/{id}/appointments/{appointmentId}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/consultant/candidates/{id}/appointments/{appointmentId}"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\AppointmentController@change"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-014 — Appointment"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `PUT /api/consultant/candidates/{id}/appointments/{appointmentId}`

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
| `appointmentId` | UNVERIFIED | UNVERIFIED | UNVERIFIED |

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

Send a JSON object (`Content-Type: application/json`). The fields below come from the backend request class; validation rules are listed where defined.

| Field | Type | Required | Runtime validation |
|---|---|---|---|
| `type` | string | Yes | Must be `interview` |
| `candidate_id` | integer | No | Legacy body field; route `candidateId` identifies the candidate |
| `job_id` | integer | No | Accepted by the request class but not used by this update handler |
| `branch_id` | integer | Conditional | Required when `method` is `in_branch` |
| `method` | string | Yes | `remote`, `in_branch`, or `client_location` |
| `meeting_url` | string | Conditional | Required when `method` is `remote` |
| `documents` | array of strings | Conditional | Required for `in_branch`; values: `national_insurance`, `birth_certificates` |
| `location_detail` | string | Conditional | Required when `method` is `client_location` |
| `date` | string | Yes | Date in `d/m/Y` format, for example `08/10/2026` |
| `time` | string | Yes | Time in `H:i` 24-hour format, for example `09:30` |
| `note` | string | No | Optional appointment note |
| `status` | string | No | Current handler sets status to `booked`; supplied value does not override it |
| `reason_for_change` | string | Yes | Required by this update handler |
| `user_id` | integer | No | Optional user ID; defaults to the authenticated user when omitted |

```json
{
  "type": "interview",
  "method": "remote",
  "meeting_url": "https://example.com/meeting",
  "date": "08/10/2026",
  "time": "09:30",
  "note": "Reschedule interview",
  "reason_for_change": "Candidate requested a new time"
}
```

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-014](/docs/flows/staff-review-and-support) — Appointment.
