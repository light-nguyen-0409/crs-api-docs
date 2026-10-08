---
title: "API parameter values"
sidebar_label: "API parameter values"
---

# API parameter values

These values are taken from the backend registration configuration and model constants. Endpoints can apply additional route-specific checks described below.

## Registration progress {#registration-progress}

The `type` parameter on candidate and consultant progress updates accepts these keys:

| Value | Progress section |
|---|---|
| `personal_details` | Personal details |
| `skill_qualifications` | Skills and qualifications |
| `employment_history` | Employment history |
| `emergency_contact` | Emergency contact |
| `personal_protective_equipment` | Personal protective equipment |
| `address_details` | Address details |
| `right_to_work_proofs` | Right to work evidence |
| `financial_information` | Financial information |
| `declarations` | Declarations |
| `contracts` | Contracts for the candidate's job |

The backend lowercases this path value before lookup, so uppercase characters are accepted. The `progress` body value is required. Common values are `locked`, `no_info`, `in_progress`, and `completed`; `escalated` is calculated from unresolved issues. The current request validator does not enforce a status enum. On the candidate endpoint, a `locked` update is allowed only for `right_to_work_proofs` and `contracts`.

## Candidate question groups {#candidate-question-groups}

Candidate question group endpoints accept the following `type` values:

| Value |
|---|
| `personal_protective_equipments` |
| `declarations_payment` |
| `declarations_agreements` |
| `declarations_health_and_disability` |
| `declarations_disclosure_and_barring_service` |
| `declarations_overall_agreement` |
| `financial_information_agreement` |
| `interview_assessments` |
| `interview_misc` |
| `medical_general_medical_health` |
| `medical_general_health_and_lifestyle` |
| `medical_food_handling_questionnaire` |
| `medical_night_health_questionnaire` |
| `medical_occupational_health_questionnaire` |
| `medical_understanding_information` |

## Staff question groups {#question-groups}

Consultant answer endpoints accept the full set below. Consultant and compliance read endpoints look up the requested group in stored question-group data; these are the type keys defined by the backend.

| Value |
|---|
| `personal_protective_equipments` |
| `declarations_payment` |
| `declarations_agreements` |
| `declarations_health_and_disability` |
| `declarations_disclosure_and_barring_service` |
| `declarations_overall_agreement` |
| `financial_information_agreement` |
| `interview_assessments` |
| `interview_accommodation_and_travel` |
| `interview_pay_and_banking` |
| `interview_employment_history` |
| `interview_misc` |
| `medical_general_medical_health` |
| `medical_general_health_and_lifestyle` |
| `medical_food_handling_questionnaire` |
| `medical_night_health_questionnaire` |
| `medical_occupational_health_questionnaire` |
| `medical_understanding_information` |

## File types {#file-types}

File endpoints use the `File` model's current type list:

| Value |
|---|
| `other` |
| `cv` |
| `declaration_agreement` |
| `address_proof` |
| `application_pack` |
| `work_contract_signature` |
| `medical_contract_signature` |
| `work_contract` |
| `medical_contract` |
| `key_information_document` |
| `candidate_signature` |
| `bank_proof` |
| `right_to_work` |
| `right_to_work_custom_certificate` |
| `right_to_work_additional_document` |
| `passport` |
| `passport_check_result_report` |
| `capturerd_candidate_face_image` |
| `profile_image_of_passport` |
| `profile_image_of_right_to_work` |
| `profile_image` |
| `mm_duplication_verification_image` |
| `welfare_image` |
| `worker_welfare_check_certificate` |
| `work_finder_agreement` |
| `permanent_candidate_form` |

`PUT /api/consultant/candidates/{id}/jobs/{jobId}/files/{type}/status` also accepts the selector `all_job_associated_documents`, which updates the job's associated documents together. For individual job-associated files, use `application_pack`, `work_contract`, `medical_contract`, `key_information_document`, or `work_finder_agreement`.

## Candidate-associated file types {#candidate-associated-file-types}

These types do not need a job selector on upload/list operations:

`other`, `cv`, `declaration_agreement`, `candidate_signature`, `bank_proof`, `right_to_work`, `right_to_work_additional_document`, `capturerd_candidate_face_image`, `profile_image_of_right_to_work`, `profile_image`, `profile_image_of_passport`, `passport_check_result_report`, `passport`, `welfare_image`, and `worker_welfare_check_certificate`.

For candidate self-service `/me/files/{type}` operations, other file types require `Gap-Job-ID`. For consultant/compliance `/candidates/{id}/files/{type}` upload operations, other file types require the `job_id` query parameter. Consultant uploads through `/candidates/{id}/jobs/{jobId}/files/{type}` take the job ID from the path.

## File status values {#file-status-values}

The backend's defined file status values are:

| Value |
|---|
| `uploaded` |
| `released` |
| `read` |
| `signed` |
| `approved` |
| `rejected` |
| `expired` |

Candidate self-service status updates cannot set `approved`. Consultant and compliance updates validate the listed values on file-ID routes; consultant job-scoped type updates pass the value through without that membership check. A consultant also cannot approve an expired file.

## Contract-signature file types {#contract-signature-file-types}

`POST /api/candidate/me/files/{type}/sign` accepts only these `type` values:

| Value | Document |
|---|---|
| `application_pack` | Application pack |
| `work_contract` | Work contract |
| `medical_contract` | Medical contract |

## Face matching rate types {#face-matching-rates}

| Value | Comparison |
|---|---|
| `selfie_to_cropped_face_image_from_passport_or_share_code` | Candidate selfie against the face cropped from passport or share-code evidence |
| `selfie_to_captured_face_image_from_online_mtg` | Candidate selfie against the face captured during an online meeting |
| `selfie_to_match_maker_profile` | Candidate selfie against the MatchMaker profile image |
| `welfare_check_to_captured_face_image` | Welfare-check image against the face captured during an online meeting |
