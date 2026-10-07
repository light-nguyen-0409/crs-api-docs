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

For a protected route, send the token returned by the matching login endpoint as `Authorization: Bearer <access_token>`. Document any additional `Gap-Branch-ID` or `Gap-Job-ID` scope header separately.

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
| Authorization | When auth middleware is present | Bearer JWT returned by the matching login endpoint |

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

## Flow

Link the relevant flow spec and document DB reads/writes, external calls, events, queues, mail, files, or audit logs.
