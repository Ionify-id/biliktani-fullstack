import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return `${hours}:${minutes}:${seconds}`;
}

export function getTimePeriod() {
  const now = new Date();
  const currentHour = now.getHours();

  let timePeriod = "";
  switch (true) {
    case currentHour >= 5 && currentHour < 11:
      timePeriod = "Pagi";
      break;
    case currentHour >= 11 && currentHour < 15:
      timePeriod = "Siang";
      break;
    case currentHour >= 15 && currentHour < 18:
      timePeriod = "Sore";
      break;
    default:
      timePeriod = "Malam";
  }

  let timeStyle = "";
  switch (timePeriod) {
    case "Pagi":
      timeStyle = "from-yellow-200 via-sky-300 to-sky-300";
      break;
    case "Siang":
      timeStyle = "from-sky-500 to-sky-100";
      break;
    case "Sore":
      timeStyle = "from-pink-300 via-purple-700 to-purple-900";
      break;
    case "Malam":
      timeStyle = "from-blue-800 to-blue-950";
      break;
  }

  return { timePeriod, timeStyle };
}
