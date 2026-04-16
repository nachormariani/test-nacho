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
  // Legacy fields kept for backward compat with GalleryItem.tsx ui component
  src?: string;
  alt?: string;
  caption?: string;
}

// Legacy types — kept so existing component files compile
export interface TimelineItem {
  id: string;
  label: string;
  title: string;
  description: string;
}

export interface QualityItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ClosingContent {
  heading: string;
  message: string;
  signature: string;
}

// ──────────────────────────────────────────────────────────
// BONUS
// ──────────────────────────────────────────────────────────
export interface BonusSubItem {
  id: string;
  src: string;    // URL de imagen (logo, artista, producto)
  alt: string;
  label: string;  // Texto bajo la imagen
}

export interface BonusOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  microdetail: string;
  confirmMessage: string;
  subItems: BonusSubItem[];
}

// ──────────────────────────────────────────────────────────
// REGALITOS
// ──────────────────────────────────────────────────────────
export interface GiftItem {
  id: string;
  src: string;      // Reemplazá por la foto real si querés
  alt: string;
  title: string;
  description: string;
  tag: string;      // Etiqueta visual (ej: "Ya lo tenés", "Hoy", "Este domingo")
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
      type: "image",
      title: "Playa",
      desc: "Un recuerdo simple de esos que quedan.",
      url: "/photos/beach-hug.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Atardecer",
      desc: "Verde, madera y noche linda.",
      url: "/photos/garden-evening.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 4,
      type: "image",
      title: "Caras de estar bien",
      desc: "Una foto fácil, sin mucha explicación.",
      url: "/photos/selfie-sky.jpg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 5,
      type: "image",
      title: "En camino",
      desc: "Hasta lo cotidiano tiene su gracia.",
      url: "/photos/train-selfie.jpg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 6,
      type: "image",
      title: "Montaña",
      desc: "Una de esas fotos que huelen a aire fresco.",
      url: "/photos/fotos/mountain-hug.jpg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 7,
      type: "image",
      title: "En grupo",
      desc: "Camino, verde y gente querida.",
      url: "/photos/fotos/group-trail.jpg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 8,
      type: "image",
      title: "Vista arriba",
      desc: "Un paisaje simple y enorme.",
      url: "/photos/fotos/mountain-view.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 9,
      type: "image",
      title: "Luces",
      desc: "La noche también tiene sus recuerdos.",
      url: "/photos/fotos/night-lights.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 10,
      type: "image",
      title: "Fuegos",
      desc: "Ese momento mirando para arriba.",
      url: "/photos/fotos/fireworks-phone.jpg",
      span: "md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 11,
      type: "image",
      title: "Cielo prendido",
      desc: "Una postal de noche.",
      url: "/photos/fotos/fireworks-sky.jpg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 12,
      type: "image",
      title: "Playa con amigos",
      desc: "Sol, viento y esa energía de vacaciones.",
      url: "/photos/fotos/beach-friends.jpg",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 13,
      type: "image",
      title: "Una noche random",
      desc: "De esas fotos que después dan risa.",
      url: "/photos/fotos/pool-sign.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 14,
      type: "image",
      title: "Bata blanca",
      desc: "Energía total, sin explicación.",
      url: "/photos/fotos/white-robes.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 15,
      type: "image",
      title: "Salta",
      desc: "Otra foto del aire y el cielo.",
      url: "/photos/fotos/salt-jump-wide.jpg",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 16,
      type: "image",
      title: "Sonrisa",
      desc: "Una foto chica, muy vos.",
      url: "/photos/fotos/coke-smile.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 17,
      type: "image",
      title: "Casa",
      desc: "Lo cotidiano, pero guardado.",
      url: "/photos/fotos/home-mirror.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 18,
      type: "image",
      title: "Retrato de noche",
      desc: "Luz baja y recuerdo simple.",
      url: "/photos/fotos/night-portrait.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 19,
      type: "image",
      title: "Con gorra",
      desc: "Un retrato tranquilo.",
      url: "/photos/fotos/cap-portrait.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 20,
      type: "image",
      title: "Selfie",
      desc: "Una más para la colección.",
      url: "/photos/fotos/dog-selfie.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 21,
      type: "image",
      title: "En el auto",
      desc: "Hasta una foto cualquiera puede quedar.",
      url: "/photos/fotos/car-selfie.jpg",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
  ] as GalleryItem[],

  // ──────────────────────────────────────────────────────────
  // REGALITOS — editar src para reemplazar con fotos reales
  // ──────────────────────────────────────────────────────────
  gifts: [
    {
      id: "gift1",
      src: "/gifts/stand-computadora.png",
      alt: "Soporte para Mac",
      title: "Algo para tu escritorio",
      description: "Un soporte para tu Mac. Para que todo tenga su lugar.",
      tag: "Está en el bolso",
    },
    {
      id: "gift2",
      src: "/gifts/flores.png",
      alt: "Ramo de flores blancas",
      title: "Flores para vos",
      description: "Porque hay cosas que no necesitan mucha explicación.",
      tag: "Para hoy",
    },
    {
      id: "gift3",
      // ⬇ Foto de parrilla / sierra — reemplazá si querés
      src: "https://picsum.photos/seed/parrilla-argentina-sierra/640/480",
      alt: "Parrilla argentina en la sierra",
      title: "Una escapada el domingo",
      description:
        "A comer a una parrilla argentina en la sierra. Los dos, tranquilos, sin apuro.",
      tag: "Este domingo",
    },
  ] as GiftItem[],

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
      confirmMessage: "Portugal con look nuevo. Me parece bien.",
      subItems: [
        {
          id: "zara",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Zara_Logo.svg/200px-Zara_Logo.svg.png",
          alt: "Zara",
          label: "Zara",
        },
        {
          id: "hm",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/200px-H%26M-Logo.svg.png",
          alt: "H&M",
          label: "H&M",
        },
        {
          id: "mango",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Mango_%28clothing%29_logo.svg/200px-Mango_%28clothing%29_logo.svg.png",
          alt: "Mango",
          label: "Mango",
        },
        {
          id: "pullandbear",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Pull_and_Bear_logo.svg/200px-Pull_and_Bear_logo.svg.png",
          alt: "Pull&Bear",
          label: "Pull&Bear",
        },
        {
          id: "stradivarius",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Stradivarius_Logo_2013.svg/200px-Stradivarius_Logo_2013.svg.png",
          alt: "Stradivarius",
          label: "Stradivarius",
        },
        {
          id: "massimo",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Massimo_Dutti_logo.svg/200px-Massimo_Dutti_logo.svg.png",
          alt: "Massimo Dutti",
          label: "Massimo Dutti",
        },
      ],
    },
    {
      id: "b2",
      icon: "AR",
      title: "Una noche para recordar",
      description:
        "Elegimos juntos un recital o experiencia que tengamos ganas. Las entradas van por mí.",
      microdetail: "Lo que a vos te den ganas.",
      confirmMessage: "Una noche afuera, bien. Ya vamos a elegir qué.",
      subItems: [
        {
          id: "badbunny",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Bad_Bunny_2019_2.jpg/200px-Bad_Bunny_2019_2.jpg",
          alt: "Bad Bunny",
          label: "Bad Bunny",
        },
        {
          id: "weeknd",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/The_Weeknd_-_The_After_Hours_Tour_%28cropped%29.jpg/200px-The_Weeknd_-_The_After_Hours_Tour_%28cropped%29.jpg",
          alt: "The Weeknd",
          label: "The Weeknd",
        },
        {
          id: "rosalia",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rosal%C3%ADa_at_the_2019_Billboard_Latin_Music_Awards_%28cropped%29.jpg/200px-Rosal%C3%ADa_at_the_2019_Billboard_Latin_Music_Awards_%28cropped%29.jpg",
          alt: "Rosalía",
          label: "Rosalía",
        },
        {
          id: "nathy",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Nathy_Peluso_2019.jpg/200px-Nathy_Peluso_2019.jpg",
          alt: "Nathy Peluso",
          label: "Nathy Peluso",
        },
        {
          id: "conan",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Conan_Gray_2022_%28cropped%29.jpg/200px-Conan_Gray_2022_%28cropped%29.jpg",
          alt: "Conan Gray",
          label: "Conan Gray",
        },
        {
          id: "5sos",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/5_Seconds_of_Summer_-_2014_%28cropped%29.jpg/200px-5_Seconds_of_Summer_-_2014_%28cropped%29.jpg",
          alt: "5 Seconds of Summer",
          label: "5SOS",
        },
      ],
    },
    {
      id: "b3",
      icon: "FT",
      title: "Tu nuevo reloj",
      description:
        "Elegís el smartwatch o fitness tracker que más te guste. Fitbit, Apple Watch, lo que quieras. Corre por mi cuenta.",
      microdetail: "Vos elegís cuál te copa más.",
      confirmMessage: "Reloj nuevo. Genial, ya lo buscamos juntos.",
      subItems: [
        {
          id: "fitbit",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Fitbit_logo16.svg/200px-Fitbit_logo16.svg.png",
          alt: "Fitbit",
          label: "Fitbit",
        },
        {
          id: "apple",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png",
          alt: "Apple Watch",
          label: "Apple Watch",
        },
        {
          id: "samsung",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/200px-Samsung_Logo.svg.png",
          alt: "Samsung Galaxy Watch",
          label: "Galaxy Watch",
        },
        {
          id: "garmin",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Garmin_Logo.svg/200px-Garmin_Logo.svg.png",
          alt: "Garmin",
          label: "Garmin",
        },
        {
          id: "xiaomi",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/200px-Xiaomi_logo.svg.png",
          alt: "Xiaomi Smart Band",
          label: "Xiaomi Band",
        },
      ],
    },
  ] as BonusOption[],

  closing: {
    heading: "Feliz cumpleaños, Inesita.",
    message: "Ojalá este año te traiga todo lo que merecés. Y más.",
    signature: "Con todo, Nacho",
  } as ClosingContent,
};
