---
title: Giving coding agents a memory
summary: A Claude Code plugin that uses an Obsidian vault as working memory, so plans, decisions and session history carry over from one session to the next.
order: 3
featured: true
---

Coding agents forget everything when a session ends. I keep my notes in an Obsidian vault, so I built a set of Claude Code skills and hooks that treat the vault as the agent's memory, and published them as a personal plugin marketplace.

## What it does

- **Routes work to the right place.** Specs, plans and research go into the project's folder in the vault, never scattered through code repositories.
- **Loads context on demand.** Each project has a hub note that indexes everything else; the agent reads the index first and opens a detail note only when the task needs it.
- **Keeps state current.** At the end of a session, decisions, open questions and next steps are folded back into the hub note, and the daily note gets a short log.
- **Checks itself.** An audit skill reports drift in folder structure and naming, and fixes only what I approve.

## What I learned

The hard part was deciding what the agent should *not* write. Most of the rules are about keeping notes short, current and in one place, so the next session reads a page instead of a pile.
