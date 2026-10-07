---
title: Webhooks
sidebar_position: 3
---

# Webhooks

The current webhook-like routes have different behavior. Neither route should be documented as proof that the external workflow completed.

## GBG passport webhook

Endpoint: [POST /api/candidate/gbg/webhook](/docs/api/candidate/post-gbg-webhook)


Observed behavior:

1. Read the raw request body.
2. If non-empty, write it through ApiLog as a GBG passport response.
3. Return Candidate Status OK with message Data saved.
4. Do not fetch GBG, create files, approve RTW, update candidate state or deduplicate the reference in this action.

Idempotent processing is EXPECTED_NOT_ENFORCED in the business spec. A successful 200-style response means the raw body was accepted by this action, not that passport processing succeeded.

## Esendex SMS observe route

Endpoint: [POST /api/consultant/sms/observe](/docs/api/consultant/post-sms-observe)


Observed behavior:

1. Read XML request content.
2. Extract InboundMessage.From and InboundMessage.MessageText.
3. Normalize a phone number without a leading plus.
4. Pass the phone and message to SmsService::observeMessage.
5. Return JSON string OK; parsing/provider exceptions return configured externalApiError.

The route inventory records only the api middleware for this action. Signature verification, replay protection and provider retry semantics are UNVERIFIED in this controller.

## Support and security boundary

- Preserve raw payload logs only according to the current retention and privacy policy; do not copy real webhook payloads into docs.
- Search api_result_logs by provider, endpoint and time window before manually replaying.
- Do not retry a webhook blindly when downstream state may already exist.
- Any signature, secret, IP allowlist, deduplication or queue-delivery claim requires deployment/config evidence not present in this page.

## Related pages

- [External integrations](/docs/operations/external-integrations)
- [Error and status guide](/docs/errors)
- [GBG result endpoint](/docs/api/candidate/post-me-passport-check-results)
