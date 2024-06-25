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
import Link from "next/link";

export default function CardInfo({ data, infoType }) {
  let link = "";
  switch (infoType) {
    case "tanaman":
      link = "/siap-tani/informasi-tanaman/detail/";
      break;
    case "hama":
      link = "/rawat-tani/informasi-hama/detail/";
      break;
    default:
      link = "/";
      break;
  }

  return (
    <Card className="w-full bg-white drop-shadow-md p-4">
      <CardHeader>
        <CardTitle className="text-[#0B6653]">{data.nama}</CardTitle>
        {infoType === "tanaman" && (
          <CardDescription>{data.latin}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <Image
          src={data.image}
          alt={`Gambar data ${data.title}`}
          width={0}
          height={0}
          className="rounded-xl w-full object-cover h-48 w-96"
          loading="lazy"
        />
        <Link href={link + data.id}>
          <Button className="bg-emerald-800 rounded-xl w-full hover:bg-emerald-700">
            Lihat Selengkapnya
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
