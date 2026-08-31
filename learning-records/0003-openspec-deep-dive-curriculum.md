# 0003 — OpenSpec Deep-Dive Masterclass Curriculum

**Date:** 2026-08-30
**Lessons:**
- [0002-openspec-foundations-and-commands.html](../lessons/0002-openspec-foundations-and-commands.html)
- [0003-openspec-explore-in-depth.html](../lessons/0003-openspec-explore-in-depth.html)
- [0004-authoring-bulletproof-delta-specs.html](../lessons/0004-authoring-bulletproof-delta-specs.html)
- [0005-execution-validation-and-workflows.html](../lessons/0005-execution-validation-and-workflows.html)
- Reference: [openspec-reference.html](../reference/openspec-reference.html)

## What Was Covered

1. **Foundations & Architecture**:
   - The Living Spec (`openspec/specs/`) vs Active Change Workspace (`openspec/changes/<id>/`) separation.
   - Dual interface distinction: Terminal CLI (`openspec init/list/show/validate/view/archive`) vs AI Slash Commands (`/opsx:explore`, `/opsx:propose`, `/opsx:apply`, `/opsx:sync`, `/opsx:archive`).
   - Context window token economics: Why bounded delta prompting prevents attention decay and hallucination.

2. **Exploratory Spec Engineering (`/opsx:explore`)**:
   - The "Thinking Partner" protocol for codebase probing without modifying state or generating disk files.
   - Identifying domain invariants, security boundaries, and database seams before proposing.
   - Creating trade-off matrices (Entity + Join Table vs JSONB vs Category reuse).
   - Formulating non-goals to bound AI agent scope.

3. **Delta Spec Grammar & Artifact Authoring**:
   - Structure of `proposal.md`, `design.md`, `tasks.md`, and `specs/<capability>/spec.md`.
   - The 3-part delta spec grammar: `## ADDED Requirements`, `## MODIFIED Requirements` (WAS/NOW), `## REMOVED Requirements`.
   - Formal BDD scenarios (GIVEN / WHEN / THEN) with unique requirement identifiers.

4. **Execution, Validation & Synchronization**:
   - Step-by-step task traversal under `/opsx:apply` with automated test checkpoints.
   - The golden rule of mid-flight spec amendments: update spec first, then resume coding.
   - Repository integrity linting via `openspec validate`.
   - Spec synchronization and archiving via `/opsx:archive`.
   - Brownfield legacy onboarding tactics and multi-branch Git patterns.

## Key Insights

- OpenSpec eliminates the "boil the ocean" upfront documentation burden by seeding living documentation incrementally through archived delta changes.
- `/opsx:explore` acts as a crucial pre-flight cognitive sandbox, preventing the premature solutioning anti-pattern.
- Bounding AI context to isolated delta specs (~10k–30k tokens) keeps LLMs operating at peak reasoning capacity.

## Zone of Proximal Development

Ready for: Hands-on execution of the exploratory probe (`/opsx:explore`) and proposal cycle on `D:\Personal-Library` using the OpenSpec CLI and AI workflow.
