import React from "react";

import FormPrakiraanWaktuPanen from "@/components/form/form-prakiraan-waktu-panen";

export default function PrakiraanWaktuPanenPage() {
  return (
    <main>
      <div className="container">
        <div className="container mx-auto my-8 p-4 border-2 rounded-lg border-gray-150">
          <h1 className="text-2xl font-bold text-[#0B6653]">
            Prakiraan Waktu Panen
          </h1>
          <p>
            Prakiraan Panen merupakan sebuah fitur yang digunakan untuk
            merencanakan kegiatan penanaman sesuai dengan komoditas yang ditanam
          </p>
        </div>
        <p className="mb-5">
          Silahkan isi data berikut untuk menghitung Prakiraan Waktu Panen
        </p>
        <FormPrakiraanWaktuPanen />
      </div>
    </main>
  );
}
