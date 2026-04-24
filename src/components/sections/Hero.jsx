import React from 'react';
import resumePdf from '../images/duggeraviteja-resume.pdf';

const codeLines = [
  { n: 1,  parts: [{ c: 'cm', t: '// Engineer.java' }] },
  { n: 2,  parts: [] },
  { n: 3,  parts: [{ c: 'an', t: '@Service' }] },
  { n: 4,  parts: [{ c: 'kw', t: 'public ' }, { c: 'kw', t: 'class ' }, { c: 'ty', t: 'Engineer ' }, { c: '', t: '{' }] },
  { n: 5,  parts: [] },
  { n: 6,  parts: [{ c: '', t: '  ' }, { c: 'kw', t: 'private final ' }, { c: 'ty', t: 'String ' }, { c: '', t: 'focus = ' }, { c: 'st', t: '"Backend Systems"' }, { c: '', t: ';' }], hl: true },
  { n: 7,  parts: [] },
  { n: 8,  parts: [{ c: '', t: '  ' }, { c: 'kw', t: 'public ' }, { c: 'ty', t: 'Delivery ' }, { c: 'fn', t: 'ship' }, { c: '', t: '(' }, { c: 'ty', t: 'Idea ' }, { c: '', t: 'it) {' }] },
  { n: 9,  parts: [{ c: '', t: '    ' }, { c: 'kw', t: 'return ' }, { c: '', t: 'it' }] },
  { n: 10, parts: [{ c: '', t: '      .' }, { c: 'fn', t: 'designed' }, { c: '', t: '()' }] },
  { n: 11, parts: [{ c: '', t: '      .' }, { c: 'fn', t: 'tested' }, { c: '', t: '()' }] },
  { n: 12, parts: [{ c: '', t: '      .' }, { c: 'fn', t: 'reviewed' }, { c: '', t: '()' }] },
  { n: 13, parts: [{ c: '', t: '      .' }, { c: 'fn', t: 'shipped' }, { c: '', t: '()' }], hl: true },
  { n: 14, parts: [{ c: '', t: '      .' }, { c: 'fn', t: 'observed' }, { c: '', t: '();' }] },
  { n: 15, parts: [{ c: '', t: '  }' }] },
  { n: 16, parts: [{ c: '', t: '}' }] },
];

const Hero = ({ data, caretOn, onNavigate }) => (
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
        <div className="code-card" role="img" aria-label="Code preview showing Engineer.java">
          <div className="code-card-header">
            <div className="cc-dots">
              <span className="cc-dot r" /><span className="cc-dot y" /><span className="cc-dot g" />
            </div>
            <span className="cc-fname">Engineer.java</span>
            <span className="cc-lang">Java • main</span>
          </div>
          <div className="code-card-body">
            {codeLines.map((line) => (
              <div key={line.n} className={`code-line${line.hl ? ' hl' : ''}`}>
                <span className="ln">{line.n}</span>
                {line.parts.map((p, i) =>
                  p.c ? <span key={i} className={p.c}>{p.t}</span> : <span key={i}>{p.t}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
