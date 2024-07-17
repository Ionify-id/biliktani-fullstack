"use client";

import React, { useState } from "react";
import "@/app/globals.css";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);

    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const requestBody = {
      nama_lengkap: data.nama_lengkap,
      no_telepon: data.no_telepon,
      alamat: data.alamat,
      dusun: data.dusun,
      rt: Number(data.rt),
      rw: Number(data.rw),
      kelompok_tani: data.kelompok_tani,
      kata_sandi: data.kata_sandi,
      lokasi_lahan: data.lokasi_lahan,
      luas_lahan: Number(data.luas_lahan),
      jenis_komoditas: data.jenis_komoditas,
      produktivitas: Number(data.produktivitas),
      cara_pemasaran: data.cara_pemasaran,
    };

    try {
      const response = await axios.post("/api/user", requestBody);
      console.log(response.data.meta.message);
      toast({
        description: response.data.meta.message,
        className: "rounded-lg border-2 border-emerald-700 p-4",
      });
    } catch (error) {
      toast({
        description: error.response.data.meta.message,
        className: "rounded-lg border-2 border-red-700 p-4",
      });
    } finally {
      router.push("/login");
      setLoading(false);
    }
  }

  return (
    <main>
      <div className="container my-5">
        <p className="text-2xl font-bold">Daftar Akun Bilik Tani</p>
        <p>Silakan masukkan data berikut untuk mendaftar akun!</p>

        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div className="grid grid-cols-1 gap-y-2">
              <label htmlFor="name" className="font-bold">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="nama_lengkap"
                name="nama_lengkap"
                placeholder="Masukkan nama lengkap"
                className="p-1 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-y-2">
              <label className="font-bold">Lokasi Lahan</label>
              <input
                type="text"
                id="lokasi_lahan"
                name="lokasi_lahan"
                placeholder="Alamat/lokasi lahan"
                className="p-1 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-y-2">
              <label htmlFor="telephone" className="font-bold">
                No. Telepon
              </label>
              <input
                type="number"
                id="no_telepon"
                name="no_telepon"
                placeholder="Masukkan no. telepon"
                className="p-1 border border-gray-300 rounded-md"
                min="0"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-y-2">
              <label htmlFor="" className="font-bold">
                Luas Lahan
              </label>
              <input
                type="number"
                id="luas_lahan"
                name="luas_lahan"
                className="p-1 border border-gray-300 rounded-md"
                min="0"
                step="0.01"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-y-2">
              <label className="font-bold">Alamat</label>
              <input
                type="text"
                id="alamat"
                name="alamat"
                placeholder="Masukkan alamat lengkat"
                className="p-1 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-y-2">
              <label className="font-bold">Jenis Komoditas</label>
              <input
                type="text"
                id="jenis_komoditas"
                name="jenis_komoditas"
                placeholder="Jenis komoditas yang ditanam"
                className="p-1 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="flex flex-row gap-5">
              <div className="basis-1/2">
                <div className="grid grid-cols-1 gap-y-2">
                  <label className="font-bold">Dusun</label>
                  <input
                    type="text"
                    id="dusun"
                    name="dusun"
                    placeholder="Dusun"
                    className="p-1 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="basis-1/4">
                <div className="grid grid-cols-1 gap-y-2">
                  <label className="font-bold">RT</label>
                  <input
                    type="number"
                    id="rt"
                    name="rt"
                    className="p-1 border border-gray-300 rounded-md"
                    min="1"
                    required
                  />
                </div>
              </div>

              <div className="basis-1/4">
                <div className="grid grid-cols-1 gap-y-2">
                  <label className="font-bold">RW</label>
                  <input
                    type="number"
                    id="rw"
                    name="rw"
                    className="p-1 border border-gray-300 rounded-md"
                    min="1"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-2">
              <label className="font-bold">Produktivitas</label>
              <input
                type="number"
                id="produktivitas"
                name="produktivitas"
                placeholder="Produktivitas panen lahan per masa tanam"
                className="p-1 border border-gray-300 rounded-md"
                min="0"
                step="0.01"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-y-2">
              <label className="font-bold">Kelompok Tani</label>
              <input
                type="text"
                id="kelompok_tani"
                name="kelompok_tani"
                placeholder="Masukkan kelompok tani yang diikuti"
                className="p-1 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-y-2">
              <label className="font-bold">Cara Pemasaran</label>
              <input
                type="text"
                id="cara_pemasaran"
                name="cara_pemasaran"
                placeholder="Masukkan cara pemasaran"
                className="p-1 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-y-2">
              <label className="font-bold">Kata Sandi</label>
              <input
                type="password"
                id="kata_sandi"
                name="kata_sandi"
                placeholder="Masukkan kata sandi untuk akun"
                className="p-1 border border-gray-300 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-5 bg-emerald-800 text-white rounded-xl w-full hover:bg-emerald-700"
            >
              {loading ? "Loading..." : "Daftar"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
