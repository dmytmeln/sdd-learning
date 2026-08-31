# Teaching Notes

## User Preferences

- Primary stack: Java / Spring Boot (backend APIs)
- Starting level: Beginner to SDD, highly motivated to master OpenSpec deeply
- Motivation: AI agent workflows — wants an in-depth, rigorous course on **OpenSpec** (not just a high-level tryout)
- **⚠️ CRITICAL LEARNING GOALS FOR OPENSPEC**:
  - Fundamentals & Architecture: Living specs vs Delta changes, repo-native Git governance, context window budgeting
  - Deep Command Breakdown: Purpose, inputs, outputs, and mechanics of both Slash commands (`/opsx:explore`, `/opsx:propose`, `/opsx:apply`, `/opsx:sync`, `/opsx:archive`) and CLI commands (`openspec init`, `list`, `show`, `validate`, `view`, `archive`)
  - Exploratory Phase: In-depth mechanics of `/opsx:explore` (codebase probing, invariant discovery, trade-off analysis without polluting context)
  - Spec Engineering & Grammar: Delta spec semantics (`## ADDED`, `## MODIFIED`, `## REMOVED`, BDD Given/When/Then), `proposal.md`, `design.md`, `tasks.md` sequencing
  - Workflows & Trade-offs: Pros, cons, brownfield tactics, drift management, multi-change coordination
- Hands-on practice ground: `D:\Personal-Library`

## Working Notes

- User explicitly asked to slow down and go much deeper into OpenSpec rather than rushing through multiple frameworks
- Build dedicated, high-density lessons and rich reference guides
- Structure:
  1. OpenSpec Foundations, Architecture & Command Matrix
  2. Exploratory Spec Engineering with `/opsx:explore`
  3. Authoring Bulletproof Delta Specs & Living Documentation
  4. Execution, Validation, Drift Recovery & Real-world Workflows
