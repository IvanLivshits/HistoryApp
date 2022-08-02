import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import Button from "../Buttons/HeaderButtons/HeaderButton";
import "./SearchBar.css";

const SearchBar: React.FC = () => {
  return (
    <form className="main__form">
      <input
        className="main__form__input"
        type="text"
        placeholder="Type a location"
      ></input>
      <span className="main__form__icon">
        <AiOutlineSearch />
      </span>
      <Button buttonText="find"></Button>
    </form>
  );
};

export default SearchBar;
