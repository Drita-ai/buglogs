import React from "react";
import { useState, useEffect } from "react";

import logoLight from "./../../assets/logo-light.svg";
import logoDark from "./../../assets/logo-dark.svg";

import ThemeBtn from "./ThemeBtn";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function LogoImage({ src, className }) {
  return (
    <img src={src} alt="Devblog's logo" width="150" className={className} />
  );
}

export default function Header() {
  const [currentTheme, updateTheme] = useState("light");

  useEffect(() => {
    document.body.classList.add(`${currentTheme}-theme`);

    return () => {
      document.body.classList.remove(`${currentTheme}-theme`);
    };
  }, [currentTheme]);

  function handleClick() {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    updateTheme(newTheme);
  }

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#">
            <LogoImage src={logoLight} className="logo-light" />
            <LogoImage src={logoDark} className="logo-dark" />
          </a>

          <div className="btn-group">
            <ThemeBtn device="mobile" />

            <button className="nav-menu-btn">
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>

          <div className="flex-wrapper">
            <DesktopNav />
            <ThemeBtn
              device="desktop"
              onClick={handleClick}
              theme={currentTheme}
            />
          </div>

          {/* *************** 
           Mobile Navigator */}
          <MobileNav />
        </nav>
      </div>
    </header>
  );
}
