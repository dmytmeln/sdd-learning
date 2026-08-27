# 0002 — OpenSpec Hands-On (Personal-Library)

**Date:** 2026-08-27
**Lesson:** [0002-openspec-on-personal-library.html](../lessons/0002-openspec-on-personal-library.html)

## What was learned

- How to install and initialize OpenSpec CLI on a real project
- The full OpenSpec workflow cycle: `/opsx:propose` → review → `/opsx:apply` → `/opsx:archive`
- How to write and review a delta spec (ADDED / MODIFIED / REMOVED sections)
- The role of human-in-the-loop review — the spec is where alignment happens, not during coding
- How to enforce domain rules through spec review (user-scoped tags, package-by-feature convention)

## Key insights

- The spec is the bottleneck, not the code — most time is spent reviewing the proposal, not implementing
- Delta specs avoid the "boil the ocean" problem of documenting entire systems upfront
- OpenSpec is especially suited for brownfield work because it only documents what changes

## Open questions

- How well does `/opsx:archive` handle merging overlapping delta specs from parallel changes?
- Does the spec quality depend heavily on the AI model used, or is the structure enough?
- How does this compare in practice to Spec Kit's Constitution-first approach?

## Zone of proximal development

Ready for: Spec Kit on Gym CRM Platform — Constitution setup, distributed contract specs, OpenAPI-anchored workflows.
