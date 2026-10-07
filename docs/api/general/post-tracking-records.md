---
title: "POST /api/tracking_records"
sidebar_label: "POST /api/tracking_records"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/tracking_records"
domain: "general"
controller: "App\\Http\\Controllers\\Api\\General\\TrackingRecordController@add"
middleware: "api"
flow_spec: "SPEC-029 — Tracking/address"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-General.yaml"
openapi_path: "/api/tracking_records"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `POST /api/tracking_records`

## Contract status

`PARTIAL` — a matching OpenAPI operation exists with the same method and path template. Request, response, and error behavior still require source tracing.

### OpenAPI description

For registering tracking record for Mixpanel.

## Authentication and middleware

| Middleware | Evidence |
|---|---|
| `api` | Runtime route inventory |

For protected routes, send `Authorization: Bearer <access_token>` from the matching candidateApi or userApi login flow. See the [Authentication guide](/docs/authentication) for token handling and scope headers.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

### Query parameters

The matched OpenAPI operation does not declare query parameters. Runtime query behavior remains UNVERIFIED.

### Headers

For protected routes, send `Authorization: Bearer <access_token>`; add `Gap-Branch-ID` or `Gap-Job-ID` only when the route middleware requires it.

### Body

| Required | Content types | Description |
|---|---|---|
| No | application/json | OpenAPI requestBody |

## Response

### Success and declared responses

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `200` | OK | application/json | OpenAPI declaration |
| `400` | Bad Request | application/json | OpenAPI declaration |
| `500` | Internal Server Error | application/json | OpenAPI declaration |

Runtime Resource/DTO mapping is UNVERIFIED.

## Errors

| Status | Description | Content types | Evidence |
|---|---|---|---|
| `400` | Bad Request | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |
| `500` | Internal Server Error | application/json | OpenAPI declaration; runtime mapping UNVERIFIED |

## Business flow and side effects

Flow baseline: [SPEC-029](/docs/operations/external-integrations) — Tracking/address.

Detailed transitions, mutations, external calls, and side effects are UNVERIFIED at endpoint-page granularity. Trace the controller/service call chain against the canonical business-flow and database-relationship specifications before relying on this page as a behavior contract.

## Source and verification notes

| Source | Value |
|---|---|
| Runtime route | `routes/general.php` |
| Controller action | `App\Http\Controllers\Api\General\TrackingRecordController@add` |
| OpenAPI reference | `documents/Gap-API-General.yaml` operation `POST /tracking_records` |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
