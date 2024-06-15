import React from "react";

import Link from "next/link";

import NavMenu from "./nav-menu";
import NavButton from "./nav-button";

import { navMenu } from "@/lib/nav-menu-data";

export default function NavBar() {
  return (
    <nav className="w-full mt-8">
      <ul className="flex flex-col space-y-2">
        {navMenu.map((menu, index) => {
          if (index === 0 || index === navMenu.length - 1) {
            return (
              <li>
                <Link href={menu.mainMenu.startPath}>
                  <NavButton
                    imageSrc={menu.mainMenu.image}
                    altText={menu.mainMenu.alt_image}
                    title={menu.mainMenu.title}
                    startPath={menu.mainMenu.startPath}
                  />
                </Link>
              </li>
            );
          } else {
            return <NavMenu key={index} menu={menu} />;
          }
        })}
      </ul>
    </nav>
  );
}
