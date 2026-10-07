---
title: Scheduled processes
sidebar_position: 1
---

# Scheduled processes

The scheduler currently registers ten recurring commands. Schedule execution, deployment cron, command success and provider availability are separate concerns; only registration is proven by the local source.

## Schedule inventory

| Schedule | Command | Main effect | Overlap/timezone |
| --- | --- | --- | --- |
| Every minute | services:ping | Ping MatchMaker GAP and GAP_EAST | No explicit withoutOverlapping |
| Daily 02:00 | logs:clean | Delete api_result_logs older than three months | No explicit withoutOverlapping |
| Every minute | runBatchProcess:GatherAlternativeBankAccountInformationFromMails | Read OnePay/Graph mailbox and update bank/NI data | withoutOverlapping |
| Hourly | candidates:remind-screening-call-completion | Send eligible screening reminders | withoutOverlapping |
| Every minute | sms:sendPendingCampaigns | Send pending SMS campaign messages | withoutOverlapping |
| Every 10 minutes, 08:00–20:00 Europe/London | gbg:check_result | Recheck GBG REFER passport results | withoutOverlapping |
| Configured daily times | candidates:sync-matchmaker-status | Sync MatchMaker status | one command per config time |
| Configured daily times | candidates:sync-marketing-preference | Sync marketing preference answers | one command per config time |
| Configured daily times | candidates:sync-onplan | Sync on-plan flag | one command per config time |
| Daily 02:00 | files:expire-rtw | Mark due RTW files EXPIRED under command rules | No explicit withoutOverlapping |

All scheduled command output is appended to /var/log/laravel-schedule.log. The configured MatchMaker times and deployment scheduler are CONFIG/INFRASTRUCTURE and remain UNVERIFIED in production.

## Operational notes

- Sync-on-plan treats a null/non-success provider response as an empty list in the current implementation; the command can reset local on_plan flags broadly. Do not rerun it as a diagnostic without checking both MatchMaker sources and post-state.
- Status sync can trigger re-registration-related behavior; inspect candidate/job state before rerun.
- GBG REFER recheck replaces/updates files and result state; compare the current report, file status and api_result_logs before retry.
- Mailbox ingestion and SMS commands mutate local state and call external providers; withoutOverlapping reduces concurrent scheduler runs but does not establish exactly-once processing.
- Log cleanup affects integration/audit logs only, not business tables.

## Related flow pages

- [Candidate lifecycle](/docs/flows/candidate-lifecycle)
- [External integrations](/docs/operations/external-integrations)
- [Queue and events](/docs/operations/queue-and-events)
