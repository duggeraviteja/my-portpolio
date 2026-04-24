import React, { useState, useEffect, useRef, useCallback } from 'react';
import './index.css';
import PORTFOLIO from './data';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import GitHub from './sections/GitHub';
import Certifications from './sections/Certifications';

/* ─── Constants ─────────────────────────────────────────────────────────── */
const SECTIONS = [
  { id: 'readme',     label: 'README.md',       iconClass: 'ft-md',  icon: 'fa-regular fa-file-lines' },
  { id: 'skills',     label: 'skills.yml',       iconClass: 'ft-yml', icon: 'fa-regular fa-file-code' },
  { id: 'projects',   label: 'Projects.java',    iconClass: 'ft-java',icon: 'fa-regular fa-file-code' },
  { id: 'experience', label: 'Experience.java',  iconClass: 'ft-java',icon: 'fa-regular fa-file-code' },
  { id: 'github',     label: 'github.activity',  iconClass: 'ft-act', icon: 'fa-regular fa-file' },
  { id: 'certs',      label: 'Credentials.xml',  iconClass: 'ft-xml', icon: 'fa-regular fa-file-code' },
];

const ACTIVITY_ICONS = [
  { id: 'files',  icon: 'fa-solid fa-folder',           label: 'Explorer' },
  { id: 'search', icon: 'fa-solid fa-magnifying-glass',  label: 'Search' },
  { id: 'git',    icon: 'fa-solid fa-code-branch',       label: 'Source Control' },
  { id: 'debug',  icon: 'fa-solid fa-bug',               label: 'Run & Debug' },
  { id: 'ext',    icon: 'fa-solid fa-puzzle-piece',      label: 'Extensions' },
];

const OUTLINE_METHODS = ['ship()', 'observe()', 'mentor()', 'review()'];

const ACCENT_SWATCHES = [
  { color: '#FF7250', label: 'coral' },
  { color: '#656DF9', label: 'periwinkle' },
  { color: '#22c55e', label: 'green' },
  { color: '#E0B313', label: 'gold' },
  { color: '#00C8FF', label: 'cyan' },
];

/* ─── useLocalStorage ────────────────────────────────────────────────────── */
function useLocalStorage(key, defaultVal) {
  const [val, setVal] = useState(() => {
    try { const s = localStorage.getItem(key); return s !== null ? JSON.parse(s) : defaultVal; }
    catch { return defaultVal; }
  });
  const set = useCallback((v) => {
    setVal(v);
    try { localStorage.setItem(key, JSON.stringify(v)); } catch {}
  }, [key]);
  return [val, set];
}

/* ─── Titlebar ───────────────────────────────────────────────────────────── */
function Titlebar({ activeSection, onCommandPalette, sidebarOpen, onToggleSidebar }) {
  const sec = SECTIONS.find((s) => s.id === activeSection) || SECTIONS[0];
  return (
    <header className="ide-titlebar" role="banner">
      <div className="traffic-lights" aria-hidden="true">
        <span className="traffic-dot red" />
        <span className="traffic-dot yellow" />
        <span className="traffic-dot green" />
      </div>

      <button
        className="titlebar-breadcrumb"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
        title="Toggle sidebar"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span>portfolio</span>
        <span className="bc-sep"> › </span>
        <span>src</span>
        <span className="bc-sep"> › </span>
        <span className="bc-active">{sec.label}</span>
      </button>

      <div className="titlebar-center">
        <button
          className="cmd-trigger"
          onClick={onCommandPalette}
          aria-label="Open command palette (Ctrl+K)"
          title="Ctrl+K / ⌘K"
        >
          <i className="fa-solid fa-magnifying-glass" style={{ fontSize: 11 }} />
          <span>Go to file…</span>
          <span className="cmd-hint">⌘K</span>
        </button>
      </div>

      <div className="titlebar-pills">
        <span className="tb-pill work-pill">
          <span className="status-dot" aria-hidden="true" />
          Open to work
        </span>
        <a
          className="tb-pill"
          href={PORTFOLIO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <i className="fa-brands fa-github" />
          {PORTFOLIO.handle}
        </a>
      </div>
    </header>
  );
}

/* ─── Activity Bar ───────────────────────────────────────────────────────── */
function ActivityBar({ activeGroup, onGroupChange }) {
  return (
    <nav className="ide-activity" aria-label="Activity bar">
      {ACTIVITY_ICONS.map((a) => (
        <button
          key={a.id}
          className={`activity-icon${activeGroup === a.id ? ' active' : ''}`}
          onClick={() => onGroupChange(a.id)}
          aria-label={a.label}
          title={a.label}
        >
          <i className={a.icon} />
        </button>
      ))}
      <div className="activity-spacer" />
      <button className="activity-icon" aria-label="Account" title="Account">
        <i className="fa-regular fa-circle-user" />
      </button>
      <button className="activity-icon" aria-label="Settings" title="Settings">
        <i className="fa-solid fa-gear" />
      </button>
    </nav>
  );
}

/* ─── Sidebar ────────────────────────────────────────────────────────────── */
function Sidebar({ activeSection, onNavigate }) {
  return (
    <aside className="ide-sidebar" aria-label="Explorer">
      <p className="sidebar-title">Explorer</p>

      <nav className="file-tree-root" aria-label="File tree">
        <div className="file-tree-folder">
          <i className="fa-solid fa-folder-open ft-icon" style={{ color: '#DCBB71' }} />
          <span>PORTFOLIO</span>
        </div>
        <div className="file-tree-folder" style={{ paddingLeft: 20 }}>
          <i className="fa-solid fa-folder-open ft-icon" style={{ color: '#DCBB71' }} />
          <span>src</span>
        </div>
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={`file-tree-item${activeSection === s.id ? ' active' : ''}`}
            onClick={() => onNavigate(s.id)}
            aria-current={activeSection === s.id ? 'page' : undefined}
          >
            <i className={`${s.icon} ft-icon ${s.iconClass}`} />
            <span>{s.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-divider" />
      <p className="sidebar-title">Outline</p>

      <div>
        <p className="outline-class">
          <span className="ol-kw">class </span>
          <span className="ol-type">Engineer</span>
        </p>
        {OUTLINE_METHODS.map((m) => (
          <button
            key={m}
            className="outline-item"
            onClick={() => onNavigate(m === 'ship()' ? 'experience' : m === 'observe()' ? 'github' : m === 'review()' ? 'projects' : 'skills')}
          >
            <i className="fa-solid fa-circle-dot ol-fn-icon" />
            <span>{m}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

/* ─── Editor Tabs ────────────────────────────────────────────────────────── */
function EditorTabs({ activeSection, onNavigate }) {
  return (
    <div className="ide-tabs" role="tablist" aria-label="Open files">
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          role="tab"
          aria-selected={activeSection === s.id}
          className={`ide-tab${activeSection === s.id ? ' active' : ''}`}
          onClick={() => onNavigate(s.id)}
        >
          <i className={`${s.icon} ${s.iconClass}`} />
          <span>{s.label}</span>
          <span className="tab-close" aria-hidden="true"><i className="fa-solid fa-xmark" /></span>
        </button>
      ))}
    </div>
  );
}

/* ─── Status Bar ─────────────────────────────────────────────────────────── */
function StatusBar({ activeSection }) {
  const sec = SECTIONS.find((s) => s.id === activeSection) || SECTIONS[0];
  return (
    <footer className="ide-statusbar" aria-label="Status bar">
      <div className="status-left">
        <span className="status-item">
          <i className="fa-solid fa-code-branch" />
          main
        </span>
        <span className="status-item plain">0 ↓ 0 ↑</span>
        <span className="status-sep">|</span>
        <span className="status-item plain">
          <i className="fa-solid fa-circle-xmark" style={{ fontSize: 10 }} /> 0
          &nbsp;&nbsp;
          <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: 10 }} /> 0
        </span>
      </div>
      <div className="status-right">
        <span className="status-item plain">{sec.label}</span>
        <span className="status-sep">|</span>
        <span className="status-item plain">UTF-8</span>
        <span className="status-sep">·</span>
        <span className="status-item plain">LF</span>
        <span className="status-sep">·</span>
        <span className="status-item plain">Ln 42, Col 17</span>
        <span className="status-sep">·</span>
        <span className="status-item plain">Java 17</span>
        <span className="status-sep">·</span>
        <span className="status-item">
          <i className="fa-regular fa-bell" />
        </span>
      </div>
    </footer>
  );
}

/* ─── Command Palette ────────────────────────────────────────────────────── */
function buildCmdItems(data) {
  return [
    { group: 'navigate', icon: 'fa-regular fa-file-lines', label: 'Go to: README.md', action: 'nav:readme', sub: 'hero' },
    { group: 'navigate', icon: 'fa-regular fa-file-code',  label: 'Go to: skills.yml', action: 'nav:skills' },
    { group: 'navigate', icon: 'fa-regular fa-file-code',  label: 'Go to: Projects.java', action: 'nav:projects' },
    { group: 'navigate', icon: 'fa-regular fa-file-code',  label: 'Go to: Experience.java', action: 'nav:experience' },
    { group: 'navigate', icon: 'fa-regular fa-file',       label: 'Go to: github.activity', action: 'nav:github' },
    { group: 'navigate', icon: 'fa-regular fa-file-code',  label: 'Go to: Credentials.xml', action: 'nav:certs' },
    ...data.projects.map((p) => ({
      group: 'projects',
      icon: 'fa-solid fa-folder',
      label: `Project: ${p.name}`,
      sub: p.tagline,
      action: `nav:projects`,
    })),
    { group: 'actions', icon: 'fa-solid fa-envelope', label: 'Copy email address', action: `copy:${data.email}` },
    { group: 'actions', icon: 'fa-brands fa-github', label: 'Open GitHub', action: `open:${data.githubUrl}` },
    { group: 'actions', icon: 'fa-brands fa-linkedin', label: 'Open LinkedIn', action: `open:${data.linkedin}` },
  ];
}

function CommandPalette({ onClose, onNavigate }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const allItems = buildCmdItems(PORTFOLIO);

  const filtered = query.trim()
    ? allItems.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()))
    : allItems;

  useEffect(() => { inputRef.current?.focus(); }, []);

  const runItem = useCallback((item) => {
    if (item.action.startsWith('nav:')) {
      onNavigate(item.action.replace('nav:', ''));
    } else if (item.action.startsWith('copy:')) {
      navigator.clipboard?.writeText(item.action.replace('copy:', ''));
    } else if (item.action.startsWith('open:')) {
      window.open(item.action.replace('open:', ''), '_blank', 'noopener,noreferrer');
    }
    onClose();
  }, [onNavigate, onClose]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === 'Enter') { if (filtered[active]) runItem(filtered[active]); }
    else if (e.key === 'Escape') { onClose(); }
  }, [active, filtered, runItem, onClose]);

  const groups = [...new Set(filtered.map((i) => i.group))];

  return (
    <div
      className="cmd-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="cmd-panel" onKeyDown={handleKeyDown}>
        <div className="cmd-search">
          <i className="fa-solid fa-magnifying-glass cmd-search-icon" />
          <input
            ref={inputRef}
            className="cmd-input"
            placeholder="Go to file, run command…"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActive(0); }}
            aria-label="Command palette search"
          />
          <kbd className="cmd-esc">ESC</kbd>
        </div>

        <div className="cmd-list" role="listbox">
          {groups.map((group) => {
            const items = filtered.filter((i) => i.group === group);
            const globalBase = filtered.indexOf(items[0]);
            return (
              <div key={group}>
                <p className="cmd-group">{group}</p>
                {items.map((item, localIdx) => {
                  const globalIdx = globalBase + localIdx;
                  return (
                    <div
                      key={globalIdx}
                      role="option"
                      aria-selected={active === globalIdx}
                      className={`cmd-item${active === globalIdx ? ' active' : ''}`}
                      onClick={() => runItem(item)}
                      onMouseEnter={() => setActive(globalIdx)}
                    >
                      <i className={`${item.icon} ci-icon`} />
                      <span>{item.label}</span>
                      {item.sub && <span className="ci-sub">{item.sub}</span>}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Tweaks Panel ───────────────────────────────────────────────────────── */
function TweaksPanel() {
  const [open, setOpen] = useState(false);
  const [accent, setAccent] = useLocalStorage('tw_accent', '#FF7250');
  const [density, setDensity] = useLocalStorage('tw_density', 'comfy');
  const [headingFont, setHeadingFont] = useLocalStorage('tw_font', 'sans');
  const [caretOn, setCaretOn] = useLocalStorage('tw_caret', true);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
  }, [accent]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('density-compact', 'density-roomy');
    if (density === 'compact') root.classList.add('density-compact');
    if (density === 'roomy')   root.classList.add('density-roomy');
  }, [density]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-mono', 'font-serif');
    if (headingFont === 'mono') root.classList.add('font-mono');
    if (headingFont === 'serif') {
      root.classList.add('font-serif');
      if (!document.querySelector('link[data-fraunces]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:wght@600&display=swap';
        link.dataset.fraunces = '1';
        document.head.appendChild(link);
      }
    }
  }, [headingFont]);

  /* expose caretOn for Hero via a custom event */
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('tw:caret', { detail: caretOn }));
  }, [caretOn]);

  return (
    <div className="tweaks-wrap">
      {open && (
        <div className="tweaks-panel" role="complementary" aria-label="Appearance tweaks">
          <p className="tw-title">Appearance</p>

          <div className="tw-row">
            <p className="tw-label">Accent color</p>
            <div className="tw-swatches">
              {ACCENT_SWATCHES.map((s) => (
                <button
                  key={s.color}
                  className={`tw-swatch${accent === s.color ? ' active' : ''}`}
                  style={{ background: s.color }}
                  onClick={() => setAccent(s.color)}
                  aria-label={`Set accent to ${s.label}`}
                  title={s.label}
                />
              ))}
            </div>
          </div>

          <div className="tw-row">
            <p className="tw-label">Density</p>
            <div className="tw-segments">
              {['compact', 'comfy', 'roomy'].map((d) => (
                <button
                  key={d}
                  className={`tw-seg${density === d ? ' active' : ''}`}
                  onClick={() => setDensity(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="tw-row">
            <p className="tw-label">Heading font</p>
            <div className="tw-segments">
              {['sans', 'mono', 'serif'].map((f) => (
                <button
                  key={f}
                  className={`tw-seg${headingFont === f ? ' active' : ''}`}
                  onClick={() => setHeadingFont(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="tw-row">
            <div className="tw-toggle-row">
              <span>Hero cursor</span>
              <div
                className={`tw-switch${caretOn ? ' on' : ''}`}
                role="switch"
                aria-checked={caretOn}
                tabIndex={0}
                onClick={() => setCaretOn(!caretOn)}
                onKeyDown={(e) => e.key === 'Enter' && setCaretOn(!caretOn)}
              />
            </div>
          </div>
        </div>
      )}

      <button
        className="tweaks-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle appearance tweaks"
        title="Appearance"
      >
        <i className="fa-solid fa-sliders" />
      </button>
    </div>
  );
}

/* ─── App ────────────────────────────────────────────────────────────────── */
export default function App() {
  const [activeSection, setActiveSection] = useState('readme');
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1100);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState('files');
  const [caretOn, setCaretOn] = useState(true);

  const contentRef = useRef(null);

  /* restore caret preference */
  useEffect(() => {
    try {
      const saved = localStorage.getItem('tw_caret');
      if (saved !== null) setCaretOn(JSON.parse(saved));
    } catch {}
    const handler = (e) => setCaretOn(e.detail);
    window.addEventListener('tw:caret', handler);
    return () => window.removeEventListener('tw:caret', handler);
  }, []);

  /* restore hash on mount */
  useEffect(() => {
    const hash = window.location.hash.replace('#section-', '');
    if (hash && SECTIONS.find((s) => s.id === hash)) {
      setActiveSection(hash);
      setTimeout(() => {
        document.getElementById(`section-${hash}`)?.scrollIntoView({ behavior: 'auto' });
      }, 100);
    }
  }, []);

  /* scroll-spy */
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(`section-${s.id}`)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id.replace('section-', '');
            setActiveSection(id);
            window.history.replaceState(null, '', `#section-${id}`);
          }
        });
      },
      { root: contentRef.current, rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* keyboard shortcut */
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setCmdOpen(true); }
      if (e.key === 'Escape') setCmdOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* close sidebar on mobile when clicking outside */
  useEffect(() => {
    if (window.innerWidth > 700) return;
    const onOutside = (e) => {
      if (sidebarOpen && !e.target.closest('.ide-sidebar') && !e.target.closest('.ide-activity')) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, [sidebarOpen]);

  const navigateTo = useCallback((id) => {
    const el = document.getElementById(`section-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    window.history.replaceState(null, '', `#section-${id}`);
    if (window.innerWidth <= 700) setSidebarOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((o) => !o);
    setActiveGroup('files');
  }, []);

  const handleGroupChange = useCallback((id) => {
    if (activeGroup === id && sidebarOpen) {
      setSidebarOpen(false);
    } else {
      setActiveGroup(id);
      setSidebarOpen(true);
    }
  }, [activeGroup, sidebarOpen]);

  return (
    <div className={`ide-shell${sidebarOpen ? ' sidebar-open' : ''}`}>
      <Titlebar
        activeSection={activeSection}
        onCommandPalette={() => setCmdOpen(true)}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={toggleSidebar}
      />

      <ActivityBar activeGroup={activeGroup} onGroupChange={handleGroupChange} />

      <Sidebar activeSection={activeSection} onNavigate={navigateTo} />

      <div className="ide-editor">
        <EditorTabs activeSection={activeSection} onNavigate={navigateTo} />
        <main
          id="editor-content"
          className="ide-content"
          ref={contentRef}
          role="main"
          aria-label="Portfolio content"
        >
          <Hero data={PORTFOLIO} caretOn={caretOn} onNavigate={navigateTo} />
          <Skills data={PORTFOLIO.skills} />
          <Projects data={PORTFOLIO.projects} />
          <Experience data={PORTFOLIO.experience} />
          <GitHub data={PORTFOLIO.github} />
          <Certifications data={PORTFOLIO.certifications} />
        </main>
      </div>

      <StatusBar activeSection={activeSection} />

      {cmdOpen && (
        <CommandPalette onClose={() => setCmdOpen(false)} onNavigate={navigateTo} />
      )}

      <TweaksPanel />
    </div>
  );
}
