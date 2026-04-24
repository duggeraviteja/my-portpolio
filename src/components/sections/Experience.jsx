import React from 'react';

const Experience = ({ data }) => (
  <section id="section-experience" className="section">
    <div className="sec-head">
      <span className="sec-kicker">04 · Experience.java</span>
      <span className="sec-comment">
        <span className="sc-punct">/** </span>work history<span className="sc-punct"> */</span>
      </span>
    </div>

    <div className="timeline">
      <div className="timeline-line" aria-hidden="true" />
      {data.map((entry, i) => (
        <div key={i} className="tl-entry">
          <div className={`tl-dot${entry.state === 'current' ? ' current' : ''}`} aria-hidden="true" />
          <div className="tl-header">
            <span>
              <span className="tl-role">{entry.role}</span>
              <span className="tl-company">@ {entry.company}</span>
            </span>
            <span className="tl-date">{entry.date}</span>
          </div>
          <p className="tl-desc">{entry.desc}</p>
          <ul className="tl-bullets">
            {entry.bullets.map((b, j) => (
              <li key={j} className="tl-bullet">
                <span className="tl-arrow" aria-hidden="true">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="tl-stack">
            {entry.stack.map((t) => (
              <span key={t} className="tl-tag">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
