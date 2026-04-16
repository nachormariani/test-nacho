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

export interface GalleryItem {
  id: number;
  type: "image" | "video";
  title: string;
  desc: string;
  url: string;
  span: string;
  mimeType?: string;
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

  gallery: [
    {
      id: 1,
      type: "image",
      title: "Cielo enorme",
      desc: "Aire, blanco y ese día que parece de otro planeta.",
      url: "/photos/salt-jump.jpg",
      span: "md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-3",
    },
    {
      id: 2,
      type: "video",
      title: "Un video nuestro",
      desc: "Un pedacito de movimiento para que la página respire un poco más.",
      url: "/videos/recuerdo.mov",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-3",
      mimeType: "video/quicktime",
    },
    {
      id: 3,
      type: "image",
      title: "Playa",
      desc: "Un recuerdo simple de esos que quedan.",
      url: "/photos/beach-hug.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 4,
      type: "image",
      title: "Atardecer",
      desc: "Verde, madera y noche linda.",
      url: "/photos/garden-evening.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 5,
      type: "image",
      title: "Caras de estar bien",
      desc: "Una foto fácil, sin mucha explicación.",
      url: "/photos/selfie-sky.jpg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 6,
      type: "image",
      title: "En camino",
      desc: "Hasta lo cotidiano tiene su gracia.",
      url: "/photos/train-selfie.jpg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
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
