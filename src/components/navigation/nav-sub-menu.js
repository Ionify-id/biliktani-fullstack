"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavSubMenu({ menu }) {
  const path = usePathname();
  const activeStyle =
    path === menu.href ? "text-emerald-500 font-bold" : "text-gray-500";
  return (
    <Link
      href={menu.href}
      className={`block px-4 py-2 text-sm ${activeStyle} hover:font-bold hover:text-emerald-500`}
    >
      {menu.title}
    </Link>
  );
}
