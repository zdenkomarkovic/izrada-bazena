"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

import Hero1 from "../public/bazen (10).jpg";
import Hero2 from "../public/bazen (27).jpg";
import Hero3 from "../public/bazen (31).jpg";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <Carousel
        className="absolute top-0 left-0 w-full h-[100dvh] z-[0]"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnFocusIn: false,
            delay: 5000,
          }),
          Fade(),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src={Hero1}
              alt="bazeni"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero2}
              alt="bazeni"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero3}
              alt="bazeni"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className=" flex w-full items-center justify-center z-[1] text-center">
        <h1 className="flex flex-col gap-20 text-white text-5xl md:text-8xl font-bold ">
          Grad Mont{" "}
          <span className="text-4xl md:text-7xl">
            Stručnjaci za Termo Bazene
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
