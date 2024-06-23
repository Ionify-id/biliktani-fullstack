import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

export default function CardInfo() {
  return (
    <Card className="w-full bg-white drop-shadow-md p-4">
      <CardHeader>
        <CardTitle className="text-[#0B6653]">Bayam</CardTitle>
        <CardDescription>Amaranthus tricolor</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        {/* <Image /> */}
        <div className="w-full h-48 bg-gray-100"></div>
        <Button className="bg-emerald-800 rounded-xl">
          Lihat Selengkapnya
        </Button>
      </CardContent>
    </Card>
  );
}
