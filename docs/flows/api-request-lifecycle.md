---
title: API request lifecycle
sidebar_position: 1
---

# API request lifecycle

This page describes the shared request boundary for the 245 runtime API entries. It is a source-backed implementation map, not a promise that every endpoint follows the intended architecture perfectly.

## Runtime boundary

| Boundary | Observed behavior | Evidence |
|---|---|---|
| Prefix and middleware | User, candidate, consultant, compliance, admin, and general route groups are registered under /api with the api middleware group. | app/Providers/RouteServiceProvider.php:31-68 |
| Rate limiting | The api limiter allows 60 requests per minute, keyed by authenticated user ID or client IP. | app/Providers/RouteServiceProvider.php:79-83 |
| Route inventory | The canonical route collection contains 245 runtime entries; GET / HEAD is Laravel's display for a GET route that also accepts HEAD. | .business-spec/backend-api-route-inventory.md |
| Request chain | Route → controller → request/validator → service → repository/model → response; external calls, events, queues, mail and logs may branch from the service layer. | .business-spec/backend-business-flow-spec.md §2 and SPEC-001 |

## Evidence-first reading order

1. Start from the [runtime API reference](/docs/api).
2. Check the endpoint middleware and controller listed on the endpoint page.
3. Trace FormRequest or inline validation.
4. Trace the service call chain and repository/model reads and writes.
5. Check the linked business-flow page for preconditions, post-conditions, external calls and partial-failure behavior.
6. For external failures, search api_result_logs by provider, URL, HTTP code, message and extra_info.

## Response families

| Caller context | Success/error resource | Observed shape |
|---|---|---|
| Candidate/general flows | Candidate Status resource | success, message, detail, optional errors; each error item contains code and message. Evidence: app/Http/Resources/Api/Candidate/Status.php:10-21, 34-61 |
| User flows | User Status resource | success, optional type/title/status, errorCode, detail and invalidParams. Evidence: app/Http/Resources/Api/User/Status.php:10-29, 31-65 |
| Resource/DTO responses | Endpoint-specific Resource or DTO | Shape is endpoint-specific and must be read from the linked controller/resource; OpenAPI alone is not runtime proof. |
| API exceptions | Configured API error response | APIErrorException resolves config/api.php by error name and maps configured code/status; ErrorHandling renders the custom response. Evidence: app/Exceptions/Api/APIErrorException.php:23-43, app/Http/Middleware/ErrorHandling.php:12-20 |

## Global failure boundary

Authentication, authorization, validation and business exceptions are separate evidence categories. A generic REST convention must not be substituted for the configured CRS error mapping.

The runtime sources also show multi-step operations where a database write can succeed before email, file, queue or external integration work fails. The endpoint page must therefore distinguish:

- request rejected before mutation;
- local mutation committed;
- external or notification side effect failed;
- post-state requiring reconciliation.

## Scope limits

- Production deployment, queue-worker availability, storage delivery, provider response behavior and alert delivery remain UNVERIFIED unless an operations page says otherwise.
- The database relationship baseline is migration/model evidence; it does not prove that the production database has exactly that schema or that production data is clean.
- The route inventory proves route registration and middleware collection, not every validator, repository filter or response field.

## Related pages

- [Authentication and access](/docs/flows/authentication-and-access)
- [Candidate lifecycle](/docs/flows/candidate-lifecycle)
- [Staff review and support](/docs/flows/staff-review-and-support)
- [Error and status guide](/docs/errors)
- Runtime route coverage: docs/_meta/route-coverage.md
