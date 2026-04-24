import React from 'react';
import nptelCert from '../images/Programming-In-Java-certification.jpeg';

const LOCAL_IMAGES = {
  'Programming-In-Java-certification.jpeg': nptelCert,
};

const Certifications = ({ data }) => (
  <section id="section-certs" className="section">
    <div className="sec-head">
      <span className="sec-kicker">06 · Credentials.xml</span>
      <span className="sec-comment">
        <span className="sc-punct">/** </span>certifications<span className="sc-punct"> */</span>
      </span>
    </div>

    <div className="certs-grid">
      {data.map((cert) => {
        const href = cert.localImage
          ? LOCAL_IMAGES['Programming-In-Java-certification.jpeg']
          : cert.verifyUrl;

        return (
          <div key={cert.title} className="cert-card">
            <div className="cert-badge" style={{ background: cert.color }}>
              {cert.badge}
            </div>
            <div>
              <p className="cert-title">{cert.title}</p>
              <p className="cert-meta">{cert.issuer} · {cert.year}</p>
            </div>
            <a
              className="cert-verify"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cert.localImage ? '↗ view certificate' : '↗ verify credential'}
            </a>
          </div>
        );
      })}
    </div>
  </section>
);

export default Certifications;
