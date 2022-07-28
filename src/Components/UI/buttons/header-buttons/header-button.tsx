import React from "react";
import "./header-button.css";

interface Props {
  buttonText: string;
}

const Button: React.FC<Props> = ({ buttonText }) => {
  return <button className="header-button">{buttonText}</button>;
};

export default Button;
