import React from "react";
import "./Header.css";
import logo from "../../../img/logo3.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <nav className="header__menu">
        <a className="header__link" href="#preim">
          ПРЕИМУЩЕСТВА
        </a>
        <a className="header__link" href="#catalog">
          КАТАЛОГ
        </a>
        <a className="header__link" href="#clients">
          НАШИ КЛИЕНТЫ
        </a>
        <a className="header__link" href="#company">
          О КОМПАНИИ
        </a>
        <a className="header__link" href="#contacts">
          КОНТАКТЫ
        </a>
      </nav>
      <a className="header__tel" href="tel:+380985554433">
        + 7 (8112) 61-45-11
      </a>
    </header>
  );
}

export default Header;
