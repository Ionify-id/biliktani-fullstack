import React from "react";
import "@/app/globals.css";
import Image from "next/image";
import loginImage from "@/assets/login.png";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="flex w-full">
        <div className="flex flex-col justify-center items-center w-1/2 text-white">
          <Image
            src={loginImage}
            alt="Login Image"
            className="w-full h-full object-cover"
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
          <form className="flex flex-col w-full max-w-md">
            <label htmlFor="phone" className="mb-2 font-bold">
              No. Telepon
            </label>
            <input
              type="text"
              placeholder="Masukkan No. Telepon yang terdaftar"
              className="mb-2 p-2 border border-gray-300 rounded"
              required
            />

            <label htmlFor="password" className="mb-2 font-bold">
              Kata Sandi
            </label>
            <input
              type="password"
              placeholder="Masukkan kata sandi"
              className="mb-2 p-2 border border-gray-300 rounded"
              required
            />

            <button
              type="submit"
              className="mt-3 bg-emerald-800 hover:bg-emerald-700 text-white p-2 rounded"
            >
              Masuk
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
