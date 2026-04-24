import React from 'react';

const toKey = (name) =>
  name.toLowerCase().replace(/[.\s/]+/g, '_').replace(/_+/g, '_').replace(/_$/, '');

const levelLabel = (level) => {
  if (level >= 85) return 'expert';
  if (level >= 70) return 'advanced';
  if (level >= 55) return 'proficient';
  return 'learning';
};

const SkillLine = ({ name, level, years }) => (
  <div className="yml-skill-row">
    <span className="yml-sub-key">{toKey(name)}:</span>
    <div className="yml-bar-track">
      <div className="yml-bar-fill" style={{ width: `${level}%` }} />
    </div>
    <span className="yml-comment"># {levelLabel(level)} · {years}yr</span>
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

    <div className="yml-file">
      <p className="yml-file-comment"># tools &amp; technologies — auto-generated profile</p>

      <div className="yml-body">
        {/* ── left column: languages + frameworks ── */}
        <div className="yml-col">
          <div className="yml-block">
            <span className="yml-top-key">languages:</span>
            {data.languages.map((s) => <SkillLine key={s.name} {...s} />)}
          </div>

          <div className="yml-gap" />

          <div className="yml-block">
            <span className="yml-top-key">frameworks:</span>
            {data.frameworks.map((s) => <SkillLine key={s.name} {...s} />)}
          </div>
        </div>

        {/* ── right column: data + infra ── */}
        <div className="yml-col">
          <div className="yml-block">
            <span className="yml-top-key">data:</span>
            <div className="yml-tag-wrap">
              {data.data.map((t) => (
                <span key={t} className="yml-tag">
                  <span className="yml-dash">-</span>
                  <span className="yml-str">{t}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="yml-gap" />

          <div className="yml-block">
            <span className="yml-top-key">infra:</span>
            <div className="yml-tag-wrap">
              {data.infra.map((t) => (
                <span key={t} className="yml-tag">
                  <span className="yml-dash">-</span>
                  <span className="yml-str">{t}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
