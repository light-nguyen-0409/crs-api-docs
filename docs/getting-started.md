---
id: getting-started
title: Getting started
sidebar_position: 2
---

# Getting started

## Scope

CRS API documentation covers candidate, user, consultant, compliance, admin, and general API domains.

The live API prefix is currently documented as /api in the backend route inventory. Confirm environment-specific hostnames and authentication endpoints before sending requests.

## How to read an endpoint page

Each endpoint page follows the same order:

1. Purpose and actor.
2. Authentication and middleware.
3. Path, query, and header parameters.
4. Request body and validation.
5. Success response.
6. Error responses.
7. Flow link when the endpoint has business side effects.

A page marked PARTIAL or UNVERIFIED is a work item, not a guarantee of runtime behavior.

## Status labels

`VERIFIED` and `PARTIAL` describe how much of the runtime contract is documented. `UNVERIFIED` means that a field or behavior still needs confirmation before it is used as a client assumption.

## Current status

The complete runtime inventory is available in the [API reference](/docs/api). Route/OpenAPI coverage and drift reports are kept in docs/_meta/route-coverage.md and docs/_meta/openapi-drift.md in the repository. Start with the [business-flow pages](/docs/flows/api-request-lifecycle) when you need lifecycle, access-control or side-effect context.
