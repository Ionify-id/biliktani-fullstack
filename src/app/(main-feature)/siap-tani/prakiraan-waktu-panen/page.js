"use client";

import React, { useState } from "react";

export default function PrakiraanWaktuPanenPager() {
  const [plantType, setPlantType] = useState("");
  const [plantCondition, setPlantCondition] = useState("");
  const [plantingDate, setPlantingDate] = useState("");
  const [harvestTime, setHarvestTime] = useState("");
  const [harvestTimeSecond, setHarvestTimeSecond] = useState("");

  const calculateHarvestTime = (e) => {
    e.preventDefault();
    let startDate = new Date(plantingDate);
    let firstHarvestDays = 0;
    let secondHarvestDays = 0;

    if (plantType === "Bayam" || plantType === "Kangkung") {
      if (plantCondition === "Kurang Air") firstHarvestDays = 22;
      else if (plantCondition === "Cukup Air") firstHarvestDays = 19;
      else if (plantCondition === "Air Berlebih") firstHarvestDays = 23;
    } else if (plantType === "Kemangi") {
      if (plantCondition === "Kurang Air") firstHarvestDays = 28;
      else if (plantCondition === "Cukup Air") firstHarvestDays = 26;
      else if (plantCondition === "Air Berlebih") firstHarvestDays = 30;
      secondHarvestDays = 25;
    }

    let firstHarvestDate = new Date(startDate);
    firstHarvestDate.setDate(firstHarvestDate.getDate() + firstHarvestDays);

    setHarvestTime(firstHarvestDate.toISOString().split('T')[0]);

    if (plantType === "Kemangi") {
      let secondHarvestDate = new Date(firstHarvestDate);
      secondHarvestDate.setDate(secondHarvestDate.getDate() + secondHarvestDays);
      setHarvestTimeSecond(secondHarvestDate.toISOString().split('T')[0]);
    } else {
      setHarvestTimeSecond("");
    }
  };

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
            <form onSubmit={calculateHarvestTime}>
              <div className="grid grid-cols-1">
                <label htmlFor="options" className="text-left mb-2 font-medium">Pilih Tanaman</label>
                <select id="options" name="options" className="border border-gray-300 rounded-md py-2" onChange={(e) => setPlantType(e.target.value)} required>
                  <option value="">Pilih Tanaman</option>
                  <option value="Kemangi">Kemangi</option>
                  <option value="Kangkung">Kangkung</option>
                  <option value="Bayam">Bayam</option>
                </select>
              </div>

              <div className="grid grid-cols-1 mt-4">
                <label htmlFor="plant" className="block text-left mb-2 font-medium">Kondisi Tanaman</label>
                <select id="plant" name="plant" className="border border-gray-300 rounded-md py-2" onChange={(e) => setPlantCondition(e.target.value)} required>
                  <option value="">Pilih Kondisi</option>
                  <option value="Kurang Air">Kurang Air</option>
                  <option value="Cukup Air">Cukup Air</option>
                  <option value="Air Berlebih">Air Berlebih</option>
                </select>
              </div>

              <div className="grid grid-cols-1 mt-4">
                <label htmlFor="waktu-tanam" className="block text-left mb-2 font-medium">Waktu Tanam</label>
                <input type="date" id="waktu-tanam" name="waktu-tanam" className="border border-gray-300 rounded-md py-2" onChange={(e) => setPlantingDate(e.target.value)} required />
              </div>

              <button type="submit" className="bg-[#0B6653] text-white rounded-md p-2 mt-4 w-full">Hitung</button>
            </form>
          </div>

          <div className="basis-1/2">
            <p className="text-2xl font-bold text-[#0B6653]">Hasil Perhitungan</p>
            {harvestTime && (
              <>
                <label className="text-left mb-2 font-medium">Prakiraan Waktu Panen</label>
                <input type="date" className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md" value={harvestTime} readOnly />
                {harvestTimeSecond && (
                  <>
                    <label className="text-left mb-2 font-medium">Prakiraan Waktu Panen Kedua</label>
                    <input type="date" className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md" value={harvestTimeSecond} readOnly />
                  </>
                )}
              </>
            )}
            <div className="flex items-center">
              <button type="button" onClick={() => { setPlantType(""); setPlantCondition(""); setPlantingDate(""); setHarvestTime(""); setHarvestTimeSecond(""); }} className="text-[#0B6653] border border-[#0B6653] rounded-md p-2 mt-4 w-[70%] items-center mx-auto">Reset Perhitungan</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}