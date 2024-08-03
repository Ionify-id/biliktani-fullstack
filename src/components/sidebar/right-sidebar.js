"use client";

import { useEffect, useState } from "react";
import UserInfo from "./user-info";
import WeatherInfo from "./weather-info";
import ModulDownloader from "./modul-downloader";
import Cookies from "universal-cookie";
import LoginButton from "./login-button";
import SocmedInfo from "./socmed-info";

export default function RightSidebar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const cookies = new Cookies();
    const token = cookies.get("token") || "";
    setIsAuthenticated(token !== "");
  }, []);

  return (
    <aside className="sticky top-0 flex flex-col border border-l-1 border-gray-300 w-[400px] h-screen p-4">
      <div className="flex flex-col w-full justify-items-center space-y-4">
        {!mounted ? null : isAuthenticated ? <UserInfo /> : <LoginButton />}
        <WeatherInfo />
        <ModulDownloader />
        <SocmedInfo />
      </div>
    </aside>
  );
}
