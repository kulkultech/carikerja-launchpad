---
title: "Step 3: Configure AI Business Stack"
description: Configure Cursor/Antigravity privacy modes and write helper prompts for copywriting and analysis.
---

AI tools are your force multiplier. They allow you to operate as a one-person agency: drafting marketing copy, calculating budget layouts, and writing clean codebase components. In this step, you configure your IDE securely and prepare your business prompts.

---

## 🎯 Step Objectives
*   Configure Privacy Mode in Cursor or Antigravity IDE.
*   Establish your AI prompts for copy-writing and project analysis.

---

## 🏃‍♂️ Action Guide

### 1. Privacy Settings (Crucial)
To respect commercial client confidentiality, verify that telemetry collection is turned off:
*   **In Cursor:** Open **Cursor Settings** (Gear icon) -> **General** -> Toggle **Privacy Mode** to **ON**. Then go to regular Settings (`Cmd+,`), search for `telemetry`, and check that telemetry is disabled.
*   **In Antigravity:** Set `telemetry.enabled = false` and `agent.sharing = false` in your `.antigravityrc` config file.

### 2. Craft Business Scaffolding Prompts
Use your AI assistant to quickly analyze client friction points and design solutions. Add these prompts to your helper template:

*   **Copywriting Prompt:**
    ```text
    Context: I am drafting a headline and introductory copy for my portfolio page. 
    My target service is [Service Offering] for [Target Niche].
    
    Task: Write 3 compelling variations of client-facing headline copy focusing on business outcomes (e.g., saving hours, gaining leads) rather than technical syntax jargon.
    ```
*   **System Scoping Prompt:**
    ```text
    Context: A client in [Niche] needs an online form that syncs contacts to Google Sheets and shoots email confirmations.
    
    Task: Draft a simple architectural outline summarizing the technical flow, estimated integration complexity (easy, moderate, hard), and potential API/service costs (e.g., SendGrid, Vercel free tiers).
    ```
**Post a message in the Discord channel saying you have completed the installation. Don't forget to attach a screenshot of your completed setup**
