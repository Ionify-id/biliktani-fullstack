"use client";

import { useParams, useRouter } from "next/navigation";
import { getDetailTanaman } from "@/lib/data-informasi/informasi-tanaman";
import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";

export default function DetailTanamanModal() {
  const { slug } = useParams();
  const router = useRouter();
  const { nama, detailTanaman } = getDetailTanaman(slug);

  function close() {
    return router.back();
  }

  return (
    <Modal>
      <div className="flex flex-col space-y-4 justify-center items-center">
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
        <Button
          variant="outline"
          className="border-2 border-emerald-800 w-1/4 rounded-xl text-emerald-800 hover:bg-emerald-800/10"
          onClick={close}
        >
          Tutup
        </Button>
      </div>
    </Modal>
  );
}
