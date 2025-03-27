import { IzradaBazenaData, izradaBazenaData } from "@/constants/index";
import Image from "@/node_modules/next/image";
import React from "react";
import MotionComponent1 from "./MotionComponent1";

const IzradaBazena = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto pt-24">
      <h2 className="text-4xl md:text-5xl text-center text-primary font-bold py-8">
        Proces izrade bazena se sastoji iz nekoliko faza
      </h2>{" "}
      {izradaBazenaData.map((data, i) => {
        return (
          <MotionComponent1 key={i}>
            <Card data={data} reverse={i % 2 !== 0} />
          </MotionComponent1>
        );
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
    <div className="p-10 my-14">
      <div
        className={`flex items-center ${
          reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
        }`}
      >
        <div className="w-2/3 space-y-6">
          <h3 className="text-2xl md:text-4xl text-center text-primary font-bold">
            {data.title}
          </h3>
          <p className=" first-letter:pl-6 text-lg md:text-2xl">{data.text}</p>
          <p className=" first-letter:pl-6 text-lg md:text-2xl">
            {data.semititle}
          </p>
          <ul>
            {data.linetext.map((line, i) => {
              return (
                <li
                  key={i}
                  className=" first-letter:pl-6 text-lg md:text-2xl py-2 text-primary"
                >
                  - {line}
                </li>
              );
            })}
          </ul>
          <p className=" first-letter:pl-6 text-lg md:text-2xl">{data.text2}</p>
        </div>
        <div>
          <Image
            src={data.image}
            width={500}
            height={500}
            alt="bazen"
            className="w-3/4 mx-auto rounded-2xl object-cover aspect-[3/3] "
          />
        </div>
      </div>
    </div>
  );
};
