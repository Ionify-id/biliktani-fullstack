import React from "react";
import Image from "next/image";
import {
  klinikTani,
  forumTani,
  taniMarket,
} from "@/lib/data-informasi/bina-tani";
import { Button } from "@/components/ui/button";
import IconWhatsapp from "@/assets/bina-tani/whatsapp.png";

export default function BinaTaniPage() {
  return (
    <main className="container overflow-y-auto max-h-screen">
      <div className="container">
        <>
          <div className="container mx-auto mt-8 p-4 border-2 rounded-lg border-gray-150">
            <h1 className="text-2xl font-bold text-[#0B6653]">Klinik Tani</h1>
            <p>
              Klinik tani merupakan fitur yang dapat digunakan untuk menjadi
              sumber informasi dan pelayanan terpadu bagi petani. Fitur
              menyediakan forum tanya jawab untuk memperoleh jawaban dan solusi
              terkait permasalahan pertanian.
            </p>
          </div>
          <p className="my-4 text-sm">
            Silahkan kunjungi link berikut untuk mulai konsultasi!
          </p>
          <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
            {klinikTani.map((data, index) => (
              <li key={index}>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full flex flex-row space-x-4 border border-2 border-emerald-800 rounded-xl"
                  >
                    <Image src={IconWhatsapp} alt={data.nama} />{" "}
                    <span className="text-emerald-800">{data.nama}</span>
                  </Button>
                </a>
              </li>
            ))}
          </ul>
        </>
        <>
          <div className="container mx-auto mt-8 p-4 border-2 rounded-lg border-gray-150">
            <h1 className="text-2xl font-bold text-[#0B6653]">Forum Tani</h1>
            <p>
              Forum Tani adalah fitur yang digunakan untuk memungkinkan petani
              berinteraksi, berbagi informasi, dan memfasilitasi diskusi
              antarpetani.
            </p>
          </div>
          <p className="my-4 text-sm">
            Silahkan kunjungi link berikut untuk bergabung ke forum!
          </p>
          <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
            {forumTani.map((data, index) => (
              <li key={index}>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full flex flex-row space-x-4 border border-2 border-emerald-800 rounded-xl"
                  >
                    <Image src={IconWhatsapp} alt={data.nama} />{" "}
                    <span className="text-emerald-800">{data.nama}</span>
                  </Button>
                </a>
              </li>
            ))}
          </ul>
        </>
        <>
          <div className="container mx-auto mt-8 p-4 border-2 rounded-lg border-gray-150">
            <h1 className="text-2xl font-bold text-[#0B6653]">Tani Market</h1>
            <p>
              Tani Market adalah platform daring yang memungkinkan petani
              menjual produk pertanian secara langsung kepada konsumen,
              mendukung pertanian lokal dan memfasilitasi transaksi jual-beli
              dengan mudah
            </p>
          </div>
          <p className="my-2 text-sm">
            Silahkan kunjungi link berikut untuk mulai berbelanja!
          </p>
          <ul className="flex flex-col space-y-4 w-5/12 mb-8">
            {taniMarket.map((data, index) => (
              <li key={index}>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant={
                      data.nama === "Group Jual Beli Agritech Mart"
                        ? "outline"
                        : "primary"
                    }
                    className={data.style}
                  >
                    <Image src={data.icon} alt={data.nama} />{" "}
                    <span
                      className={
                        data.nama === "Group Jual Beli Agritech Mart"
                          ? "text-emerald-800"
                          : "text-white"
                      }
                    >
                      {data.nama}
                    </span>
                  </Button>
                </a>
              </li>
            ))}
          </ul>
        </>
      </div>
    </main>
  );
}
