"use client";

import { useState } from "react";
import NavButton from "./nav-button";
import NavSubMenu from "./nav-sub-menu";

export default function NavMenu({ menu }) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu((prevValue) => !prevValue);
  };

  return (
    <>
      <NavButton
        menu={menu}
        onClick={toggleSubmenu}
        showSubmenu={showSubmenu}
      />
      <ul
        className={`w-full transition-opacity duration-300 ${
          showSubmenu ? "opacity-100" : "opacity-0"
        }`}
      >
        {showSubmenu &&
          menu.subMenu.map((submenu) => (
            <li key={submenu.title}>
              <NavSubMenu menu={submenu} />
            </li>
          ))}
      </ul>
    </>
  );
}
