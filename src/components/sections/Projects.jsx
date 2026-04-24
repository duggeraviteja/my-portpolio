import React, { useState, useEffect } from 'react';

const FILTERS = ['all', 'platform', 'tooling'];

const DSA_REPO = 'duggeraviteja/DSA-Using-JAVA';

function useDSACount() {
  const [count, setCount] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/repos/${DSA_REPO}/git/trees/HEAD?recursive=1`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.tree)) {
          const n = data.tree.filter((f) => f.type === 'blob' && f.path.endsWith('.java')).length;
          if (n > 0) setCount(n);
        }
      })
      .catch(() => {});
  }, []);
  return count;
}

const ProjectCard = ({ project }) => (
  <div
    className="proj-card"
    style={{ '--p-accent': project.accent }}
  >
    <div className="proj-card-inner">
      <div className="proj-header">
        <span className="proj-name">{project.name}</span>
        <span className="proj-id">{project.id}</span>
      </div>
      <p className="proj-tagline">{project.tagline}</p>
      <p className="proj-blurb">{project.blurb}</p>

      <div className="proj-metrics">
        {project.metrics.map((m) => (
          <div key={m.label} className="metric-cell">
            <span className="metric-value">{m.value}</span>
            <span className="metric-label">{m.label}</span>
          </div>
        ))}
      </div>

      <div className="proj-stack-row">
        <div className="proj-stack-tags">
          {project.stack.map((t) => (
            <span key={t} className="stack-tag">{t}</span>
          ))}
        </div>
        <div className="proj-links">
          {project.liveUrl && (
            <a className="proj-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square" /> live
            </a>
          )}
          <a className="proj-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" /> repo
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Projects = ({ data }) => {
  const [active, setActive] = useState('all');
  const dsaCount = useDSACount();
  const filtered = (active === 'all' ? data : data.filter((p) => p.kind === active)).map((p) => {
    if (p.id !== 'PRJ-03' || !dsaCount) return p;
    return {
      ...p,
      metrics: p.metrics.map((m) => m.label === 'Problems' ? { ...m, value: `${dsaCount}` } : m),
    };
  });

  return (
    <section id="section-projects" className="section">
      <div className="sec-head">
        <span className="sec-kicker">03 · Projects.java</span>
        <span className="sec-comment">
          <span className="sc-punct">/** </span>featured work<span className="sc-punct"> */</span>
        </span>
      </div>

      <div className="proj-filters" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-pill${active === f ? ' active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="proj-grid">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
