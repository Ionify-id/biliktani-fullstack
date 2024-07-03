import React from "react";
import CardInfo from "@/components/card-info.js";
import { getAllHama } from "@/lib/data-informasi/informasi-hama";

export default function InformasiHamaPage() {
  const allHama = getAllHama();
  return (
    <main className="overflow-y-auto max-h-screen">
      <div className="container">
        <div className="container mx-auto my-8 p-4 border-2 rounded-lg border-gray-150">
          <h1 className="text-2xl font-bold text-emerald-700">
            Informasi Hama
          </h1>
          <p>
            Informasi hama adalah fitur yang dapat digunakan untuk
            mengidentifikasi hama dan dapat mengetahui cara mencegah dan
            penanganannya yang sangat mempengaruhi tanaman.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {allHama.map((hama) => (
            <CardInfo key={hama.id} data={hama} infoType="hama" />
          ))}
        </div>
      </div>
    </main>
  );
}
