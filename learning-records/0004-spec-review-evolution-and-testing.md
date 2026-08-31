# 0004 — Spec Evolution, Review Protocols & Spec-to-Test Transformation

**Date:** 2026-08-30
**Lesson:** [0006-spec-review-evolution-and-testing.html](../lessons/0006-spec-review-evolution-and-testing.html)
**Reference:** [openspec-reference.html](../reference/openspec-reference.html)

## What was learned

1. **How to Mutate/Change Specs**:
   - **In-Flight Amendments**: The "Pause & Amend" protocol during `/opsx:apply`. Never edit code out-of-band; update `spec.md` and `design.md`, adjust `tasks.md`, and resume.
   - **Post-Archive Evolution**: The "New Delta" protocol. Never edit historical archives in `openspec/archive/`. Propose a new change using `## MODIFIED Requirements` to evolve living specs.
   - **Living Spec Refactoring**: Direct restructuring in `openspec/specs/` verified by `openspec validate --all`.

2. **The 4-Stage Human Spec Review Gate**:
   - Stage 1: `proposal.md` — Problem statement, multi-tenancy, and explicit non-goals (cutting speculative complexity).
   - Stage 2: `design.md` — Package-by-feature conventions, Liquibase changeset integrity, error code catalog, security principal extraction.
   - Stage 3: `specs/spec.md` — Deterministic BDD scenarios (`GIVEN/WHEN/THEN`), edge case coverage, and unique requirement IDs (`REQ-TAG-001`).
   - Stage 4: `tasks.md` — Phased dependency order (DB → Repo → Service → Controller → Tests) and independent verifiability.

3. **Code Review Playbook for AI-Generated Code**:
   - Spec-to-code conformance audits (rejecting unrequested helper classes).
   - Verifying business rule enforcement resides in domain service seams, not leaky controllers.
   - Guarding against JPA N+1 query traps.
   - Inspecting test assertion depth (rejecting trivial non-null checks).

4. **Spec-to-Test Transformation**:
   - Converting `spec.md` BDD scenarios into automated tests is the gold standard for achieving 100% behavioral traceability.
   - **Unit Tests**: Validation, string normalization, and domain limit checks via JUnit 5 & AssertJ.
   - **Slice Tests**: HTTP contracts, status codes, and security principals via `@WebMvcTest` & `MockMvc`.
   - **Integration Tests**: Unique database constraints, foreign keys, and Liquibase migrations via `@DataJpaTest` & Testcontainers PostgreSQL.

## Key Insights

- In SDD, code review becomes significantly faster and more deterministic because human review shifts left to the specification artifacts.
- Requirement IDs (`REQ-TAG-001`) create a permanent audit bridge between markdown documentation and automated CI test results.
