import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fiturBilikTani, lahan } from "@/lib/data-informasi/home";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="container flex flex-col space-y-2 max-h-screen">
      <Carousel
        className="w-11/12 mx-auto my-8"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {fiturBilikTani.map((pic, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center"
            >
              <div className="p-1">
                <Image
                  src={pic}
                  alt="image feature"
                  className="rounded-xl h-full object-cover"
                />{" "}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex flex-col space-y-2 items-center pb-4">
        <h1 className="font-bold text-xl">
          Peta Lahan Pertanian Desa Ciaruteun Ilir
        </h1>
        <Carousel
          className="w-11/12 mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {lahan.map((pic, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center items-center"
              >
                <Image
                  src={pic}
                  alt="image feature"
                  className="rounded-xl h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
