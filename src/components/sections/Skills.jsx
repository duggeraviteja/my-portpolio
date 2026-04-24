import React from 'react';

const SkillBar = ({ name, level, years }) => (
  <div className="skill-row">
    <div className="skill-meta">
      <span>{name}</span>
      <span className="s-years">{years}yr</span>
    </div>
    <div className="skill-bar-bg">
      <div className="skill-bar-fill" style={{ width: `${level}%` }} />
    </div>
  </div>
);

const Skills = ({ data }) => (
  <section id="section-skills" className="section">
    <div className="sec-head">
      <span className="sec-kicker">02 · skills.yml</span>
      <span className="sec-comment">
        <span className="sc-punct">/** </span>tools &amp; technologies<span className="sc-punct"> */</span>
      </span>
    </div>

    <div className="skills-grid">
      <div className="skill-card">
        <p className="skill-card-title">Languages</p>
        {data.languages.map((s) => (
          <SkillBar key={s.name} {...s} />
        ))}
      </div>

      <div className="skill-card">
        <p className="skill-card-title">Frameworks</p>
        {data.frameworks.map((s) => (
          <SkillBar key={s.name} {...s} />
        ))}
      </div>

      <div className="skill-card">
        <p className="skill-card-title">Data &amp; Messaging</p>
        <div className="tag-cloud">
          {data.data.map((t) => (
            <span key={t} className="tag-chip">{t}</span>
          ))}
        </div>
      </div>

      <div className="skill-card">
        <p className="skill-card-title">Infra &amp; Observability</p>
        <div className="tag-cloud">
          {data.infra.map((t) => (
            <span key={t} className="tag-chip">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
