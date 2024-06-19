import React from "react";

export default function KalkulatorPupukPage() {
  return (
      <main>
        <div className="container">
          <div className="container mx-auto my-8 p-4 border-2 rounded-lg border-gray-150">
            <h1 className="text-2xl font-bold text-[#0B6653]">Kalkulator Pupuk</h1>
            <p>
              Kalkulator Pupuk merupakan sebuah fitur yang digunakan untuk menghitung jumlah pupuk yang perlu
              disiapkan
              sesuai dengan komoditas yang dituju.
            </p>
          </div>
          <p className="mb-5">Silahkan isi data berikut untuk menghitung kebutuhan pupuk dengan hasil panen yang telah
            ditentukan!</p>
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

                <div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label htmlFor="quantity"
                             className="block text-left mb-2 font-medium">Jumlah Bedeng</label>
                      <input type="number" id="quantity" name="quantity" min="1" max="100" step="1"
                             required
                             className="w-full p-2 mb-4 border border-gray-300 rounded-md"/>
                    </div>
                    <div>
                      <label htmlFor="quantity"
                             className="block text-left mb-2 font-medium">Panjang Rerata</label>
                      <input type="number" id="quantity" name="quantity" min="1" max="100" step="1"
                             required
                             className="w-full p-2 mb-4 border border-gray-300 rounded-md"/>
                    </div>
                    <div>
                      <label htmlFor="quantity"
                             className="block text-left mb-2 font-medium">Lebar</label>
                      <input type="number" id="quantity" name="quantity" min="1" max="100" step="1"
                             required
                             className="w-full p-2 mb-4 border border-gray-300 rounded-md"/>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <label htmlFor="plant" className="block text-left mb-2 font-medium">Tingkat
                    Kesuburan Tanah</label>
                  <select id="plant" name="country" autoComplete="country-name"
                          className="border border-gray-300 rounded-md py-2">
                    <option>5.1 - 5.6 = level 1 = 10 ton/ha</option>
                    <option>5.7 - 6.2 = level 2 = 8 ton/ha</option>
                    <option>6.3 - 6.9 = level 3 = 6 ton/ha</option>
                  </select>
                </div>

                <button type="submit" className="bg-[#0B6653] text-white rounded-md p-2 mt-4 w-full">Hitung</button>

              </form>

            </div>
            <div className="basis-1/2">
              <p className="text-2xl font-bold text-[#0B6653]">Hasil Perhitungan</p>
              <label className="text-left mb-2 font-medium">Luas Bersih</label>
              <input type="number" className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
                     value="123" readOnly/>

              <p className="text-left mb-2 font-medium">Dosis Pupuk Kandang</p>
              <label>Kebutuhan:</label>
              <input type="number" className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
                     value="123" readOnly/>

              <label>Kebutuhan banyak karung:</label>
              <input type="number" className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
                     value="123" readOnly/>

              <label className="text-left mb-2 font-medium">Prakiraan Biaya</label>
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
