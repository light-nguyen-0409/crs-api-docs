---
id: errors
title: Errors and status codes
sidebar_position: 4
---

# Errors and status codes

The configured API error catalog is source-backed by config/api.php and rendered through APIErrorException and ErrorHandling. Endpoint pages still mark a mapping as UNVERIFIED when the controller, validator or resource path has not been traced.

## Configured error catalog

| Error name | Code | HTTP status | Typical meaning |
|---|---:|---:|---|
| unknown | 1000 | 400 | Unclassified client error |
| notFound | 1001 | 400 | Resource not found under the API catalog |
| authFailed | 1002 | 401 | Authentication failed |
| signInRequired | 1003 | 401 | Authentication is required |
| operationNotAllowed | 1004 | 403 | Operation is not allowed |
| severError | 1005 | 500 | Configured server error name in the current source |
| wrongParameter | 1006 | 400 | Invalid or missing request parameter |
| branchAccessNotAllowed | 1007 | 403 | Branch scope is not allowed |
| roleAccessNotAllowed | 1008 | 403 | Role scope is not allowed |
| externalApiError | 1009 | 500 | External provider or adapter failure |
| serverSideError | 1010 | 500 | Server-side failure |
| accountLocked | 1011 | 401 | Account lock condition |
| possibleCompromisedPassword | 1012 | 401 | Password compromise check failed |
| emailTemplateConflict | 1013 | 409 | Email template state conflicts |
| permanentIntakeConflict | 1014 | 409 | Permanent intake state already conflicts |
| candidateJobNotFound | 1015 | 404 | Candidate/job scope cannot be resolved |
| permanentCvNotFound | 1016 | 404 | Required permanent-intake CV is missing |
| permanentMatchMakerSyncFailed | 1017 | 502 | Local permanent intake committed but MatchMaker sync failed |
| permanentIntakeValidation | 1019 | 422 | Permanent-intake business validation failed |
| wrongJobId | 2001 | 400 | Candidate job header or identifier is invalid |

The spelling of severError is retained because it is the configured error name.

## Response families

- Candidate/general status responses expose success, message, detail and optional errors; error items contain code and message.
- User status responses expose success plus optional type/title/status, errorCode, detail and invalidParams.
- APIErrorException resolves the configured name to code and HTTP status; ErrorHandling renders the custom API response.
- Endpoint-specific Resources and DTOs may add fields. Read the endpoint page and controller/resource source before parsing them.

## Retry and partial-state rule

Do not retry from HTTP status alone. First classify the failure as rejected before mutation, committed local mutation, failed external/notification side effect, or a state requiring reconciliation.

Permanent intake is the clearest example: local candidate/address/answer writes commit before the synchronous MatchMaker listener; a later provider failure returns 502 while is_permanent remains false. MatchMaker transfer, welfare certificate generation, mail, SMS and scheduler flows have their own partial-state notes on the [operations pages](/docs/operations/external-integrations).
