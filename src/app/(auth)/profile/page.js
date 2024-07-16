"use client";

import React, { useState, useEffect } from "react";
import "@/app/globals.css";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    lokasi_lahan: "",
    no_telepon: "",
    luas_lahan: "",
    alamat: "",
    jenis_komoditas: "",
    dusun: "",
    rt: "",
    rw: "",
    produktivitas: "",
    kelompok_tani: "",
    cara_pemasaran: "",
    kata_sandi: "",
  });

  useEffect(() => {
    // Fetch data from an API or local storage
    const fetchData = async () => {
      // Example: fetching data from an API
      const data = await fetchUserProfile(); // Replace this with your actual data fetching function
      setFormData(data);
    };

    fetchData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <div className="container my-5">
        <p className="text-2xl font-bold">Profile</p>
        <p>Ubah data pribadi Anda dan klik simpan</p>

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
                value={formData.nama_lengkap}
                onChange={handleChange}
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
                value={formData.lokasi_lahan}
                onChange={handleChange}
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
                value={formData.no_telepon}
                onChange={handleChange}
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
                value={formData.luas_lahan}
                onChange={handleChange}
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
                value={formData.alamat}
                onChange={handleChange}
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
                value={formData.jenis_komoditas}
                onChange={handleChange}
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
                    value={formData.dusun}
                    onChange={handleChange}
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
                    value={formData.rt}
                    onChange={handleChange}
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
                    value={formData.rw}
                    onChange={handleChange}
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
                value={formData.produktivitas}
                onChange={handleChange}
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
                value={formData.kelompok_tani}
                onChange={handleChange}
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
                value={formData.cara_pemasaran}
                onChange={handleChange}
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
                value={formData.kata_sandi}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="mt-5 bg-emerald-800 text-white rounded-xl w-full hover:bg-emerald-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

// Example function to fetch user profile data
async function fetchUserProfile() {
  // Replace with your actual data fetching logic
  return {
    nama_lengkap: "John Doe",
    lokasi_lahan: "Jakarta",
    no_telepon: "08123456789",
    luas_lahan: "10",
    alamat: "Jl. Mawar No. 123",
    jenis_komoditas: "Padi",
    dusun: "Dusun 1",
    rt: "5",
    rw: "2",
    produktivitas: "1000",
    kelompok_tani: "Kelompok Tani Sejahtera",
    cara_pemasaran: "Jual Langsung",
    kata_sandi: "",
  };
}
