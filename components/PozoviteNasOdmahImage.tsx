"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";
import Image from "@/node_modules/next/image";
import { FaRegCircleCheck } from "react-icons/fa6";

const PozoviteNasOdmah = () => {
  return (
    <div className="bg-primary text-muted pt-4 md:pt-10">
      <div className="container px-2 md:px-4 mx-auto font-bold flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-20">
        <Image
          src={"/slep puric.jpg"}
          width={250}
          height={200}
          alt="puric slep"
          className="rounded-t-xl"
        />
        <div className="flex flex-col gap-2 md:gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-4xl py-1 md:py-3">
              <FaRegCircleCheck className="mb-4 hidden md:block  md:text-6xl rounded-full mx-auto md:mx-0" />
              Razmišljate o izgradnji bazena?
            </h2>
            <p className="text-xl md:text-3xl">
              Kontaktirajte nas za besplatne konsultacije!
            </p>
          </div>
          <a href="tel:+381603619391">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className=" mx-auto md:mx-0 text-nowrap flex gap-3 text-2xl md:text-3xl items-center text-primary bg-muted rounded-lg px-4 md:px-8 md:py-3 py-2"
            >
              <PhoneIcon /> Pozovite odmah
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PozoviteNasOdmah;
