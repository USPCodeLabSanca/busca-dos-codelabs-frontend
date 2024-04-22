import React from "react";
import "./styles.css";

interface Props {
  text: string;
  width?: number | string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ width, type, text, disabled, onClick }: Props) => {
  return (
    <button
      type={type}
      className="button"
      style={{ width: width || "" }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
