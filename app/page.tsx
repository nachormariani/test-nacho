import ScrollExpandHero from "@/components/ui/scroll-expansion-hero";
import { Intro } from "@/components/sections/Intro";
import { Timeline } from "@/components/sections/Timeline";
import { Gallery } from "@/components/sections/Gallery";
import { BonusChoice } from "@/components/sections/BonusChoice";
import { Closing } from "@/components/sections/Closing";
import { content } from "@/data/content";

export default function Page() {
  return (
    <main>
      <ScrollExpandHero
        mediaSrc="/photos/beach-hug.jpg"
        bgImageSrc="/photos/salt-jump.jpg"
        titleTop="Feliz cumpleaños,"
        titleBottom="Inesita."
        eyebrow="16 de abril"
        scrollHint="scrolleá para abrir"
      >
        <div id="intro">
          <Intro data={content.intro} />
          <Timeline data={content.timeline} />
          <Gallery data={content.gallery} />
          <BonusChoice data={content.bonus} />
          <Closing data={content.closing} />
        </div>
      </ScrollExpandHero>
    </main>
  );
}
