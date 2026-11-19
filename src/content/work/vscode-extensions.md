---
title: Markdown tools for VS Code and its forks
summary: Seven extensions that make the Markdown preview in VS Code, Cursor and VSCodium more useful, with about 14,800 downloads on Open VSX.
order: 1
featured: true
links:
  - label: Publisher page on Open VSX
    href: https://open-vsx.org/namespace/jayblack388
---

I keep notes and docs in Markdown, and the built-in preview in VS Code-based editors leaves out things I use every day. So I built them as small, single-purpose extensions and published them on Open VSX, the registry that Cursor, VSCodium and other VS Code forks install from.

## The extensions

- **md-prettier-format**: Formats Markdown files with Prettier. 5,043 downloads.
- **md-lint**: Lints Markdown with markdownlint, with live diagnostics and auto-fix. 2,999 downloads.
- **md-checkboxes**: Click `[ ]` and `[x]` checkboxes in the preview to toggle them in the file. 2,378 downloads.
- **markdown-copy-button**: Adds a copy button to code blocks in the preview. 1,738 downloads.
- **markdown-theme-sync**: Matches the preview's light or dark styling to the editor theme. 1,077 downloads.
- **md-collapsible-sections**: Collapse and expand preview sections by clicking their headings. 794 downloads.
- **md-anchor-links**: Hover a heading in the preview to copy a link to it. 732 downloads.

Download counts are from Open VSX on 19 November 2026.

I also maintain Open VSX builds of two extensions written by other people, so that users of VS Code forks can install them: [Wrap Console Log](https://github.com/midnightsyntax/vscode-wrap-console-log) by midnightsyntax and [Alphabetical Sorter](https://github.com/ue/alphabetical-sorter) by ue.

## What I learned

Small extensions that do one thing are easier to keep working across editor updates than one large one. Each of these touches the preview through a narrow, documented hook, so when the editor changes, at most one of them breaks.
