import { useState } from 'react';

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
    text: 'Tops metalizados, plataformas, gloss y destellos de cámara flash.',
  },
];

const closetItems = ['Mini bag', 'Butterfly clips', 'Gloss', 'Platform shoes', 'Tinted shades'];

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="site-shell">
      {!entered && (
        <section className="intro-screen" aria-label="Pantalla de inicio">
          <div className="intro-noise" />
          <div className="intro-panel">
            <p className="eyebrow">retro fashion portal</p>
            <h1>Moda 2000</h1>
            <p className="intro-copy">
              Rosa glossy, denim lavado, accesorios brillantes y energia de revista teen.
            </p>
            <button className="continue-button" type="button" onClick={() => setEntered(true)}>
              Continuar
            </button>
          </div>
        </section>
      )}

      <section className={`page-content ${entered ? 'is-visible' : ''}`} aria-hidden={!entered}>
        <header className="topbar">
          <a href="#inicio" className="logo-link">Moda 2000</a>
          <nav aria-label="Secciones principales">
            <a href="#tendencias">Tendencias</a>
            <a href="#galeria">Galeria</a>
            <a href="#closet">Closet</a>
          </nav>
        </header>

        <section className="hero-section" id="inicio">
          <div className="hero-media">
            <img src="/assets/y2k-hero.png" alt="Composicion editorial de moda estilo anos 2000" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">pink chrome issue</p>
            <h2>Un viaje visual a la moda mas pop de los 2000</h2>
            <p>
              Una landing con espiritu Y2K: texturas plasticas, flashes, stickers, denim,
              plateado y mucho rosa para una experiencia retro lista para Vercel.
            </p>
            <a className="hero-cta" href="#tendencias">Ver tendencias</a>
          </div>
        </section>

        <section className="ticker" aria-label="Detalles esteticos">
          <span>gloss</span>
          <span>denim</span>
          <span>chrome</span>
          <span>butterflies</span>
          <span>pink flash</span>
          <span>mini bags</span>
        </section>

        <section className="trend-section" id="tendencias">
          <div className="section-heading">
            <p className="eyebrow">trend diary</p>
            <h2>Tendencias que gritan 2000</h2>
          </div>
          <div className="trend-grid">
            {trends.map((trend, index) => (
              <article className="trend-card" key={trend.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{trend.title}</h3>
                <p>{trend.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section" id="galeria">
          <div className="gallery-copy">
            <p className="eyebrow">digital scrapbook</p>
            <h2>Looks, stickers y textura de revista</h2>
            <p>
              La pagina mezcla collage editorial con UI retro: bordes glossy,
              brillos, grillas y botones con presencia para que el frontend se sienta de epoca.
            </p>
          </div>
          <div className="gallery-frame">
            <img src="/assets/y2k-board.png" alt="Tablero visual de outfits inspirados en los anos 2000" />
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
