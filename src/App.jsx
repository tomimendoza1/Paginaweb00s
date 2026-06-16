import { useEffect, useState } from 'react';
import { siteContent } from './content.js';

function App() {
  const [entered, setEntered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLook, setActiveLook] = useState(0);
  const [sparkles, setSparkles] = useState([]);

  const {
    closet,
    document: documentContent,
    footer,
    header,
    hero,
    intro,
    lookbook,
    lookbookSection,
    moodboard,
    ticker,
    trends,
    trendsSection,
  } = siteContent;

  const currentLook = lookbook[activeLook];
  const tickerWords = [...ticker.words, ...ticker.words.slice(0, 4)];

  useEffect(() => {
    document.title = documentContent.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', documentContent.description);
  }, [documentContent]);

  useEffect(() => {
    if (!entered || window.matchMedia('(pointer: coarse)').matches) {
      return undefined;
    }

    let lastSparkle = 0;
    const onMouseMove = (event) => {
      const now = Date.now();
      if (now - lastSparkle < 90) {
        return;
      }
      lastSparkle = now;
      const sparkle = {
        id: `${now}-${Math.random()}`,
        x: event.clientX,
        y: event.clientY,
      };

      setSparkles((items) => [...items.slice(-14), sparkle]);
      window.setTimeout(() => {
        setSparkles((items) => items.filter((item) => item.id !== sparkle.id));
      }, 720);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [entered]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const changeLook = (direction) => {
    setActiveLook((index) => (index + direction + lookbook.length) % lookbook.length);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      {sparkles.map((sparkle) => (
        <span
          className="cursor-sparkle"
          key={sparkle.id}
          style={{ left: sparkle.x, top: sparkle.y }}
          aria-hidden="true"
        />
      ))}

      {!entered && (
        <section className="intro-screen" aria-label={intro.ariaLabel}>
          <div className="intro-noise" />
          <div className="portal-window">
            <div className="portal-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="intro-panel">
              <p className="eyebrow">{intro.eyebrow}</p>
              <h1>{intro.title}</h1>
              <p className="intro-copy">{intro.copy}</p>
              <div className="loading-box" aria-label={intro.loadingAriaLabel}>
                <span>{intro.loadingText}</span>
                <div className="loading-track">
                  <div className="loading-fill" />
                </div>
              </div>
              <button className="continue-button" type="button" onClick={() => setEntered(true)}>
                {intro.button}
              </button>
            </div>
          </div>
        </section>
      )}

      <section className={`page-content ${entered ? 'is-visible' : ''}`} aria-hidden={!entered}>
        <header className="topbar">
          <a href="#inicio" className="logo-link">{header.logo}</a>
          <a href="#inicio" className="topbar-logo-mark" aria-label={header.logo}>
            <img src="/assets/y2k-logo.png" alt="" aria-hidden="true" />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="main-sidebar"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </header>

        <div
          className={`sidebar-backdrop ${menuOpen ? 'is-visible' : ''}`}
          aria-hidden="true"
          onClick={closeMenu}
        />

        <aside className={`sidebar-menu ${menuOpen ? 'is-open' : ''}`} id="main-sidebar" aria-hidden={!menuOpen}>
          <div className="sidebar-header">
            <p>{header.logo}</p>
            <button type="button" onClick={closeMenu} aria-label="Cerrar menu" tabIndex={menuOpen ? 0 : -1}>
              x
            </button>
          </div>
          <nav aria-label={header.navAriaLabel}>
            {header.links.map((link) => (
              <a href={link.href} key={link.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>{link.label}</a>
            ))}
          </nav>
        </aside>

        <section className="hero-section" id="inicio">
          <div className="hero-media">
            <img src="/assets/y2k-hero.png" alt={hero.imageAlt} />
          </div>
          <div className="hero-copy popup-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h2>{hero.title}</h2>
            <p>{hero.copy}</p>
            <a className="hero-cta" href="#lookbook">{hero.button}</a>
          </div>
        </section>

        <section className="ticker" aria-label={ticker.ariaLabel}>
          <div className="ticker-track">
            {tickerWords.map((word, index) => (
              <span key={`${word}-${index}`}>{word}</span>
            ))}
          </div>
        </section>

        <section className="lookbook-section" id="lookbook">
          <div className="section-heading">
            <p className="eyebrow">{lookbookSection.eyebrow}</p>
            <h2>{lookbookSection.title}</h2>
          </div>
          <div className={`lookbook-card ${currentLook.color}`}>
            <div className="look-visual">
              <img
                src={currentLook.image}
                alt={`${lookbookSection.imageAltPrefix} ${currentLook.title} ${lookbookSection.imageAltSuffix}`}
              />
            </div>
            <div className="look-copy">
              <p className="look-count">
                {String(activeLook + 1).padStart(2, '0')} / {String(lookbook.length).padStart(2, '0')}
              </p>
              <h3>{currentLook.title}</h3>
              <p>{currentLook.note}</p>
              <div className="look-tags">
                {currentLook.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="look-controls">
                <button type="button" onClick={() => changeLook(-1)} aria-label={lookbookSection.previousAriaLabel}>
                  {lookbookSection.previousButton}
                </button>
                <button type="button" onClick={() => changeLook(1)} aria-label={lookbookSection.nextAriaLabel}>
                  {lookbookSection.nextButton}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="trend-section" id="tendencias">
          <div className="section-heading">
            <p className="eyebrow">{trendsSection.eyebrow}</p>
            <h2>{trendsSection.title}</h2>
          </div>
          <div className="trend-grid">
            {trends.map((trend, index) => (
              <article className="trend-card chrome-card" key={trend.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{trend.title}</h3>
                <p>{trend.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section" id="moodboard">
          <div className="gallery-copy popup-copy">
            <p className="eyebrow">{moodboard.eyebrow}</p>
            <h2>{moodboard.title}</h2>
            <p>{moodboard.copy}</p>
          </div>
          <div className="moodboard">
            <div className="gallery-frame">
              <img src="/assets/y2k-board.png" alt={moodboard.imageAlt} />
            </div>
            {moodboard.stickers.map((sticker) => (
              <span className={`sticker ${sticker.className}`} key={sticker.label}>
                {sticker.label}
              </span>
            ))}
          </div>
        </section>

        <section className="closet-section" id="closet">
          <div>
            <p className="eyebrow">{closet.eyebrow}</p>
            <h2>{closet.title}</h2>
          </div>
          <div className="closet-tags">
            {closet.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <footer className="site-footer">
          <p>{footer.text}</p>
        </footer>
      </section>
    </main>
  );
}

export default App;
