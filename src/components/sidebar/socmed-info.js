import React from "react";
import { socmed } from "@/lib/socmed";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function SocmedInfo() {
  return (
    <div>
      <h4>Tentang Kami</h4>
      <ul className="text-left">
        {socmed.map((info, index) => {
          return (
            <li key={index} className="my-2 w-full">
              <Link
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center space-x-4 w-full border-2 border-emerald-700 py-1 px-2 rounded-lg hover:bg-gray-100"
              >
                <Image src={info.icon} width={24} height={24} alt={info.name} />
                <span>{info.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
