import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cards1 from "@/components/Cards1";
import Cards2 from "@/components/Cards2";
import CardWithImage from "@/components/CardWithImage";
import Hero from "@/components/Hero";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import { cards1Data, cards2Data, cards2DataText } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About2 />

      <PozoviteNasOdmahImage />
      <Cards2
        title={"Šta Su Termo Bazeni?"}
        data={cards2Data}
        text={cards2DataText}
      />
      <Cards1 title={"Zašto Izabrati Grad Mont?"} data={cards1Data} />

      <BackgroundImage />
      <CardWithImage />
    </div>
  );
}
