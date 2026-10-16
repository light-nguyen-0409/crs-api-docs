---
id: api-general-index
title: General API
sidebar_position: 1
---

# General API

Tracking and address-provider endpoints shared by CRS clients.

## Coverage summary

| Metric | Count |
|---|---:|
| Runtime route entries | 4 |
| PARTIAL (OpenAPI match) | 1 |
| CODE_ONLY (runtime only) | 3 |
| Exact method/path matches | 1 |
| Parameter-name drift matches | 0 |

Runtime route entries are the canonical page set. PARTIAL means an OpenAPI operation was found; request, response, error, and runtime behavior still require source tracing.

## Endpoints

| Method | Runtime path | Status | OpenAPI reference | Page |
|---|---|---|---|---|
| POST | `/api/addresses/detail` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/general/post-addresses-detail) |
| POST | `/api/addresses/drill_down` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/general/post-addresses-drill-down) |
| POST | `/api/addresses/search` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/general/post-addresses-search) |
| POST | `/api/tracking_records` | PARTIAL | `documents/Gap-API-General.yaml`<br />`POST /tracking_records` | [Open](/docs/api/general/post-tracking-records) |

## Planned endpoints

These approved contracts are documented before implementation and deployment. They are not included in the runtime route counts above until verified in the backend.

| Method | Planned path | Status | Page |
|---|---|---|---|
| GET | `/api/r/{token}` | NOT YET DEPLOYED | [Open](/docs/api/general/get-r-token) |
