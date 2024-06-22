"use client";

import React, { useState } from "react";

export default function KalkulatorPupukPage() {
  const [selectedPlant, setSelectedPlant] = useState("");
  const [landOptions, setLandOptions] = useState([]);
  const [selectedLandOption, setSelectedLandOption] = useState(0);

  const [jumlahBedeng, setJumlahBedeng] = useState(0);
  const [panjangRerata, setPanjangRerata] = useState(0);
  const [lebar, setLebar] = useState(0);
  const [luasBersih, setLuasBersih] = useState(0);
  const [kebutuhan, setKebutuhan] = useState(0);
  const [kebutuhanBanyakKarung, setKebutuhanBanyakKarung] = useState(0);
  const [prakiraanBiaya, setPrakiraanBiaya] = useState(0);

  function handlePlantChange(event) {
    setSelectedPlant(event.target.value);
    setSelectedLandOption(0); // Reset selected land option
    switch (event.target.value) {
      case "kemangi":
        setLandOptions([
          { label: "5.1 - 5.6 = level 1 = 10.000 kg/ha", value: 10000},
          { label: "5.7 - 6.2 = level 2 = 8.000 kg/ha", value: 8000},
          { label: "6.3 - 6.9 = level 3 = 6.000 kg/ha", value: 6000},
        ]);
        break;
      case "kangkung":
        setLandOptions([
          { label: "5.1 - 5.6 = level 1 = 11.000 kg/ha", value: 11000},
          { label: "5.7 - 6.2 = level 2 = 9.000 kg/ha", value: 9000},
          { label: "6.3 - 6.9 = level 3 = 7.000 kg/ha", value: 7000},
        ]);
        break;
      case "bayam":
        setLandOptions([
          { label: "5.1 - 5.6 = level 1 = 12.000 kg/ha", value: 12000},
          { label: "5.7 - 6.2 = level 2 = 10.000 kg/ha", value: 10000},
          { label: "6.3 - 6.9 = level 3 = 8.000 kg/ha", value: 8000},
        ]);
        break;
      default:
        setLandOptions([]);
    }
  }

  function calculateLuasBersih() {
    const luas = jumlahBedeng * (panjangRerata * lebar) / 10000; // converting to hectares
    setLuasBersih(luas);
    return luas;
  }

  function calculateKebutuhan(luas) {
    const kebutuhan = selectedLandOption * luas;
    setKebutuhan(kebutuhan);
    calculateKebutuhanBanyakKarung(kebutuhan);
  }

  function calculateKebutuhanBanyakKarung(kebutuhan) {
    const banyakKarung = kebutuhan / 40;
    setKebutuhanBanyakKarung(banyakKarung);
    calculatePrakiraanBiaya(banyakKarung);
  }

  function calculatePrakiraanBiaya(banyakKarung) {
    const biaya = 10000 * banyakKarung;
    setPrakiraanBiaya(biaya);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const luas = calculateLuasBersih();
    calculateKebutuhan(luas);
  }

  function handleReset() {
    setSelectedPlant("");
    setLandOptions([]);
    setSelectedLandOption(0);
    setJumlahBedeng(0);
    setPanjangRerata(0);
    setLebar(0);
    setLuasBersih(0);
    setKebutuhan(0);
    setKebutuhanBanyakKarung(0);
    setPrakiraanBiaya(0);
  }

  function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  }

  return (
      <main>
        <div className="container">
          <div className="container mx-auto my-8 p-4 border-2 rounded-lg border-gray-150">
            <h1 className="text-2xl font-bold text-[#0B6653]">Kalkulator Pupuk</h1>
            <p>
              Kalkulator Pupuk merupakan sebuah fitur yang digunakan untuk menghitung jumlah pupuk yang perlu disiapkan
              sesuai dengan komoditas yang dituju.
            </p>
          </div>
          <p className="mb-5">Silahkan isi data berikut untuk menghitung kebutuhan pupuk dengan hasil panen yang telah ditentukan!</p>
          <div className="flex flex-row">
            <div className="basis-1/2 mr-16">
              <form onSubmit={handleSubmit}>

                <div className="grid grid-cols-1">
                  <label htmlFor="plant" className="text-left mb-2 font-medium">Pilih Tanaman</label>
                  <select id="plant" name="plant" className="border border-gray-300 rounded-md py-2" onChange={handlePlantChange}>
                    <option value="">Pilih Tanaman</option>
                    <option value="kemangi">Kemangi</option>
                    <option value="kangkung">Kangkung</option>
                    <option value="bayam">Bayam</option>
                  </select>
                </div>

                <div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label htmlFor="jumlah-bedeng" className="block text-left mb-2 font-medium">Jumlah Bedeng</label>
                      <input type="number" id="jumlah-bedeng" name="jumlahBedeng" min="1" step="1" required
                             className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                             value={jumlahBedeng} onChange={e => setJumlahBedeng(Number(e.target.value))}/>
                    </div>
                    <div>
                      <label htmlFor="panjang-rerata" className="block text-left mb-2 font-medium">Panjang Rerata</label>
                      <input type="number" id="panjang-rerata" name="panjangRerata" min="1" step="1" required
                             className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                             value={panjangRerata} onChange={e => setPanjangRerata(Number(e.target.value))}/>
                    </div>
                    <div>
                      <label htmlFor="lebar" className="block text-left mb-2 font-medium">Lebar</label>
                      <input type="number" id="lebar" name="lebar" min="1" step="1" required
                             className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                             value={lebar} onChange={e => setLebar(Number(e.target.value))}/>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <label htmlFor="land" className="block text-left mb-2 font-medium">Tingkat Kesuburan Tanah</label>
                  <select id="land" name="land" className="border border-gray-300 rounded-md py-2" value={selectedLandOption} onChange={e => setSelectedLandOption(Number(e.target.value))}>
                    <option value="">Pilih Tingkat Kesuburan Tanah</option>
                    {landOptions.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="bg-[#0B6653] text-white rounded-md p-2 mt-4 w-full">Hitung</button>
              </form>
            </div>
            <div className="basis-1/2">
              <p className="text-2xl font-bold text-[#0B6653]">Hasil Perhitungan</p>
              <label className="text-left mb-2 font-medium">Luas Bersih</label>
              <input type="text" className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
                     value={`${luasBersih} ha`} readOnly/>

              <p className="text-left mb-2 font-medium">Dosis Pupuk Kandang</p>
              <label>Kebutuhan:</label>
              <input type="text" className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
                     value={`${kebutuhan} kg`} readOnly/>

              <label>Kebutuhan banyak karung:</label>
              <input type="text" className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
                     value={`${kebutuhanBanyakKarung} karung`} readOnly/>

              <label className="text-left mb-2 font-medium">Prakiraan Biaya</label>
              <input type="text" className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
                     value={formatRupiah(prakiraanBiaya)} readOnly/>

              <div className="flex items-center">
              <button type="button" className="text-[#0B6653] border border-[#0B6653] rounded-md p-2 mt-4 w-[70%] items-center mx-auto"
                        onClick={handleReset}>Reset Perhitungan
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
