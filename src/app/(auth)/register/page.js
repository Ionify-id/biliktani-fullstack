"use client";

import React, { useState } from "react";
import "@/app/globals.css";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(event) {
    setLoading(true);

    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    const tanggalLahir = new Date(data.tanggal_lahir).toISOString();

    const requestBody = {
      nama_lengkap: data.nama_lengkap,
      status_kepemilikan: data.status_kepemilikan,
      tanggal_lahir: tanggalLahir,
      no_telepon: data.no_telepon,
      alamat: data.alamat,
      jenis_komoditas: data.jenis_komoditas,
      dusun: data.dusun,
      rt: Number(data.rt),
      rw: Number(data.rw),
      kelompok_tani: data.kelompok_tani,
      kata_sandi: data.kata_sandi,
      luas_lahan: data.luas_lahan,
      cara_pemasaran: data.cara_pemasaran,
    };

    try {
      const response = await axios.post("/api/user", requestBody);
      console.log(response.data.meta.message);
      toast({
        description: response.data.meta.message,
        className: "rounded-lg border-2 border-emerald-700 p-4",
      });
      router.push("/login");
    } catch (error) {
      toast({
        description: error.response.data.meta.message,
        className: "rounded-lg border-2 border-red-700 p-4",
      });
      console.error(error.message);
    } finally {
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
              <label htmlFor="" className="font-bold">
                Status Kepemilikan Lahan
              </label>
              <select
                id="status_kepemilikan"
                name="status_kepemilikan"
                className="border border-gray-300 rounded-md p-2"
                required
              >
                <option value="Pribadi">Pribadi</option>
                <option value="Orang lain">Orang lain</option>
              </select>
            </div>
            <div className="grid grid-cols-1 gap-y-2">
              <label className="font-bold">Tanggal Lahir</label>
              <input
                type="date"
                id="tanggal_lahir"
                name="tanggal_lahir"
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
              <label htmlFor="telephone" className="font-bold">
                Luas Lahan
              </label>
              <input
                type="text"
                id="luas_lahan"
                name="luas_lahan"
                placeholder="Masukkan luas lahan beserta keterangan satuannya"
                className="p-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-y-2">
              <label className="font-bold">Alamat</label>
              <input
                type="text"
                id="alamat"
                name="alamat"
                placeholder="Masukkan alamat lengkap"
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
                    placeholder="1"
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
                    placeholder="1"
                    min="1"
                    required
                  />
                </div>
              </div>
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
              <select
                id="cara_pemasaran"
                name="cara_pemasaran"
                className="border border-gray-300 rounded-md p-2"
                required
              >
                <option value="Langsung">Langsung</option>
                <option value="Perantara">Perantara</option>
                <option value="Langsung dan perantara">
                  Langsung dan perantara
                </option>
              </select>
            </div>
            <div className="grid grid-cols-1 gap-y-2">
              <label htmlFor="password" className="mb-2 font-bold">
                Kata Sandi
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="kata_sandi"
                  name="kata_sandi"
                  placeholder="Masukkan kata sandi"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 mr-4 mb-2 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-end mb-2">
              <button
                type="submit"
                className="bg-emerald-800 text-white bottom-0 h-1/2 rounded-xl w-full hover:bg-emerald-700"
              >
                {loading ? "Loading..." : "Daftar"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
