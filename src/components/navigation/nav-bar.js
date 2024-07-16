"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";

import NavMenu from "./nav-menu";
import NavButton from "./nav-button";

import {
  getNavMenuAuthenticated,
  getNavMenuUnauthenticated,
} from "@/lib/nav-menu-data";
import Cookies from "universal-cookie";

export default function NavBar() {
  const [navMenu, setNavMenu] = useState([]);

  useEffect(() => {
    const cookies = new Cookies();
    const tokenFromCookies = cookies.get("token") || "";

    const menu =
      tokenFromCookies !== ""
        ? getNavMenuAuthenticated()
        : getNavMenuUnauthenticated();
    setNavMenu(menu);
  }, []);

  return (
    <nav className="w-full mt-8">
      <ul className="flex flex-col space-y-2">
        {navMenu.map((menu) =>
          menu.subMenu ? (
            <NavMenu key={menu.mainMenu.title} menu={menu} />
          ) : (
            <li key={menu.mainMenu.title}>
              <Link href={menu.mainMenu.startPath}>
                <NavButton menu={menu} />
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
