---
title: "GET /api/candidate/stop_remind_me/{id}/{hash}"
sidebar_label: "GET /api/candidate/stop_remind_me/{id}/{hash}"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/candidate/stop_remind_me/{id}/{hash}"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeController@stopRemindMe"
middleware: "api"
flow_spec: "SPEC-022 — Screening reminder"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `GET /api/candidate/stop_remind_me/{id}/{hash}`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## Authentication and middleware

| Middleware |
|---|
| `api` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

| Runtime parameter | Required | OpenAPI name | Notes |
|---|---|---|---|
| `id` | UNVERIFIED | UNVERIFIED | UNVERIFIED |
| `hash` | UNVERIFIED | UNVERIFIED | UNVERIFIED |

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

Flow baseline: [SPEC-022](/docs/operations/scheduled-processes) — Screening reminder.
