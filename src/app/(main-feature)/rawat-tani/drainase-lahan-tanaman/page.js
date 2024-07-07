import React from "react";

export default function DrainaseLahanTanamanPage() {
  return (
    <main>
      <div className="container">
        <div className="container mx-auto my-8 p-4 border-2 rounded-lg border-gray-150">
          <h1 className="text-2xl font-bold text-[#0B6653]">
            Drainase Lahan Tanaman
          </h1>
          <p>
            Drainase Lahan Tanaman merupakan sebuah fitur yang digunakan untuk mengatur aliran air yang 
            masuk dan keluar dari lahan tanaman agar tetap terjaga kestabilannya.
          </p>
        </div>
        <p className="mb-5">
          Silahkan isi data berikut untuk menghitung Drainase Lahan Tanaman!
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
                    Jenis Tanah
                  </label>
                  <select
                    id=""
                    name=""
                    className="border border-gray-300 rounded-md p-2"
                  >
                    <option value="">Pilih Tanah</option>
                    <option value="Kemangi">Tanah lempung</option>
                    <option value="Kangkung">Tanah lempung berpasir</option>
                  </select>
                </div>

                <div className="grid grid-cols-1">
                  <label htmlFor="" className="text-left mb-2 font-medium">
                    Luas Lahan
                  </label>
                  <input type="number" className="p-1 border border-gray-300 rounded-md" min="0" step="0.01" required/>
                </div>

                <div className="grid grid-cols-3 gap-5">
                  <div className="grid grid-cols-1">
                    <label htmlFor="" className="text-left mb-2 font-medium">
                      Curah Hujan Harian
                    </label>
                    <input type="number" className="p-1 border border-gray-300 rounded-md" min="0" step="0.01" required/>
                  </div>

                  <div className="grid grid-cols-1">
                    <label htmlFor="" className="text-left mb-2 font-medium">
                      Penurunan Ketinggian Air
                    </label>
                    <input type="number" className="p-1 border border-gray-300 rounded-md" min="0" step="0.01" required/>
                  </div>

                  <div className="grid grid-cols-1">
                    <label htmlFor="" className="text-left mb-2 font-medium">
                      Waktu
                    </label>
                    <input type="number" className="p-1 border border-gray-300 rounded-md" min="0" step="0.01" required/>
                  </div>
                </div>

                <button type="submit" className="mt-5 py-2 bg-emerald-800 text-white rounded-xl w-full hover:bg-emerald-700">Hitung</button>
              </form>
              

            </div>

            <div className="basis-1/2">
              <p className="text-2xl font-bold text-emerald-800">Hasil Perhitungan</p>
              <label className="text-left font-medium">Laju Infiltrasi</label>
              <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
                readOnly
              />

              <label className="text-left font-medium">Ekses Air</label>
              <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
                readOnly
              />

              <label className="text-left font-medium">Volume air yang perlu dibuang</label>
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
    </main>
  );
}
