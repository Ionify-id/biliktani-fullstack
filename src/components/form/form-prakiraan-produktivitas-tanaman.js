"use client";

import React, { useState } from "react";
import {
  plant,
  calculateLuasBersih,
  calculatePopulasi,
  calculatePrakiraanProduktivitas,
} from "@/lib/siap-tani/prakiraan-produktivitas-tanaman";
import { Button } from "../ui/button";

export default function FormPrakiraanProduktivitasTanaman() {
  const [formData, setFormData] = useState({
    pilihanTanaman: "",
    jumlahBedeng: 0,
    panjangRerata: 0,
    lebar: 0,
    jarakTanaman: 0,
  });

  const [result, setResult] = useState({
    luasBersih: 0,
    populasi: 0,
    prakiraanProduktivitas: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { pilihanTanaman, jumlahBedeng, panjangRerata, lebar, jarakTanaman } =
      formData;

    const rendemen = plant.find((p) => p.name === pilihanTanaman).rendemen;

    const luasBersih = calculateLuasBersih(jumlahBedeng, panjangRerata, lebar);
    const populasi = calculatePopulasi(luasBersih, jarakTanaman);
    const prakiraanProduktivitas = calculatePrakiraanProduktivitas(
      rendemen,
      populasi
    );

    setResult({
      luasBersih,
      populasi,
      prakiraanProduktivitas,
    });
  }

  function handleReset() {
    setFormData({
      pilihanTanaman: "",
      jumlahBedeng: 0,
      panjangRerata: 0,
      lebar: 0,
      jarakTanaman: 0,
    });
    setResult({
      luasBersih: 0,
      populasi: 0,
      prakiraanProduktivitas: 0,
    });
  }

  return (
    <div className="flex flex-row space-x-8">
      <div className="basis-1/2">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="grid grid-cols-1">
            <label
              htmlFor="pilihan-tanaman"
              className="text-left mb-2 font-medium"
            >
              Pilih Tanaman
            </label>
            <select
              id="pilihan-tanaman"
              name="pilihanTanaman"
              className="border border-gray-300 rounded-md p-2"
              value={formData.pilihanTanaman}
              onChange={handleChange}
            >
              <option value="">Pilih Tanaman</option>
              {plant.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-3 gap-4">
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
                Panjang Rerata (m)
              </label>
              <input
                type="number"
                id="panjang-rerata"
                name="panjangRerata"
                min="0"
                step="0.01"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.panjangRerata}
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
            <div>
              <label
                htmlFor="jarak-tanaman"
                className="block text-left mb-2 font-medium"
              >
                Jarak antar tanam rata-rata (cm)
              </label>
              <input
                type="number"
                id="jarak-tanaman"
                name="jarakTanaman"
                min="0"
                step="0.01"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
                value={formData.jarakTanaman}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="bg-emerald-800 text-white rounded-xl p-2 mt-4 w-full text-md hover:bg-emerald-700"
          >
            Hitung
          </Button>
        </form>
      </div>
      <div className="basis-1/2">
        <p className="text-2xl font-bold text-emerald-800">Hasil Perhitungan</p>
        <label className="text-left mb-4 font-medium">Luas Bersih</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
          value={`${result.luasBersih} m\u00B2`}
          readOnly
        />

        <label>Populasi:</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
          value={`${result.populasi} tanaman`}
          readOnly
        />

        <label>Prakiraan Produktivitas:</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 bg-gray-200 rounded-md"
          value={`${result.prakiraanProduktivitas} kg`}
          readOnly
        />

        <div className="flex items-center">
          <Button
            type="submit"
            className="text-emerald-700 border border-emerald-700 rounded-xl p-2 mt-4 w-2/3 text-md items-center mx-auto"
            variant="outline"
            onClick={handleReset}
          >
            Reset Perhitungan
          </Button>
        </div>
      </div>
    </div>
  );
}
