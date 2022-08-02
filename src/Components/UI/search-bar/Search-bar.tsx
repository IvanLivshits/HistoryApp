import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import Button from "../buttons/header-buttons/header-button";
import "./search-bar.css";

const SearchBar: React.FC = () => {
  return (
    <form className="main-form">
      <input
        className="main-form-input"
        type="text"
        placeholder="Type a location"
      ></input>
      <span className="input-search-icon">
        <AiOutlineSearch />
      </span>
      <Button buttonText="find"></Button>
    </form>
  );
};

export default SearchBar;
