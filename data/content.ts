// ============================================================
// CONTENT — edita todo acá sin tocar los componentes
// ============================================================

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaTarget: string;
  image: string;
}

export interface IntroContent {
  paragraph: string;
}

export interface TimelineItem {
  id: string;
  label: string;   // "El comienzo", "Un viaje", etc.
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  span?: boolean;
}

export interface BonusOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  microdetail: string;
  confirmMessage: string;
}

export interface ClosingContent {
  heading: string;
  message: string;
  signature: string;
}

// ============================================================
// DATA
// ============================================================

export const content = {
  hero: {
    title: "Feliz cumpleaños, Inesita",
    subtitle: "Te armé algo simple, lindo y muy pensado para vos.",
    ctaLabel: "Abrir sorpresa",
    ctaTarget: "#intro",
    image: "/photos/beach-hug.jpg",
  } as HeroContent,

  intro: {
    paragraph:
      "No quería solo comprarte una cosa y ya. Quería hacer algo que se sintiera pensado de verdad, algo tuyo. Esta página es parte de esa sorpresa: recuerdos, planes y al final una última cosa que podés elegir vos. Porque sos de las personas que merecen que se les preste atención.",
  } as IntroContent,

  timeline: [
    {
      id: "t1",
      label: "El comienzo",
      title: "Cuando todo empezó",
      description:
        "Hay momentos que quedan guardados sin hacer ruido. Algunos empiezan así: simples, naturales, y después se vuelven importantes.",
    },
    {
      id: "t2",
      label: "Un viaje",
      title: "Lejos de todo",
      description:
        "Los lugares cambian cuando estás vos. Todo se vuelve más fácil, más nuestro, más lindo de recordar.",
    },
    {
      id: "t3",
      label: "Un momento importante",
      title: "Algo que cambió",
      description:
        "Hay días que no necesitan explicación. Uno los mira después y entiende que ahí había algo especial.",
    },
    {
      id: "t4",
      label: "Hoy",
      title: "Acá, ahora",
      description:
        "Contento de estar acá, con vos, festejando a Inesita. Ojalá sean muchos más.",
    },
  ] as TimelineItem[],

  gallery: [
    {
      id: "g1",
      src: "/photos/salt-jump.jpg",
      alt: "Inesita saltando en un paisaje blanco",
      caption: "Aire, blanco y cielo enorme.",
      span: false,
    },
    {
      id: "g2",
      src: "/photos/beach-hug.jpg",
      alt: "Inesita y Nacho abrazados en la playa",
      caption: "Un recuerdo simple de esos que quedan.",
      span: true,
    },
    {
      id: "g3",
      src: "/photos/garden-evening.jpg",
      alt: "Inesita y Nacho en un jardín al atardecer",
      caption: "Verde, madera, noche linda.",
      span: false,
    },
    {
      id: "g4",
      src: "/photos/selfie-sky.jpg",
      alt: "Inesita y Nacho en una selfie con cielo de fondo",
      caption: "Caras de estar bien.",
      span: false,
    },
    {
      id: "g5",
      src: "/photos/train-selfie.jpg",
      alt: "Inesita y Nacho en un tren",
      caption: "Hasta lo cotidiano tiene su gracia.",
      span: false,
    },
  ] as GalleryItem[],

  // ──────────────────────────────────────────────────────────
  // BONUS — las 3 opciones de regalo para elegir
  // ──────────────────────────────────────────────────────────
  bonus: [
    {
      id: "b1",
      icon: "PT",
      title: "Un look en Portugal",
      description:
        "Cuando estemos en Portugal, elegís algo de ropa que te encante. Lo que sea. Corre por mi cuenta.",
      microdetail: "Sin límite de estilo, sin límite de tiendas.",
      confirmMessage:
        "Portugal con look nuevo. Me parece bien.",
    },
    {
      id: "b2",
      icon: "AR",
      title: "Una noche para recordar",
      description:
        "Elegimos juntos un recital, una obra, una experiencia cultural que tengamos ganas de ver. Las entradas van por mí.",
      microdetail: "Lo que a vos te den ganas.",
      confirmMessage:
        "Una noche afuera, bien. Ya vamos a elegir qué.",
    },
    {
      id: "b3",
      icon: "DIA",
      title: "Un día para vos",
      description:
        "Diseño un día entero pensado para vos: dónde ir, qué comer, qué hacer. Un plan armado con detalle, solo para vos.",
      microdetail: "Sorpresa. Yo me encargo de todo.",
      confirmMessage:
        "Un día tuyo, armado por mí. Prometido.",
    },
  ] as BonusOption[],

  closing: {
    heading: "Feliz cumpleaños, Inesita.",
    message:
      "Ojalá este año te traiga todo lo que merecés. Y más.",
    signature: "Con todo, Nacho",
  } as ClosingContent,
};
