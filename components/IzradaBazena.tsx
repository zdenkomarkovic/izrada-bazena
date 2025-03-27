import { IzradaBazenaData, izradaBazenaData } from "@/constants/index";
import Image from "@/node_modules/next/image";
import React from "react";

const IzradaBazena = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl text-center text-primary font-bold">
        Proces izrade bazena se sastoji iz nekoliko faza
      </h2>{" "}
      {izradaBazenaData.map((data, i) => {
        return <Card key={i} data={data} reverse={i % 2 !== 0} />;
      })}{" "}
    </div>
  );
};

export default IzradaBazena;

const Card = ({
  data,
  reverse,
}: {
  data: IzradaBazenaData;
  reverse: boolean;
}) => {
  return (
    <div className="py-10">
      <div
        className={`flex ${
          reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
        }`}
      >
        <div className="w-2/3 space-y-6">
          <h3 className="text-2xl md:text-4xl text-center text-primary font-bold">
            {data.title}
          </h3>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">{data.text}</p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            {data.semititle}
          </p>
          <ul>
            {data.linetext.map((line, i) => {
              return (
                <li
                  key={i}
                  className=" first-letter:pl-6 text-lg md:text-3xl py-2 text-primary"
                >
                  - {line}
                </li>
              );
            })}
          </ul>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">{data.text2}</p>
        </div>
        <div>
          <Image
            src={"/bazen (3).jpg"}
            width={500}
            height={500}
            alt="bazen"
            className="w-2/3 mx-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};
