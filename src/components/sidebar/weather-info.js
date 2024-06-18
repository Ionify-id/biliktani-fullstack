"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getCurrentTime, getTimePeriod } from "@/lib/utils";

export default function WeatherInfo() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function getWeatherData() {
    const timeCondition = getTimePeriod();
    const apiKey = "e6d6475695cb41eea8d132015240706";
    const city = "Bogor";
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&hours`;

    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();

      const timeIndex = [8, 13, 16, 23];
      const { location, current, forecast } = data;

      setWeatherData({
        timeCondition,
        location: location.name,
        currentTemp: Math.floor(current.temp_c),
        image: current.condition.icon,
        forecast: timeIndex.map((i) => {
          const {
            temp_c: temp,
            time,
            condition,
          } = forecast.forecastday[0].hour[i];
          return {
            temp,
            time: time.split(" ")[1],
            image: condition.icon,
          };
        }),
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col w-full justify-start space-y-2">
        <p>Cuaca hari ini</p>
        <div
          className={`w-full flex flex-row rounded-xl bg-gradient-to-t from-gray-500 to-gray-100`}
        ></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full justify-start space-y-2">
      <p>Cuaca hari ini</p>
      {weatherData !== null && (
        <div
          className={`w-full flex flex-row rounded-xl bg-gradient-to-t from-sky-500 to-sky-100 ${weatherData.timeCondition.timeStyle}`}
        >
          <div className="w-2/5 flex flex-col p-4">
            <Image
              src={`https:${weatherData.image}`}
              alt="hello"
              width="96"
              height={0}
              loading="lazy"
            />
            <div className="w-full flex flex-col justify-start font-bold text-white">
              <p className="text-xl">{weatherData.timeCondition.timePeriod}</p>
              <p className="text-sm">{weatherData.location}</p>
              <p className="text-sm">{currentTime}</p>{" "}
            </div>
          </div>
          <div className="w-3/5 flex flex-col justify-items-center p-4 space-y-4 text-white">
            <h1 className="text-5xl font-bold text-center">
              {weatherData.currentTemp}°C
            </h1>
            <div className="text-sm">
              <p>Perkiraan hari ini</p>
              <ul>
                {weatherData.forecast.map((data) => (
                  <li
                    key={data.time}
                    className="flex flex-row justify-between items-center"
                  >
                    <Image
                      src={`https:${data.image}`}
                      alt={`icon at ${data.time}`}
                      width={24}
                      height={0}
                    />
                    <p>{data.time}</p>
                    <p>{Math.floor(data.temp)}°C</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
