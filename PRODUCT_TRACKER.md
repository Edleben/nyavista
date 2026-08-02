# NyaVista Product Tracker

## Tracker rules

This file is the delivery source of truth. Update it after evidence exists, not before. Every item must reference the root STABLE framework and satisfy `CONSTRAINTS.md`.

### Status vocabulary

`NOT_STARTED` · `DISCOVERY` · `PLANNED` · `IN_PROGRESS` · `BLOCKED` · `IN_REVIEW` · `VALIDATING` · `DONE` · `DEFERRED`

### Priority and risk

- Priority: `P0` critical, `P1` high, `P2` normal, `P3` optional.
- Risk: `LOW`, `MEDIUM`, `HIGH`, `CRITICAL`.
- A blocked item records owner, reason, date, and unblock condition.
- `DONE` requires linked acceptance and verification evidence.

## Program summary

| Field | Value |
|---|---|
| Product | NyaVista |
| Owner | E-DEAL EXPRESS LLC |
| Current phase | Phase 0 audit + approved Phase 1 first-pass foundation |
| Overall status | IN_PROGRESS |
| Release target | TBD |
| Release owner | TBD |
| Last updated | 2026-08-01 |
| Updated by | Codex |
| STABLE framework path/version | `STABLE_FRAMEWORK.md` at repository root, commit `f8ab99e` |
| Approved visual reference | `docs/design/nyavista-ui-mockup-light-dark.png` |
| Visual baseline status | APPROVED_REFERENCE |
| Highest open risk | First pass is demo-only; persistence, authentication, ingestion, AI, and publishing are not live |
| Build | PASS — `vinext build` (2026-08-01) |
| Tests | PASS — 2/2 rendered-shell and delivery-record tests (2026-08-01) |
| Security review | NOT_STARTED |
| Accessibility review | IN_REVIEW — semantic DOM, keyboard focus, responsive navigation, reduced motion |
| Legal/editorial review | NOT_STARTED |

## Phase tracker

| ID | Phase | Status | Exit criteria | Evidence | Risks/blockers | Approved by/date |
|---|---|---|---|---|---|---|
| P0 | Audit and planning | NOT_STARTED | Architecture, routes, data, STABLE mapping, risks and backlog approved | — | — | — |
| P1 | Foundation/design system | NOT_STARTED | Scaffold/build valid; brand, company, theme and shared states complete | — | — | — |
| P2 | Marketing website | NOT_STARTED | Global responsive pages, legal shells and SEO verified | — | — | — |
| P3 | Public demo product | NOT_STARTED | Feeds, stories, geography, search and demo media verified | — | — | — |
| P4 | Auth/personalization | NOT_STARTED | Auth, onboarding, preferences and saves persist securely | — | — | — |
| P5 | Admin/editorial | NOT_STARTED | RBAC and review/source/media workflows verified | — | — | — |
| P6 | Firebase persistence | NOT_STARTED | Repositories, rules, indexes, emulator and permission tests pass | — | — | — |
| P7 | Ingestion | NOT_STARTED | Authorized ingestion, normalization, dedupe, retries and logs pass | — | — | — |
| P8 | Clustering | NOT_STARTED | Matching, thresholds, merge/split and edge tests pass | — | — | — |
| P9 | AI intelligence | NOT_STARTED | Structured output, audit, review, costs and mock/live seams pass | — | — | — |
| P10 | Video/audio | NOT_STARTED | Script, media, caption/transcript, review and retry flows pass | — | — | — |
| P11 | Engagement/revenue | NOT_STARTED | Newsletter, alerts, plans and entitlements verified | — | — | — |
| P12 | Trust/localization | NOT_STARTED | Legal, corrections, accessibility and locale architecture approved | — | — | — |
| P13 | Quality/optimization | NOT_STARTED | Analytics, E2E, security, performance and cost gates pass | — | — | — |
| P14 | Launch readiness | NOT_STARTED | CI/CD, staging/prod, smoke, backup, rollback and checklist approved | — | — | — |

## Epic and feature register

Create one row per independently testable outcome. Split rows that require different acceptance evidence.

| ID | Phase | Epic/feature | Priority | Status | Owner | STABLE evidence | Acceptance criteria | Tests/evidence | Risk | Dependencies | Docs | Commit/PR |
|---|---:|---|---|---|---|---|---|---|---|---|---|---|
| F-015 | 1 | Living sprint tracker and agent handoff foundation | P0 | IN_REVIEW | Codex | Root STABLE and all approved mockup panels inspected; responsive light/dark comparison complete | Sprint phases, completion visualisation, polling timestamp, implementation steps, and cross-agent handoff are visible and documented | Lint, TypeScript, 2 tests, production build, desktop/mobile browser review PASS | HIGH | F-000, F-001, F-011 | `CLAUDE_HANDOFF.md`, tracker UI | Working tree |
| F-002 | 0 | Repository ignore and branch-governance hardening | P1 | DONE | Codex | `STABLE_FRAMEWORK.md` reviewed; generated/local artifact audit performed on `feature/nyavista_cedi_app` at `f902b9d`; GitHub ruleset `20211916` verified active | Generated dependencies, build output, caches, logs, editor state, OS metadata, and secrets stay out of Git; sanitized environment templates remain committable; `main` accepts changes only through PRs | `git status --ignored`, tracked-artifact scan, `git check-ignore`; active GitHub ruleset applies to `main`, requires PRs, restricts deletion, blocks force pushes, and has an empty bypass list | MEDIUM | F-000, F-001, GitHub admin access | `.gitignore`, repository settings | Working tree; `https://github.com/ceditech/nyavista/settings/rules/20211916` |
| F-000 | 0 | Locate and map root STABLE framework | P0 | NOT_STARTED | — | — | Complete framework read; workflow mapped; no invented rules | Path/version and review note | CRITICAL | Repository access | Constraints/specs | — |
| F-001 | 0 | Repository audit | P0 | NOT_STARTED | — | — | Current architecture, changes, dependencies and gaps documented | Audit report | HIGH | F-000 | Architecture | — |
| F-010 | 1 | Central brand/company configuration | P0 | NOT_STARTED | — | — | US ownership and global positioning have one source of truth | Unit/render checks | MEDIUM | F-001 | Brand/ownership | — |
| F-011 | 1 | Translate approved mockup into design tokens | P0 | NOT_STARTED | — | — | Light/dark colors, typography, spacing, radii, elevation and states are centralized | Token/unit/visual checks | HIGH | F-000, F-001 | Components/design system | — |
| F-012 | 1 | Build mockup-aligned shared components | P0 | NOT_STARTED | — | — | Cards, chips, buttons, badges, navigation and media controls match baseline accessibly | Component/visual/a11y checks | HIGH | F-011 | Components | — |
| F-013 | 1 | Establish visual-regression workflow | P1 | NOT_STARTED | — | — | Stable screenshots cover both themes and agreed breakpoints | Baseline artifacts | HIGH | F-011, F-012 | Testing | — |
| F-014 | 2 | Marketing homepage visual implementation | P0 | NOT_STARTED | — | — | Marketing panel hierarchy is reproduced responsively in light/dark themes | Screenshots/E2E/a11y | HIGH | F-011, F-012 | Marketing | — |
| F-020 | 3 | Global/country/region feed architecture | P0 | NOT_STARTED | — | — | Configurable geography; no discriminatory hardcoding | Unit/E2E/fairness checks | HIGH | F-010 | Geographic coverage | — |
| F-021 | 3 | News feed and story visual implementation | P0 | NOT_STARTED | — | — | Feed/story panels guide responsive, accessible light/dark screens | Screenshots/E2E/a11y | HIGH | F-012, F-020 | Public UX | — |
| F-022 | 3 | Mobile feed and video visual implementation | P0 | NOT_STARTED | — | — | Mobile panels guide accessible touch-first responsive flows | Device screenshots/E2E | HIGH | F-012, media data | Public UX | — |
| F-031 | 5 | Editorial dashboard visual implementation | P1 | NOT_STARTED | — | — | Admin panel guides metrics, queues, risks and coverage in both themes | Screenshots/E2E/a11y | HIGH | F-012, RBAC | Admin UX | — |
| F-030 | 6 | Server-side RBAC and Firebase rules | P0 | NOT_STARTED | — | — | Unauthorized access denied in UI and backend | Rules/integration tests | CRITICAL | Auth/data model | Security | — |
| F-040 | 7 | Rights-aware ingestion | P0 | NOT_STARTED | — | — | Rights enforced; no paywall bypass/full-text default | Unit/integration logs | CRITICAL | Sources/providers | Content rights | — |
| F-050 | 8 | Event clustering | P0 | NOT_STARTED | — | — | Related reports cluster; unrelated reports remain separate | Edge-case suite | HIGH | Ingestion/embeddings | AI pipeline | — |
| F-060 | 9 | Structured multi-source summary | P0 | NOT_STARTED | — | — | Schema-valid, attributed, neutral, auditable | Schema/red-team/editor tests | CRITICAL | Clusters/LLM | AI/editorial | — |
| F-070 | 10 | Rights-cleared media workflow | P1 | NOT_STARTED | — | — | Attribution, captions, transcript, review and retry work | Integration/E2E | HIGH | Editorial/storage | Media pipelines | — |
| F-080 | 12 | Corrections and AI disclosure | P0 | NOT_STARTED | — | — | Public correction history and disclosures visible | E2E/legal review | CRITICAL | Publishing | Trust/legal | — |
| F-090 | 14 | Production release gate | P0 | NOT_STARTED | — | — | All release checklist gates approved | Release report | CRITICAL | All P0/P1 work | Deployment | — |

## Feature implementation card

Copy this section for each feature.

```markdown
### [FEATURE-ID] Feature name

- Phase / epic:
- Owner:
- Priority / risk:
- Status:
- Requested outcome:
- User and business value:
- In scope:
- Out of scope:
- Dependencies:
- Files/components/services affected:
- Data/schema/migration impact:
- Provider and environment impact:
- Rights/privacy/security impact:
- Accessibility/localization/geographic-fairness impact:
- Mockup panel(s) used:
- Visual baseline path/version/hash:
- Required themes/breakpoints:

#### STABLE record
- Framework path and version/commit:
- Pre-coding steps completed:
- Implementation checkpoints completed:
- Review steps completed:
- Evidence links/commands/results:
- Deviations and approval:

#### Acceptance criteria
- [ ] Given/when/then criterion 1
- [ ] Failure and empty states
- [ ] Authorization and validation
- [ ] Accessibility and responsive behavior
- [ ] Localization/timezone/geography behavior
- [ ] Analytics/observability where applicable
- [ ] Documentation updated

#### Verification
- [ ] Lint
- [ ] Type check
- [ ] Unit tests
- [ ] Component tests
- [ ] Integration tests
- [ ] E2E tests
- [ ] Security/permission tests
- [ ] Accessibility checks
- [ ] Production build
- [ ] Manual flow verification
- [ ] Applicable mockup panels reviewed
- [ ] Light-theme visual comparison captured
- [ ] Dark-theme visual comparison captured
- [ ] Mobile/desktop breakpoint comparison captured
- [ ] Intentional deviations documented and approved

#### Delivery evidence
- Test/build results:
- Screenshots/logs/reports:
- Known limitations:
- Rollback plan:
- Docs changed:
- Commit/PR:
- Reviewer/approval/date:
```

### F-015 Living sprint tracker and agent handoff foundation

- Phase / epic: Phase 1 foundation
- Owner: Codex
- Priority / risk: P0 / HIGH
- Status: IN_REVIEW
- Requested outcome: first-pass app shell, MVP-important demo surfaces, organic sprint tracker UI, and living cross-agent handoff.
- In scope: semantic product configuration, shared design tokens, light/dark responsive shell, demo briefing, editorial overview, visual sprint phases, completion rates, polling interaction, implementation steps, and documentation.
- Out of scope: live markdown parsing, database persistence, authentication, ingestion, AI providers, real news, publishing, deployment, and progression into another delivery phase.

#### STABLE record

- Framework path and version/commit: `STABLE_FRAMEWORK.md`, repository commit `f8ab99e`.
- Pre-coding: required documents and approved mockup read; clean documentation-only baseline confirmed; scope, mock/live boundary, visual risks, acceptance criteria, tests, and rollback recorded before app implementation.
- Build: centralized product identity in `lib/product.ts`; semantic tokens and reusable visual patterns; truthful demo labels; keyboard focus; reduced-motion support; responsive mobile navigation.
- Review: marketing, feed/story hierarchy, mobile character, editorial dashboard, and design-system panels compared in light and dark at desktop and 390×844 mobile viewport.
- Visual comparison: calm editorial hierarchy, serif/sans pairing, 12–18px card language, restrained indigo/violet/gold accents, compact dashboard density, source/AI status treatments, and theme-specific surfaces align with the approved direction.
- Intentional deviations: abstract CSS artwork replaces generated mockup photography to avoid unlicensed media; multiple product panels are consolidated into one first-pass workspace; real viewport layouts replace presentation-board proportions; charts and counts are explicitly fictional planning data.

#### Acceptance and verification

- [x] Responsive app shell and three navigable first-pass surfaces.
- [x] Tracker organised by sprint phase with completion bars, selected-sprint ring, implementation steps, polling status, and agent pulse.
- [x] Living `CLAUDE_HANDOFF.md` created with ownership, evidence, risks, rollback, queue, and update template.
- [x] Light/dark theme interaction, desktop and mobile responsive review, semantic DOM snapshot, and browser console review (no warnings/errors).
- [x] Lint: PASS — ESLint, 2026-08-01.
- [x] Type check: PASS — strict TypeScript `--noEmit`, 2026-08-01.
- [x] Tests: PASS — 2/2 Node rendered-shell/documentation tests, 2026-08-01.
- [x] Production build: PASS — vinext/Vite, 2026-08-01.
- [ ] Automated accessibility scanner and screen-reader manual pass — deferred to F-013/Phase 13 workflow; semantic and keyboard-focused review completed.
- [ ] Live markdown synchronisation — deliberately deferred; the current UI states that it is a planning snapshot.

- Security/rights/editorial: no credentials, external calls, publisher marks, real reports, or publishing capabilities. All demo content and operational metrics are visibly fictional/non-live.
- Accessibility/i18n/geographic fairness: WCAG-oriented semantics, focus, reduced motion, touch-sized controls, responsive layout; English copy only; geography visual explicitly separates commercial priority from editorial importance.
- Migration/rollback: no data migration. Roll back by removing the generated application scaffold and reverting this tracker/handoff entry.
- Next approval required: Phase 1 review or explicit approval for a named next tracker item; do not automatically advance to Phase 2, 3, or 5.

## Risk register

| ID | Risk | Area | Likelihood | Impact | Severity | Mitigation | Trigger/indicator | Owner | Status |
|---|---|---|---|---|---|---|---|---|---|
| R-001 | STABLE framework missing/unread | Process | Medium | Critical | CRITICAL | Block coding; locate/read complete framework | No root framework path | — | OPEN |
| R-002 | Unauthorized publisher use | Legal | Medium | Critical | CRITICAL | Rights registry, minimal storage, attribution, review | Unknown rights/full text/media | — | OPEN |
| R-003 | AI hallucination/misattribution | Editorial/AI | High | Critical | CRITICAL | Structured inputs, validation, citations, review, audit | Unsupported claim/quote/source | — | OPEN |
| R-004 | Geographic ranking bias | Product/editorial | Medium | High | HIGH | Separate market priority from importance; coverage analytics | Non-priority suppression | — | OPEN |
| R-005 | Client-only authorization | Security | Medium | Critical | CRITICAL | Server RBAC and Rules tests | Direct API access succeeds | — | OPEN |
| R-006 | Mock presented as live | Trust | Medium | High | HIGH | Visible labels, provider status, truthful docs | UI claims live integration | — | OPEN |
| R-007 | Media cost escalation | Operations | Medium | High | HIGH | Mocks, queues, quotas, cost telemetry | Spend exceeds budget | — | OPEN |
| R-008 | Mockup treated as literal functional specification | UX/product | Medium | High | HIGH | Written requirements and accessibility override incidental image details | Generated placeholder copied as truth | — | OPEN |
| R-009 | Light/dark visual drift | UX | Medium | Medium | MEDIUM | Shared semantic tokens and visual regression | Theme-specific components diverge | — | OPEN |
| R-010 | Responsive divergence from reference | UX/accessibility | Medium | High | HIGH | Breakpoint QA and documented adaptations | Overflow, clipping, unreadable density | — | OPEN |

## Decision log

| ID | Date | Decision | Context/options | Consequences | Approver | Related items |
|---|---|---|---|---|---|---|
| D-001 | YYYY-MM-DD | Example | — | — | — | — |

## Test and quality dashboard

| Gate | Required command/tool | Last result | Date | Evidence | Blocking issues |
|---|---|---|---|---|---|
| Lint | Repository-defined | NOT_RUN | — | — | — |
| Type check | Repository-defined | NOT_RUN | — | — | — |
| Unit/component | Repository-defined | NOT_RUN | — | — | — |
| Integration/E2E | Repository-defined | NOT_RUN | — | — | — |
| Firebase Rules | Emulator/test suite | NOT_RUN | — | — | — |
| Accessibility | Automated + manual | NOT_RUN | — | — | — |
| Security | Review/tests | NOT_RUN | — | — | — |
| Production build | Repository-defined | NOT_RUN | — | — | — |
| Light-theme visual regression | Approved screenshots | NOT_RUN | — | — | — |
| Dark-theme visual regression | Approved screenshots | NOT_RUN | — | — | — |
| Responsive mockup comparison | Mobile/tablet/desktop | NOT_RUN | — | — | — |

## Documentation tracker

| Document | Status | Owner | Last updated | Review required | Notes |
|---|---|---|---|---|---|
| README.md | NOT_STARTED | — | — | Engineering | — |
| NYAVISTA_PRODUCT_SPECS_INSTRUCTIONS.md | DRAFT | — | — | Product/engineering | — |
| CONSTRAINTS.md | DRAFT | — | — | All disciplines | — |
| Architecture/data/routes | NOT_STARTED | — | — | Engineering/security | — |
| AI/editorial/content rights | NOT_STARTED | — | — | Editorial/legal | — |
| Accessibility/i18n/geography | NOT_STARTED | — | — | Product/QA | — |
| Testing/deployment/limitations | NOT_STARTED | — | — | Engineering/operations | — |

## Phase completion report

```text
PHASE COMPLETED:
DATE / OWNER:
STABLE FRAMEWORK REFERENCE:
STABLE EVIDENCE:
FILES CREATED:
FILES MODIFIED:
FEATURES IMPLEMENTED:
ACCEPTANCE CRITERIA:
TESTS RUN AND RESULTS:
BUILD STATUS:
KNOWN ISSUES:
RISKS / MITIGATIONS:
SECURITY NOTES:
EDITORIAL / LEGAL NOTES:
ACCESSIBILITY NOTES:
INTERNATIONALIZATION / GEOGRAPHIC-FAIRNESS NOTES:
DOCUMENTATION UPDATED:
MIGRATION / ROLLBACK:
RECOMMENDED BRANCH:
RECOMMENDED COMMIT:
APPROVAL:
NEXT PHASE:
```

## Release-readiness checklist

### Product and content

- [ ] All P0/P1 scope is `DONE` or explicitly deferred with approval.
- [ ] All applicable screens are compared with `docs/design/nyavista-ui-mockup-light-dark.png`.
- [ ] Light and dark visual baselines are approved with documented deviations.
- [ ] Global positioning and E-DEAL EXPRESS LLC ownership are accurate.
- [ ] Demo/mock/live content and providers are unmistakably labeled.
- [ ] Source links, AI disclosures, correction and reporting processes work.
- [ ] Market priority is not conflated with editorial importance.

### Engineering and operations

- [ ] Every shipped feature has complete STABLE evidence.
- [ ] Lint, types, tests, Rules tests, and production build pass.
- [ ] Migrations, indexes, environment variables, backups, and rollback are verified.
- [ ] Monitoring, alerts, quotas, cost controls, and incident ownership exist.
- [ ] No secrets, debug bypasses, or unauthorized data are committed.

### Security, legal, and quality

- [ ] RBAC and privileged workflows pass adversarial tests.
- [ ] Rights, privacy, consent, retention, and removal processes are reviewed.
- [ ] WCAG 2.2 AA review has no unresolved critical issue.
- [ ] Locale, timezone, language, and geographic-fairness cases pass.
- [ ] Legal/editorial/security owners approve launch.

### Release record

- Release version/tag:
- Commit SHA:
- Staging URL/result:
- Production URL/result:
- Smoke-test report:
- Rollback target/procedure:
- Approval names/dates:
