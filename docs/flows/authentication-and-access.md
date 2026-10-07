---
title: Authentication and access
sidebar_position: 2
---

# Authentication and access

CRS has separate candidate and staff authentication guards. Authorization is then narrowed by role, branch, job header and candidate lock middleware.

## Guard and token matrix

| Context | Entry points | Guard/middleware evidence | Observed token behavior |
|---|---|---|---|
| Candidate | /api/candidate/auth/signup, login, logout, refresh, password reset | Public auth routes; protected routes use auth:candidateApi. | Candidate login checks the candidate lock, signs in, obtains a JWT, signs out other devices and returns access_token, token_type=bearer and expires_in. Evidence: app/Http/Controllers/Api/Candidate/AuthController.php:115-168 |
| Staff user | /api/user/auth/login, logout, refresh, password reset | User AuthController applies auth:userApi to every action except login. | User login checks lock state, logs authentication metadata and returns the same token field names with the userApi TTL. Evidence: app/Http/Controllers/Api/User/AuthController.php:21-26, 33-105 |
| Consultant | /api/consultant/* | auth:userApi plus detectBranchForConsultant and usually autoLogout. | Global consultant role or a user_branch role can grant branch access; the request must carry Gap-Branch-ID for routes using branch middleware. |
| Compliance | /api/compliance/* | auth:userApi plus detectBranchForCompliance. | Admin branch context is all branches in the middleware; compliance context is built from user branch mappings. The consumer semantics of an empty branch collection remain UNVERIFIED. |
| Admin | /api/admin/* | auth:userApi plus detectAdmin. | detectAdmin checks the global admin role. A userApi token alone does not prove admin access. |
| Public/webhook | selected auth, tracking, address and webhook routes | Route inventory is the source for the exact middleware set. | Do not infer public access from the URL prefix alone. |

## Staff login lock

User::LOCKED_ATTEMPT_COUNT is 5. UserService::signIn resets attempt_count after a successful sign-in; a failed sign-in increments attempt_count and last_attempt and notifies when the count reaches the configured constant. Evidence: app/Models/User.php:46, 122; app/Services/UserService.php:108-127.

Admin user unlock resets attempt_count and sends a password-reset email. It does not unlock a candidate profile or change candidate MatchMaker state. Evidence: app/Services/UserService.php:249-255.

Candidate lock behavior is separate: Candidate::isLocked uses the candidate attempt count and a five-minute period; CheckCandidateLockEdit bypasses GET but blocks non-GET when profile_locked or the highest job is MATCHMAKER. Evidence: app/Models/Candidate.php:311-312; app/Http/Middleware/CheckCandidateLockEdit.php:11-18.

## Branch, job and inactivity scope

| Scope | Runtime rule | Failure code/source |
|---|---|---|
| Consultant branch | Gap-Branch-ID is required; UserService::allowToAccessTheBranch checks global role or user_branch role before adding branch_id to request attributes. | wrongParameter or branchAccessNotAllowed; app/Http/Middleware/DetectBranchForConsultant.php:27-40 |
| Compliance branches | Admin gets all branch IDs; a compliance user gets branch IDs from role mappings. | roleAccessNotAllowed; app/Http/Middleware/DetectBranchForCompliance.php:30-57 |
| Candidate job | Candidate must have an application. If multiple jobs exist, Gap-Job-ID is required and must belong to the candidate. | wrongParameter; app/Http/Middleware/DetectJobForCandidate.php:26-51 |
| Candidate edit lock | GET is bypassed; non-GET is blocked by profile_locked or MATCHMAKER highest job. | Status error from CheckCandidateLockEdit |
| Staff inactivity | AutoLogout reads auth.inactive_timeout and authentication log activity. When inactive it signs out and still calls the next handler; exact client-visible behavior is therefore not the same as an immediate middleware 401. | app/Http/Middleware/AutoLogout.php:18-42 |

## Client guidance

- Use the guard-specific login route; do not send a candidate token to userApi routes or vice versa.
- Preserve access_token and token_type from the response; the configured TTL value is not documented here because deployment config is UNVERIFIED.
- Send Gap-Branch-ID only where the route middleware requires it.
- Send Gap-Job-ID when a candidate has multiple jobs or the route explicitly uses detectJobForCandidate.
- Do not use admin user unlock to fix candidate profile_locked or MatchMaker state.
- A failed login, invalid branch, invalid job header and role denial are different support cases; use the configured error code and route middleware to classify them.

## Related endpoints

- [Candidate login](/docs/api/candidate/post-auth-login)
- [Candidate signup](/docs/api/candidate/post-auth-signup)
- [User login](/docs/api/user/post-auth-login)
- [User refresh](/docs/api/user/post-auth-refresh)
- [Candidate progress](/docs/api/candidate/get-progresses)
- [Consultant candidate list](/docs/api/consultant/get-candidates)
