import React from "react";

export default function PrakiraanWaktuPanenPager() {
  return (
    <main>
      <div className="container">
        <div className="container mx-auto my-8 p-4 border-2 rounded-lg border-gray-150">
          <h1 className="text-2xl font-bold text-[#0B6653]">Prakiraan Waktu Panen</h1>
          <p>
          Prakiraan Panen merupakan sebuah fitur yang digunakan untuk merencanakan kegiatan penanaman sesuai dengan komoditas yang ditanam
          </p>
        </div>
        <p className="mb-5">Silahkan isi data berikut untuk menghitung Prakiraan Waktu Panen</p>
        <div className="flex flex-row">
          <div className="basis-1/2 mr-16">
            <form>

              <div className="grid grid-cols-1">
                <label htmlFor="options" className="text-left mb-2 font-medium">Pilih Tanaman</label>
                <select id="options" name="options" className="border border-gray-300 rounded-md py-2">
                  <option value="">Pilih Tanaman</option>
                  <option value="option1">Kemangi</option>
                  <option value="option2">Kangkung</option>
                  <option value="option3">Bayam</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 mt-4">
                <label htmlFor="waktu-tanam" className="block text-left mb-2 font-medium">Waktu Tanam</label>
                <input type="date" id="waktu-tanam" name="waktu-tanam" className="border border-gray-300 rounded-md py-2"/>
              </div>

              <div className="grid grid-cols-1">
                <label htmlFor="plant" className="block text-left mb-2 font-medium">Kondisi Tanaman</label>
                <select id="plant" name="country" autoComplete="country-name"
                        className="border border-gray-300 rounded-md py-2">
                  <option>Kurang Air</option>
                  <option>Cukup Air</option>
                  <option>Air Berlebih</option>
                </select>
              </div>

              <button type="submit" className="bg-[#0B6653] text-white rounded-md p-2 mt-4 w-full">Hitung</button>

            </form>

          </div>
          <div className="basis-1/2">
            <p className="text-2xl font-bold text-[#0B6653]">Hasil Perhitungan</p>
            <label className="text-left mb-2 font-medium">Prakiraan Waktu Panen</label>
            <input type="number" className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
                   value="123" readOnly/>

            <div className="flex items-center">
              <button type="submit"
                      className="text-[#0B6653] border border-[#0B6653] rounded-md p-2 mt-4 w-[70%] items-center mx-auto">Reset
                Perhitungan
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
);
}
