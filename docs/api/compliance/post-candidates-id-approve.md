---
title: "POST /api/compliance/candidates/{id}/approve"
sidebar_label: "POST /api/compliance/candidates/{id}/approve"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/compliance/candidates/{id}/approve"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\CandidateController@approve"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-017 — Compliance approval"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Compliance.yaml"
openapi_path: "/api/compliance/candidates/{id}/approve"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/compliance/candidates/{id}/approve`

## Contract status

`PARTIAL` — a matching OpenAPI operation exists with the same method and path template. Request, response, and error behavior still require source tracing.

## Authentication and middleware

| Middleware | Evidence |
|---|---|
| `api` | Runtime route inventory |
| `auth:userApi` | Runtime route inventory |
| `detectBranchForCompliance` | Runtime route inventory |

Authentication and authorization outcomes are UNVERIFIED beyond the middleware names recorded above.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | Yes | `id` | OpenAPI name matches. |

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

UNVERIFIED — header requirements are not represented in the runtime route inventory.

### Body

The matched OpenAPI operation does not declare a request body. Runtime body behavior remains UNVERIFIED.

## Response

### Success and declared responses

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `200` | OK | application/json | OpenAPI declaration |

Runtime Resource/DTO mapping is UNVERIFIED.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Business flow and side effects

Flow baseline: [SPEC-017](/docs/flows/staff-review-and-support) — Compliance approval.

Detailed transitions, mutations, external calls, and side effects are UNVERIFIED at endpoint-page granularity. Trace the controller/service call chain against the canonical business-flow and database-relationship specifications before relying on this page as a behavior contract.

## Source and verification notes

| Source | Value |
|---|---|
| Runtime route | `routes/compliance.php` |
| Controller action | `App\Http\Controllers\Api\Compliance\CandidateController@approve` |
| OpenAPI reference | `documents/Gap-API-Compliance.yaml` operation `POST /candidates/{id}/approve` |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
