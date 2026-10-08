---
title: "POST /api/candidate/auth/signup"
sidebar_label: "POST /api/candidate/auth/signup"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/auth/signup"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\AuthController@signup"
middleware: "api"
flow_spec: "SPEC-002 / SPEC-003 — Candidate authentication"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/auth/signup"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-08"
---

# `POST /api/candidate/auth/signup`

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

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

#### `application/json` payload (`SignUpRequest`)

| Field | Type | Required by OpenAPI | Description |
|---|---|---|---|
| email | string | Yes |  |
| phone_number | string | No |  |
| phone_number_country_code | string | No |  |
| password | string | Yes |  |
| cookie | string | Yes |  |
| locale | string | Yes | ISO 639-1 Language code ( only "en-gb" ) |

Example shape (placeholder values; apply the field constraints above):

```json
{
  "email": "string",
  "phone_number": "string",
  "phone_number_country_code": "string",
  "password": "string",
  "cookie": "string",
  "locale": "string"
}
```

## Response

### Success and declared responses

| Status | Description | Content types |
|---|---|---|
| `201` | Created | application/json |


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-002](/docs/flows/authentication-and-access) / [SPEC-003](/docs/flows/authentication-and-access) — Candidate authentication.
