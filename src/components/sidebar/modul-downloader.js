"use client";

import { modulPenggunaan } from "@/lib/data-informasi/modul";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

export default function ModulDownloader() {
  function handleClick(modul) {
    const pdfUrl = modul.link;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${modul.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <ul className="flex flex-col space-y-4">
      {modulPenggunaan.map((modul, index) => (
        <li key={index}>
          <Button
            variant="outline"
            className="w-full border border-2 border-emerald-700 rounded-xl flex flex-row justify-start space-x-4"
            onClick={() => handleClick(modul)}
          >
            <Download size={20} /> <span>{modul.title}</span>
          </Button>
        </li>
      ))}
    </ul>
  );
}
