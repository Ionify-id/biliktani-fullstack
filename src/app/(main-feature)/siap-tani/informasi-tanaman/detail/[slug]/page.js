"use client";

import { useParams } from "next/navigation";
import { getDetailTanaman } from "@/lib/data-informasi/informasi-tanaman";
import Image from "next/image";

export default function DetailTanamanPage() {
  const { slug } = useParams();
  const { nama, latin, image, detailTanaman } = getDetailTanaman(slug);

  const deskripsiParagraphs = detailTanaman.deskripsiTanaman
    .trim()
    .split("\n\n")
    .map((paragraph, index) => (
      <p key={index} className="text-justify">
        {paragraph.trim()}
      </p>
    ));

  return (
    <main className="overflow-y-auto max-h-screen">
      <div className="container flex flex-col space-y-4 my-8">
        {/* Judul */}
        <div className="container flex flex-col mx-auto p-4 border-2 rounded-lg border-gray-150">
          <h1 className="text-3xl font-bold text-emerald-800">{nama}</h1>
          <p className="italic text-sm">{latin}</p>
          <Image
            src={image}
            alt={`gambar ${nama}`}
            quality={100}
            className="w-full h-[450px] object-cover rounded-lg shadow-md mt-4"
          />
        </div>

        {/* Deskripsi */}
        <div className="container flex flex-col space-y-4 mx-auto p-4 border-2 rounded-lg border-gray-150">
          {/* Deskripsi tanaman */}
          <div>
            <h2 className="text-2xl font-bold text-emerald-800">Deskripsi</h2>
            <div className="flex flex-col ml-8 space-y-2">
              {deskripsiParagraphs}
            </div>
          </div>
          {/* Manfaat */}
          <div>
            <h2 className="text-2xl font-bold text-emerald-800">Manfaat</h2>
            <ul className="list-disc ml-4">
              {detailTanaman.manfaat.map((item, index) => {
                const parts = item.split(": ");
                return (
                  <li key={index} className="ml-8">
                    <p>
                      <strong>{parts[0]}</strong>: {parts[1]}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Informasi tanaman */}
          <div>
            <h2 className="text-2xl font-bold text-emerald-800">
              Informasi tanaman
            </h2>
            <div className="ml-8">
              <p>
                <strong>Keluarga: </strong>
                {detailTanaman.keluarga}
              </p>
              <p>
                <strong>Genus: </strong>
                {detailTanaman.genus}
              </p>
              <p>
                <strong>Estimasi waktu panen: </strong>
                {detailTanaman.estimasiWaktuPanen}
              </p>
              <p>
                <strong>Kedalaman pengolahan tanah: </strong>
                {detailTanaman.kedalamanPengolahanTanah}
              </p>
              <p>
                <strong>Pemupukan dasar: </strong>
                {detailTanaman.pemupukanDasar}
              </p>
              <>
                <p>
                  <strong>Jenis hama/penyakit: </strong>
                </p>
                <ul className="list-disc ml-8">
                  {detailTanaman.jenisHamaPenyakit.map((penyakit, index) => (
                    <li key={index} className="ml-4">
                      <p>{penyakit}</p>
                    </li>
                  ))}
                </ul>
              </>
              <>
                <p>
                  <strong>Kondisi terbaik: </strong>
                </p>
                <ul className="list-disc ml-8">
                  <li className="ml-4">
                    <p>Suhu ideal: {detailTanaman.kondisiTerbaik.suhuIdeal}</p>
                  </li>
                  <li className="ml-4">
                    <p>
                      Kelembaban udara:{" "}
                      {detailTanaman.kondisiTerbaik.kelembabanUdara}
                    </p>
                  </li>
                  <li className="ml-4">
                    <p>
                      Kelembaban tanah:{" "}
                      {detailTanaman.kondisiTerbaik.kelembabanTanah}
                    </p>
                  </li>
                  <li className="ml-4">
                    <p>
                      Nutrisi tanah: {detailTanaman.kondisiTerbaik.nutrisiTanah}
                    </p>
                  </li>
                  <li className="ml-4">
                    <p>Cahaya: {detailTanaman.kondisiTerbaik.cahaya}</p>
                  </li>
                  <li className="ml-4">
                    <p>ph Tanah: {detailTanaman.kondisiTerbaik.pHTanah}</p>
                  </li>
                </ul>
              </>
            </div>
          </div>
        </div>

        {/* Cara penanaman dan perawatan */}
        <div className="container flex flex-col space-y-4 mx-auto p-4 border-2 rounded-lg border-gray-150">
          {/* Cara penanaman */}
          <div>
            <h2 className="text-2xl font-bold text-emerald-800">
              Cara penanaman
            </h2>
            <ul className="list-disc ml-8">
              {detailTanaman.caraPenanaman.map((item, index) => {
                const parts = item.split(": ");
                return (
                  <li key={index} className="ml-8">
                    <p>
                      <strong>{parts[0]}</strong>: {parts[1]}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Cara perawatan */}
          <div>
            <h2 className="text-2xl font-bold text-emerald-800">
              Cara perawatan
            </h2>
            <ul className="list-disc ml-8">
              {detailTanaman.caraPerawatan.map((item, index) => {
                const parts = item.split(": ");
                return (
                  <li key={index} className="ml-8">
                    <p>
                      <strong>{parts[0]}</strong>: {parts[1]}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
