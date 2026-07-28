---
title: "Step 10: Pitch Launch & Submit PR"
description: Launch your outreach campaign, register your profile page, and open a Pull Request.
---

This is the launch step. You will send your personalized pitches, submit your launcher profile to the community directory, and open a Pull Request.

---

## 🎯 Step Objectives
*   Launch your outreach campaign by sending your pitches to the 5 researched leads.
*   Add your launcher profile markdown file to the portal directory.
*   Commit your changes, push to your fork, and open a Pull Request.

---

## 🏃‍♂️ Action Guide

### 1. Send the Pitches
Take the 5 personalized outreach pitches you drafted in **Step 8** and send them to the corresponding contacts (via LinkedIn, email, or Instagram). Acknowledge receipt of replies and follow up professionally!

### 2. Create Your Launcher Profile Page
Create your profile card inside the portal directory. Create a new markdown file at:
`src/content/docs/launchers/YOUR_GITHUB_USERNAME.md`

Paste and fill out this template:
```markdown
---
title: "Your Name"
description: "Launcher profile"
---

# Your Name 👋

- **Niche/Focus:** (e.g. local vet clinics, B2B SaaS startups)
- **Service Offerings:** (e.g. Astro landing pages, webhook automations)
- **LinkedIn Profile:** [linkedin.com/in/username](https://linkedin.com/in/username)
- **Portfolio Website:** [yourportfolio.com](https://yourportfolio.com)
- **Goal in Launchpad:** (e.g. secure my first 3 freelance contracts)
- **GitHub:** [@YOUR_GITHUB_USERNAME](https://github.com/YOUR_USERNAME)
```
Save the file.

### 3. Commit and Push Your Changes
Run the git commit workflow to push your profile page to your fork:
```bash
# Navigate to the root directory
cd carikerja-launchpad

# Stage your new profile card
git add src/content/docs/launchers/YOUR_GITHUB_USERNAME.md
git commit -m "feat: complete onboarding challenge steps and register launcher profile"
git push origin feature/launcher-onboarding
```
*Note: If your local git requires you to sign commits but has not been set up yet, use `git commit --no-gpg-sign` to commit.*

### 4. Open a Pull Request (PR)
1. Go to the [Carikerja Launchpad GitHub Repo](https://github.com/kulkultech/carikerja-launchpad).
2. Click **New Pull Request**.
3. Choose your fork's `feature/launcher-onboarding` branch as the source and the main repository's `main` branch as the target.
4. Describe the target niche and offerings you selected, and click **Create Pull Request**.
5. Post your PR link in the Discord `#first-steps` channel and tag `@rrachman`. We will review your profile and schedule your matching check-in!
