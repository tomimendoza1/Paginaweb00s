export const siteContent = {
  document: {
    title: 'Moda 2000',
    description: 'Landing frontend retro inspirada en la moda de los anos 2000.',
  },
  intro: {
    ariaLabel: 'Pantalla de inicio',
    eyebrow: 'retro fashion portal',
    title: 'Moda 2000',
    copy: 'Gloss rosa, denim lavado, accesorios brillantes y energia de revista teen.',
    loadingAriaLabel: 'Cargando closet',
    loadingText: 'loading closet...',
    button: 'Entrar al closet',
  },
  header: {
    logo: 'Moda 2000',
    navAriaLabel: 'Secciones principales',
    links: [
      { href: '#lookbook', label: 'Lookbook' },
      { href: '#tendencias', label: 'Tendencias' },
      { href: '#moodboard', label: 'Moodboard' },
      { href: '#closet', label: 'Closet' },
    ],
  },
  hero: {
    imageAlt: 'Composicion editorial de moda estilo anos 2000',
    eyebrow: 'pink chrome issue',
    title: 'Un viaje visual a la moda mas pop de los 2000',
    copy:
      'Una landing con espiritu Y2K: texturas plasticas, flashes, stickers, denim, plateado y mucho rosa para una experiencia retro lista para Vercel.',
    button: 'Abrir lookbook',
  },
  ticker: {
    ariaLabel: 'Detalles esteticos',
    words: ['gloss', 'denim', 'chrome', 'butterflies', 'pink flash', 'mini bags'],
  },
  lookbookSection: {
    eyebrow: 'interactive closet',
    title: 'Lookbook de epoca',
    imageAltPrefix: 'Look',
    imageAltSuffix: 'inspirado en la moda de los anos 2000',
    previousButton: 'Anterior',
    nextButton: 'Siguiente',
    previousAriaLabel: 'Look anterior',
    nextAriaLabel: 'Look siguiente',
  },
  lookbook: [
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
  ],
  trendsSection: {
    eyebrow: 'trend diary',
    title: 'Tendencias que gritan 2000',
  },
  trends: [
    {
      title: 'Denim con brillo',
      text: 'Tiro bajo, costuras marcadas, lavados icy blue y accesorios plateados.',
    },
    {
      title: 'Velour pop',
      text: 'Conjuntos suaves, cierres frontales, bolsos mini y gafas de color.',
    },
    {
      title: 'Night chrome',
      text: 'Tops metalizados, plataformas, gloss y destellos de camara flash.',
    },
  ],
  moodboard: {
    eyebrow: 'digital scrapbook',
    title: 'Looks, stickers y textura de revista',
    copy:
      '',
    imageAlt: 'Tablero visual de outfits inspirados en los anos 2000',
    stickers: [
      { label: 'CD', className: 'cd-sticker' },
      { label: 'Gloss', className: 'lip-sticker' },
      { label: 'Chrome', className: 'star-sticker' },
      { label: 'Mini bag', className: 'bag-sticker' },
      { label: 'Shades', className: 'shades-sticker' },
      { label: 'Butterfly', className: 'butterfly-sticker' },
    ],
  },
  closet: {
    eyebrow: 'starter closet',
    title: 'Piezas clave',
    items: ['Mini bag', 'Butterfly clips', 'Gloss', 'Platform shoes', 'Tinted shades'],
  },
  footer: {
    text: 'Pagina web retro Y2K hecho para TP de la Facultad de Periodismo (UNLP).',
  },
};
