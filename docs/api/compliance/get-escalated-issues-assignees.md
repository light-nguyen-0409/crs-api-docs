---
title: "GET /api/compliance/escalated_issues/assignees"
sidebar_label: "GET /api/compliance/escalated_issues/assignees"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/compliance/escalated_issues/assignees"
domain: "compliance"
controller: "App\\Http\\Controllers\\Api\\Compliance\\EscalatedIssueController@getAssignees"
middleware: "api, auth:userApi, detectBranchForCompliance"
flow_spec: "SPEC-016 — Escalated issue"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Compliance.yaml"
openapi_path: "/api/compliance/escalated_issues/assignees"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/compliance/escalated_issues/assignees`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectBranchForCompliance` |

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


## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-016](/docs/flows/staff-review-and-support) — Escalated issue.
