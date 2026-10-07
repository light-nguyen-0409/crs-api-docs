---
id: api-index
title: API reference
sidebar_position: 1
---

# API reference

The endpoint reference is grouped by runtime domain. Every runtime route entry has a Markdown page; contract status records whether the current OpenAPI references contain a semantically matching operation.

| Domain | Runtime routes | PARTIAL | CODE_ONLY | Reference |
|---|---:|---:|---:|---|
| [Candidate](/docs/api/candidate) | 69 | 48 | 21 | Candidate-facing authentication, profile, application, identity, file, referee, tracking, and permanent-intake endpoints. |
| [User](/docs/api/user) | 9 | 7 | 2 | Internal user authentication, profile, branch access, and status endpoints. |
| [Consultant](/docs/api/consultant) | 87 | 52 | 35 | Consultant candidate operations, appointments, jobs, progress, issues, SMS, and MatchMaker/welfare integrations. |
| [Compliance](/docs/api/compliance) | 42 | 34 | 8 | Compliance candidate review, branch, email-template, user, and escalated-issue endpoints. |
| [Admin](/docs/api/admin) | 34 | 15 | 19 | Administrative candidate, branch, legal-entity, user, tag, agency, and status endpoints. |
| [General](/docs/api/general) | 4 | 1 | 3 | Tracking and address-provider endpoints shared by CRS clients. |

## Verification rules

- `PARTIAL`: method and path matched exactly, or matched after replacing path parameter names with placeholders; the request/response/error behavior is not yet independently verified.
- `CODE_ONLY`: route inventory evidence exists, but no matching operation was found in the current OpenAPI references.
- OpenAPI-only operations and parameter-name drift are listed in `docs/_meta/openapi-drift.md`.
- `VERIFIED` is intentionally unused in this phase.
