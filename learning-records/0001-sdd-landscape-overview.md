# 0001 — SDD Landscape Overview

**Date:** 2026-08-27
**Lesson:** [0001-the-sdd-landscape.html](../lessons/0001-the-sdd-landscape.html)

## What was learned

- **Vibe coding** fails at scale because of context drift, hallucination under ambiguity, and invisible architecture debt.
- **Spec-driven development** makes the specification — not the chat history — the single source of truth.
- The SDD spectrum has three rigor levels: Spec-First → Spec-Anchored → Spec-as-Source.
- Three major Spec-Anchored methodologies exist:
  - **OpenSpec**: lightweight, delta-based, best for brownfield
  - **Spec Kit**: standardized, phase-based, Constitution-driven, agent-agnostic
  - **BMAD**: heavyweight, multi-agent team simulation with personas

## Key insights

- All three methodologies are agent-agnostic — they work across Cursor, Claude Code, Copilot, Gemini CLI, etc.
- The choice between them is primarily about **overhead vs. project complexity**, not about which AI tool you use.
- OpenSpec is the lightest entry point for a solo Java/Spring Boot developer.

## Open questions

- How does delta spec merging work in practice when multiple changes overlap?
- How does Spec Kit's Constitution interact with existing linting/CI rules?
- Can BMAD personas be simplified for solo use, or is the overhead inherent?

## Zone of proximal development

Ready for: Hands-on OpenSpec setup — installing, initializing, writing a first delta spec for a Spring Boot endpoint.
