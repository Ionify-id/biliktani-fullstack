"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import UserInfo from "./user-info";
import WeatherInfo from "./weather-info";
import ModulDownloader from "./modul-downloader";
import Cookies from "universal-cookie";

function LoginButton() {
  return (
    <Link href="/login" className="w-full">
      <Button className="w-full rounded-xl bg-white border border-2 border-emerald-800 text-gray-700 hover:bg-emerald-800 hover:font-bold hover:text-white">
        Login
      </Button>
    </Link>
  );
}

export default function RightSidebar() {
  const cookie = new Cookies();
  const token = cookie.get("token");
  const isAuthenticated = token !== null;
  return (
    <aside className="sticky top-0 flex flex-col border border-l-1 border-gray-300 w-[400px] h-screen p-4">
      <div className="flex flex-col w-full justify-items-center space-y-4">
        {isAuthenticated ? <UserInfo name="marijan" /> : <LoginButton />}
        <WeatherInfo />
        <ModulDownloader />
      </div>
    </aside>
  );
}
