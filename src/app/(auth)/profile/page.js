"use client";

import React, { useEffect, useState } from "react";
import "@/app/globals.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const cookie = new Cookies();
  const token = cookie.get("token");

  const { toast } = useToast();
  const router = useRouter();

  const [submissionLoading, setSubmissionLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [profileData, setProfileData] = useState({
    nama_lengkap: "",
    lokasi_lahan: "",
    no_telepon: "",
    luas_lahan: 0,
    alamat: "",
    jenis_komoditas: "",
    dusun: "",
    rt: 0,
    rw: 0,
    produktivitas: 0,
    kelompok_tani: "",
    cara_pemasaran: "",
  });

  async function getProfile() {
    setLoading(true);
    try {
      const res = await axios.get("/api/user", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setProfileData(res.data.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(event) {
    setSubmissionLoading(true);
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
      const response = await axios.put("/api/user", requestBody, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
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
      setSubmissionLoading(false);
      cookie.set("name", requestBody.nama_lengkap);
      router.push("/");
    }
  }

  return (
    <main>
      <div className="container my-5">
        <p className="text-2xl font-bold">Profile</p>
        <p>Ubah data pribadi Anda dan klik simpan</p>

        {loading ? (
          <p>Loading...</p>
        ) : (
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
                  value={profileData.nama_lengkap}
                  onChange={handleChange}
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
                  value={profileData.lokasi_lahan}
                  onChange={handleChange}
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
                  value={profileData.no_telepon}
                  onChange={handleChange}
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
                  value={profileData.luas_lahan}
                  onChange={handleChange}
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
                  value={profileData.alamat}
                  onChange={handleChange}
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
                  value={profileData.jenis_komoditas}
                  onChange={handleChange}
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
                      value={profileData.dusun}
                      onChange={handleChange}
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
                      value={profileData.rt}
                      onChange={handleChange}
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
                      value={profileData.rw}
                      onChange={handleChange}
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
                  value={profileData.produktivitas}
                  onChange={handleChange}
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
                  value={profileData.kelompok_tani}
                  onChange={handleChange}
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
                  value={profileData.cara_pemasaran}
                  onChange={handleChange}
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
                <p className="text-sm text-red-700">
                  Isikan kata sandi lama anda atau ubah kata sandi.
                </p>
              </div>

              <button
                type="submit"
                className="mt-5 bg-emerald-800 text-white rounded-xl w-full h-1/2 hover:bg-emerald-700"
              >
                {submissionLoading ? "Loading..." : "Simpan"}
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
