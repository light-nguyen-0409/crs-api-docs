# CRS API Documentation

Markdown-first API documentation for CRS, presented with Docusaurus and prepared for GitHub Pages.

## Prerequisites

- Node.js 20 or newer
- npm

## Local development

```bash
npm install
npm run start
```

Open <http://localhost:3000/crs-api-docs/docs> unless `BASE_URL` is overridden.

## Build

```bash
npm run build
npm run serve
```

The production files are written to `build/`.

## GitHub Pages

The repository is configured for GitHub Actions deployment at:

<https://light-nguyen-0409.github.io/crs-api-docs/>

The workflow derives the owner, project name, site URL and base path from the GitHub repository. The first push to `main` runs the build and Pages deployment workflow; GitHub repository settings must allow Pages deployments from GitHub Actions.

## Current documentation status

Phase 3 adds source-backed business-flow and operations pages, links all 245 endpoint pages to their flow baseline, and documents the configured error catalog. Phase 4 is configured for the light-nguyen-0409/crs-api-docs repository; its first GitHub Actions run will publish the Pages site.

Start with the [business-flow index](/docs/flows/api-request-lifecycle), [operations index](/docs/operations/scheduled-processes), or [API reference](/docs/api).

## Documentation sources

The API reference will be reconciled from:

- `Innovatube/gap-web-backend` runtime routes and source code
- The six existing OpenAPI files under `documents/`
- The backend business-flow and database relationship specifications

Markdown pages are the documentation source of truth. Docusaurus is only the presentation/build layer. Source-inventory, route-coverage and OpenAPI-drift reports are under docs/_meta/.
