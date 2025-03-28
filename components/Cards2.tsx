import { Cards2Data, Cards2DataText } from "@/constants/index";
import { CardHeader, CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";

const Cards2 = ({
  title,
  data,
  text,
}: {
  title: string;
  data: Cards2Data[];
  text: Cards2DataText;
}) => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-10 md:py-16 space-y-10 md:space-y-20">
        <h2 className="text-4xl md:text-5xl text-center text-primary font-bold">
          {title}
        </h2>
        <p className="first-letter:pl-6 text-xl md:text-3xl">
          Termo bazeni su specijalni bazeni izrađeni od{" "}
          <span className="font-bold text-primary">
            termoizolacionih blokova{" "}
          </span>
          koji pružaju{" "}
          <span className="font-bold text-primary">
            izuzetnu toplotnu efikasnost
          </span>
          . Ovi bazeni omogućavaju{" "}
          <span className="font-bold text-primary">
            brže zagrevanje vode, smanjuju gubitak toplote i značajno smanjuju
            troškove energije
          </span>{" "}
          u poređenju sa klasičnim betonskim ili montažnim bazenima.
        </p>
        <div className="space-y-6 md:space-y-8">
          <div className="grid md:grid-cols-4 text-center gap-6 md:gap-8 items-stretch">
            {data.map((item) => {
              return (
                <MotionComponent1 key={item.id}>
                  <OneCard key={item.id} item={item} />
                </MotionComponent1>
              );
            })}
          </div>
        </div>
        <p className="first-letter:pl-6 text-xl md:text-3xl">{text.text}</p>
      </div>
    </div>
  );
};

export default Cards2;

const OneCard = ({ item }: { item: Cards2Data }) => {
  const IconComponent = item.icon;

  return (
    <Card className="h-full">
      <CardHeader className="relative z-10">
        {" "}
        <div className="flex gap-5 items-center text-2xl md:text-3xl justify-center ">
          <div className="text-5xl md:text-7xl text-primary">
            <IconComponent className="" />
          </div>
          <p className="inline-block">{item.title}</p>
        </div>
      </CardHeader>
      <CardContent className="relative z-10 md:space-y-4">
        <p className=" first-letter:pl-6  text-md md:text-lg">{item.text}</p>
      </CardContent>
    </Card>
  );
};
