"use client";

import { useParams } from "next/navigation";
import { getDetailTanaman } from "@/lib/data-informasi/informasi-tanaman";

export default function DetailTanamanPage() {
  const { slug } = useParams();
  const { nama, detailTanaman } = getDetailTanaman(slug);

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="container flex flex-col border-2 rounded-xl border-black w-9/12 p-8 bg-white">
        <div>
          <h1 className="my-4 text-2xl font-bold">{nama}</h1>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <p>Nama Tanaman: {detailTanaman.namaTanaman}</p>
            </li>
            <li>
              <p>Keluarga: {detailTanaman.keluarga}</p>
            </li>
            <li>
              <p>Genus: {detailTanaman.genus}</p>
            </li>
            <li>
              <p>Estimasi Waktu Panen: {detailTanaman.estimasiWaktuPanen}</p>
            </li>
            <li>
              <p>
                Kedalaman Pengolahan Tanah:{" "}
                {detailTanaman.kedalamanPengolahanTanah}
              </p>
            </li>
            <li>
              <p>Pemupukan Dasar:</p>
              <ul className="list-disc pl-5 space-y-1">
                {detailTanaman.pemupukanDasar.map((pupuk, index) => (
                  <li key={index}>
                    <p>{pupuk}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <p>Jenis Hama:</p>
              <ul className="list-disc pl-5 space-y-1">
                {detailTanaman.jenisHamaPenyakit.hama.map((hama, index) => (
                  <li key={index}>
                    <p>{hama}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <p>Jenis Penyakit:</p>
              <ul className="list-disc pl-5 space-y-1">
                {detailTanaman.jenisHamaPenyakit.penyakit.map(
                  (penyakit, index) => (
                    <li key={index}>
                      <p>{penyakit}</p>
                    </li>
                  )
                )}
              </ul>
            </li>
            <li>
              <p>Kondisi Terbaik:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <p>Suhu: {detailTanaman.kondisiTerbaik.suhu}</p>
                </li>
                <li>
                  <p>
                    Kelembaban Udara:{" "}
                    {detailTanaman.kondisiTerbaik.kelembabanUdara}
                  </p>
                </li>
                <li>
                  <p>
                    Kelembaban Tanah:{" "}
                    {detailTanaman.kondisiTerbaik.kelembabanTanah}
                  </p>
                </li>
                <li>
                  <p>
                    Nutrisi Tanah: {detailTanaman.kondisiTerbaik.nutrisiTanah}
                  </p>
                </li>
                <li>
                  <p>Cahaya: {detailTanaman.kondisiTerbaik.cahaya}</p>
                </li>
                <li>
                  <p>pH Tanah: {detailTanaman.kondisiTerbaik.pHTanah}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
