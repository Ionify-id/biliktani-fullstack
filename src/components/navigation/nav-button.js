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

  const activeStyle = isActive ? "bg-green-50" : "bg-white";
  return (
    <Button
      className={`w-full ${activeStyle} rounded-xl text-black justify-start hover:bg-green-50`}
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
