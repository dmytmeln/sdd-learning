# Mission: Spec-Driven Development for AI Agents

## Why

Learn spec-driven development (SDD) methodologies — **OpenSpec**, **Spec Kit**, and **BMAD** — by applying them hands-on to real codebases, not hypothetical examples.

## Context

- **Domain**: Backend services / APIs (Java, Spring Boot)
- **Starting level**: Brand new — has only heard the term
- **Learning style**: Practice-first. Theory only as brief context before doing real work.

## Practice Codebases

| Project | Architecture | Best SDD Fit |
|---|---|---|
| `D:\Personal-Library` | Modular monolith, package-by-feature, Java 17, PostgreSQL + pgvector, LangChain4j AI | **OpenSpec** — brownfield delta specs, rich domain invariants |
| `D:\gym-crm-platfrom` | Microservices (Eureka + Gateway + Core + Workload), Java 21, MySQL + MongoDB + Redis + ActiveMQ JMS | **Spec Kit / BMAD** — contract-first OpenAPI, distributed async, BDD |

## Success looks like

1. ~~Understand the landscape of SDD methodologies~~ ✅ (Lesson 1)
2. Apply OpenSpec to Personal-Library — write a real delta spec, use it to guide AI implementation
3. Apply Spec Kit to Gym CRM — write a Constitution and spec for a real feature
4. Apply BMAD to a greenfield service — use agent personas end-to-end
5. Be able to evaluate which methodology fits a given project

## Current state

- Lesson 1 complete (landscape overview, theory)
- Ready for first hands-on exercise
