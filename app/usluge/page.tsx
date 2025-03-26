import Cards2Kosina from "@/components/Cards2Kosina";
import IzradaBazena from "@/components/IzradaBazena";
import Tabela from "@/components/Tabela";
import { cards2Data, cards2DataText } from "@/constants/index";
import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";

const page = () => {
  return (
    <div className="py-32">
      {" "}
      <div className="container px-2 md:px-4 mx-auto space-y-3 md:space-y-8">
        <h1 className="text-4xl font-bold md:text-6xl text-primary flex flex-col  text-center">
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
        <p className="first-letter:pl-6 text-lg md:text-3xl">
          U ponudi imamo{" "}
          <span className="font-bold text-primary">Termo Klasik</span> i{" "}
          <span className="font-bold text-primary">Termo Premijum</span> bazene
        </p>
        <p className="first-letter:pl-6 text-lg md:text-3xl">
          <span className="font-bold text-primary">TERMO KLASIK</span> bazenski
          setovi obuhvataju sve neophodne komponente za izgradnju i optimalno
          funkcionisanje bazena:
        </p>
        <ul className="text-2xl">
          <li className=" flex gap-3 items-center">
            {" "}
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <IoMdCheckboxOutline /> Struktura bazena
            </span>{" "}
            - Zidovi od ISO ili THERMO blokova sa završnim elementima
          </li>
          <li className=" flex gap-3 items-center">
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <IoMdCheckboxOutline />
              Hidroizolacija
            </span>{" "}
            - Geotekstil, aluminijumski profil i PVC hidroizolaciona membrana
          </li>
          <li className=" flex gap-3 items-center">
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <IoMdCheckboxOutline />
              Sistem cirkulacije
            </span>{" "}
            - Skimer, zidne mlaznice i podni slivnik za efikasan protok vode
          </li>
          <li className=" flex gap-3 items-center">
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <IoMdCheckboxOutline />
              Filtracija
            </span>{" "}
            - Pumpa sa predfilterom, peščani filter sa ispunom i višepoložajni
            ventil
          </li>
          <li className=" flex gap-3 items-center">
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <IoMdCheckboxOutline />
              Instalacije
            </span>{" "}
            - Krute i fleksibilne PVC cevi sa svim potrebnim fitinzima
          </li>
          <li className=" flex gap-3 items-center">
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <IoMdCheckboxOutline />
              Dodatna oprema
            </span>{" "}
            - Inox merdevine za lakši ulazak i izlazak iz bazena
          </li>
          <li className=" flex gap-3 items-center">
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <IoMdCheckboxOutline />
              Održavanje
            </span>{" "}
            - Set za čišćenje i tretman vode, kao i detaljno uputstvo za
            održavanje
          </li>
        </ul>
        <p className="first-letter:pl-6 text-lg md:text-3xl">
          <span className="font-bold text-primary">TERMO PREMIJUM</span> bazen
          pruzaju beskonačne mogućnosti dizajna i komfora
        </p>
        <p className="first-letter:pl-6 text-lg md:text-3xl">
          Kombinacija pažljivo odabranih materijala i napredne tehnologije
          omogućava izgradnju bazena bez ograničenja u obliku, dimenzijama i
          dubini. Svaki TERMO LUX bazen projektuje se i izrađuje prema
          specifičnim željama i potrebama klijenta, pružajući potpuno
          personalizovano iskustvo.
        </p>
        <p className="first-letter:pl-6 text-lg md:text-3xl">
          Pored svoje osnovne namene, ovi bazeni su dizajnirani da pruže
          maksimalan komfor i uživanje. Mogu biti opremljeni širokim spektrom
          dodatnih funkcija i elemenata, uključujući:
        </p>
        <ul className="text-2xl">
          <li className=" flex gap-3 items-center">
            {" "}
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <MdOutlineAddBox /> Relaksacione zone
            </span>{" "}
            - Prostor u vodi namenjen odmoru i opuštanju
          </li>
          <li className=" flex gap-3 items-center">
            {" "}
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <MdOutlineAddBox /> Hidromasažni sistemi
            </span>{" "}
            - Različite vrste spa masažera za potpuni užitak
          </li>
          <li className=" flex gap-3 items-center">
            {" "}
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <MdOutlineAddBox /> Izolovana područja
            </span>{" "}
            - Posebno dizajnirani delovi za privatni odmor
          </li>
          <li className=" flex gap-3 items-center">
            {" "}
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <MdOutlineAddBox /> Vodene atrakcije
            </span>{" "}
            - Opcionalni dodaci poput slapova i vodenih efekata
          </li>
          <li className=" flex gap-3 items-center">
            {" "}
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <MdOutlineAddBox /> Bazenski barovi
            </span>{" "}
            - Savršeni za osveženje i druženje u vodi
          </li>
          <li className=" flex gap-3 items-center">
            {" "}
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <MdOutlineAddBox /> Automatski sistemi održavanja
            </span>{" "}
            - Jednostavno i efikasno čišćenje bazena
          </li>
          <li className=" flex gap-3 items-center">
            {" "}
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <MdOutlineAddBox /> Ekskluzivna podvodna rasveta
            </span>{" "}
            - Kreira jedinstven ambijent i vizuelni efekat
          </li>
          <li className=" flex gap-3 items-center">
            {" "}
            <span className="font-bold text-primary  flex gap-3 items-center">
              {" "}
              <MdOutlineAddBox /> Sistemi za dogrevanje vode
            </span>{" "}
            - Obezbeđuju optimalnu temperaturu tokom cele sezone
          </li>
        </ul>

        <Tabela />
        <Cards2Kosina
          title={"Elektroinstalacije i elektro ormani"}
          data={cards2Data}
          text={cards2DataText}
        />
        <p className="first-letter:pl-6 text-lg md:text-3xl"></p>
        <IzradaBazena />
      </div>
    </div>
  );
};

export default page;
