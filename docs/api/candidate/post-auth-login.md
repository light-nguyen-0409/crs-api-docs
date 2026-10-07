---
title: "POST /api/candidate/auth/login"
sidebar_label: "POST /api/candidate/auth/login"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/auth/login"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\AuthController@login"
middleware: "api"
flow_spec: "SPEC-002 / SPEC-003 — Candidate authentication"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Candidate.yaml"
openapi_path: "/api/candidate/auth/login"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/candidate/auth/login`

## Contract status

`PARTIAL` — a matching OpenAPI operation exists with the same method and path template. Request, response, and error behavior still require source tracing.

### OpenAPI description

User sign in with email and password. If user can sign in successfully, it returns access & refresh tokens.

## Authentication and middleware

| Middleware | Evidence |
|---|---|
| `api` | Runtime route inventory |

Authentication and authorization outcomes are UNVERIFIED beyond the middleware names recorded above.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

UNVERIFIED — header requirements are not represented in the runtime route inventory.

### Body

| Required | Content types | Description |
|---|---|---|
| No | application/json | OpenAPI requestBody |

## Response

### Success and declared responses

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `200` | OK | application/json, application/xml | OpenAPI declaration |
| `400` | Bad Request | application/json | OpenAPI declaration |
| `401` | Unauthorized | application/json | OpenAPI declaration |
| `500` | Internal Server Error | application/json | OpenAPI declaration |

Runtime Resource/DTO mapping is UNVERIFIED.

## Errors

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `400` | Bad Request | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `401` | Unauthorized | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `500` | Internal Server Error | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |

## Business flow and side effects

Flow baseline: [SPEC-002](/docs/flows/authentication-and-access) / [SPEC-003](/docs/flows/authentication-and-access) — Candidate authentication.

Detailed transitions, mutations, external calls, and side effects are UNVERIFIED at endpoint-page granularity. Trace the controller/service call chain against the canonical business-flow and database-relationship specifications before relying on this page as a behavior contract.

## Source and verification notes

| Source | Value |
|---|---|
| Runtime route | `routes/candidate.php` |
| Controller action | `App\Http\Controllers\Api\Candidate\AuthController@login` |
| OpenAPI reference | `documents/Gap-API-Candidate.yaml` operation `POST /auth/login` |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
