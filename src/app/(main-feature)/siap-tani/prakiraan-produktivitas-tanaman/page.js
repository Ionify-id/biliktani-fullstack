import React from "react";
import FormPrakiraanProduktivitasTanaman from "@/components/form/form-prakiraan-produktivitas-tanaman";

export default function PrakiraanProduktivitasTanamanPage() {
  return (
    <div>
      <div className="container">
        <div className="container mx-auto my-8 p-4 border-2 rounded-lg border-gray-150">
          <h1 className="text-2xl font-bold text-[#0B6653]">
            Prakiraan Produktivitas Tanaman
          </h1>
          <p>
            Fitur ini melakukan perhitungan jumlah tanaman yang dapat ditanam di
            suatu lahan dan estimasi produksi akhir yang dihasilkan.
          </p>
        </div>
        <p className="mb-5">
          Silahkan isi data berikut untuk menghitung Prakiraan Produktivitas
          Tanaman!
        </p>
        <FormPrakiraanProduktivitasTanaman />
      </div>
    </div>
  );
}
