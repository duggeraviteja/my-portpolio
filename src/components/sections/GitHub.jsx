import React, { useMemo } from 'react';

const SEED = 42;
function seededRand(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function buildHeatmap() {
  const rand = seededRand(SEED);
  const cells = [];
  for (let week = 0; week < 53; week++) {
    for (let day = 0; day < 7; day++) {
      const isWeekend = day === 0 || day === 6;
      const r = rand();
      const base = isWeekend ? r * 0.6 : r;
      let level = 0;
      if (base > 0.25) level = 1;
      if (base > 0.50) level = 2;
      if (base > 0.70) level = 3;
      if (base > 0.85) level = 4;
      cells.push(level);
    }
  }
  return cells;
}

const legLevels = [0, 1, 2, 3, 4];

const GitHub = ({ data }) => {
  const cells = useMemo(buildHeatmap, []);

  return (
    <section id="section-github" className="section">
      <div className="sec-head">
        <span className="sec-kicker">05 · github.activity</span>
        <span className="sec-comment">
          <span className="sc-punct">// </span>contribution graph
        </span>
      </div>

      <div className="gh-grid">
        <div className="gh-card">
          <div className="gh-card-title">
            <span>Contributions — last 12 months</span>
            <span className="gh-commits">{data.commitsYear} commits</span>
          </div>
          <div className="heatmap-wrap">
            <div className="heatmap-grid" aria-label="GitHub contribution heatmap">
              {cells.map((level, i) => (
                <div key={i} className={`hm-cell hm-l${level}`} />
              ))}
            </div>
          </div>
          <div className="hm-legend">
            <span>Less</span>
            {legLevels.map((l) => (
              <div key={l} className={`hm-leg-cell hm-l${l}`} />
            ))}
            <span>More</span>
          </div>
        </div>

        <div className="gh-card">
          <div className="gh-card-title">
            <span>Pinned repositories</span>
            <a
              href={`https://github.com/${data.username}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-2)', fontFamily: 'var(--mono-font)', fontSize: '11px' }}
            >
              @{data.username} ↗
            </a>
          </div>
          <div className="repo-list">
            {data.repos.map((repo) => (
              <a
                key={repo.name}
                className="repo-card"
                href={`https://github.com/${data.username}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="repo-top">
                  <span className="repo-name">{repo.name}</span>
                  <span className="repo-public">Public</span>
                </div>
                <p className="repo-desc">{repo.desc}</p>
                <div className="repo-meta">
                  <span>
                    <span className="lang-dot" style={{ background: repo.langColor }} />
                    {repo.lang}
                  </span>
                  <span><i className="fa-regular fa-star" /> {repo.stars}</span>
                  <span><i className="fa-solid fa-code-fork" /> {repo.forks}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
