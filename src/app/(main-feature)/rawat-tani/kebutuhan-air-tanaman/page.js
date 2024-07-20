"use client";

import React, { useState } from "react";

export default function KebutuhanAirTanamanPage() {
  const [selectedPlant, setSelectedPlant] = useState("");
  const [plantPopulation, setPlantPopulation] = useState(0);
  const [stage, setStage] = useState({
    stageText: [
      "Tahap 1: Minggu 1",
      "Tahap 2: Minggu 2",
      "Tahap 3: Minggu 3 dan seterusnya",
    ],
    dose: [0, 0, 0],
  });
  const [selectedStage, setSelectedStage] = useState(0); // State for selected stage

  const calculateWaterDose = (e) => {
    e.preventDefault();

    let dose = [0, 0, 0];

    switch (selectedPlant) {
      case "Bayam":
        dose[0] = (0.004 * plantPopulation).toFixed(2);
        dose[1] = (0.005 * plantPopulation).toFixed(2);
        dose[2] = (0.006 * plantPopulation).toFixed(2);
        break;
      case "Kangkung":
        dose[0] = (0.0045 * plantPopulation).toFixed(2);
        dose[1] = (0.005 * plantPopulation).toFixed(2);
        dose[2] = (0.0055 * plantPopulation).toFixed(2);
        break;
      case "Kemangi":
        dose[0] = (0.0025 * plantPopulation).toFixed(2);
        dose[1] = (0.003 * plantPopulation).toFixed(2);
        dose[2] = (0.0035 * plantPopulation).toFixed(2);
        break;
      default:
        dose = [0, 0, 0];
    }

    setStage((prevStage) => ({
      ...prevStage,
      dose: dose,
    }));
  };

  const resetCalculation = () => {
    setSelectedPlant("");
    setPlantPopulation(0);
    setStage({
      stageText: [
        "Tahap 1: Minggu 1",
        "Tahap 2: Minggu 2",
        "Tahap 3: Minggu 3 dan seterusnya",
      ],
      dose: [0, 0, 0],
    });
    setSelectedStage(0);
  };

  return (
    <div>
      <div className="container">
        <div className="container mx-auto my-8 p-4 border-2 rounded-lg border-gray-150">
          <h1 className="text-2xl font-bold text-[#0B6653]">
            Kebutuhan Air Tanaman
          </h1>
          <p>
            Kebutuhan Air Lahan Tanaman merupakan sebuah fitur yang digunakan
            untuk membantu merencanakan dan mengelola sistem irigasi untuk
            komoditas yang ditanam.
          </p>
        </div>
        <p className="mb-5">
          Silahkan isi data berikut untuk menghitung Kebutuhan Irigasi!
        </p>

        <div className="flex flex-row gap-5">
          <div className="basis-1/2">
            <form onSubmit={calculateWaterDose}>
              <div className="grid grid-cols-1 mb-4">
                <label htmlFor="plant" className="text-left mb-2 font-medium">
                  Pilih Tanaman
                </label>
                <select
                  id="plant"
                  name="selectedPlant"
                  value={selectedPlant}
                  onChange={(e) => setSelectedPlant(e.target.value)}
                  className="border border-gray-300 rounded-md p-2"
                >
                  <option value="">Pilih Tanaman</option>
                  <option value="Kemangi">Kemangi</option>
                  <option value="Kangkung">Kangkung</option>
                  <option value="Bayam">Bayam</option>
                </select>
              </div>

              <div className="grid grid-cols-1 mb-4">
                <label
                  htmlFor="plantPopulation"
                  className="text-left mb-2 font-medium"
                >
                  Jumlah Populasi
                </label>
                <input
                  type="number"
                  id="plantPopulation"
                  value={plantPopulation}
                  onChange={(e) => setPlantPopulation(Number(e.target.value))}
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
            <select
              id="stageText"
              name="stageText"
              value={selectedStage}
              onChange={(e) => setSelectedStage(Number(e.target.value))}
              className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
            >
              <option value="">Pilih Tahap</option>
              {stage.stageText.map((text, index) => (
                <option key={index} value={index}>
                  {text}
                </option>
              ))}
            </select>

            <label className="text-left font-medium">
              Dosis Kadar Air Irigasi
            </label>
            <input
              type="text"
              value={stage.dose[selectedStage] || 0}
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
