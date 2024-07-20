"use client";

import React, { useState } from "react";
import {
  landOptionsData,
  calculateLuasBersih,
  calculateKebutuhan,
  calculateKebutuhanBanyakKarung,
  calculatePrakiraanBiaya,
  formatRupiah,
} from "@/lib/siap-tani/kalkulator-tani";
import { Button } from "../ui/button";

export default function FormKalkulatorPupuk() {
  const [formData, setFormData] = useState({
    selectedPlant: "",
    landOptions: [],
    selectedLandOption: 0,
    jumlahBedeng: 0,
    panjang: 0,
    lebar: 0,
  });

  const [result, setResult] = useState({
    luasBersih: 0,
    kebutuhan: 0,
    kebutuhanBanyakKarung: 0,
    prakiraanBiaya: 0,
  });

  function handlePlantChange(event) {
    const selectedPlant = event.target.value;
    const selectedOption = landOptionsData.find(
      (option) => option.plantType === selectedPlant
    );
    const landOptions = selectedOption
      ? selectedOption.tingkatKesuburanTanah
      : [];
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedPlant,
      landOptions,
      selectedLandOption: 0,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "selectedLandOption" ? Number(value) : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const luas = calculateLuasBersih(
      formData.jumlahBedeng,
      formData.panjang,
      formData.lebar
    );
    const kebutuhan = calculateKebutuhan(formData.selectedLandOption, luas);
    const banyakKarung = calculateKebutuhanBanyakKarung(kebutuhan);
    const biaya = calculatePrakiraanBiaya(banyakKarung);

    setResult({
      luasBersih: luas,
      kebutuhan: kebutuhan,
      kebutuhanBanyakKarung: banyakKarung,
      prakiraanBiaya: biaya,
    });
  }

  function handleReset() {
    setFormData({
      selectedPlant: "",
      landOptions: [],
      selectedLandOption: 0,
      jumlahBedeng: 0,
      panjang: 0,
      lebar: 0,
    });
    setResult({
      luasBersih: 0,
      kebutuhan: 0,
      kebutuhanBanyakKarung: 0,
      prakiraanBiaya: 0,
    });
  }

  return (
    <div className="flex flex-row space-x-8">
      <div className="basis-1/2">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="grid grid-cols-1">
            <label htmlFor="plant" className="text-left mb-2 font-medium">
              Pilih Tanaman
            </label>
            <select
              id="plant"
              name="selectedPlant"
              className="border border-gray-300 rounded-md p-2"
              onChange={handlePlantChange}
              value={formData.selectedPlant}
            >
              <option value="">Pilih Tanaman</option>
              <option value="Kemangi">Kemangi</option>
              <option value="Kangkung">Kangkung</option>
              <option value="Bayam">Bayam</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-x-4">
            <div>
              <label
                htmlFor="jumlah-bedeng"
                className="block text-left mb-2 font-medium"
              >
                Jumlah Bedeng
              </label>
              <input
                type="number"
                id="jumlah-bedeng"
                name="jumlahBedeng"
                min="0"
                step="0.01"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.jumlahBedeng}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="panjang-rerata"
                className="block text-left mb-2 font-medium"
              >
                Panjang (m)
              </label>
              <input
                type="number"
                id="panjang-rerata"
                name="panjang"
                min="0"
                step="0.01"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.panjang}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="lebar"
                className="block text-left mb-2 font-medium"
              >
                Lebar (m)
              </label>
              <input
                type="number"
                id="lebar"
                name="lebar"
                min="0"
                step="0.01"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.lebar}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1">
            <label htmlFor="land" className="block text-left mb-2 font-medium">
              Tingkat Kesuburan Tanah
            </label>
            <select
              id="land"
              name="selectedLandOption"
              className="border border-gray-300 rounded-md p-2"
              value={formData.selectedLandOption}
              onChange={handleChange}
            >
              <option value="">Pilih Tingkat Kesuburan Tanah</option>
              {formData.landOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <Button
            type="submit"
            className="bg-emerald-800 text-white rounded-xl p-2 w-full hover:bg-emerald-700"
          >
            Hitung
          </Button>
        </form>
      </div>
      <div className="basis-1/2">
        <p className="text-2xl font-bold text-emerald-800">Hasil Perhitungan</p>
        <label className="text-left font-medium">Luas Bersih</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
          value={`${result.luasBersih} ha`}
          readOnly
        />

        <p className="text-left mb-2 font-medium">Dosis Pupuk Kandang</p>
        <label>Kebutuhan:</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
          value={`${result.kebutuhan} kg`}
          readOnly
        />

        <label>Kebutuhan banyak karung:</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
          value={`${result.kebutuhanBanyakKarung} karung`}
          readOnly
        />

        <label className="text-left mb-2 font-medium">Prakiraan Biaya:</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
          value={formatRupiah(result.prakiraanBiaya)}
          readOnly
        />

        <div className="flex items-center">
          <button
            type="button"
            className="text-[#0B6653] border border-[#0B6653] rounded-md p-2 mt-4 w-[70%] items-center mx-auto"
            onClick={handleReset}
          >
            Reset Perhitungan
          </button>
        </div>
      </div>
    </div>
  );
}
