# Carikerja Launchpad: Grand Vision & Implementation Gaps

This document defines the overarching vision for the AI-Native Launchpad at Kulkul & Carikerja and outlines the current gaps we must resolve to make the program fully operational.

---

## 👑 The Grand Vision: Unbankruptable Engineers

Traditionally, software engineering programs focus on syntax, language rules, and basic manual coding. The Carikerja Launchpad flips this paradigm. With the rise of AI agents (Cursor, Claude Code, Antigravity, Conductor), writing boilerplate code has become a solved problem. 

**Our core philosophy is to build self-employed, independent builders:**
*   **Prompting & Orchestration:** We assess candidates on how well they use AI to scaffold, debug, and test code, rather than their ability to memorize syntax.
*   **Business Acumen:** Technical excellence must match client management, personal branding, lead generation, and scoping.
*   **Explanation & Comprehension:** A launcher must fully understand what their AI companion generates. The final check-in is an oral code walkthrough where they explain their design decisions.
*   **Practical Contribution:** Candidates contribute to a real-world sandbox (Client & Scope Manager) and the onboarding wiki itself, mastering Git workflows and social coding.

---

## ⚠️ Current Gaps & Action Plan

Below is an index of current gaps between our vision and the repository state, alongside the planned actions to resolve them.

### 🔴 Gap 1: Sandbox Codebase (Client & Scope Manager)
*   **Description:** The sandbox folder needs a functional Vite + Serverless starter app that mimics a real lead generation & scoping dashboard.
*   **Required Action:** Build the basic schema and mock client state, and introduce 3 intentional bugs/feature gaps in the calculation & validation logic for candidates to resolve.

### 🟡 Gap 2: Telemetry Disabling Guides
*   **Description:** We require candidates to disable telemetry in Cursor and Antigravity IDE for privacy and professional standards, but we haven't provided step-by-step instructions.
*   **Required Action:** Document the exact telemetry toggles for each IDE in [ai-tools-guidelines.md](file:///Users/abdurrachmanmappuji/Development/kulkultech/carikerja-launchpad/docs/ai-tools-guidelines.md).

### 🔴 Gap 3: Setup Videos (YouTube Playlist)
*   **Description:** Every step and tool explained will have a video introduction. We currently have no links or placeholders for these videos.
*   **Required Action:** The core team needs to record these short loom/YouTube videos. Once done, we will embed the playlists in the wiki steps.

### 🟡 Gap 4: Automated Testing Prompts
*   **Description:** Candidates need to run automated tests. We need to provide clear examples of prompts (e.g. for ChatGPT or Claude Code) to write unit tests for the Sandbox app.
*   **Required Action:** Add a prompting cheatsheet for testing in [ai-tools-guidelines.md](file:///Users/abdurrachmanmappuji/Development/kulkultech/carikerja-launchpad/docs/ai-tools-guidelines.md).
