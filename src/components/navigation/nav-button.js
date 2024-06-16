"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronLeft } from "lucide-react";

export default function NavButton({ menu, onClick, showSubmenu }) {
  const { image, imageActive, altImage, title, startPath } = menu.mainMenu;
  const path = usePathname();
  const isActive =
    startPath === "/" ? path === "/" : path.startsWith(startPath);

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const activeStyle = isActive
    ? "bg-emerald-800 text-white"
    : "bg-white text-black";

  const chevronIcon = showSubmenu ? (
    <ChevronDown size={16} />
  ) : (
    <ChevronLeft size={16} />
  );

  return (
    <Button
      className={`w-full ${activeStyle} rounded-xl justify-start hover:bg-emerald-800 hover:text-white flex items-center`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-grow items-center">
        <Image
          src={hovered || isActive ? imageActive : image}
          alt={altImage}
          className="mr-2"
          width={24}
          height={24}
        />
        <span>{title}</span>
      </div>
      {menu.subMenu === undefined ? null : chevronIcon}
    </Button>
  );
}
