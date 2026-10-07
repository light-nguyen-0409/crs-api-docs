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
7. Business flow and side effects.
8. Source and verification notes.

A page marked PARTIAL or UNVERIFIED is a work item, not a guarantee of runtime behavior.

## Source priority

For route identity and middleware, use the runtime route inventory and routes/*.php.

For validation and response shape, trace FormRequest, Controller, Service, Resource/Response, Exception, and config source.

For business flow and database context, use the linked business-spec files and verify the source call chain.

## Current status

The complete runtime inventory is available in the [API reference](/docs/api). Route/OpenAPI coverage and drift reports are kept in docs/_meta/route-coverage.md and docs/_meta/openapi-drift.md in the repository. Start with the [business-flow pages](/docs/flows/api-request-lifecycle) when you need lifecycle, access-control or side-effect context.
