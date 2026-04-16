// ============================================================
// CONTENT — edita todo acá sin tocar los componentes
// ============================================================

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaTarget: string;
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
  src: string;      // Reemplazá por "/photos/1.jpg" cuando tengas las fotos reales
  alt: string;
  caption: string;
  span?: boolean;   // true = ocupa 2 columnas en la grilla
}

export interface QualityItem {
  id: string;
  number: string;   // "01" – "06"
  title: string;
  description: string;
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
    title: "Feliz cumpleaños, amor",
    subtitle: "Te armé algo chiquito, pero muy pensado para vos.",
    ctaLabel: "Abrir sorpresa",
    ctaTarget: "#intro",
  } as HeroContent,

  intro: {
    paragraph:
      "No quería solo comprarte una cosa y ya. Quería hacer algo que se sintiera pensado de verdad, algo tuyo. Esta página es parte de esa sorpresa: unos regalos, unos recuerdos, y al final una última cosa que podés elegir vos. Porque sos de las personas que merecen que se les preste atención.",
  } as IntroContent,

  timeline: [
    {
      id: "t1",
      label: "El comienzo",
      title: "Cuando todo empezó",
      description:
        "Hay un momento exacto en el que uno se da cuenta. No sé si lo sabés, pero yo sí me acuerdo.",
    },
    {
      id: "t2",
      label: "Un viaje",
      title: "Lejos de todo",
      description:
        "Ese viaje donde todo fue más fácil porque estabas vos. Esas son las cosas que uno guarda.",
    },
    {
      id: "t3",
      label: "Un momento importante",
      title: "Algo que cambió",
      description:
        "Hay momentos que no parecen grandes pero te reordenan todo por dentro. Este fue uno de esos.",
    },
    {
      id: "t4",
      label: "Hoy",
      title: "Acá, ahora",
      description:
        "Contento de estar acá, con vos, festejando esto. Ojalá sean muchos más.",
    },
  ] as TimelineItem[],

  // ──────────────────────────────────────────────────────────
  // FOTOS — reemplazá los src por "/photos/1.jpg", "/photos/2.jpg", etc.
  // cuando tengas las fotos reales. Las descripciones también.
  // ──────────────────────────────────────────────────────────
  gallery: [
    {
      id: "g1",
      src: "https://picsum.photos/seed/ine-01/800/1000",
      alt: "Foto 1 — reemplazar",
      caption: "Caption foto 1",
      span: false,
    },
    {
      id: "g2",
      src: "https://picsum.photos/seed/ine-02/800/600",
      alt: "Foto 2 — reemplazar",
      caption: "Caption foto 2",
      span: true,
    },
    {
      id: "g3",
      src: "https://picsum.photos/seed/ine-03/800/900",
      alt: "Foto 3 — reemplazar",
      caption: "Caption foto 3",
      span: false,
    },
    {
      id: "g4",
      src: "https://picsum.photos/seed/ine-04/800/600",
      alt: "Foto 4 — reemplazar",
      caption: "Caption foto 4",
      span: false,
    },
    {
      id: "g5",
      src: "https://picsum.photos/seed/ine-05/800/1000",
      alt: "Foto 5 — reemplazar",
      caption: "Caption foto 5",
      span: false,
    },
  ] as GalleryItem[],

  qualities: [
    {
      id: "q1",
      number: "01",
      title: "Tu sensibilidad",
      description:
        "La forma en que percibís el mundo, las personas, los detalles. No es algo que todo el mundo tiene.",
    },
    {
      id: "q2",
      number: "02",
      title: "Tu cabeza",
      description:
        "La claridad con la que pensás, la velocidad, la profundidad. Da gusto hablar con vos.",
    },
    {
      id: "q3",
      number: "03",
      title: "Tu criterio",
      description:
        "Sabés lo que querés. Sabés lo que está bien. Y no cedés ante lo que no te parece.",
    },
    {
      id: "q4",
      number: "04",
      title: "Cómo hacés las cosas",
      description:
        "Con cuidado, con atención, sin apuros innecesarios. Siempre bien.",
    },
    {
      id: "q5",
      number: "05",
      title: "Tu manera de estar",
      description:
        "Hay personas que irradian algo especial. Vos entrás a un lugar y eso se siente.",
    },
    {
      id: "q6",
      number: "06",
      title: "Lo que te hace únicas",
      description:
        "No es una sola cosa. Es todo junto. Es vos.",
    },
  ] as QualityItem[],

  // ──────────────────────────────────────────────────────────
  // BONUS — las 3 opciones de regalo para elegir
  // ──────────────────────────────────────────────────────────
  bonus: [
    {
      id: "b1",
      icon: "✈️",
      title: "Un look en Portugal",
      description:
        "Cuando estemos en Portugal, elegís algo de ropa que te encante. Lo que sea. Corre por mi cuenta.",
      microdetail: "Sin límite de estilo, sin límite de tiendas.",
      confirmMessage:
        "Portugal con look nuevo. Me parece bien.",
    },
    {
      id: "b2",
      icon: "🎭",
      title: "Una noche para recordar",
      description:
        "Elegimos juntos un recital, una obra, una experiencia cultural que tengamos ganas de ver. Las entradas van por mí.",
      microdetail: "Lo que a vos te den ganas.",
      confirmMessage:
        "Una noche afuera, bien. Ya vamos a elegir qué.",
    },
    {
      id: "b3",
      icon: "☀️",
      title: "Un día para vos",
      description:
        "Diseño un día entero pensado para vos: dónde ir, qué comer, qué hacer. Un plan armado con detalle, solo para vos.",
      microdetail: "Sorpresa. Yo me encargo de todo.",
      confirmMessage:
        "Un día tuyo, armado por mí. Prometido.",
    },
  ] as BonusOption[],

  closing: {
    heading: "Feliz cumpleaños, Ine.",
    message:
      "Ojalá este año te traiga todo lo que merecés. Y más.",
    signature: "Con todo, Nacho",
  } as ClosingContent,
};
