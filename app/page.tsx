import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Timeline } from "@/components/sections/Timeline";
import { Gallery } from "@/components/sections/Gallery";
import { Qualities } from "@/components/sections/Qualities";
import { BonusChoice } from "@/components/sections/BonusChoice";
import { Closing } from "@/components/sections/Closing";
import { content } from "@/data/content";

export default function Page() {
  return (
    <main>
      <Hero data={content.hero} />
      <Intro data={content.intro} />
      <Timeline data={content.timeline} />
      <Gallery data={content.gallery} />
      <Qualities data={content.qualities} />
      <BonusChoice data={content.bonus} />
      <Closing data={content.closing} />
    </main>
  );
}
