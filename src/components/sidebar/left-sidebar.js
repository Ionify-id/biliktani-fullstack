import Image from "next/image";

import NavBar from "@/components/navigation/nav-bar";

import BilikTaniIcon from "@/assets/bilik-tani.png";
import { pelaksanaData } from "@/lib/nav-menu-data";
import { Suspense } from "react";

export default function LeftSidebar() {
  return (
    <aside className="sticky top-0 flex flex-col border border-r-1 border-gray-300 w-[400px] h-screen bg-white p-4">
      <div className="flex flex-col justify-items-center items-center w-full">
        <p>
          <Image
            src={BilikTaniIcon}
            width="160"
            alt="Logo bilik tani"
            priority
          />
        </p>
      </div>
      {/* NAMA TIM */}
      <p>PPK ORMAWA HIMATETA</p>
      <div className="flex-1 overflow-y-auto">
        <Suspense>
          <NavBar />
        </Suspense>
      </div>
      <div className="justify-end">
        <p className="font-bold text-lg">Pelaksana:</p>
        <ul className="flex flex-row space-x-1 items-center">
          {pelaksanaData.map((pelaksana) => (
            <li>
              <Image src={pelaksana.image} alt={pelaksana.alt} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
