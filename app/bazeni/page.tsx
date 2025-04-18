import IzradaBazena from "@/components/IzradaBazena";
import MotionComponent1 from "@/components/MotionComponent1";
import Tabela from "@/components/Tabela";
import React from "react";

const page = () => {
  return (
    <div className="pt-20 md:pt-28">
      {" "}
      <div className="container px-2 md:px-4 mx-auto space-y-2 md:space-y-8">
        <h1 className="text-2xl font-bold md:text-6xl text-primary flex flex-col py-2 md:py-5 text-center">
          Napredna Rešenja za Armirano-Betonske Bazene
        </h1>
        <p className="first-letter:pl-6 text-lg md:text-3xl">
          {" "}
          Firma <span className="font-bold text-primary"> Grad Mont</span>{" "}
          donosi vrhunska rešenja u izgradnji{" "}
          <span className="font-bold text-primary">
            armirano-betonskih bazena
          </span>{" "}
          koristeći THERMO (ISO) BLOKOVE, koji omogućavaju{" "}
          <span className="font-bold text-primary">
            bržu, precizniju i energetski efikasniju izgradnju
          </span>
          .
        </p>
        <p className="first-letter:pl-6 text-lg md:text-3xl">
          Ovi blokovi omogućavaju{" "}
          <span className="font-bold text-primary">
            {" "}
            maksimalnu termoizolaciju
          </span>
          , što znači manje{" "}
          <span className="font-bold text-primary">
            gubitke toplote i značajnu uštedu energije
          </span>
          . Takođe, zahvaljujući njihovoj konstrukciji, zidovi bazena su
          savršeno ravni i čvrsti, spremni za završnu obradu u rekordnom roku.
        </p>
        <h2 className=" text-xl md:text-5xl py-3 md:py-8 text-center">
          U ponudi imamo{" "}
          <span className="font-bold text-primary">Termo Klasik</span> i{" "}
          <span className="font-bold text-primary">Termo Premijum</span> bazene
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <MotionComponent1>
            <div className="px-2 md:px-5 py-3 md:py-10 space-y-2 md:space-y-7 ">
              <p className="first-letter:pl-6 text-md md:text-2xl">
                <span className="font-bold text-primary text-xl md:text-3xl pr-3">
                  TERMO KLASIK
                </span>{" "}
                bazenski setovi obuhvataju sve neophodne komponente za izgradnju
                i optimalno funkcionisanje bazena:
              </p>
              <p className="first-letter:pl-6 text-md md:text-2xl">
                Kombinacija pažljivo odabranih materijala i napredne tehnologije
                omogućava izgradnju bazena bez ograničenja u obliku, dimenzijama
                i dubini. Ovaj sistem garantuje dugotrajnost, energetsku
                efikasnost i vrhunski estetski izgled bazena.
              </p>

              <ul className="text-sm md:text-lg">
                <li className="">
                  {" "}
                  <span className="font-bold text-primary">
                    {" "}
                    Struktura bazena
                  </span>{" "}
                  - Zidovi od ISO ili THERMO blokova sa završnim elementima
                </li>
                <li className="">
                  <span className="font-bold text-primary">
                    {" "}
                    Hidroizolacija
                  </span>{" "}
                  - Geotekstil, aluminijumski profil i PVC hidroizolaciona
                  membrana
                </li>
                <li className="">
                  <span className="font-bold text-primary">
                    {" "}
                    Sistem cirkulacije
                  </span>{" "}
                  - Skimer, zidne mlaznice i podni slivnik za efikasan protok
                  vode
                </li>
                <li className="">
                  <span className="font-bold text-primary"> Filtracija</span> -
                  Pumpa sa predfilterom, peščani filter sa ispunom i
                  višepoložajni ventil
                </li>
                <li className="">
                  <span className="font-bold text-primary"> Instalacije</span> -
                  Krute i fleksibilne PVC cevi sa svim potrebnim fitinzima
                </li>
                <li className="">
                  <span className="font-bold text-primary">
                    {" "}
                    Dodatna oprema
                  </span>{" "}
                  - Inox merdevine za lakši ulazak i izlazak iz bazena
                </li>
                <li className="">
                  <span className="font-bold text-primary"> Održavanje</span> -
                  Set za čišćenje i tretman vode, kao i detaljno uputstvo za
                  održavanje
                </li>
              </ul>
            </div>
          </MotionComponent1>
          <MotionComponent1>
            <div className="px-2 md:px-5 py-3 md:py-10 space-y-2 md:space-y-7 ">
              <h2 className="first-letter:pl-6 text-md md:text-2xl">
                <span className="font-bold text-primary text-xl md:text-3xl pr-3">
                  TERMO PREMIJUM
                </span>{" "}
                bazen pruzaju beskonačne mogućnosti dizajna i komfora
              </h2>
              <p className="first-letter:pl-6 text-md md:text-2xl">
                Svaki bazen projektuje se i izrađuje prema specifičnim željama
                klijenta, pružajući potpuno personalizovano iskustvo.
                Dizajnirani da pruže maksimalan komfor i uživanje. Mogu biti
                opremljeni širokim spektrom dodatnih funkcija i elemenata
              </p>

              <ul className="text-sm md:text-lg">
                <li className="">
                  <span className="font-bold text-primary">
                    Relaksacione zone
                  </span>{" "}
                  - Prostor u vodi namenjen odmoru i opuštanju
                </li>
                <li>
                  <span className="font-bold text-primary">
                    Hidromasažni sistemi{" "}
                  </span>
                  - Različite vrste spa masažera za potpuni užitak{" "}
                </li>
                <li className="">
                  <span className="font-bold text-primary">
                    Izolovana područja
                  </span>{" "}
                  <span className="">
                    - Posebno dizajnirani delovi za privatni odmor
                  </span>
                </li>
                <li className="">
                  <span className="font-bold text-primary">
                    Vodene atrakcije
                  </span>{" "}
                  - Opcionalni dodaci poput slapova i vodenih efekata
                </li>
                <li className="">
                  <span className="font-bold text-primary">
                    Bazenski barovi
                  </span>{" "}
                  - Savršeni za osveženje i druženje u vodi
                </li>
                <li className="">
                  <span className="font-bold text-primary">
                    Automatski sistemi održavanja
                  </span>{" "}
                  - Jednostavno i efikasno čišćenje bazena
                </li>
                <li className="">
                  <span className="font-bold text-primary">
                    Ekskluzivna podvodna rasveta
                  </span>{" "}
                  - Kreira jedinstven ambijent i vizuelni efekat
                </li>
                <li className="">
                  <span className="font-bold text-primary">
                    Sistemi za dogrevanje vode
                  </span>{" "}
                  - Obezbeđuju optimalnu temperaturu cele sezone
                </li>
              </ul>
            </div>
          </MotionComponent1>
        </div>
        <Tabela />
        {/* <Cards2Kosina
          title={"Elektroinstalacije i elektro ormani"}
          data={cards2Data}
          text={cards2DataText}
        /> */}

        <IzradaBazena />
      </div>
    </div>
  );
};

export default page;
