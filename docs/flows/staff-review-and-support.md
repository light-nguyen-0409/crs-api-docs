---
title: Staff review and support
sidebar_position: 4
---

# Staff review and support

Consultant, compliance and admin endpoints share user authentication but have different branch, role and mutation boundaries.

## Actor matrix

| Actor | Main scope | Representative operations | Evidence |
|---|---|---|---|
| Consultant | Selected branch through Gap-Branch-ID and role mapping | Candidate search/detail, appointments, files, issues, progress, MatchMaker, SMS | routes/consultant.php; DetectBranchForConsultant; SPEC-014 through SPEC-016 and SPEC-038 |
| Compliance | Branch IDs supplied by DetectBranchForCompliance | Candidate review, RTW/file approval, issue management, templates | routes/compliance.php; DetectBranchForCompliance; SPEC-017 and SPEC-028 |
| Admin | Global admin role | Candidate reset/delete/unblock, users, branches, tags, agencies | routes/admin.php; DetectAdmin; SPEC-027 and SPEC-037 |

## Consultant candidate search sources

The consultant list is not a single candidates query:

1. INVITED can return unregistered invitation records.
2. NO_ACCOUNT can return MatchMaker snapshot records where has_crs_account=false.
3. Other filters use local candidate data and related job/address/note/interview/issue/file records.
4. Detail access then checks branch ownership separately.

Use the identifier type from the UI tab when debugging: invitation ID, MatchMaker peo_no or local candidate ID are not interchangeable. Evidence: SPEC-038 and CandidateService::getUnregisteredInviteesByBranch/getCandidatesByBranch/candidateBelongsToTheBranch.

## Appointment, issue and progress coordination

- Creating or changing an appointment can reset progress for a re-registration candidate before the appointment mutation.
- Appointment repository save dispatches AppointmentUpdateEvent; its listener recalculates aggregate/filter progress.
- Escalated issue mutation writes issue/log/change-log state and dispatches EscalatedIssueUpdateEvent; its listener recalculates progress.
- Issue status uses status, not approval_status. APPROVED/SOLVED/DELETED are resolved in the progress utility; type/category determines which progress component is affected.
- Missing information/document requests create activity-log requests before sending candidate email; a mail failure does not erase the audit request.

Representative pages: [appointments](/docs/api/consultant/post-candidates-id-appointments), [issues](/docs/api/consultant/post-candidates-id-escalated-issues), [issue logs](/docs/api/consultant/post-escalated-issues-id-logs), [progress](/docs/api/consultant/put-progresses-candidateid-jobid-type).

## Compliance approval split

Candidate approval and RTW approval are separate code paths:

| Action | Current implementation | Must not be inferred |
|---|---|---|
| Approve candidate | Sets candidate jobs APPROVED, resolves escalated issues and sets candidate status APPROVED. | It does not prove RTW approval, OnePay request or MatchMaker transfer. |
| Update candidate with RTW APPROVED | Runs RTW evidence gate, sets RTW timing/progress and dispatches OverallApproveEvent. | It does not mean candidate status APPROVED or that OnePay accepted the request. |
| Approve RTW file | File status/expiry operation is separate from candidate approval. | A single approved file is not the entire RTW gate. |

This is a documented CODE deviation from older descriptions; see SPEC-017 and the [error/status guide](/docs/errors).

## Reset, switching and destructive support actions

- Admin reset, consultant re-registration and legal-entity switching use different helper sets.
- A snapshot stores serialized candidate data and raw_data; snapshot files are renamed with a snapshot_YYYYMMDD_ prefix. It is not a restore API.
- Switching legal entity deletes old candidate jobs and creates a default job for the destination branch inside a transaction; notification is after commit and can fail independently.
- Tag replacement detaches existing candidate tags before attaching supplied IDs; tag merge does not migrate every invitation relation.
- Skill visibility is filtered through the MatchMaker dictionary for the branch/legal entity; a row outside that dictionary can remain in DB but be hidden from read output.

Representative pages: [admin reset](/docs/api/admin/put-candidates-reset-id), [snapshot](/docs/api/consultant/get-candidates-id-snapshots-snapshotid), [legal-entity request](/docs/api/consultant/post-candidates-id-switch-legal-entity-request), [approve switch](/docs/api/consultant/get-candidates-switch-legal-entity-approve-hash).

## Email template and cache behavior

When rich-text mode is enabled, custom template resolution is branch → legal entity → global custom → master. SaveCustom sanitizes content and increments the type version used by the resolved-custom cache. Direct DB/config edits do not automatically invalidate that version. Evidence: SPEC-028 and app/Services/EmailTemplateService.php.

## Support checklist

Before changing or retrying a staff workflow, capture actor/guard, branch IDs, candidate/job scope, issue status/category, exact endpoint, request ID or time window, and api_result_logs. Do not treat a successful HTTP response as proof that downstream mail, external API or queue work completed.

## Sources

- .business-spec/backend-business-flow-spec.md: SPEC-014 through SPEC-018 and SPEC-027 through SPEC-038
- app/Http/Middleware/DetectBranchForConsultant.php
- app/Http/Middleware/DetectBranchForCompliance.php
- app/Services/CandidateService.php
- app/Services/EmailTemplateService.php
- app/Events/EventRegister.php
