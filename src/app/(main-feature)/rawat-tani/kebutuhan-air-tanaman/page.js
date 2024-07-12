import React from "react";

export default function KebutuhanAirTanamanPage() {
  return (
    <div>
      <div className="container">
        <div className="container mx-auto my-8 p-4 border-2 rounded-lg border-gray-150">
          <h1 className="text-2xl font-bold text-[#0B6653]">
            Kebutuhan Irigasi
          </h1>
          <p>
          Kebutuhan Air Lahan Tanaman merupakan sebuah fitur yang digunakan untuk membantu merencanakan dan 
          mengelola sistem irigasi untuk komiditas yang ditanam.
          </p>
        </div>
        <p className="mb-5">
          Silahkan isi data berikut untuk menghitung Kebutuhan Irigasi!
        </p>

        <div className="flex flex-row 2 gap-5">
          <div className="basis-1/2">
            <form>
              <div className="grid grid-cols-1">
                <label htmlFor="plant" className="text-left mb-2 font-medium">
                  Pilih Tanaman
                </label>
                <select
                  id="plant"
                  name="selectedPlant"
                  className="border border-gray-300 rounded-md p-2"
                >
                  <option value="">Pilih Tanaman</option>
                  <option value="Kemangi">Kemangi</option>
                  <option value="Kangkung">Kangkung</option>
                  <option value="Bayam">Bayam</option>
                </select>
              </div>

              <div className="grid grid-cols-1">
                <label htmlFor="" className="text-left mb-2 font-medium">
                  Jumlah Populasi
                </label>
                <input
                  type="number"
                  className="p-2 border border-gray-300 rounded-md"
                  min="0"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-5 py-2 bg-emerald-800 text-white rounded-xl w-full hover:bg-emerald-700"
              >
                Hitung
              </button>
            </form>
          </div>

          <div className="basis-1/2">
            <p className="text-2xl font-bold text-emerald-800">
              Hasil Perhitungan
            </p>
            <label className="text-left font-medium">Tahap Tanaman</label>
            <input
              type="text"
              className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
              readOnly
            />

            <label className="text-left font-medium">Dosis Kadar Air Irigasi</label>
            <input
              type="text"
              className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
              readOnly
            />

            <div className="flex items-center">
              <button
                type="button"
                className="text-[#0B6653] border border-[#0B6653] rounded-md p-2 mt-4 w-[70%] items-center mx-auto"
              >
                Reset Perhitungan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
