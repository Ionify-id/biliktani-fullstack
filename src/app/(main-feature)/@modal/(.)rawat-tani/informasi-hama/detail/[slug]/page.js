"use client";

import React from "react";

import { useParams, useRouter } from "next/navigation";
import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import { getDetailHama } from "@/lib/data-informasi/informasi-hama";

export default function DetailHamaModal() {
  const { slug } = useParams();
  const router = useRouter();
  const detailHama = getDetailHama(slug);

  return (
    <Modal>
      <div className="flex flex-col space-y-4 justify-center items-center">
        <div>
          <h1 className="my-4 text-4xl font-bold">{detailHama.nama}</h1>
          <ul className="space-y-1">
            <li>
              <h2 className="text-lg font-bold">Tanaman yang Bisa Terkena</h2>
              <ul
                className={`list-disc pl-5 grid ${
                  detailHama.tanamanTerkena.length > 3 &&
                  "grid-cols-2 gap-y-1 gap-x-8"
                }`}
              >
                {detailHama.tanamanTerkena.map((tanaman, index) => (
                  <li key={index}>
                    <p>{tanaman}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <h2 className="text-lg font-bold">Ciri-ciri Tanaman Terkena</h2>
              <ul
                className={`list-disc pl-5 grid ${
                  detailHama.ciriTanaman.length > 3 &&
                  "grid-cols-2 gap-y-1 gap-x-8"
                }`}
              >
                {detailHama.ciriTanaman.map((ciri, index) => (
                  <li key={index}>
                    <p>{ciri}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <h2 className="text-lg font-bold">Pencegahan</h2>
              <ul
                className={`list-disc pl-5 grid ${
                  detailHama.caraPencegahan.length > 3 &&
                  "grid-cols-2 gap-y-1 gap-x-8"
                }`}
              >
                {detailHama.caraPencegahan.map((pencegahan, index) => (
                  <li key={index}>
                    <p>{pencegahan}</p>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <h2 className="text-lg font-bold">Penanganan</h2>
              <ul
                className={`list-disc pl-5 grid ${
                  detailHama.penanganan.length > 3 &&
                  "grid-cols-2 gap-y-1 gap-x-8"
                }`}
              >
                {detailHama.penanganan.map((penanganan, index) => (
                  <li key={index}>
                    <p>{penanganan}</p>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <Button
          variant="outline"
          className="border-2 border-emerald-800 w-1/4 rounded-xl text-emerald-800 hover:bg-emerald-800/10"
          onClick={() => router.back()}
        >
          Tutup
        </Button>
      </div>
    </Modal>
  );
}
