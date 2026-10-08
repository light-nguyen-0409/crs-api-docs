---
title: "GET /api/consultant/jobs"
sidebar_label: "GET /api/consultant/jobs"
method: "GET"
runtime_method_declaration: "GET / HEAD"
path: "/api/consultant/jobs"
domain: "consultant"
controller: "App\\Http\\Controllers\\Api\\Consultant\\JobController@index"
middleware: "api, auth:userApi, detectBranchForConsultant, autoLogout"
flow_spec: "SPEC-007 — Candidate/job application"
contract_status: "PARTIAL"
openapi_source: "documents/Gap-API-Consultant.yaml"
openapi_path: "/api/consultant/jobs"
openapi_match: "EXACT_PATH"
last_verified: "2026-10-07"
---

# `GET /api/consultant/jobs`

> Runtime inventory records the declaration as `GET / HEAD`; this page uses `GET` for OpenAPI comparison.

## Contract status

`PARTIAL` — OpenAPI method/path matches runtime; some runtime details may be incomplete.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:userApi` |
| `detectBranchForConsultant` |
| `autoLogout` |

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

Flow baseline: [SPEC-007](/docs/flows/candidate-lifecycle) — Candidate/job application.

## GAP-734 — Planned contract (not implemented or deployed)

This section documents the approved direction for GAP-734 Phase 1. Backend implementation belongs to Phase 2; these additions must not be assumed available on STG or production yet. Existing contract-status metadata above describes the current inventory, not deployment of this change.

### Request headers and pagination

| Header | Required | Meaning |
|---|---|---|
| `Authorization` | Yes | `Bearer <token>` for a consultant user. |
| `Gap-Branch-ID` | Yes | Internal branch ID; middleware checks consultant access. |

| Query parameter | Default | Meaning |
|---|---|---|
| `offset` | `0` | Number of records to skip. |
| `limit` | `1000` | Maximum number of jobs to return. |
| `order` | `id` | Sort column. |
| `direction` | `asc` | `desc` selects descending order; other values resolve to `asc`. |

The existing query filters jobs by the authorized branch. Pagination uses offset/limit, not page numbers. There is no backend keyword search by title or job reference. Clients must load the required pages before searching their options locally. GAP-734 preserves this behavior.

```http
GET /api/consultant/jobs?offset=0&limit=20&order=id&direction=asc
Authorization: Bearer <token>
Gap-Branch-ID: 7
```

### Planned response schema

| Field | Type | Meaning |
|---|---|---|
| `jobs` | array | Branch-scoped jobs in the requested page. |
| `jobs[].id` | integer | Internal job ID to submit when selecting a job for invitation. |
| `jobs[].external_id` | string | External job ID used as URL parameter `job_id`. |
| `jobs[].title` | string | Job title; existing response field. |
| `jobs[].job_reference` | string or null | Added in GAP-734; sourced from `jobs.job_reference`. |
| `count` | integer | Total branch jobs, independent of pagination; excludes the default option. |
| `invitation_default_job` | object or null | Added in GAP-734; parsed from the branch registration link. Null when that link is absent or invalid. |
| `invitation_default_job.external_id` | string | Value of registration-link parameter `job_id`. |
| `invitation_default_job.job_reference` | string | Value of registration-link parameter `job_ref`. |
| `invitation_default_job.title` | string | Value of registration-link parameter `job_title`. |

The default object contains only these three fields. It does not require a matching job record; the raw registration link is not returned. Response/database field `job_reference` and URL key `job_ref` represent the same reference using different key names.

```json
{
  "jobs": [
    {
      "id": 42,
      "external_id": "123",
      "title": "Warehouse Operative",
      "job_reference": "WH-001"
    }
  ],
  "count": 1,
  "invitation_default_job": {
    "external_id": "900",
    "job_reference": "TELEPHONE",
    "title": "Telephone"
  }
}
```

Example without a configured default link:

```json
{
  "jobs": [],
  "count": 0,
  "invitation_default_job": null
}
```

Select the default option by omitting `job_id` or submitting null to [the invite endpoint](/docs/api/consultant/post-candidates-invite). Select a listed job by submitting its internal `id`. Reload options and reset the selection when the branch changes. Jobs with missing references cannot be used for custom invitation selection under the planned validation rules.

### Errors and scope

| HTTP | Error | Meaning |
|---|---|---|
| `401` | Authentication middleware | Missing or invalid token. |
| `400` | `wrongParameter`, code `1006` | Missing/zero `Gap-Branch-ID`. |
| `403` | `branchAccessNotAllowed`, code `1007` | Consultant cannot access the requested branch. |

An absent default registration link yields a null object in this GET response; sending an invite still requires a configured link. This endpoint lists jobs, while `/api/consultant/jobs/job_refs` lists distinct application references from `candidate_jobs.job_ref`; their datasets are not guaranteed identical.
