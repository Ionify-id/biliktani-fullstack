"use client";

import React, { useState } from "react";
import "@/app/globals.css";
import Image from "next/image";
import loginImage from "@/assets/login.png";
import Link from "next/link";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const cookies = new Cookies();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    const requestBody = {
      no_telepon: data.no_telepon,
      kata_sandi: data.kata_sandi,
    };

    try {
      const response = await axios.post("/api/login", requestBody);
      toast({
        description: response.data.meta.message,
        className: "rounded-lg border-2 border-emerald-700 p-4",
      });
      cookies.set("token", response.data.data.token, { path: "/" });
      cookies.set("name", response.data.data.nama_lengkap, { path: "/" });
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      toast({
        description: error.response.data.message,
        className: "rounded-lg border-2 border-red-700 p-4",
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="flex w-full">
        <div className="flex flex-col justify-center items-center w-1/2 text-white">
          <Image
            src={loginImage}
            alt="Login Image"
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-center w-1/2 bg-white p-4">
          <h1 className="text-2xl mb-2 font-bold">
            Selamat Datang di Bilik Tani!
          </h1>
          <p className="mb-4">
            Silakan masukkan <span className="font-bold">No. telepon</span> dan{" "}
            <span className="font-bold">Kata sandi</span> anda untuk memulai!
          </p>
          <form
            className="flex flex-col w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <label htmlFor="phone" className="mb-2 font-bold">
              No. Telepon
            </label>
            <input
              type="number"
              id="no_telepon"
              name="no_telepon"
              maxLength="12"
              placeholder="Masukkan No. Telepon yang terdaftar"
              className="mb-2 p-2 border border-gray-300 rounded"
              required
            />

            <label htmlFor="password" className="mb-2 font-bold">
              Kata Sandi
            </label>
            <input
              type="password"
              id="kata_sandi"
              name="kata_sandi"
              placeholder="Masukkan kata sandi"
              className="mb-2 p-2 border border-gray-300 rounded"
              required
            />

            <button
              type="submit"
              className="mt-3 bg-emerald-800 hover:bg-emerald-700 text-white p-2 rounded"
            >
              {loading ? "Loading..." : "Masuk"}
            </button>
          </form>
          <p className="mt-5">
            Belum punya akun?{" "}
            <Link href="/register" className="underline">
              Daftar disini!
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
