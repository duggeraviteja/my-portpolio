import React from 'react';

const CodingProfiles = ({ data }) => (
  <section id="section-coding" className="section">
    <div className="sec-head">
      <span className="sec-kicker">08 · coding.profiles</span>
      <span className="sec-comment">
        <span className="sc-punct">// </span>competitive programming
      </span>
    </div>

    <div className="coding-grid">
      {data.map((item) => (
        <a
          key={item.platform}
          className="coding-card"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ '--coding-color': item.color }}
        >
          <div className="coding-icon-wrap">
            {item.icon
              ? <i className={item.icon} />
              : <span className="coding-abbr">{item.abbr}</span>
            }
          </div>

          <div className="coding-info">
            <p className="coding-platform">{item.platform}</p>
            <p className="coding-handle">@{item.handle}</p>
            <p className="coding-desc">{item.desc}</p>
          </div>

          <span className="coding-arrow">↗</span>
        </a>
      ))}
    </div>
  </section>
);

export default CodingProfiles;
