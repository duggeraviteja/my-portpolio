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
            <p className="coding-platform">
              <span className="coding-dot" />
              {item.platform}
            </p>
            <div className="coding-terminal">
              <span className="coding-prompt">$</span>
              <span className="coding-handle-text">{item.handle}</span>
            </div>
            <p className="coding-desc">{item.desc}</p>
          </div>

          <span className="coding-arrow">↗</span>
        </a>
      ))}
    </div>
  </section>
);

export default CodingProfiles;
