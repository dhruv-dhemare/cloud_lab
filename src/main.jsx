import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const pillars = [
  { number: '01', title: 'Store', text: 'Keep data available, secure and ready to grow.' },
  { number: '02', title: 'Scale', text: 'Use exactly the resources your idea needs.' },
  { number: '03', title: 'Connect', text: 'Build services that work together from anywhere.' },
];

function CloudMark() {
  return (
    <svg className="cloud-mark" viewBox="0 0 80 52" aria-hidden="true">
      <path d="M18 44h43a14 14 0 0 0 1-28 21 21 0 0 0-39-3A15 15 0 0 0 18 44Z" />
      <path d="M29 29h22M40 20v18M34 25l6-5 6 5" />
    </svg>
  );
}

function App() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Cloud Lab home">
          <span className="brand-dot" /> cloud lab
        </a>
        <span className="nav-note">cloud computing / sample site</span>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A small window into the cloud</p>
          <h1>Ideas that<br /><em>float further.</em></h1>
          <p className="intro">
            A sample site for exploring cloud computing — the way modern applications
            store, scale and connect without being tied to one machine.
          </p>
          <a className="button" href="#learn">Explore the basics <span>↗</span></a>
        </div>
        <div className="hero-art" aria-label="Abstract cloud illustration">
          <div className="art-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="cloud-card">
            <CloudMark />
            <span>build / deploy / grow</span>
          </div>
          <span className="art-label label-top">always on</span>
          <span className="art-label label-bottom">anywhere</span>
        </div>
      </section>

      <section className="learn shell" id="learn">
        <div className="section-heading">
          <p className="eyebrow">The simple version</p>
          <h2>Cloud, in three<br /><em>quiet moves.</em></h2>
        </div>
        <div className="pillars">
          {pillars.map((pillar) => (
            <article className="pillar" key={pillar.number}>
              <span className="pillar-number">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer shell">
        <div><span className="brand-dot" /> made for Cloud Lab</div>
        <div className="student">Dhruv Dhemare <span>·</span> Roll no. 42127</div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>
);
