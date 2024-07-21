"use client";

import React, { useState } from "react";

export default function DrainaseLahanTanamanPage() {
  const [soilType, setSoilType] = useState("");
  const [landArea, setLandArea] = useState(0);
  const [dailyRainfall, setDailyRainfall] = useState(0);
  const [waterLevelDrop, setWaterLevelDrop] = useState(0);
  const [time, setTime] = useState(0);

  const [infiltrationRate, setInfiltrationRate] = useState("");
  const [excessWater, setExcessWater] = useState("");
  const [waterToBeDrained, setWaterToBeDrained] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();
    let soilInfiltrationRate = 0;

    switch (soilType) {
      case "Tanah liat berpasir - liat berdebu":
        soilInfiltrationRate = 2 * 24;
        break;
      case "Tanah lempung berdebu":
        soilInfiltrationRate = 5 * 24;
        break;
      case "Tanah lempung berpasir":
        soilInfiltrationRate = 10 * 24;
        break;
      default:
        soilInfiltrationRate = 0;
    }

    const excess = dailyRainfall - soilInfiltrationRate;
    const volumeToDrain = excess * landArea * 10;

    setInfiltrationRate(`${soilInfiltrationRate} mm/hari`);
    setExcessWater(`${excess} mm/hari`);
    setWaterToBeDrained(`${volumeToDrain} liter/hari`);
  };

  const resetCalculation = () => {
    setSoilType("");
    setLandArea(0);
    setDailyRainfall(0);
    setWaterLevelDrop(0);
    setTime(0);
    setInfiltrationRate("");
    setExcessWater("");
    setWaterToBeDrained("");
  };

  return (
    <div>
      <div className="container">
        <div className="container mx-auto my-8 p-4 border-2 rounded-lg border-gray-150">
          <h1 className="text-2xl font-bold text-[#0B6653]">Drainase Lahan Tanaman</h1>
          <p>
            Drainase Lahan Tanaman merupakan sebuah fitur yang digunakan untuk mengatur aliran air yang masuk dan keluar dari lahan tanaman agar tetap terjaga kestabilannya.
          </p>
        </div>
        <p className="mb-5">Silahkan isi data berikut untuk menghitung Drainase Lahan Tanaman!</p>

        <div className="flex flex-row gap-5">
          <div className="basis-1/2">
            <form onSubmit={handleCalculate}>
              <div className="grid grid-cols-1">
                <label htmlFor="soilType" className="text-left mb-2 font-medium">
                  Jenis Tanah
                </label>
                <select
                  id="soilType"
                  name="soilType"
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value)}
                  className="border border-gray-300 rounded-md p-2"
                  required
                >
                  <option value="">Pilih Tanah</option>
                  <option value="Tanah liat berpasir - liat berdebu">Tanah liat berpasir - liat berdebu</option>
                  <option value="Tanah lempung berdebu">Tanah lempung berdebu</option>
                  <option value="Tanah lempung berpasir">Tanah lempung berpasir</option>
                </select>
              </div>

              <div className="grid grid-cols-1">
                <label htmlFor="landArea" className="text-left mb-2 font-medium">
                  Luas Lahan (m²)
                </label>
                <input
                  type="number"
                  id="landArea"
                  value={landArea}
                  onChange={(e) => setLandArea(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md"
                  min="0"
                  required
                />
              </div>

              <div className="grid grid-cols-1">
                <div className="grid grid-cols-1">
                  <label htmlFor="dailyRainfall" className="text-left mb-2 font-medium">
                    Curah Hujan Harian (mm/hari)
                  </label>
                  <input
                    type="number"
                    id="dailyRainfall"
                    value={dailyRainfall}
                    onChange={(e) => setDailyRainfall(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md"
                    min="0"
                    required
                  />
                </div>

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
            <p className="text-2xl font-bold text-emerald-800">Hasil Perhitungan</p>
            <label className="text-left font-medium">Laju Infiltrasi</label>
            <input
              type="text"
              value={infiltrationRate}
              className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
              readOnly
            />

            <label className="text-left font-medium">Ekses Air</label>
            <input
              type="text"
              value={excessWater}
              className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
              readOnly
            />

            <label className="text-left font-medium">Volume air yang perlu dibuang</label>
            <input
              type="text"
              value={waterToBeDrained}
              className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
              readOnly
            />

            <div className="flex items-center">
              <button
                type="button"
                onClick={resetCalculation}
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
