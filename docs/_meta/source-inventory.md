# CRS API docs source inventory

Status: Phase 3 complete; Phase 4 publication pending
Last verified: 2026-10-07

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

- Runtime route entries: 245
- Endpoint pages generated: 245
- OpenAPI operations imported for comparison: 184
- PARTIAL runtime routes with a semantic OpenAPI match: 157
- CODE_ONLY runtime routes without an OpenAPI match: 88
- Exact method/path matches: 152
- Parameter-name drift matches: 5
- OpenAPI-only operations: 27

## Phase 3 enrichment

- Business-flow pages: 5
- Operations pages: 4
- Endpoint pages linked back to flow/operations pages: 245
- Source areas traced: route registration and rate limit, candidate/staff authentication, branch/job/lock middleware, configured API errors, permanent intake transaction/event boundary, scheduled commands, registered listeners/jobs, webhook handlers and external-integration logs.
- No production source files were modified by the docs project.

OpenAPI is used as a reference contract only. Endpoint request/response fields remain PARTIAL unless runtime source evidence supports them. Production deployment, queue-worker delivery, provider availability, storage delivery, secret configuration and GitHub Pages publication remain UNVERIFIED.
