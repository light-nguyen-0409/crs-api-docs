---
title: "GET /api/r/{token}"
sidebar_label: "GET /api/r/{token}"
method: "GET"
runtime_method_declaration: "PLANNED"
path: "/api/r/{token}"
domain: "general"
controller: "App\\Http\\Controllers\\Api\\General\\PublicShortLinkController@redirect"
middleware: "api"
flow_spec: "GAP-743 — Rich-text email short links"
contract_status: "PLANNED_NOT_DEPLOYED"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-16"
---

# `GET /api/r/{token}`

## Contract status

**GAP-743 approved contract — NOT YET DEPLOYED (2026-10-16).** This public redirect endpoint is planned for rich-text email links. It must not be treated as available until the backend implementation and deployment are verified.

## Authentication and middleware

| Middleware |
|---|
| `api` |

No authentication is required. Email recipients may follow the link before signing in.

## Request

### Path parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `token` | string | Yes | URL-safe, server-generated short-link token. The client cannot provide a destination URL. |

### Query parameters

None.

### Headers

No request headers are required beyond the normal HTTP request headers.

### Body

No request body.

## Response

### Success

| Status | Headers | Description |
|---|---|---|
| `302 Found` | `Location: <stored HTTPS/HTTP destination>` | Redirects to the exact server-created destination URL. Query parameters, encoded values and fragments are preserved. |

There is no JSON success body. The endpoint is used by HTTP(S) links rewritten in rich-text email bodies. Legacy/plain-text email URLs are not rewritten by GAP-743.

### Errors

| Status | Description |
|---|---|
| `404 Not Found` | Token does not exist, has been invalidated, or cannot be resolved. |
| `500 Internal Server Error` | Storage failure that cannot be recovered by the application. |

## Security and behavior

- Only server-created `http` and `https` destinations may be stored.
- The endpoint must not become an open redirect accepting a destination from the request.
- The destination may contain candidate or security-token data and must not be exposed in application logs.
- The short-link mapping has no automatic expiry or analytics requirement in GAP-743.

## Flow

Rich-text email rendering creates a persisted token-to-destination mapping. The recipient follows `/api/r/{token}`, the backend resolves the token, and the response redirects to the original destination.

