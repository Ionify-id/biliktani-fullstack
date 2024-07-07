import React from "react";
import "@/app/globals.css";

export default function RegisterPage() {
  return (
    <main>
      <div className="container my-5">
        <p className="text-2xl font-bold">Daftar Akun Bilik Tani</p>
        <p>Silakan masukkan data berikut untuk mendaftar akun!</p>

        <form className="mt-5">
            <div className="grid grid-cols-2 gap-5">
                <div className="grid grid-cols-1">
                    <label htmlFor="name" className="font-bold">Nama Lengkap</label>
                    <input type="text" id="name" name="name" placeholder="Masukkan nama lengkap" className="p-1 border border-gray-300 rounded-md" required />
                </div>

                <div className="grid grid-cols-1">
                    <label className="font-bold">Lokasi Lahan</label>
                    <input type="text" placeholder="Alamat/lokasi lahan" className="p-1 border border-gray-300 rounded-md" required/>
                </div>

                <div className="grid grid-cols-1">
                    <label htmlFor="telephone" className="font-bold">No. Telepon</label>
                    <input type="text" id="telephone" name="telephone" placeholder="Masukkan no. telepon" className="p-1 border border-gray-300 rounded-md" required />
                </div>

                <div className="grid grid-cols-1">
                    <label htmlFor="" className="font-bold">Luas Lahan</label>
                    <input type="number" className="p-1 border border-gray-300 rounded-md" min="0" step="0.01" required/>
                </div>

                <div className="grid grid-cols-1">
                    <label className="font-bold">Alamat</label>
                    <input type="text" placeholder="Masukkan alamat lengkat" className="p-1 border border-gray-300 rounded-md" required/>
                </div>

                <div className="grid grid-cols-1">
                    <label className="font-bold">Jenis Komoditas</label>
                    <input type="text" placeholder="Jenis komoditas yang ditanam" className="p-1 border border-gray-300 rounded-md" required/>
                </div>

                <div className="flex flex-row gap-5">
                    <div className="basis-1/2">
                        <div className="grid grid-cols-1">
                            <label className="font-bold">Dusun</label>
                            <input type="text" placeholder="Dusun" className="p-1 border border-gray-300 rounded-md" required/>
                        </div>
                    </div>

                    <div className="basis-1/4">
                        <div className="grid grid-cols-1">
                            <label className="font-bold">RT</label>
                            <input type="number" className="p-1 border border-gray-300 rounded-md" min="1" required/>
                        </div>
                    </div>

                    <div className="basis-1/4">
                        <div className="grid grid-cols-1">
                            <label className="font-bold">RW</label>
                            <input type="number" className="p-1 border border-gray-300 rounded-md" min="1" required/>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    <label className="font-bold">Produktivitas</label>
                    <input type="text" placeholder="Produktivitas panen lahan per masa tanam" className="p-1 border border-gray-300 rounded-md" required/>
                </div>

                <div className="grid grid-cols-1">
                    <label className="font-bold">Kelompok Tani</label>
                    <input type="text" placeholder="Masukkan kelompok tani yang diikuti" className="p-1 border border-gray-300 rounded-md" required/>
                </div>

                <div className="grid grid-cols-1">
                    <label className="font-bold">Cara Pemasaran</label>
                    <input type="text" placeholder="Masukkan cara pemasaran" className="p-1 border border-gray-300 rounded-md" required/>
                </div>

                <div className="grid grid-cols-1">
                    <label className="font-bold">Kata Sandi</label>
                    <input type="password" placeholder="Masukkan kata sandi untuk akun" className="p-1 border border-gray-300 rounded-md" required/>
                </div>

                <button type="submit" className="mt-5 bg-emerald-800 text-white rounded-xl w-full hover:bg-emerald-700">Daftar</button>
            </div>

            
        </form>
      </div>
    </main>
  );
}
