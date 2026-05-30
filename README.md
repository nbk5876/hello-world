# Hello World

A static web page that shows **days until the November 3, 2026 midterm elections**, plus the post series **"Use Cursor to Say Hello World"**.

Posted on two NextDoor groups — **Responsible AI** (AI angle) and **National Politics Chat** (midterm countdown angle). Each ND post links to a full reference page on this site.

Built with HTML, CSS, and JavaScript. Hosted free on **GitHub Pages**.

## Live site

Live site: `https://nbk5876.github.io/hello-world/`

Example lesson URL: `https://nbk5876.github.io/hello-world/lessons/01-why-cursor.html`

## Local preview

Open `index.html` in your browser, or from this folder:

```bash
python -m http.server 8080
# Then visit http://localhost:8080
```

## GitHub Pages setup (one time)

1. Create a new repository on GitHub named **`hello-world`** (public).
2. Push this project to the `main` branch.
3. On GitHub: **Settings → Pages**
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **`main`** / **`/ (root)`**
5. Save. GitHub will show your live URL in a minute or two.

## Push-to-publish workflow

After Pages is enabled, every push to `main` updates the live site. In Cursor, ask the agent to commit and push when you are ready.

## Project structure

```
hello-world/
├── index.html              # Landing page + lesson index
├── lessons/                # Reference pages (one per ND post)
│   └── 01-why-cursor.html
├── css/
│   ├── style.css           # Shared site styles
│   └── lesson.css          # Lesson page layout
├── js/countdown.js
└── assets/lessons/         # Screenshots per lesson
    └── 01/
```

## NextDoor posting model

| Channel | Content |
|---------|---------|
| **NextDoor (RAI or NPC)** | Short intro + link to lesson page |
| **This site** | Full steps, screenshots, diagrams, ND paste-ready blurbs |

Each lesson page includes suggested intro text for both **Responsible AI** and **National Politics Chat**.

## Future enhancements

Optional later — not needed for v1:

- Remaining lesson pages (02–12) as the series progresses
- Render + PostgreSQL for dynamic features
