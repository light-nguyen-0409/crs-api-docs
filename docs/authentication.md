---
id: authentication
title: Authentication
sidebar_position: 3
---

# Authentication

CRS has separate authentication contexts for candidates and internal users. Some endpoints are public, while other endpoints require candidate or user middleware.

The source-backed guard, token and access-control map is maintained in [Authentication and access](/docs/flows/authentication-and-access).

## Guard and token summary

| Context | Runtime evidence | Observed behavior |
|---|---|---|
| Candidate | Candidate-protected routes use auth:candidateApi. | Candidate login checks lock state, issues a JWT, signs out other devices, and returns access_token, token_type=bearer, and expires_in. |
| Staff user | User AuthController protects every action except login with auth:userApi. | User login checks lock state, records authentication metadata, and returns the same token field names. |
| Consultant | auth:userApi plus branch middleware on the consultant route group. | Gap-Branch-ID and role/branch mapping determine branch scope. |
| Compliance | auth:userApi plus compliance branch middleware. | Admin context may cover all branches; compliance context is derived from branch-role mappings. |
| Admin | auth:userApi plus detectAdmin. | Global admin role is checked separately from the token guard. |

Token format and expiry are source/configuration values; deployment-specific TTL values are not copied into this guide.

## Access checks

- Check the endpoint middleware before inferring whether a route is public.
- Candidate job-scoped routes may require Gap-Job-ID when a candidate has multiple jobs.
- Candidate edit routes bypass the lock check for GET but can reject non-GET requests when the profile is locked or the highest job is in MATCHMAKER.
- Staff login failures, branch denials, role denials and candidate edit locks are separate support cases with different configured error mappings.
- Admin user unlock resets staff login attempts; it does not unlock candidate profile or MatchMaker state.

## Source evidence

- Candidate auth: app/Http/Controllers/Api/Candidate/AuthController.php:32-168
- User auth: app/Http/Controllers/Api/User/AuthController.php:21-105
- Branch/job/lock middleware: app/Http/Middleware/DetectBranchForConsultant.php, DetectBranchForCompliance.php, DetectJobForCandidate.php, CheckCandidateLockEdit.php
- Staff lock behavior: app/Services/UserService.php:108-127, 249-255

See the [candidate login endpoint](/docs/api/candidate/post-auth-login), [user login endpoint](/docs/api/user/post-auth-login), and [API request lifecycle](/docs/flows/api-request-lifecycle).
