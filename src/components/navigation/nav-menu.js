"use client";

import { useState } from "react";
import NavButton from "./nav-button";
import NavSubMenu from "./nav-sub-menu";

export default function NavMenu({ menu }) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const { mainMenu, subMenu } = menu;

  const toggleSubmenu = () => {
    setShowSubmenu((prevValue) => !prevValue);
  };

  return (
    <>
      <NavButton
        imageSrc={mainMenu.image}
        altText={mainMenu.alt_image}
        title={mainMenu.title}
        startPath={mainMenu.startPath}
        onClick={toggleSubmenu}
      />
      {showSubmenu && (
        <ul className="w-full">
          {subMenu.map((menu) => (
            <li key={menu.title}>
              <NavSubMenu menu={menu} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
