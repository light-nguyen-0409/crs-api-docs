---
title: "PUT /api/compliance/escalated_issues/{id}"
sidebar_label: "PUT /api/compliance/escalated_issues/{id}"
method: "PUT"
runtime_method_declaration: "PUT"
path: "/api/compliance/escalated_issues/{id}"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\EscalatedIssueController@update"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-016 — Escalated issue"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Compliance.yaml"
openapi_path: "/api/compliance/escalated_issues/{id}"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `PUT /api/compliance/escalated_issues/{id}`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## GAP-753 planned behavior

**GAP-753 planned contract — NOT YET DEPLOYED (2026-11-13).**

- When Compliance updates the system-generated "face match greater than 95%" right-to-work issue (category `right_to_work_proofs`, type `right_to_work`, original content containing `is greater than 95%`) to `status = solved`, the backend also confirms the candidate identity: all face images (`profile_image`, `profile_image_of_right_to_work`, `profile_image_of_passport`, `capturerd_candidate_face_image`) are set to `approved`, `right_to_work_face_matching_approval_status` is set to `approved`, and a `sys_log` activity log `Identity images approved by resolving escalated issue` is created. Calling `POST /api/compliance/candidates/{id}/approve_identities` is no longer required in this case.
- The response body is unchanged.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectBranchForCompliance` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | Yes | `id` | OpenAPI name matches. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

| Required | Content types | Description |
|---|---|---|
| No | application/json | OpenAPI requestBody |


#### Payload schema

Field types and descriptions below come from the matched OpenAPI schema. A `Not specified` required value means OpenAPI omits that requiredness; backend validation can add constraints.

#### `application/json` payload (`EscalatedIssueUpdate`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| candidate_id | integer | Yes |  |
| type | string | Yes |  |
| content | string | Yes |  |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "candidate_id": 1,
  "type": "string",
  "content": "string"
}
```

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `200` | OK | application/json |


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-016](/docs/flows/staff-review-and-support) — Escalated issue.
