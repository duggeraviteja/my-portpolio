# Raviteja Dugge — Portfolio

Personal developer portfolio built as a VS Code-style IDE. 
Every section is a "file" in the editor; the sidebar, tabs, and status bar stay in sync with scroll position to sell the IDE illusion.

**Live:** https://duggeraviteja.netlify.app/

---

## Stack

| Layer | Choice |
|---|---|
| UI | React 17 (Create React App) |
| Styling | Hand-written CSS — no component library |
| Fonts | Source Sans 3 (UI) · JetBrains Mono (code/chrome) |
| Icons | Font Awesome 6 Free |
| Deployment | Netlify |

## Commands

```bash
npm start        # dev server → localhost:3000
npm run build    # production build → /build
npm test         # test suite (watch mode)
```

## Structure

```
src/
  components/
    App.js            # IDE shell + all chrome (titlebar, sidebar, tabs, status bar,
    #                   command palette, tweaks panel)
    data.js           # PORTFOLIO constant — update this with your real content
    index.css         # Complete design system (CSS custom properties + all styles)
    sections/
      Hero.jsx        # README.md — landing + code card
      Skills.jsx      # skills.yml — skill bars + tag clouds
      Projects.jsx    # Projects.java — filterable project cards
      Experience.jsx  # Experience.java — vertical timeline
      GitHub.jsx      # github.activity — contribution heatmap + pinned repos
      Certifications.jsx  # Credentials.xml — cert cards
public/
  index.html          # Loads Google Fonts + Font Awesome 6
```

## Updating content

All portfolio data lives in **`src/components/data.js`** as a single `PORTFOLIO` object. Edit that file to update name, skills, projects, experience, GitHub repos, and certifications.

## Key interactions

- **⌘K / Ctrl+K** — command palette (navigate, copy email, open links)
- **Sidebar file click** — smooth-scrolls to section, updates tabs + breadcrumb
- **Tab click** — same as sidebar click
- **Tweaks panel** (bottom-right gear) — live accent color, density, heading font, cursor toggle
- **Scroll-spy** — IntersectionObserver keeps active file/tab/breadcrumb current as you scroll
