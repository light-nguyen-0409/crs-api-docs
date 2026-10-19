# CRS API docs source inventory

Status: Phase 3 complete; Phase 4 publication pending
Last verified: 2026-10-19

## Backend source

- Repository: Innovatube/gap-web-backend
- Runtime route inventory: .business-spec/backend-api-route-inventory.md
- Business flow baseline: .business-spec/backend-business-flow-spec.md
- Database relationship baseline: .business-spec/backend-database-relationship.md

## OpenAPI references

- documents/Gap-API-General.yaml
- documents/Gap-API-User.yaml
- documents/Gap-API-Admin.yaml
- documents/Gap-API-Candidate.yaml
- documents/Gap-API-Compliance.yaml
- documents/Gap-API-Consultant.yaml

## Coverage baseline

- Runtime route entries: 248
- Endpoint pages generated: 248
- OpenAPI operations imported for comparison: 184
- PARTIAL runtime routes with a semantic OpenAPI match: 157
- CODE_ONLY runtime routes without an OpenAPI match: 91
- Exact method/path matches: 152
- Parameter-name drift matches: 5
- OpenAPI-only operations: 27

## Phase 3 enrichment

- Business-flow pages: 5
- Operations pages: 4
- Endpoint pages linked back to flow/operations pages: 248
- Source areas traced: route registration and rate limit, candidate/staff authentication, branch/job/lock middleware, configured API errors, permanent intake transaction/event boundary, scheduled commands, registered listeners/jobs, webhook handlers and external-integration logs.
- No production source files were modified by the docs project.

OpenAPI is used as a reference contract only. Endpoint request/response fields remain PARTIAL unless runtime source evidence supports them. Production deployment, queue-worker delivery, provider availability, storage delivery, secret configuration and GitHub Pages publication remain UNVERIFIED.

## GAP-534 code-verified contract

- Endpoints: `POST /api/consultant/candidates/bulk_archive`, `GET /api/candidate/profile_deletion`, and `POST /api/candidate/profile_deletion`.
- Contract source: approved GAP-534 plan in `gap-web-backend/.specs/GAP-534/001-bulk-archive-auto-communicate.md` and the latest approved task decisions through 2026-10-19.
- Current runtime status: the revised request/response contract is implemented and verified in the backend working tree; endpoint pages are marked `CODE_ONLY` because no matching OpenAPI operation exists. Production deployment remains unverified.
- Scope: CRS database/storage and CRS email workflow only. MatchMaker/provider data, external tracking events, sent email, and backups are out of scope.
