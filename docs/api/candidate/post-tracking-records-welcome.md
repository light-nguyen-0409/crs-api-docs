---
title: "POST /api/candidate/tracking_records/welcome"
sidebar_label: "POST /api/candidate/tracking_records/welcome"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/tracking_records/welcome"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\General\\TrackingRecordController@registerAdvertReaction"
middleware: "api"
flow_spec: "SPEC-029 — Tracking/address"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `POST /api/candidate/tracking_records/welcome`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## Authentication and middleware

| Middleware |
|---|
| `api` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

UNVERIFIED — request body schema is not represented in the runtime route inventory.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-029](/docs/operations/external-integrations) — Tracking/address.
