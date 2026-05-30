# Hello World — Project Handoff

Quick reference for continuing this project in Cursor (same chat or a new one).

## Purpose

Build a **live midterm countdown page** and document the journey as **"Use Cursor to Say Hello World"** — a 12-lesson series for two NextDoor groups:

- **Responsible AI (RAI)** — AI-assisted coding angle
- **National Politics Chat (NPC)** — midterm countdown angle

Same posts in both groups; each post links to a full reference page on this site.

## Live URLs

| Page | URL |
|------|-----|
| Home | https://nbk5876.github.io/hello-world/ |
| Lesson 01 | https://nbk5876.github.io/hello-world/lessons/01-why-cursor.html |
| GitHub repo | https://github.com/nbk5876/hello-world |

**GitHub username:** `nbk5876`

## Stack

- Static **HTML, CSS, JavaScript** only (v1)
- Hosted on **GitHub Pages** (branch `main`, root `/`)
- **Google Analytics:** `G-291QNWCB1H` (include full gtag snippet in every public page)
- Optional later: Render + PostgreSQL (not needed for v1)

## What readers build vs. what this site provides

| Readers follow along and build | This site (Tony builds as series docs) |
|--------------------------------|----------------------------------------|
| One landing page with election countdown | 12 lesson reference pages under `lessons/` |
| Push-to-publish workflow (Lessons 11–12) | Screenshots in `assets/lessons/NN/` |

Readers **read** the lesson pages; they do **not** recreate them.

## NextDoor workflow

- **Public site:** lesson reference pages only (no ND paste boxes on pages)
- **Instructor drafts:** `nd-posts/lesson-NN-nextdoor.txt` (local only, gitignored)
- Each ND file has RAI and NPC variants + intro line about the series

## Project layout

```
hello-world/
├── index.html              # Countdown + lesson index
├── lessons/                # Public reference pages
├── assets/lessons/NN/      # Screenshots per lesson
├── css/style.css           # Site styles
├── css/lesson.css          # Lesson page styles
├── js/countdown.js         # Days until Nov 3, 2026
├── nd-posts/               # ND drafts (gitignored, local only)
├── README.md               # Setup instructions
└── PROJECT.md              # This file
```

## Election date

**Tuesday, November 3, 2026** — used in `js/countdown.js`

## Lesson list (12)

| # | Topic | Page | Status |
|---|-------|------|--------|
| 01 | Why Cursor? | `lessons/01-why-cursor.html` | Done |
| 02 | Install Cursor | `lessons/02-install-cursor.html` | Not started |
| 03 | Pick a real purpose | `lessons/03-pick-a-purpose.html` | Not started |
| 04 | Open first project | `lessons/04-open-project.html` | Not started |
| 05 | Plan the files | `lessons/05-plan-files.html` | Not started |
| 06 | First HTML | `lessons/06-first-html.html` | Not started |
| 07 | Add CSS | `lessons/07-add-css.html` | Not started |
| 08 | JavaScript countdown | `lessons/08-countdown-js.html` | Not started |
| 09 | Preview locally | `lessons/09-preview.html` | Not started |
| 10 | Responsible AI in practice | `lessons/10-responsible-ai.html` | Not started |
| 11 | GitHub Pages setup | `lessons/11-github-pages.html` | Not started |
| 12 | Go live — commit & push | `lessons/12-go-live.html` | Not started |

## Publish workflow

Ask the agent to **commit and push** when ready. Every push to `main` updates GitHub Pages.

```powershell
git add .
git commit -m "Your message"
git push
```

Only commit when explicitly requested.

## New lesson checklist

1. Create `lessons/NN-topic.html` (copy structure from Lesson 01)
2. Add Google Analytics snippet in `<head>`
3. Add screenshot(s) to `assets/lessons/NN/` if available
4. Link from `index.html` (change `coming-soon` → `is-live` with href)
5. Create `nd-posts/lesson-NN-nextdoor.txt` (local only, do not commit)
6. Commit and push public files

## Local workspace

`c:\Users\gb105\Projects\cursor-hello-world`

## Continuing in a new chat

Example prompt:

> Continue the Hello World project. Read PROJECT.md. Lesson 01 is done. Next: Lesson 02 — Install Cursor.
