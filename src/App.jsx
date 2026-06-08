import { useEffect, useState } from 'react';

const trends = [
  {
    title: 'Denim con brillo',
    text: 'Tiro bajo, costuras marcadas, lavados icy blue y accesorios plateados.',
  },
  {
    title: 'Velour pop',
    text: 'Conjuntos suaves, cierres frontales, bolsos mini y gafas de color.',
  },
  {
    title: 'Noche chrome',
    text: 'Tops metalizados, plataformas, gloss y destellos de camara flash.',
  },
];

const lookbook = [
  {
    title: 'Denim Flash',
    note: 'Jean lavado, top rosa, cinturon brillante y cartera mini.',
    tags: ['icy denim', 'baby tee', 'silver belt'],
    color: 'look-denim',
    image: '/assets/look-denim.png',
  },
  {
    title: 'Velour Pop',
    note: 'Conjunto suave, lentes de color, cierre frontal y labios gloss.',
    tags: ['velour', 'zip hoodie', 'pink gloss'],
    color: 'look-velour',
    image: '/assets/look-velour.png',
  },
  {
    title: 'Chrome Party',
    note: 'Top metalizado, plataformas altas y accesorios con efecto espejo.',
    tags: ['chrome', 'platforms', 'flash'],
    color: 'look-chrome',
    image: '/assets/look-chrome.png',
  },
  {
    title: 'Pink Gloss',
    note: 'Falda mini, clips de mariposa, brillo labial y textura plastica.',
    tags: ['butterfly clips', 'mini skirt', 'plastic shine'],
    color: 'look-gloss',
    image: '/assets/look-gloss.png',
  },
  {
    title: 'Mall Girl',
    note: 'Bolso pequeno, lentes ahumados, denim claro y vibra de shopping.',
    tags: ['mini bag', 'tinted shades', 'mall pop'],
    color: 'look-mall',
    image: '/assets/look-mall.png',
  },
];

const closetItems = ['Mini bag', 'Butterfly clips', 'Gloss', 'Platform shoes', 'Tinted shades'];

const stickerItems = [
  { label: 'CD', className: 'cd-sticker' },
  { label: 'Gloss', className: 'lip-sticker' },
  { label: 'Chrome', className: 'star-sticker' },
  { label: 'Mini bag', className: 'bag-sticker' },
  { label: 'Shades', className: 'shades-sticker' },
  { label: 'Butterfly', className: 'butterfly-sticker' },
];

function App() {
  const [entered, setEntered] = useState(false);
  const [activeLook, setActiveLook] = useState(0);
  const [sparkles, setSparkles] = useState([]);

  const currentLook = lookbook[activeLook];

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

  const changeLook = (direction) => {
    setActiveLook((index) => (index + direction + lookbook.length) % lookbook.length);
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
        <section className="intro-screen" aria-label="Pantalla de inicio">
          <div className="intro-noise" />
          <div className="portal-window">
            <div className="portal-bar">
              <span />
              <span />
              <span />
            </div>
            <div className="intro-panel">
              <p className="eyebrow">retro fashion portal</p>
              <h1>Moda 2000</h1>
              <p className="intro-copy">
                Rosa glossy, denim lavado, accesorios brillantes y energia de revista teen.
              </p>
              <div className="loading-box" aria-label="Cargando closet">
                <span>loading closet...</span>
                <div className="loading-track">
                  <div className="loading-fill" />
                </div>
              </div>
              <button className="continue-button" type="button" onClick={() => setEntered(true)}>
                Entrar al closet
              </button>
            </div>
          </div>
        </section>
      )}

      <section className={`page-content ${entered ? 'is-visible' : ''}`} aria-hidden={!entered}>
        <header className="topbar">
          <a href="#inicio" className="logo-link">Moda 2000</a>
          <nav aria-label="Secciones principales">
            <a href="#lookbook">Lookbook</a>
            <a href="#tendencias">Tendencias</a>
            <a href="#moodboard">Moodboard</a>
            <a href="#closet">Closet</a>
          </nav>
        </header>

        <section className="hero-section" id="inicio">
          <div className="hero-media">
            <img src="/assets/y2k-hero.png" alt="Composicion editorial de moda estilo anos 2000" />
          </div>
          <div className="hero-copy popup-copy">
            <p className="eyebrow">pink chrome issue</p>
            <h2>Un viaje visual a la moda mas pop de los 2000</h2>
            <p>
              Una landing con espiritu Y2K: texturas plasticas, flashes, stickers, denim,
              plateado y mucho rosa para una experiencia retro lista para Vercel.
            </p>
            <a className="hero-cta" href="#lookbook">Abrir lookbook</a>
          </div>
        </section>

        <section className="ticker" aria-label="Detalles esteticos">
          <div className="ticker-track">
            <span>gloss</span>
            <span>denim</span>
            <span>chrome</span>
            <span>butterflies</span>
            <span>pink flash</span>
            <span>mini bags</span>
            <span>gloss</span>
            <span>denim</span>
            <span>chrome</span>
            <span>butterflies</span>
          </div>
        </section>

        <section className="lookbook-section" id="lookbook">
          <div className="section-heading">
            <p className="eyebrow">interactive closet</p>
            <h2>Lookbook de epoca</h2>
          </div>
          <div className={`lookbook-card ${currentLook.color}`}>
            <div className="look-visual">
              <img
                src={currentLook.image}
                alt={`Look ${currentLook.title} inspirado en la moda de los anos 2000`}
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
                <button type="button" onClick={() => changeLook(-1)} aria-label="Look anterior">
                  Anterior
                </button>
                <button type="button" onClick={() => changeLook(1)} aria-label="Look siguiente">
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="trend-section" id="tendencias">
          <div className="section-heading">
            <p className="eyebrow">trend diary</p>
            <h2>Tendencias que gritan 2000</h2>
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
            <p className="eyebrow">digital scrapbook</p>
            <h2>Looks, stickers y textura de revista</h2>
            <p>
              La pagina mezcla collage editorial con UI retro: bordes glossy,
              brillos, grillas y botones con presencia para que el frontend se sienta de epoca.
            </p>
          </div>
          <div className="moodboard">
            <div className="gallery-frame">
              <img src="/assets/y2k-board.png" alt="Tablero visual de outfits inspirados en los anos 2000" />
            </div>
            {stickerItems.map((sticker) => (
              <span className={`sticker ${sticker.className}`} key={sticker.label}>
                {sticker.label}
              </span>
            ))}
          </div>
        </section>

        <section className="closet-section" id="closet">
          <div>
            <p className="eyebrow">starter closet</p>
            <h2>Piezas clave</h2>
          </div>
          <div className="closet-tags">
            {closetItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <footer className="site-footer">
          <p>Frontend retro Y2K hecho para deploy estatico en Vercel.</p>
        </footer>
      </section>
    </main>
  );
}

export default App;
