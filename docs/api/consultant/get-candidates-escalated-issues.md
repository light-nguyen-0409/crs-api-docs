---
title: "GET /api/consultant/candidates/escalated_issues"
sidebar_label: "GET /api/consultant/candidates/escalated_issues"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/consultant/candidates/escalated_issues"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\EscalatedIssueController@index"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-016 — Escalated issue"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/candidates/escalated_issues"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/consultant/candidates/escalated_issues`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — a matching OpenAPI operation exists with the same method and path template. Request, response, and error behavior still require source tracing.

## Authentication and middleware

| Middleware | Evidence |
|---|---|
| `api` | Runtime route inventory |
| `auth:userApi` | Runtime route inventory |
| `detectBranchForConsultant` | Runtime route inventory |
| `autoLogout` | Runtime route inventory |

Authentication and authorization outcomes are UNVERIFIED beyond the middleware names recorded above.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

### Query parameters

| Parameter | Required | Schema | Description |
|---|---|---|---|
| `offset` | No | `integer` | UNVERIFIED |
| `limit` | No | `integer` | UNVERIFIED |
| `job_id` | No | `array` | UNVERIFIED |
| `journey_type` | No | `string` | UNVERIFIED |
| `order` | No | `string` | UNVERIFIED |
| `direction` | No | `string` | desc or asc |
| `filter` | No | `string` | text search |

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

Flow baseline: [SPEC-016](/docs/flows/staff-review-and-support) — Escalated issue.

Detailed transitions, mutations, external calls, and side effects are UNVERIFIED at endpoint-page granularity. Trace the controller/service call chain against the canonical business-flow and database-relationship specifications before relying on this page as a behavior contract.

## Source and verification notes

| Source | Value |
|---|---|
| Runtime route | `routes/consultant.php` |
| Controller action | `App\Http\Controllers\Api\Consultant\EscalatedIssueController@index` |
| OpenAPI reference | `documents/Gap-API-Consultant.yaml` operation `GET /candidates/escalated_issues` |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
