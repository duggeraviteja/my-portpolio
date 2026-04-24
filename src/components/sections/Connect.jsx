import React from 'react';

const Connect = ({ data }) => (
  <section id="section-connect" className="section">
    <div className="sec-head">
      <span className="sec-kicker">07 · connect.json</span>
      <span className="sec-comment">
        <span className="sc-punct">// </span>find me online
      </span>
    </div>

    <div className="connect-grid">
      {data.map((item) => (
        <a
          key={item.platform}
          className="connect-card"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ '--connect-color': item.color }}
        >
          <div className="connect-icon-wrap">
            <i className={item.icon} />
          </div>
          <div className="connect-info">
            <p className="connect-platform">{item.platform}</p>
            <p className="connect-handle">{item.handle}</p>
            <p className="connect-desc">{item.desc}</p>
          </div>
          <span className="connect-arrow">↗</span>
        </a>
      ))}
    </div>
  </section>
);

export default Connect;
