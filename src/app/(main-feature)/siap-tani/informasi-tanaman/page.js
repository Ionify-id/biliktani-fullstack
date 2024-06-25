import React from "react";
import CardInfo from "@/components/card-info.js";
import { getAllTanaman } from "@/lib/data-informasi/informasi-tanaman";

export default function InformasiTanamanPage() {
  const allTanaman = getAllTanaman();
  return (
    <main className="container overflow-y-auto max-h-screen">
      <div className="container">
        <div className="container mx-auto my-8 p-4 border-2 rounded-lg border-gray-150">
          <h1 className="text-2xl font-bold text-[#0B6653]">
            Informasi Tanaman
          </h1>
          <p>
            Informasi Tanaman merupakan sebuah fitur yang digunakan untuk
            menganalisis kondisi tanah sesuai dengan komoditas yang ditanam
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {allTanaman.map((tanaman) => (
            <CardInfo key={tanaman.id} data={tanaman} infoType="tanaman" />
          ))}
        </div>
      </div>
    </main>
  );
}
