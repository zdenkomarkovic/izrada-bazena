import { CardHeader, CardTitle, CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";
import { Cards1Data } from "@/constants/index";

const Cards1 = ({ title, data }: { title: string; data: Cards1Data[] }) => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-10 md:py-20 border-t-2 space-y-10 md:space-y-20">
        <h2 className="text-4xl md:text-5xl text-center text-primary font-bold">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 text-center gap-6 md:gap-8 items-stretch">
          {data.slice(0, 3).map((item) => {
            return (
              <MotionComponent1 key={item.id}>
                <OneCard key={item.id} item={item} />;
              </MotionComponent1>
            );
          })}
        </div>
        <div className="grid md:grid-cols-2 text-center gap-6 md:gap-8 items-stretch">
          {data.slice(3).map((item) => {
            return (
              <MotionComponent1 key={item.id}>
                <OneCard key={item.id} item={item} />;
              </MotionComponent1>
            );
          })}
        </div>
        <p className="first-letter:pl-6 text-xl md:text-3xl">
          Naš cilj je da svaki klijent dobije savršeno rešenje za svoje potrebe,
          uz maksimalan komfor i dugoročnu uštedu energije.
        </p>
      </div>
    </div>
  );
};

export default Cards1;

const OneCard = ({ item }: { item: Cards1Data }) => {
  const IconComponent = item.icon;

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="mx-auto text-4xl md:text-6xl text-primary md:pb-5">
          <IconComponent />
        </div>
        <CardTitle className="text-2xl md:text-3xl">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-lg md:text-xl">
        <p>{item.text}</p>
      </CardContent>
    </Card>
  );
};
