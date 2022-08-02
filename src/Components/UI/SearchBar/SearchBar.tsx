import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import { setCardsData } from "../../../store/cardsData/cardsDataSlice";
import { setSearchQuery } from "../../../store/searchQuery/searchQuery";
import { RootState } from "../../../store/store";

import getEuropeanaData from "../../../utils/europeanaGetCall";
import Button from "../Buttons/HeaderButtons/HeaderButton";
import "./SearchBar.css";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state:RootState) => state.searchQuery.value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value))
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await getEuropeanaData(searchQuery);
    dispatch(setCardsData(data))
  };

  return (
    <form
      className="main__form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        className="main__form__input"
        type="text"
        placeholder="Type a location"
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
      <span className="main__form__icon">
        <AiOutlineSearch />
      </span>
      <Button buttonText="find"></Button>
    </form>
  );
};

export default SearchBar;
