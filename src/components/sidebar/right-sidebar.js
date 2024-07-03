import Link from "next/link";
import { Button } from "../ui/button";
import UserInfo from "./user-info";
import WeatherInfo from "./weather-info";
import ModulDownloader from "./modul-downloader";

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
  const user = {
    name: "Marijan",
    isLogin: true,
  };
  return (
    <aside className="sticky top-0 flex flex-col border border-l-1 border-gray-300 w-[400px] h-screen p-4">
      <div className="flex flex-col w-full justify-items-center space-y-4">
        {/* {user.isLogin ? <UserInfo user={user} /> : <LoginButton />} */}
        <WeatherInfo />
        <ModulDownloader />
      </div>
    </aside>
  );
}
