---
id: api-user-index
title: User API
sidebar_position: 1
---

# User API

Internal user authentication, profile, branch access, and status endpoints.

## Coverage summary

| Metric | Count |
|---|---:|
| Runtime route entries | 9 |
| PARTIAL (OpenAPI match) | 7 |
| CODE_ONLY (runtime only) | 2 |
| Exact method/path matches | 7 |
| Parameter-name drift matches | 0 |

Runtime route entries are the canonical page set. PARTIAL means an OpenAPI operation was found; request, response, error, and runtime behavior still require source tracing.

## Endpoints

| Method | Runtime path | Status | OpenAPI reference | Page |
|---|---|---|---|---|
| GET / HEAD | `/api/user/auth/check_reset_token` | PARTIAL | `documents/Gap-API-User.yaml`<br />`GET /auth/check_reset_token` | [Open](/docs/api/user/get-auth-check-reset-token) |
| POST | `/api/user/auth/forgot_password` | PARTIAL | `documents/Gap-API-User.yaml`<br />`POST /auth/forgot_password` | [Open](/docs/api/user/post-auth-forgot-password) |
| POST | `/api/user/auth/login` | PARTIAL | `documents/Gap-API-User.yaml`<br />`POST /auth/login` | [Open](/docs/api/user/post-auth-login) |
| POST | `/api/user/auth/logout` | PARTIAL | `documents/Gap-API-User.yaml`<br />`POST /auth/logout` | [Open](/docs/api/user/post-auth-logout) |
| POST | `/api/user/auth/refresh` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/user/post-auth-refresh) |
| POST | `/api/user/auth/reset_password` | PARTIAL | `documents/Gap-API-User.yaml`<br />`POST /auth/reset_password` | [Open](/docs/api/user/post-auth-reset-password) |
| GET / HEAD | `/api/user/me` | PARTIAL | `documents/Gap-API-User.yaml`<br />`GET /me` | [Open](/docs/api/user/get-me) |
| GET / HEAD | `/api/user/me/branches` | PARTIAL | `documents/Gap-API-User.yaml`<br />`GET /me/branches` | [Open](/docs/api/user/get-me-branches) |
| GET / HEAD | `/api/user/status` | CODE_ONLY | UNVERIFIED | [Open](/docs/api/user/get-status) |
