---
title: "POST /api/candidate/me/bank_account/submit_financial_info"
sidebar_label: "POST /api/candidate/me/bank_account/submit_financial_info"
method: "POST"
runtime_method_declaration: "POST"
path: "/api/candidate/me/bank_account/submit_financial_info"
domain: "candidate"
controller: "App\\Http\\Controllers\\Api\\Candidate\\MeBankAccountController@submitFinancialInformation"
middleware: "api, auth:candidateApi, checkCandidateLockEdit"
flow_spec: "SPEC-008 — Bank/financial"
contract_status: "CODE_ONLY"
openapi_source: "UNVERIFIED"
openapi_path: "UNVERIFIED"
openapi_match: "NONE"
last_verified: "2026-10-08"
---

# `POST /api/candidate/me/bank_account/submit_financial_info`

## Contract status

`CODE_ONLY` — runtime route has no matching OpenAPI operation.

## Authentication and middleware

| Middleware |
|---|
| `api` |
| `auth:candidateApi` |
| `checkCandidateLockEdit` |

If this route is protected, follow the [authentication guide](/docs/authentication) for the required Authorization header and guard.

## Request

### Path parameters

No path parameters are identified in the runtime route template.

### Query parameters

UNVERIFIED — query parameters are not represented in the runtime route inventory.

### Headers

If protected, use the Authorization header from the [authentication guide](/docs/authentication); add route-specific scope headers only when this endpoint requires them.

### Body

Send a JSON object (`Content-Type: application/json`). The fields below come from the backend request class; validation rules are listed where defined.

| Field | Type | Required | Runtime validation |
|---|---|---|---|
| `me` | object | Optional | Validated as an array; supports candidate personal fields such as `national_insurance_number` and `unable_to_provide_national_insurance_number` |
| `uk_bank` | object | Optional; used for a UK bank account | Provide `bank_name` to select this flow; see example below |
| `rq_account` | object | Optional; used for a OnePay account | Provide both `tin_country` and `tin_number` to select this flow; see example below |
| `answers` | array | Required for completed OnePay flow | Question-answer entries; each item has `question_id` and an `answer` array |
| `progress` | string | Yes | `string\|required\|in:in_progress,completed` |

For `uk_bank`, the backend reads `bank_name`, `account_number`, `account_name`, `bank_sort_code`, `is_uk_bank_account`, and `can_skip_validation`. For `rq_account`, it reads `tin_country` and `tin_number`.

UK bank example:

```json
{
  "me": {
    "national_insurance_number": "AB123456C",
    "unable_to_provide_national_insurance_number": false
  },
  "uk_bank": {
    "bank_name": "Example Bank",
    "account_number": "12345678",
    "account_name": "A Candidate",
    "bank_sort_code": "102030",
    "is_uk_bank_account": true,
    "can_skip_validation": false
  },
  "progress": "completed"
}
```

OnePay example:

For the completed OnePay flow, include the `answers` array as well; question answer values depend on the configured financial-information agreement.

```json
{
  "me": { "national_insurance_number": "AB123456C" },
  "rq_account": { "tin_country": "Albania", "tin_number": "RR55567B" },
  "answers": [
    { "question_id": 123, "answer": ["agree"] }
  ],
  "progress": "completed"
}
```

## Response

### Success and declared responses

UNVERIFIED — no response contract was found in the available OpenAPI operation.

## Errors

UNVERIFIED — controller, validation, authentication, and exception mappings require source tracing.

## Flow

Flow baseline: [SPEC-008](/docs/flows/candidate-lifecycle) — Bank/financial.
