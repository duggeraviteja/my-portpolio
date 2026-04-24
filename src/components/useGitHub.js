import { useState, useEffect } from 'react';

const LANG_COLORS = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Java:       '#B07219',
  Python:     '#3572A5',
  HTML:       '#E34C26',
  CSS:        '#563D7C',
  Go:         '#00ADD8',
  Rust:       '#DEA584',
  Ruby:       '#701516',
  Shell:      '#89E051',
  Vue:        '#41B883',
  PHP:        '#4F5D95',
};

function buildHeatmap(contributions) {
  const map = {};
  contributions.forEach(({ date, level }) => { map[date] = level; });

  const start = new Date();
  start.setDate(start.getDate() - 52 * 7);
  start.setDate(start.getDate() - start.getDay());

  const cells = [];
  for (let i = 0; i < 53 * 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    cells.push(map[d.toISOString().split('T')[0]] ?? 0);
  }
  return cells;
}

export function useGitHub(username) {
  const [state, setState] = useState({ heatmap: null, commitsYear: null, repos: null, loading: true, error: null });

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const [contribRes, reposRes] = await Promise.all([
          fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=15&type=public`),
        ]);

        if (!contribRes.ok) throw new Error(`Contributions API ${contribRes.status}`);
        if (!reposRes.ok)   throw new Error(`GitHub API ${reposRes.status}`);

        const contribData = await contribRes.json();
        const reposData   = await reposRes.json();

        if (cancelled) return;

        const heatmap     = buildHeatmap(contribData.contributions);
        const commitsYear = contribData.contributions.reduce((sum, c) => sum + c.count, 0);

        const repos = reposData
          .filter(r => !r.fork)
          .slice(0, 5)
          .map(r => ({
            name:      r.name,
            desc:      r.description || '',
            lang:      r.language || 'Text',
            langColor: LANG_COLORS[r.language] || '#888888',
            stars:     r.stargazers_count,
            forks:     r.forks_count,
            updatedAt: r.pushed_at,
          }));

        setState({ heatmap, commitsYear, repos, loading: false, error: null });
      } catch (err) {
        if (!cancelled) setState(s => ({ ...s, loading: false, error: err.message }));
      }
    }

    fetchData();
    return () => { cancelled = true; };
  }, [username]);

  return state;
}
