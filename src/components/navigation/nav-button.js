"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export default function NavButton({
  imageSrc,
  altText,
  title,
  onClick,
  startPath,
}) {
  const path = usePathname();
  const isActive =
    startPath === "/" ? path === "/" : path.startsWith(startPath);

  const activeStyle = isActive
    ? "bg-emerald-800 text-white"
    : "bg-white text-black";
  return (
    <Button
      className={`w-full ${activeStyle} rounded-xl justify-start hover:bg-emerald-800 hover:text-white`}
      onClick={onClick}
    >
      <Image
        src={imageSrc}
        alt={altText}
        className="mr-2"
        width={24}
        height={24}
      />{" "}
      {title}{" "}
    </Button>
  );
}
