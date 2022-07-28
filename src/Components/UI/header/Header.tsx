import React from "react";

import Logo from "../logo/Logo";
import SearchBar from "../search-bar/Search-bar";
import Button from "../buttons/header-buttons/header-button";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <Logo />
      <SearchBar />
      <Button buttonText="here"></Button>
    </header>
  );
};

export default Header;
