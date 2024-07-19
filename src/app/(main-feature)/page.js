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
      <div>
        <Carousel
          className="w-3/4 mx-auto my-8"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-[450px]">
            {fiturBilikTani.map((pic, index) => (
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
      <div className="flex flex-col space-y-2 items-center">
        <h1 className="font-bold text-xl">
          Peta Lahan Pertanian Desa Ciaruteun Ilir
        </h1>
        <Carousel
          className="w-3/4 mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-[450px]">
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
