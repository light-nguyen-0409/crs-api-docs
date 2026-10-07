---
id: index
title: CRS API Documentation
sidebar_position: 1
---

# CRS API Documentation

Markdown-first API reference for the CRS platform.

This site is built from documentation pages that are reconciled against:

- Runtime routes and source code in Innovatube/gap-web-backend.
- Six existing OpenAPI files under documents/.
- The backend business-flow and database relationship specifications.

## Current status

Phase 3 documentation is now present:

- 245 endpoint pages are generated from the runtime route inventory.
- Each endpoint page links its business-flow baseline to a flow or operations page.
- Five business-flow pages cover the request boundary, authentication/access, candidate lifecycle, staff review/support and permanent intake.
- Four operations pages cover scheduled processes, external integrations, webhooks, and queue/events.
- Route/OpenAPI drift and source-inventory reports remain available under the metadata pages.

Phase 4 is still required for repository publication, GitHub Pages configuration, and any remote synchronization.

See the [getting started guide](/docs/getting-started), [authentication guide](/docs/authentication), [business flows](/docs/flows/api-request-lifecycle), [operations](/docs/operations/scheduled-processes), and [API reference](/docs/api).

## Evidence labels

- CODE: verified from route, controller, request, resource, exception, or configuration source.
- DATA: verified from model, migration, or database relationship evidence.
- EXTERNAL: behavior involving MatchMaker, GBG, OnePay, SMS, SharePoint, or an address provider.
- CONFIG: behavior controlled by application configuration.
- INFRASTRUCTURE: deployment or runtime behavior not proven by local source.
- UNVERIFIED: evidence is incomplete and must not be treated as a live contract.
