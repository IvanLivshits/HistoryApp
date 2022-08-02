import React from "react";
import "./HeaderButton.css";

interface Props {
  buttonText: string;
}

const Button: React.FC<Props> = ({ buttonText }) => {
  return <button className="header__button">{buttonText}</button>;
};

export default Button;
