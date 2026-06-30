export const siteContent = {
  document: {
    title: '',
    description: 'Landing frontend retro inspirada en la moda de los anos 2000.',
  },
  intro: {
    ariaLabel: 'Pantalla de inicio',
    eyebrow: 'retro fashion portal',
    title: 'Moda 2000',
    loadingAriaLabel: 'Cargando closet',
    loadingText: 'loading closet...',
    button: 'Entrar al closet',
  },
  header: {
    logo: '',
    navAriaLabel: 'Secciones principales',
    links: [
      { href: '#lookbook', label: 'Lookbook' },
      { href: '#grupo', label: 'Grupo' },
      { href: '#tendencias', label: 'Tendencias' },
    ],
  },
  hero: {
    imageAlt: 'Composicion editorial de moda estilo anos 2000',
    eyebrow: '',
    title: 'Un viaje visual a la moda mas pop de los 2000',
    copy:
      '',
    button: 'Abrir lookbook',
  },
  ticker: {
    ariaLabel: 'Detalles esteticos',
    words: ['gloss', 'denim', 'chrome', 'butterflies', 'pink flash', 'mini bags'],
  },
  lookbookSection: {
    eyebrow: 'interactive closet',
    title: 'Lookbook de epoca',
    tabsAriaLabel: 'Categorias del lookbook',
    imageAltPrefix: 'Look',
    imageAltSuffix: 'inspirado en la moda de los anos 2000',
    previousButton: 'Anterior',
    nextButton: 'Siguiente',
    previousAriaLabel: 'Look anterior',
    nextAriaLabel: 'Look siguiente',
  },
  groupSection: {
    eyebrow: 'team closet',
    title: 'Presentacion del grupo',
    introImage: '/assets/WhatsApp Image 2026-06-27 at 17.39.03.jpeg',
    introImageAlt: 'Camila, Catalina, Priscila y Lucia inspiradas en la estetica dosmilera',
    introText:
      'La union de Camila, Catalina, Priscila y Lucia surgio de una pasion compartida por la estetica de los años 2000 y el deseo de documentar la relevancia actual de este estilo.',
    imageAltPrefix: 'Foto de',
    previousAriaLabel: 'Integrante anterior',
    nextAriaLabel: 'Integrante siguiente',
  },
  groupMembers: [
    {
      name: 'Camila',
      alias: 'La It Girl del brillo',
      description:
        'No sale de casa sin pantalones de tiro bajo, baby tee sarcastica con glitter, micro-minifalda de jean y bolso baguette. Su estilo mezcla Paris Hilton, Bratz, hebillas de mariposa y gloss efecto espejo.',
      color: 'look-gloss',
      image: '/assets/WhatsApp Image 2026-06-27 at 17.38.49.jpeg',
    },
    {
      name: 'Priscila',
      alias: 'La reina del denim on denim',
      description:
        'Le da una vuelta urbana al dosmil. Campera de jean entallada, falda midi a juego, plataformas gigantes, cinturones con tachas, panuelos como tops y anteojos translucidos.',
      color: 'look-denim',
      image: '/assets/WhatsApp Image 2026-06-27 at 17.38.49 (1).jpeg',
    },
    {
      name: 'Catalina',
      alias: 'La version Cyber-Pop',
      description:
        'Es la mas vanguardista del grupo: metalicos, vinilo, neon, cargos con mil bolsillos, tops con tiras cruzadas y zapatillas con mucha suela. Siempre documenta todo con camara digital.',
      color: 'look-chrome',
      image: '/assets/WhatsApp Image 2026-06-27 at 17.38.50.jpeg',
    },
    {
      name: 'Lucia',
      alias: 'La romantica Chic-dosmilera',
      description:
        'Prefiere el lado preppy y femenino: leopardo, cardigans con strass, camisas cortas, pasteles con detalles oscuros, botas bucaneras y carteras monograma listas para MTV 2003.',
      color: 'look-velour',
      image: '/assets/WhatsApp Image 2026-06-27 at 17.38.50 (1).jpeg',
    },
  ],
  lookbookTabs: [
    {
      label: 'Looks',
      eyebrow: 'Iconos',
      items: [
        {
          title: 'Paris Hilton',
          note: '',
          tags: ['icy denim', 'baby tee', 'silver belt'],
          color: 'look-denim',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.00.12.jpeg',
        },
        {
          title: 'Britney Spears',
          note: '',
          tags: ['velour', 'zip hoodie', 'pink gloss'],
          color: 'look-velour',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.00.33.jpeg',
        },
        {
          title: 'Lindsay Lohan',
          note: '',
          tags: ['chrome', 'platforms', 'flash'],
          color: 'look-chrome',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.00.47.jpeg',
        },
        {
          title: 'Regina George',
          note: '',
          tags: ['butterfly clips', 'mini skirt', 'plastic shine'],
          color: 'look-gloss',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.01.14.jpeg',
        },
        {
          title: 'Megan Fox',
          note: '',
          tags: ['butterfly clips', 'mini skirt', 'plastic shine'],
          color: 'look-gloss',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.01.36.jpeg',
        },
      ],
    },
    {
      label: 'Iconos argentinos',
      eyebrow: 'Iconos Argentinas',
      items: [
        {
          title: 'Martina Stoessel',
          tags: ['chrome tips', 'pink base', 'glossy'],
          color: 'look-chrome',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.09.17.jpeg',
        },
        {
          title: 'Emilia Mernes',
          tags: ['butterflies', 'crystals', 'candy pink'],
          color: 'look-gloss',
          image: '/assets/WhatsApp Image 2026-06-22 at 22.59.16.jpeg',
        },
        {
          title: 'Luisana Lopilato',
          tags: ['icy blue', 'silver dots', 'shine'],
          color: 'look-denim',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.02.06.jpeg',
        },
        {
          title: 'Valeria Mazza',
          tags: ['icy blue', 'silver dots', 'shine'],
          color: 'look-denim',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.02.21.jpeg',
        },
      ],
    },
    {
      label: 'Peinados',
      eyebrow: 'Peinados',
      items: [
        {
          title: 'Look Pop Moderno',
          tags: ['clips', 'butterfly', 'side part'],
          color: 'look-gloss',
          image: '/assets/WhatsApp Image 2026-06-22 at 22.58.02.jpeg',
        },
        {
          title: 'Moñitos Spiky',
          tags: ['high pony', 'tinted shades', 'gloss'],
          color: 'look-mall',
          image: '/assets/WhatsApp Image 2026-06-22 at 22.58.15.jpeg',
        },
        {
          title: 'Space Buns en Zigzag',
          tags: ['bun', 'scrunchie', 'front strands'],
          color: 'look-velour',
          image: '/assets/WhatsApp Image 2026-06-22 at 22.58.26.jpeg',
        },
        {
          title: 'Star Girl',
          tags: ['bun', 'scrunchie', 'front strands'],
          color: 'look-velour',
          image: '/assets/WhatsApp Image 2026-06-22 at 22.58.36.jpeg',
        },
      ],
    },
    {
      label: 'Makeup',
      eyebrow: 'Makeup',
      items: [
        {
          title: 'Baby Blue',
          note: 'Vestido mini satinado con plataformas y cartera pequena.',
          tags: ['mini dress', 'platforms', 'mini bag'],
          color: 'look-mall',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.36.01.jpeg',
        },
        {
          title: 'Frosted Eyes',
          note: 'Rosa brillante, textura plastica y accesorios plateados.',
          tags: ['pink shine', 'silver', 'party'],
          color: 'look-gloss',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.36.02 (1).jpeg',
        },
        {
          title: 'Sunset Grunge',
          note: 'Corte simple, tela metalizada y destellos de noche.',
          tags: ['metallic', 'night out', 'flash'],
          color: 'look-chrome',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.36.02 (2).jpeg',
        },
        {
          title: 'Soft Grunge',
          note: 'Corte simple, tela metalizada y destellos de noche.',
          tags: ['metallic', 'night out', 'flash'],
          color: 'look-chrome',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.36.02.jpeg',
        },
      ],
    },
        {
      label: 'Accesorios',
      eyebrow: 'Accesorios',
      items: [
        {
          title: 'Hebillias prints ',
          tags: ['mini dress', 'platforms', 'mini bag'],
          color: 'look-mall',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.36.02 (3).jpeg',
        },
        {
          title: 'Bags prints',
          tags: ['pink shine', 'silver', 'party'],
          color: 'look-gloss',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.36.02 (4).jpeg',
        },
        {
          title: 'Sunglasses',
          tags: ['metallic', 'night out', 'flash'],
          color: 'look-chrome',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.36.03 (1).jpeg',
        },
        {
          title: 'Brazalets',
          tags: ['metallic', 'night out', 'flash'],
          color: 'look-chrome',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.36.03 (2).jpeg',
        },
        {
          title: 'Cinturones',
          tags: ['metallic', 'night out', 'flash'],
          color: 'look-chrome',
          image: '/assets/WhatsApp Image 2026-06-22 at 23.36.03.jpeg',
        },
      ],
    },
        {
      label: 'Uñas',
      eyebrow: 'Uñas',
      items: [
        {
          title: 'Star Nails',
          tags: ['mini dress', 'platforms', 'mini bag'],
          color: 'look-mall',
          image: '/assets/WhatsApp Image 2026-06-22 at 22.56.55.jpeg',
        },
        {
          title: 'Hello Kitty',
          tags: ['pink shine', 'silver', 'party'],
          color: 'look-gloss',
          image: '/assets/WhatsApp Image 2026-06-22 at 22.57.14.jpeg',
        },
        {
          title: 'Zebra Print',
          tags: ['metallic', 'night out', 'flash'],
          color: 'look-chrome',
          image: '/assets/WhatsApp Image 2026-06-22 at 22.57.24.jpeg',
        },
      ],
    },
  ],
  trendsSection: {
    eyebrow: 'trend diary',
    title: 'Musical Trends',
  },
  //necesito que en trends haya abajo de cada texto el link a las canciones de spotify mediante un boton que diga "Escuchar en Spotify" y que abra la cancion en una nueva pestaña
  //falta el boton de escuchar en spotify en cada trend. PONELO ABAJO DE CADA TREND Y QUE ABRA EN UNA NUEVA PESTAÑA EL LINK DE SPOTIFY
  trends: [
    {
      title: '...Baby one more time',
      text: 'Britney Spears',
      spotifyLink: 'https://open.spotify.com/playlist/3S7CN21jWGHyBp04BFBswg?si=q--9RpM_SyW0zVLT0WBGTw&pi=qt7tx3KYTT-qd',
    },
    {
      title: 'Gasolina',
      text: 'Daddy Yankee',
      spotifyLink: 'https://open.spotify.com/playlist/3S7CN21jWGHyBp04BFBswg?si=q--9RpM_SyW0zVLT0WBGTw&pi=qt7tx3KYTT-qd',
    },
    {
      title: 'Genio Atrapado',
      text: 'Christina Aguilera',
      spotifyLink: 'https://open.spotify.com/playlist/3S7CN21jWGHyBp04BFBswg?si=q--9RpM_SyW0zVLT0WBGTw&pi=qt7tx3KYTT-qd',
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
    text: 'TP grupal por @camilacorti_ @priimansiilla @caturivello @lurossix .',
  },
};
