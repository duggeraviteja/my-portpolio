import React, { useMemo } from 'react';
import { useGitHub } from '../useGitHub';

const SEED = 42;
function seededRand(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function buildFallbackHeatmap() {
  const rand = seededRand(SEED);
  return Array.from({ length: 53 * 7 }, (_, i) => {
    const isWeekend = i % 7 === 0 || i % 7 === 6;
    const base = rand() * (isWeekend ? 0.6 : 1);
    if (base > 0.85) return 4;
    if (base > 0.70) return 3;
    if (base > 0.50) return 2;
    if (base > 0.25) return 1;
    return 0;
  });
}

function timeAgo(iso) {
  if (!iso) return '';
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30)  return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

function RepoSkeleton() {
  return (
    <div className="repo-card repo-skeleton">
      <div className="skel skel-name" />
      <div className="skel skel-desc" />
      <div className="skel skel-meta" />
    </div>
  );
}

const legLevels = [0, 1, 2, 3, 4];

const GitHub = ({ data }) => {
  const { heatmap: liveHeatmap, commitsYear: liveCommits, repos, loading, error } = useGitHub(data.username);

  const fallbackHeatmap = useMemo(buildFallbackHeatmap, []);

  const cells       = liveHeatmap  ?? fallbackHeatmap;
  const commitsYear = liveCommits  ?? data.commitsYear;

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
            <span className="gh-commits">
              {loading ? '…' : `${commitsYear} commits`}
            </span>
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
            <span>Latest repositories</span>
            <a
              href={`https://github.com/${data.username}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-2)', fontFamily: 'var(--mono-font)', fontSize: '11px' }}
            >
              @{data.username} ↗
            </a>
          </div>

          <div className="repo-list repo-list-scroll">
            {loading && Array.from({ length: 5 }, (_, i) => <RepoSkeleton key={i} />)}

            {error && (
              <p className="repo-error">
                <i className="fa-solid fa-triangle-exclamation" /> Could not load repositories
              </p>
            )}

            {!loading && !error && repos && repos.map((repo) => (
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
                {repo.desc && <p className="repo-desc">{repo.desc}</p>}
                <div className="repo-meta">
                  <span>
                    <span className="lang-dot" style={{ background: repo.langColor }} />
                    {repo.lang}
                  </span>
                  <span><i className="fa-regular fa-star" /> {repo.stars}</span>
                  <span><i className="fa-solid fa-code-fork" /> {repo.forks}</span>
                  {repo.updatedAt && (
                    <span className="repo-updated">
                      <i className="fa-regular fa-clock" /> {timeAgo(repo.updatedAt)}
                    </span>
                  )}
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
