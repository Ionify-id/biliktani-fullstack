"use client";

import { useParams } from "next/navigation";
import { getDetailHama } from "@/lib/data-informasi/informasi-hama";

export default function DetailHamaPage() {
  const { slug } = useParams();
  const detailHama = getDetailHama(slug);

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="container flex flex-col border-2 rounded-xl border-black w-9/12 p-8 bg-white">
        <div>
          <h1 className="my-4 text-4xl font-bold">{detailHama.nama}</h1>
          <ul className="space-y-1">
            <li>
              <h2 className="text-lg font-bold">Tanaman yang Bisa Terkena</h2>
              <ul
                className={`list-disc pl-5 grid ${
                  detailHama.tanamanTerkena.length > 3 && "grid-cols-2 gap-1"
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
                  detailHama.ciriTanaman.length > 3 && "grid-cols-2 gap-1"
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
                  detailHama.caraPencegahan.length > 3 && "grid-cols-2 gap-1"
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
                  detailHama.penanganan.length > 3 && "grid-cols-2 gap-1"
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
      </div>
    </main>
  );
}
