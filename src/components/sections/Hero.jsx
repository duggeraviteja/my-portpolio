import React from 'react';
import resumePdf from '../images/duggeraviteja-resume.pdf';

const Hero = ({ data, caretOn, onNavigate }) => {
  const current = data.experience[0];

  const termRows = [
    { label: 'Name  ', value: data.name },
    { label: 'Role  ', value: `${current.role} @ ${current.company}` },
    { label: 'Stack ', value: 'Java 17 · Spring Boot · Docker · Git' },
    { label: 'Focus ', value: 'VCS Architecture · Platform Reliability' },
    { label: 'YOE   ', value: `${data.yoe}+ years experience` },
    { label: 'Status', value: 'Building backends that stay boring ✓', ok: true },
  ];

  return (
    <section id="section-readme" className="section">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-pill">
            {data.location} &nbsp;·&nbsp; {data.timezone}
          </div>

          <p className="hero-kicker">
            <span className="kk-kw">public class </span>
            <span>{data.name.replace(' ', '')} </span>
            <span className="kk-kw">extends </span>
            <span className="kk-type">Engineer</span>
          </p>

          <h1 className="hero-h1">
            Building backends<br />
            <span className="h1-accent">that stay boring</span>
            <span className={`hero-caret ${caretOn ? '' : 'off'}`} aria-hidden="true" />
          </h1>

          <p className="hero-tagline">{data.tagline}</p>

          <div className="hero-btns">
            <a className="btn-primary" href={resumePdf} download="Raviteja_Dugge_Resume.pdf">
              <i className="fa-solid fa-download" />
              Resume
            </a>
            <button className="btn-neutral" onClick={() => onNavigate('experience')}>
              <i className="fa-solid fa-briefcase" />
              Experience
            </button>
            <button className="btn-neutral" onClick={() => onNavigate('projects')}>
              <i className="fa-solid fa-code" />
              Projects
            </button>
            <a className="btn-ghost" href={`mailto:${data.email}`}>
              <i className="fa-solid fa-envelope" />
              {data.email}
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="term-card" role="img" aria-label="Terminal output showing engineer profile">
            <div className="term-header">
              <div className="cc-dots">
                <span className="cc-dot r" />
                <span className="cc-dot y" />
                <span className="cc-dot g" />
              </div>
              <span className="term-title">zsh — ~/portfolio</span>
            </div>

            <div className="term-body">
              <p className="term-cmd-line">
                <span className="term-path">~/portfolio</span>
                <span className="term-ps"> $ </span>
                <span className="term-cmd">java Engineer.java</span>
              </p>

              <div className="term-spacer" />

              {termRows.map(({ label, value, ok }) => (
                <div key={label} className="term-row">
                  <span className="term-lbl">{label}</span>
                  <span className="term-arr">→</span>
                  <span className={ok ? 'term-val-ok' : 'term-val'}>{value}</span>
                </div>
              ))}

              <div className="term-spacer" />

              <p className="term-cmd-line">
                <span className="term-path">~/portfolio</span>
                <span className="term-ps"> $ </span>
                <span className={`term-cursor${caretOn ? '' : ' off'}`} aria-hidden="true" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
