"use client";

import { modulPenggunaan } from "@/lib/data-informasi/modul";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

export default function ModulDownloader() {
  return (
    <ul className="flex flex-col space-y-4">
      {modulPenggunaan.map((modul, index) => (
        <li key={index}>
          <a href={modul.link} target="_blank">
            <Button
              variant="outline"
              className="w-full border border-2 border-emerald-700 rounded-xl flex flex-row justify-start space-x-4"
            >
              <Download size={20} /> <span>{modul.title}</span>
            </Button>
          </a>
        </li>
      ))}
    </ul>
  );
}
