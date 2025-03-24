"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className=" md:w-2/3 space-y-3 md:space-y-8">
          {/* <h2 className="text-4xl font-bold md:text-6xl text-primary flex flex-col  text-center">
            Šlep služba Čačak - Purić{" "}
            <span className="text-2xl font-normal md:text-3xl  text-muted-foreground">
              Do 10 tona nosivosti
            </span>
          </h2> */}
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Dobrodošli na zvaničnu stranicu firme{" "}
            <span className="font-bold text-primary"> Grad Mont</span>, lidera u
            projektovanju i izradi termo bazena. Bilo da sanjate o privatnom
            bazenu u svom dvorištu ili tražite vrhunsko rešenje za hotelski ili
            wellness centar, naš tim vam nudi{" "}
            <span className="font-bold text-primary">
              {" "}
              inovativna, energetski efikasna i dugotrajna rešenja
            </span>
            .
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Termo bazeni su{" "}
            <span className="font-bold text-primary">
              {" "}
              budućnost modernog kupanja
            </span>
            , jer kombinuju{" "}
            <span className="font-bold text-primary">
              izuzetnu termoizolaciju, dug vek trajanja i niske troškove
              održavanja
            </span>
            . Naši bazeni su dizajnirani da pruže{" "}
            <span className="font-bold text-primary">
              maksimalan komfor, smanjen gubitak toplote i optimalnu energetsku
              efikasnost
            </span>
            .
          </p>
          <p className="first-letter:pl-6 text-lg md:text-3xl">
            Sa dugogodišnjim iskustvom u industriji i upotrebom{" "}
            <span className="font-bold text-primary">
              najkvalitetnijih materijala i tehnologija
            </span>
            , garantujemo vrhunski kvalitet, sigurnost i funkcionalnost vašeg
            bazena.
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
          whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden  md:w-1/3"
        >
          <Image
            src={"/puric.jpg"}
            width={500}
            height={800}
            alt="slep puric cacak "
            className="object-cover h-[300px] md:h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About2;
