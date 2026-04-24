import React, { useState } from 'react';

const TABS = [
  { key: 'languages',   label: 'Languages'   },
  { key: 'frameworks',  label: 'Frameworks'  },
  { key: 'databases',   label: 'Databases'   },
  { key: 'devops',      label: 'DevOps'      },
  { key: 'build_tools', label: 'Build Tools' },
  { key: 'testing',     label: 'Testing'     },
];

const toKey = (name) =>
  name.toLowerCase().replace(/[.\s/&]+/g, '_').replace(/_+/g, '_').replace(/_$/, '');

const JsonResponse = ({ items, isVersioned }) => (
  <div className="pm-json-body">
    {isVersioned ? (
      <>
        <div className="pm-json-line"><span className="pm-jp">{'{'}</span></div>
        {items.map(({ name, version }, i) => (
          <div key={name} className="pm-json-line pm-i2">
            <span className="pm-jk">"{toKey(name)}"</span>
            <span className="pm-jp">: </span>
            <span className="pm-js">"{version}"</span>
            {i < items.length - 1 && <span className="pm-jp">,</span>}
          </div>
        ))}
        <div className="pm-json-line"><span className="pm-jp">{'}'}</span></div>
      </>
    ) : (
      <>
        <div className="pm-json-line"><span className="pm-jp">{'['}</span></div>
        {items.map((item, i) => (
          <div key={item} className="pm-json-line pm-i2">
            <span className="pm-js">"{item}"</span>
            {i < items.length - 1 && <span className="pm-jp">,</span>}
          </div>
        ))}
        <div className="pm-json-line"><span className="pm-jp">{']'}</span></div>
      </>
    )}
  </div>
);

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState('languages');
  const tab        = TABS.find((t) => t.key === activeTab);
  const items      = data[activeTab];
  const isVersioned = activeTab === 'languages' || activeTab === 'frameworks';

  return (
    <section id="section-skills" className="section">
      <div className="sec-head">
        <span className="sec-kicker">02 · skills.yml</span>
        <span className="sec-comment">
          <span className="sc-punct">/** </span>tools &amp; technologies<span className="sc-punct"> */</span>
        </span>
      </div>

      <div className="pm-window">

        {/* ── URL bar ── */}
        <div className="pm-url-bar">
          <span className="pm-method">GET</span>
          <span className="pm-url">skills://portfolio/tools-and-technologies</span>
          <span className="pm-send">Send</span>
        </div>

        {/* ── Tabs ── */}
        <div className="pm-tabs">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              className={`pm-tab${activeTab === key ? ' active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {label}
              {activeTab === key && <span className="pm-tab-dot" />}
            </button>
          ))}
        </div>

        {/* ── Response ── */}
        <div className="pm-response">
          <div className="pm-response-head">
            <div className="pm-response-tabs">
              <span className="pm-response-tab">Body</span>
            </div>
            <div className="pm-response-meta">
              <span className="pm-status-ok">200 OK</span>
              <span className="pm-status-sep">·</span>
              <span className="pm-status-meta">{items.length} {tab.label.toLowerCase()}</span>
            </div>
          </div>
          <JsonResponse items={items} isVersioned={isVersioned} />
        </div>

      </div>
    </section>
  );
};

export default Skills;
