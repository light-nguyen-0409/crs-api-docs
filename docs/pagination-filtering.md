---
id: pagination-filtering
title: Pagination and filtering
sidebar_position: 5
---

# Pagination and filtering

Pagination and filtering are not one global CRS contract. Query names are endpoint-specific and the runtime defaults/maximums are not always represented in OpenAPI, so each endpoint page keeps an evidence status.

## Source-backed patterns

| Area | Observed declaration or behavior | Status |
|---|---|---|
| Admin collections | OpenAPI operations commonly declare offset, limit, order, direction and filter. | Parameter presence is documented; runtime defaults and maximum page size remain UNVERIFIED until controller/service tracing is complete. |
| Consultant candidate search | Candidate search supports branch/status/filter/search concepts and has separate paths for invited, no-account and local candidates. | Business-flow behavior is documented in [staff review and support](/docs/flows/staff-review-and-support); exact response metadata is endpoint-specific. |
| Search length | The candidate search flow rejects search text shorter than three characters when a search filter is used. | CODE/DATA behavior from the business-flow baseline; confirm the exact error resource on the endpoint page. |
| Candidate/job lists | Candidate/job ownership and job status filters are distinct from staff candidate search. | Do not reuse consultant query names without checking the route and controller. |

## Consumer rules

- Read the endpoint page for the exact query parameter name, type, default and response metadata.
- Treat offset/limit and page/page-size as different contracts.
- Preserve server-provided ordering and filter values; do not assume a stable default sort.
- Do not infer a maximum page size, total-count field or next-page link when the source does not expose it.
- When a list result mixes invitation, MatchMaker snapshot and local candidate records, use the identifier type described by the flow before opening a detail route.

See the [API reference](/docs/api), [candidate lifecycle](/docs/flows/candidate-lifecycle), and [staff review and support](/docs/flows/staff-review-and-support).
