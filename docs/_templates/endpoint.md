---
id: domain-method-path-slug
domain: candidate
method: POST
path: /api/example
auth: UNVERIFIED
middleware: []
controller: UNVERIFIED
contract_status: UNVERIFIED
source:
  route: UNVERIFIED
  flow: UNVERIFIED
  openapi: UNVERIFIED
last_verified: YYYY-MM-DD
---

# METHOD /api/example

## Summary

Describe the actor and use case from source evidence.

## Authentication and middleware

List route middleware and authorization/ownership rules. Use UNVERIFIED when the call chain has not been traced.

## Request

### Path parameters

| Name | Type | Required | Description |
|---|---|---|---|

### Query parameters

| Name | Type | Required | Default | Description |
|---|---|---|---|---|

### Headers

| Name | Required | Description |
|---|---|---|

### Body

~~~json
{}
~~~

### Validation

List the actual FormRequest/controller/service validation rules.

## Response

### Success

~~~json
{}
~~~

### Errors

| HTTP status | Error name/code | Trigger | Retry guidance |
|---|---|---|---|

## Business flow and side effects

Link the relevant flow spec and document DB reads/writes, external calls, events, queues, mail, files, or audit logs.

## Source and verification notes

Record CODE, DATA, CONFIG, EXTERNAL, or INFRASTRUCTURE evidence and any deviation from OpenAPI.
