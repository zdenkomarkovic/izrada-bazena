import { IzradaBazenaData, izradaBazenaData } from "@/constants/index";
import Image from "@/node_modules/next/image";
import React from "react";
import MotionComponent1 from "./MotionComponent1";

const IzradaBazena = () => {
  return (
    <div className="md:pt-10 border-t">
      <h2 className="text-2xl md:text-5xl text-center text-primary font-bold  md:py-8">
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
    <div className="px-2 py-5 md:p-10 my-7 md:my-14">
      <div
        className={`flex items-center ${
          reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
        }`}
      >
        <div className="md:w-2/3 space-y-3 md:space-y-6">
          <h3 className="text-2xl md:text-4xl text-center text-primary font-bold">
            {data.title}
          </h3>
          <p className=" first-letter:pl-6 text-md md:text-2xl">{data.text}</p>
          <p className=" first-letter:pl-6 text-md md:text-2xl">
            {data.semititle}
          </p>
          <ul>
            {data.linetext.map((line, i) => {
              return (
                <li
                  key={i}
                  className=" md:first-letter:pl-6 text-md md:text-2xl py-1 md:py-2 text-primary"
                >
                  - {line}
                </li>
              );
            })}
          </ul>
          <p className=" first-letter:pl-6 text-md md:text-2xl">{data.text2}</p>
        </div>
        <div className="pt-3 md:pt-0">
          <Image
            src={data.image}
            width={500}
            height={500}
            alt="bazen"
            className="md:w-3/4 mx-auto rounded-2xl object-cover aspect-[3/3] "
          />
        </div>
      </div>
    </div>
  );
};
