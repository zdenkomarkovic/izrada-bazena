import { IconType } from "react-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { LuClockAlert } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbSettingsCheck } from "react-icons/tb";
import { MdOutlinePool } from "react-icons/md";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Bazeni",
    link: "/bazeni",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface WorkList {
  id: number;
  title: string;
  text: string;
}

export const workList = [
  {
    id: 1,
    title: "Grupni treninzi",
    text: "Oblikuj svoje telo i poboljšaj kondiciju uz dinamične grupne treninge! Vežbaj u motivišućem okruženju, uz stručno vođstvo i podršku tima. Pridruži se i zajedno postižemo ciljeve!",
    icon: IoIosPeople,
  },
  {
    id: 2,
    title: "Individualni treninzi",
    text: "Ostvari maksimalne rezultate uz personalizovane individualne treninge! Treniraj prema svom tempu, uz stručnu podršku i plan prilagođen tvojim ciljevima. Fokus je na tebi!",
    icon: IoIosPerson,
  },
  {
    id: 3,
    title: "Pilates",
    text: "Poboljšaj fleksibilnost, snagu i držanje uz pilates treninge! Uz kontrolisane pokrete i fokus na disanje, oblikuj telo i oslobodi se stresa. Idealno za sve nivoe kondicije!",
    icon: IoFitnessOutline,
  },
  {
    id: 4,
    title: "Body power",
    text: "Ojačaj mišiće i poboljšaj izdržljivost uz intenzivan trening snage! Kombinacija tegova i funkcionalnih vežbi pomoći će ti da postigneš vrhunsku formu.",
    icon: GiWeightLiftingUp,
  },
  {
    id: 5,
    title: "Mix-fit",
    text: " Dinamičan spoj kardio i snage za maksimalne rezultate! Raznovrsni pokreti, visoka energija i zabavna atmosfera čine svaki trening izazovnim i efektivnim.",
    icon: MdOutlineSportsGymnastics,
  },
  {
    id: 6,
    title: "Aeronix",
    text: "Spoj aerobnih vežbi i funkcionalnog treninga za bolju kondiciju i oblikovanje tela! Povećaj izdržljivost, sagori kalorije i uživaj u energičnom ritmu vežbanja.",
    icon: PiRocketLaunchBold,
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Jelena R.",
    image: "/hero1.jpg",
    description:
      "Treninzi su odlični, atmosfera motivišuća, a instruktori puni znanja i energije! Već nakon nekoliko nedelja osećam ogromnu promenu u kondiciji i snazi. Preporučujem svima!",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Fitnes klub je za mene više od mesta za vežbanje – ovde sam pronašla ekipu koja me inspiriše i podržava! Vežbamo zajedno, bodrimo se i družimo i van treninga. Ne bih ovo menjala ni za šta!",
  },
  {
    id: 3,
    title: "Ana M.",
    image: "/hero2.jpg",
    description:
      "Posle svakog treninga osećam se snažnije i zdravije! Programi su prilagođeni svim nivoima, a podrška trenera me stalno gura ka boljoj verziji sebe.",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Od kada treniram ovde, imam više energije, manje stresa i bolju kondiciju! Ambijent je fantastičan, a treninzi su uvek dinamični i zanimljivi.",
  },
  {
    id: 5,
    title: "Milica P.",
    image: "/hero1.jpg",
    description:
      "Treniram ovde već nekoliko godina i mogu reći da mi je ovo druga porodica! Pored sjajnih treninga, upoznala sam divne ljude koji su mi postali bliski prijatelji. Motivacija i podrška su neverovatni!",
  },
];

export interface Cards1Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    icon: BsTools,
    title: "Vrhunska Kvalitetna Izrada",
    text: "Koristimo najkvalitetnije termoizolacione materijale za dug vek trajanja.",
  },
  {
    id: 2,
    icon: MdOutlinePool,
    title: "Individualni Pristup",
    text: "Svaki bazen dizajniramo i izrađujemo prema željama klijenta.",
  },
  {
    id: 3,
    icon: FaReact,
    title: "Energetska Efikasnost",
    text: "Ušteda energije i održavanje optimalne temperature vode.",
  },
  {
    id: 4,
    icon: LiaShippingFastSolid,
    title: "Brza Montaža",
    text: "Kratki rokovi izrade i minimalni građevinski radovi.",
  },
  {
    id: 4,
    icon: TbSettingsCheck,
    title: "Kompletna Usluga",
    text: " Od projektovanja i izrade do održavanja i servisa.",
  },
];

export interface ServisCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const servisCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Šlep automobila",
    text: "Vršimo šlep svih vrsta automobila, bez obzira na stanje vozila – havarisana, poluvozna ili ispravna.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Šlep motora",
    text: "Šlepamo motore, skutere, četvorotočkaše, motorne sanke i druga vozila brzo i sigurno.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Šlep kombija i kamiona",
    text: "Pružamo uslugu transporta kombija, kamiona i radnih mašina širom Srbije, uz sigurnost i brzinu.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Šlep vozila iz inostranstva",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pomoc na putu 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Čačku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Šlep lakog i teškog tereta",
    text: "Za vas prevozimo i laki i teški teret, kako u Čačku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep havarisanog vozila",
    text: "Ukoliko ste imali havariju na putu, tu smo da pokupimo vaše vozilo i bezbedno ga odšlepamo do servisa.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Šlep radnih mašina",
    text: "Šlep radnih mašina do lokacije na kojoj mogu nastaviti s poslom, brzo i sigurno.",
  },
  {
    id: 9,
    icon: GiWeight,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Izvlačenje vozila sa puta sajlom, pažljivo izvedeno kako bi se izbegla dodatna oštećenja vozila.",
  },
  {
    id: 10,
    icon: GiWeight,
    title: "Prevoz poljoprivrednih mašina",
    text: "Prevoz poljoprivrednih mašina, priključaka i opreme – idealno rešenje za one koje je lakše transportovati nego voziti, kao i za neispravne mašine.",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    icon: FaReact,
    title: "Energetska efikasnost",
    text: "Manja potrošnja struje i brže zagrevanje vode",
  },
  {
    id: 2,
    icon: IoWater,
    title: "Manji gubitak vode",
    text: "Termoizolacija smanjuje isparavanje i održava optimalnu temperaturu",
  },
  {
    id: 3,
    icon: LuClockAlert,
    title: "Brza i jednostavna izgradnja",
    text: "Postavljanje termo bazena je brže i jeftinije u odnosu na klasične betonske bazene",
  },
  {
    id: 4,
    icon: MdOutlinePool,
    title: "Dugotrajnost i otpornost",
    text: "Visokokvalitetni materijali otporni na vremenske uslove i hemijske uticaje",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Bilo da želite bazen za privatnu upotrebu, hotel, spa centar ili wellness kompleks, termo bazeni su idealno rešenje za vas!",
};
export interface IzradaBazenaData {
  title: string;
  text: string;
  semititle: string;
  linetext: string[];
  image: string;
  text2: string;
}

export const izradaBazenaData: IzradaBazenaData[] = [
  {
    title: "Odabir Lokacije za Bazen",
    text: "Pravilno određivanje mesta za bazen ključno je za njegovu dugotrajnost i funkcionalnost. Pre početka radova, potrebno je izvršiti precizna merenja kako bi se bazen tačno pozicionirao u skladu s projektom.",
    semititle: "Proces uključuje:",
    linetext: [
      "Obeležavanje tačne lokacije bazena na terenu",
      "Trasiranje iskopa prema dimenzijama i obliku bazena",
      "Uzimanje u obzir visine referentne tačke, odnosno buduće završne visine bazena",
    ],
    image: "/bazen (30).jpg",
    text2:
      "Ova faza osigurava da bazen bude savršeno uklopljen u prostor, uz optimalan nivo stabilnosti i estetski sklad sa okolinom.",
  },
  {
    title: "Zemljani Radovi",
    text: "Priprema terena započinje iskopom zemljišta, koji se može obaviti građevinskom mehanizacijom ili ručno, u slučaju otežanog pristupa.",
    semititle: "Glavne faze iskopa:",
    linetext: [
      "Uklanjanje viška zemlje sa lokacije",
      "Nivelacija dna iskopa kako bi površina bila što ravnija",
      "Zbijanje tla radi stabilnosti i sprečavanja kasnijih pomeranja",
    ],
    image: "/bazen (32).jpg",
    text2:
      "Ovaj proces obezbeđuje čvrstu i stabilnu osnovu, pripremljenu za sledeće faze izgradnje bazena.",
  },
  {
    title: "Armiranje",
    text: "Nakon pripreme podloge, sledi postavljanje PE folije (najlona) koja služi kao zaštitni sloj. Preko nje se, prema projektu, postavlja armatura, koja obezbeđuje čvrstoću i stabilnost buduće armirano-betonske temeljne ploče.",
    semititle: "",
    linetext: [
      "PE folija - sprečava gubitak vlage iz betona i štiti podlogu",
      "Armatura - pravilno postavljena mreža osigurava dugotrajnost i otpornost konstrukcije",
    ],
    image: "/bazen (26).jpg",
    text2:
      "Ovaj korak je ključan za postizanje stabilne i izdržljive baze bazena.",
  },
  {
    title: "Betoniranje",
    text: "Temeljna ploča bazena izrađuje se od armirano-betonskog sloja čija debljina zavisi od projekta. Preporučuje se upotreba mašinski pripremljenog betona (MB 30), koji osigurava visoku čvrstoću i dugotrajnost konstrukcije.",
    semititle: "",
    linetext: [
      "Precizno nivelisanje - Beton se izliva ravnomerno i bez padova, kako bi se postigla maksimalna stabilnost",
      "Glančanje površine - Nakon izlivanja i poravnavanja, završna obrada osigurava glatku i ujednačenu podlogu",
    ],
    image: "/bazen (1).jpg",
    text2:
      "Ova faza je ključna za stvaranje pouzdane i čvrste osnove, spremne za nastavak izgradnje bazena.",
  },
  {
    title: "Izgradnja i Formiranje Konstrukcije",
    text: "Nakon završetka temelja, započinje montaža zidova bazena, pri čemu se koristi visokokvalitetna termoizolaciona struktura. Ovi zidovi omogućavaju stabilnost, dugotrajnost i energetsku efikasnost, dok se u ovoj fazi ugrađuju svi potrebni elementi za optimalno funkcionisanje bazena.",
    semititle: "",
    linetext: [
      " Postavljanje termoizolacionih blokova za zidove bazena",
      " Spajanje i fiksiranje elemenata prema projektu",
      "Ojačavanje konstrukcije ugradnjom dodatne armature",
      "Priprema zidova za sledeće faze hidroizolacije i instalacija",
    ],
    image: "/bazen (21).jpg",
    text2: "",
  },
  {
    title: "Ugradnja Cirkulacionog Sistema",
    text: "Za pravilan rad bazena, neophodno je postaviti cirkulacione komponente unutar zidova. To uključuje skimere, mlaznice i podne slivnike, koji obezbeđuju nesmetan protok i filtraciju vode. Pravilna ugradnja ovog sistema garantuje čistu i zdravu vodu tokom celog korišćenja.",
    semititle: "",
    linetext: [
      "Ugradnja skimer sistema za prikupljanje nečistoća",
      "Postavljanje mlaznica koje omogućavaju ravnomernu cirkulaciju vode",
      "Ugradnja podnog slivnika za odvod i drenažu bazena",
      "Povezivanje svih elemenata sa planiranim cevovodom",
    ],
    image: "/bazen (19).jpg",
    text2: "",
  },
  {
    title: "Postavljanje Hidroizolacije",
    text: "Kako bi bazen bio potpuno vodonepropustan, sledi ugradnja hidroizolacionih slojeva. Ovaj proces podrazumeva upotrebu kvalitetnih PVC membrana i zaštitnih premaza, čime se sprečava prodiranje vode i produžava vek trajanja bazena.",
    semititle: "",
    linetext: [
      "Postavljanje geotekstila kao zaštitnog sloja",
      "Ugradnja hidroizolacione PVC membrane visoke otpornosti",
      "Završna obrada spojeva kako bi se osigurala potpuna nepropusnost",
      "Testiranje hidroizolacije pre nastavka radova",
    ],
    image: "/bazen (12).jpg",
    text2: "",
  },
  {
    title: "Montaža Opreme i Završni Radovi",
    text: "U završnoj fazi, sva ugovorena bazenska oprema se postavlja u mašinsku salu, gde se povezuju pumpe, filteri i automatizovani sistemi za održavanje bazena. Nakon povezivanja svih komponenti sa cirkulacionim sistemom, bazen se pušta u rad, testira i priprema za korišćenje.",
    semititle: "",
    linetext: [
      "Montaža filtera i pumpi za održavanje kvaliteta vode",
      "Povezivanje cevi i ventila sa sistemom za cirkulaciju",
      "Instalacija dodatne opreme (osvetljenje, grejači, automatizovani sistemi)",
      " Završno testiranje i puštanje bazena u funkciju",
    ],
    image: "/bazen (10).jpg",
    text2: "",
  },
];
