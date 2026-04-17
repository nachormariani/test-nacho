import ScrollExpandHero from "@/components/ui/scroll-expansion-hero";
import { Intro } from "@/components/sections/Intro";
import { Gallery } from "@/components/sections/Gallery";
import { Gifts } from "@/components/sections/Gifts";
import { BonusChoice } from "@/components/sections/BonusChoice";
import { Closing } from "@/components/sections/Closing";
import { FinalPhoto } from "@/components/sections/FinalPhoto";
import { content } from "@/data/content";

export default function Page() {
  return (
    <main>
      <ScrollExpandHero
        mediaSrc="/photos/beach-hug.jpg"
        bgImageSrc="/photos/salt-jump.jpg"
        bgVideoSrc="/videos/kling-hero.mp4"
        titleTop="Feliz cumpleaños,"
        titleBottom="Inesita."
        eyebrow="16 de abril"
        scrollHint="scrolleá para abrir"
      >
        <div id="intro">
          <Intro data={content.intro} />
          <Gallery data={content.gallery} />
          <Gifts data={content.gifts} />
          <BonusChoice data={content.bonus} />
          <Closing data={content.closing} />
          <FinalPhoto />
        </div>
      </ScrollExpandHero>
    </main>
  );
}
