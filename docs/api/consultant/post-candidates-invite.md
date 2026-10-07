---
title: "POST /api/consultant/candidates/invite"
sidebar_label: "POST /api/consultant/candidates/invite"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/consultant/candidates/invite"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\CandidateController@sendRegistrationInvitationLink"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-032 — Invitation"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-07"
---

# `POST /api/consultant/candidates/invite`

## Contract status

`CODE_ONLY` — runtime route exists in the route inventory, but no semantically matching operation was found in the current OpenAPI YAML references.

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

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

UNVERIFIED — header requirements are not represented in the runtime route inventory.

### Body

UNVERIFIED — request body schema is not represented in the runtime route inventory.

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Business flow and side effects

Flow baseline: [SPEC-032](/docs/flows/staff-review-and-support) — Invitation.

Detailed transitions, mutations, external calls, and side effects are UNVERIFIED at endpoint-page granularity. Trace the controller/service call chain against the canonical business-flow and database-relationship specifications before relying on this page as a behavior contract.

## Source and verification notes

| Source | Value |
|---|---|
| Runtime route | `routes/consultant.php` |
| Controller action | `App\Http\Controllers\Api\Consultant\CandidateController@sendRegistrationInvitationLink` |
| OpenAPI reference | UNVERIFIED — no matching OpenAPI operation. |
| Business-flow baseline | `.business-spec/backend-business-flow-spec.md` |
| Database baseline | `.business-spec/backend-database-relationship.md` |
| Last verified | `2026-10-07` |

This page is generated from the runtime route inventory and available OpenAPI reference. It intentionally does not infer undocumented request or response fields.
