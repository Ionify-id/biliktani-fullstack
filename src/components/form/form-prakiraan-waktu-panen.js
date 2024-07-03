"use client";

import React, { useState } from "react";
import {
  plant,
  calculateHarvestDate,
} from "@/lib/siap-tani/prakiraan-waktu-panen";

export default function FormPrakiraanWaktuPanen() {
  const [formData, setFormData] = useState({
    plantType: "",
    plantCondition: "",
    plantingDate: "",
  });

  const [firstHarvestTimes, setFirstHarvestTimes] = useState([]);
  const [secondHarvestTimes, setSecondHarvestTimes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const { plantType, plantCondition, plantingDate } = formData;
    let startDate = new Date(plantingDate);

    const selectedPlant = plant.find((p) => p.name === plantType);
    const selectedCondition = selectedPlant.condition.find(
      (c) => c.plantCondition === plantCondition
    );

    let firstHarvestDays = selectedCondition.firstHarvest;
    let secondHarvestDays = selectedCondition.secondHarvest;

    let firstHarvestTimesFormatted = [];
    let secondHarvestTimesFormatted = [];

    if (firstHarvestDays.length > 0) {
      firstHarvestTimesFormatted = firstHarvestDays.map((days) =>
        calculateHarvestDate(startDate, days)
      );
    }

    if (secondHarvestDays.length > 0) {
      secondHarvestTimesFormatted = secondHarvestDays.map((days) =>
        calculateHarvestDate(startDate, days)
      );
    }

    setFirstHarvestTimes(firstHarvestTimesFormatted);
    setSecondHarvestTimes(secondHarvestTimesFormatted);
  }

  function handleReset() {
    setFormData({
      plantType: "",
      plantCondition: "",
      plantingDate: "",
    });
    setFirstHarvestTimes([]);
    setSecondHarvestTimes([]);
  }

  return (
    <div className="flex flex-row space-x-8">
      <div className="basis-1/2">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 ">
          <div className="grid grid-cols-1">
            <label htmlFor="plantType" className="text-left mb-2 font-medium">
              Pilih Tanaman
            </label>
            <select
              id="plantType"
              name="plantType"
              className="border border-gray-300 rounded-md p-2"
              onChange={handleChange}
              value={formData.plantType}
              required
            >
              <option value="">Pilih Tanaman</option>
              {plant.map((plant, index) => (
                <option key={index} value={plant.name}>
                  {plant.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1">
            <label
              htmlFor="plantCondition"
              className="block text-left mb-2 font-medium"
            >
              Kondisi Tanaman
            </label>
            <select
              id="plantCondition"
              name="plantCondition"
              className="border border-gray-300 rounded-md p-2"
              onChange={handleChange}
              value={formData.plantCondition}
              required
            >
              <option value="">Pilih Kondisi</option>
              {plant[0].condition.map((condition, index) => (
                <option key={index} value={condition.plantCondition}>
                  {condition.plantCondition}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1">
            <label
              htmlFor="plantingDate"
              className="block text-left mb-2 font-medium"
            >
              Waktu Tanam
            </label>
            <input
              type="date"
              id="plantingDate"
              name="plantingDate"
              className="border border-gray-300 rounded-md p-2"
              onChange={handleChange}
              value={formData.plantingDate}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#0B6653] text-white rounded-md p-2 w-full"
          >
            Hitung
          </button>
        </form>
      </div>

      <div className="basis-1/2">
        <p className="text-2xl font-bold text-[#0B6653]">Hasil Perhitungan</p>
        <label className="text-left mb-2 font-medium">
          Prakiraan Waktu Panen
        </label>
        {firstHarvestTimes.length > 0 ? (
          firstHarvestTimes.map((time, index) => (
            <input
              key={index}
              type="text"
              className="w-full p-2 my-2 border border-gray-300 bg-gray-200 rounded-md"
              value={time}
              readOnly
            />
          ))
        ) : (
          <input
            type="text"
            className="w-full p-2 my-2 border border-gray-300 bg-gray-200 rounded-md"
            value="0"
            readOnly
          />
        )}
        {secondHarvestTimes.length > 0 && (
          <>
            <label className="text-left my-2 font-medium">
              Prakiraan Waktu Panen Kedua
            </label>
            {secondHarvestTimes.map((time, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-2 my-2 border border-gray-300 bg-gray-200 rounded-md"
                value={time}
                readOnly
              />
            ))}
          </>
        )}
        <div className="flex items-center">
          <button
            type="button"
            onClick={handleReset}
            className="text-emerald-800 border border-emerald-800 rounded-md p-2 mt-4 w-2/3 items-center mx-auto"
          >
            Reset Perhitungan
          </button>
        </div>
      </div>
    </div>
  );
}
