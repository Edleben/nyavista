# NyaVista Mandatory Constraints

## 1. Authority and scope

These constraints apply to every person and coding agent working on NyaVista, including Antigravity, Codex, Cursor, Claude Code, CI agents, and future automation. They apply to analysis, planning, code, configuration, data, content, tests, documentation, migrations, review, and deployment.

The words **MUST**, **MUST NOT**, **REQUIRED**, and **BLOCKING** are mandatory. A deviation requires documented approval, rationale, risk, scope, expiration/review date, and compensating controls.

## 2. STABLE framework: mandatory lifecycle

Every feature and functionality implementation **MUST follow the STABLE framework located at the repository root before coding, during implementation, and during review**.

### Blocking discovery rule

Before changing implementation files, the agent MUST:

1. Locate the root STABLE framework using repository inspection.
2. Read it completely, including directly required templates/references.
3. Record its exact path and version or commit in `PRODUCT_TRACKER.md`.
4. Map the requested work to its required pre-coding, implementation, verification, and review steps.
5. Resolve conflicts with repository instructions or report them.

If the framework is missing, unreadable, ambiguous for the requested work, or appears inconsistent with a higher-authority instruction, implementation is **BLOCKED**. The agent MUST NOT guess what STABLE means or invent replacement rules. It may perform read-only analysis and report the exact blocker.

### Before coding

- [ ] Root STABLE framework located and fully read.
- [ ] Framework path/version recorded.
- [ ] Applicable STABLE steps copied or linked into the feature card.
- [ ] Existing repository, working tree, behavior, tests, and instructions inspected.
- [ ] Outcome, scope, exclusions, dependencies, risks, and acceptance criteria defined.
- [ ] Security, editorial, legal, rights, privacy, AI, accessibility, localization, geography, data, cost, and deployment impacts assessed.
- [ ] Planned files, migrations, providers, environment changes, tests, and rollback identified.
- [ ] Required authority and phase approval confirmed.

### During implementation

- [ ] STABLE checkpoints followed in their defined order.
- [ ] Evidence captured as required by STABLE.
- [ ] Changes remain within approved scope.
- [ ] Existing functionality and unrelated user changes preserved.
- [ ] Tests and documentation evolve with the feature.
- [ ] Validation, authorization, observability, failure, loading, empty, and rollback behavior implemented.
- [ ] Any deviation stopped, documented, and approved before continuing.

### During review and completion

- [ ] STABLE review steps completed by the required reviewer/agent.
- [ ] Acceptance criteria traced to evidence.
- [ ] Lint, types, relevant tests, permissions, accessibility, and production build pass.
- [ ] Legal/editorial/AI/security/geographic risks rechecked.
- [ ] Documentation, tracker, migration, and rollback notes updated.
- [ ] Mock/live status and known limitations stated truthfully.
- [ ] Phase gate observed; no automatic advancement.

STABLE compliance is not satisfied by merely mentioning the framework. Evidence must demonstrate that its prescribed actions were performed.

## 3. Product identity and geographic neutrality

- NyaVista MUST be identified as a proprietary product of **E-DEAL EXPRESS LLC**, a United States company.
- NyaVista MUST be described as United States-founded and global.
- Eʋe/Togolese inspiration MAY be described as brand-name heritage because some co-founders are originally from Togo.
- The product MUST NOT be described as African-born, Africa-first, Togo-focused, diaspora-focused, or regionally exclusive.
- Initial commercial priorities are US, Canada, UK, New Zealand, and Australia, but commercial priority MUST remain separate from editorial importance.
- Sources and stories MUST NOT be admitted, rejected, ranked, or suppressed solely due to nationality, country size, continent, language, or commercial-market priority.
- Africa and Togo MUST use the same country/region architecture as all other geographies.
- Subject categories and geographies MUST be separate taxonomy dimensions.
- Brand, owner, markets, locales, contacts, and legal identity MUST be centrally configured.

## 4. Engineering and code constraints

- Use strict TypeScript and typed domain contracts. `any` requires explicit justification.
- Validate external input, AI output, forms, environment values, webhooks, and persistence boundaries with Zod or an equivalent approved schema.
- Keep domain logic outside page and presentation components.
- Separate UI, domain, persistence, providers, jobs, authorization, and validation.
- External dependencies MUST use provider interfaces when vendor lock-in or credentials are involved.
- Every provider MUST have truthful configuration, a controlled fallback/mock, observable failure behavior, and documentation.
- Server Components SHOULD be preferred; Client Components MUST be limited to required interaction.
- Working functionality MUST NOT be removed or regressed without documented reason and approval.
- Unrelated worktree changes MUST be preserved.
- Secrets, credentials, private keys, tokens, and production data MUST NOT be committed or exposed client-side.
- Code MUST NOT claim, simulate, or display a live success when only a mock exists.
- Dependencies MUST NOT be added, removed, or upgraded without checking compatibility, security, bundle/runtime impact, licensing, and existing lockfiles.
- Destructive changes, irreversible migrations, and data deletion require exact target verification, backup/rollback, and explicit authorization.

## 5. Architecture and data constraints

- Default architecture is Next.js App Router, React, TypeScript, Tailwind, shadcn/ui, Firebase Auth/Firestore/Storage/Admin, and server/background workers.
- Firebase and Supabase MUST NOT be mixed without an approved architectural decision record.
- Data models MUST support countries, regions, locales, languages, and timezones without special-case geography logic.
- Use ISO identifiers; persist canonical timestamps in UTC and display them locale-aware.
- Data writes and jobs MUST be idempotent where retries are possible.
- Firestore queries MUST be bounded, paginated, index-aware, and tested against rules.
- Schema and index changes require migration/compatibility and rollback notes.
- Background jobs require status, retry/backoff, failure/dead-letter behavior, observability, and cost controls.
- AI, ingestion, search, recommendation, translation, TTS, image, and video services MUST remain provider-neutral at domain boundaries.

## 6. Editorial and source constraints

- Source transparency takes priority over virality.
- Context takes priority over sensationalism.
- NyaVista synthesis MUST NOT be represented as original reporting.
- Original sources and attribution MUST be prominent and functional.
- Facts, analysis, opinion, official statements, uncertainty, and disputed claims MUST be distinguishable.
- Headlines MUST NOT be deceptive, fabricated, or more certain than the underlying evidence.
- Simplistic political-bias scores MUST NOT be displayed without a transparent, tested, defensible methodology. Prefer descriptive framing.
- Single-source clusters, conflicting figures, low confidence, translations, unknown rights, and concentrated geographic sourcing MUST be visibly flagged.
- Sensitive stories MUST support elevated or mandatory human review.
- Corrections, material updates, unpublishing, and reviewer actions MUST be auditable.
- Ranking systems MUST provide explainable inputs and monitoring for geographic/source concentration.

## 7. AI constraints

- AI MUST use only approved and permitted inputs.
- AI MUST NOT invent facts, quotes, sources, citations, dates, figures, identities, or events.
- AI MUST NOT reproduce excessive copyrighted text or conceal uncertainty.
- Structured outputs MUST be schema-validated; malformed output MUST be rejected safely.
- Provider, model, prompt version, request ID, time, usage/cost, input provenance, and review status MUST be traceable.
- Prompts MUST be versioned and reviewed like code.
- Automated outputs MUST NOT publish sensitive content without the required review.
- AI-generated and machine-translated content MUST be labeled where appropriate.
- AI MUST preserve geographic nuance and MUST NOT stereotype nationalities or treat a country/region as homogeneous.
- AI MUST NOT treat one national perspective as universal authority.
- High-risk claims and quotations MUST be attributable to permitted source evidence.
- Regeneration MUST preserve audit history rather than silently overwriting it.

## 8. Content rights and legal constraints

- No paywall bypassing.
- No unauthorized full-article scraping or storage by default.
- No unauthorized publisher logos, photographs, video, audio, or other media.
- Every source MUST have an explicit rights policy and attribution requirements.
- Only owned, licensed, authorized, or appropriately public-domain/generated media may be used.
- “Fair use” MUST NOT be assumed or encoded as a universal permission.
- Required policies include Terms, Privacy, Cookies, Copyright/DMCA, AI Disclosure, Editorial Standards, Corrections, Source Methodology, Recommendation Methodology, Community Guidelines, and Accessibility.
- Reporting, correction, removal, and rights-request flows MUST be usable and auditable.
- Privacy, consent, retention, deletion, and regional-notice behavior MUST be documented and implemented before relevant production processing.
- Legal text generated by an agent MUST be marked for qualified legal review before launch.

## 9. Security constraints

- Authorization MUST be server-side and enforced in Firebase Security Rules where applicable.
- Hiding controls or client route guards MUST NOT be treated as authorization.
- Least privilege MUST apply to users, service accounts, APIs, storage, and administrative actions.
- Authentication, session, password reset, email verification, account deletion, and privileged role changes require security tests.
- Apply input validation, output encoding, rate limiting, safe redirects, secure headers, CSP architecture, CSRF defenses where applicable, upload restrictions, webhook verification, and abuse controls.
- Firebase Admin credentials and all server secrets MUST remain server-only.
- Logs MUST NOT expose secrets, full credentials, unnecessary personal data, or restricted source content.
- Privileged actions MUST be auditable with actor, target, time, before/after state, and justification.
- Critical vulnerabilities, authorization bypasses, secret exposure, or data-loss risks block release.

## 10. UX and design constraints

- The interface MUST be original and MUST NOT clone another news/social platform.
- It MUST be responsive and usable on mobile, tablet, desktop, and large desktop without horizontal overflow.
- Every async feature MUST include loading, success, empty, error, retry, and unavailable-provider behavior as applicable.
- Demo, mock, AI-generated, translated, sponsored, corrected, and live content MUST be clearly distinguishable.
- User preferences MUST be understandable, reversible, and not infer nationality from location without consent.
- Country sections MUST be configurable/personalized, not permanently hardcoded for every user.
- Critical actions require clear confirmation and recovery where feasible.
- Dark/light themes, reduced motion, variable bandwidth, and unavailable media MUST be handled gracefully.

## 11. Accessibility constraints

- Target WCAG 2.2 AA.
- Use semantic structure, keyboard navigation, visible focus, accessible dialogs/forms, meaningful alt text, captions, transcripts, screen-reader announcements, sufficient contrast, adequate touch targets, and reduced-motion support.
- Status MUST NOT be conveyed by color alone.
- Audio/video controls MUST be keyboard and screen-reader accessible.
- New UI features require automated checks plus relevant manual keyboard/screen-reader review.
- Unresolved critical accessibility defects block release.

## 12. Internationalization and geographic-fairness constraints

- Initial locale variants: `en-US`, `en-CA`, `en-GB`, `en-NZ`, `en-AU`.
- Architecture MUST support additional languages without duplicating domain logic.
- Dates, numbers, currency, spelling, timezones, metadata, routes, and screen-reader text MUST be locale-aware.
- Machine translation MUST be labeled where appropriate and MUST NOT masquerade as authoritative original reporting.
- `hreflang`, canonicalization, and localized SEO MUST avoid duplicate or misleading pages.
- Recommendation and coverage tests MUST verify that non-priority countries are not automatically suppressed.
- Coverage analytics MUST surface source concentration, underrepresented geographies, translation reliance, and local/international balance.

## 13. Performance and reliability constraints

- Optimize for variable global connectivity, low bandwidth, mobile hardware, and unstable networks.
- Use responsive media, lazy loading, caching, pagination, code splitting, optimized fonts, minimal client JavaScript, and CDN-ready delivery.
- Set measurable budgets for page performance, media, AI latency, job retries, and provider cost before production release.
- Provider failures MUST degrade safely and MUST NOT corrupt content or block unrelated browsing.
- Media and background jobs require timeouts, retries, cancellation/recovery where feasible, and user-visible status.

## 14. Testing and verification constraints

- Every behavior change requires tests proportionate to risk.
- Required suites include unit, component, integration, E2E, schema, authorization, Firebase Rules, accessibility, and build validation where applicable.
- Critical scenarios include browsing/source links, auth/onboarding, follows/bookmarks, editor/admin permissions, malformed AI output, deduplication, cluster separation, media retry, corrections, locales/geographies, ranking fairness, and production build.
- Tests MUST cover expected behavior, validation failure, authorization denial, provider failure, empty state, and retry/recovery where relevant.
- A failing required test MUST NOT be hidden, deleted, weakened, or skipped merely to pass CI.
- Test fixtures MUST be fictional or legally permitted and MUST NOT contain production secrets or personal data.
- “Done” requires commands and results recorded in `PRODUCT_TRACKER.md`.

## 15. Documentation and tracker constraints

- Code, architecture, environment, migrations, APIs, prompts, rights, security, operations, limitations, and user-visible behavior MUST be documented with the change.
- `PRODUCT_TRACKER.md` MUST show current status, acceptance evidence, STABLE evidence, risks, tests, docs, and commit/PR.
- Documentation MUST distinguish planned, mocked, implemented, verified, and production-ready states.
- Broken links, obsolete instructions, inaccurate ownership/positioning, and undocumented environment requirements block phase completion.

## 16. Git and change-management constraints

- Use focused branches and logical, reviewable commits.
- Do not commit unrelated changes together.
- Inspect the working tree before modification; preserve user-owned changes.
- Do not rewrite shared history, force-push, reset destructively, or discard work without explicit authorization.
- Commit messages SHOULD use conventional intent such as `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, or `security`.
- Every phase report MUST recommend a branch and commit, list changed files, migrations, and rollback implications.
- No commit may contain secrets, generated dependency directories, private data, unauthorized content, or misleading live-integration claims.

## 17. Deployment and release constraints

- Separate local, test/emulator, staging, and production configuration.
- Production release requires verified environment variables, indexes, rules, migrations, secrets, domains, consent/legal configuration, monitoring, cost controls, backup, rollback, and smoke tests.
- CI/CD MUST run required lint, types, tests, security checks, and build gates.
- Deployments MUST be reproducible and attributable to a commit/tag.
- A rollback target and procedure MUST exist before production rollout.
- Do not deploy automatically merely because implementation is complete; deployment requires explicit authority and release approval.
- Critical security, legal/rights, editorial integrity, data-loss, accessibility, or STABLE compliance issues block release.

## 18. Agent execution template

Every coding-agent task SHOULD begin with:

```text
MODE: ANALYZE | IMPLEMENT | REVIEW | FIX | ROLLBACK
REQUESTED OUTCOME:
APPROVED PHASE / TRACKER ID:
ROOT STABLE FRAMEWORK PATH + VERSION:
STABLE STEPS APPLICABLE:
REPOSITORY / WORKTREE STATE:
FILES EXPECTED TO CHANGE:
ACCEPTANCE CRITERIA:
RISKS AND CONSTRAINTS:
TEST PLAN:
MIGRATION / ROLLBACK PLAN:
```

Every completion report MUST include:

```text
OUTCOME:
STABLE EVIDENCE:
FILES CREATED / MODIFIED:
BEHAVIOR IMPLEMENTED:
ACCEPTANCE RESULTS:
TEST / LINT / TYPE / BUILD RESULTS:
SECURITY / RIGHTS / EDITORIAL NOTES:
ACCESSIBILITY / I18N / FAIRNESS NOTES:
MOCK VS LIVE STATUS:
KNOWN LIMITATIONS:
DOCUMENTATION / TRACKER UPDATES:
MIGRATION / ROLLBACK:
RECOMMENDED COMMIT:
NEXT APPROVAL REQUIRED:
```

## 19. Exception template

```markdown
### Constraint exception request

- Constraint:
- Requested deviation:
- Business/technical reason:
- Scope and duration:
- Risk:
- Alternatives considered:
- Compensating controls:
- Validation plan:
- Rollback/expiration:
- Approver and date:
- Tracker/decision-log reference:
```

An exception is invalid until approved and recorded. STABLE requirements may only be varied if the STABLE framework itself permits it and the required authority approves the variation.

