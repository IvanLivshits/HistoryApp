import React from "react";

import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Buttons/HeaderButtons/HeaderButton";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header__container">
      <Logo />
      <SearchBar />
      <Button buttonText="here"></Button>
    </header>
  );
};

export default Header;
