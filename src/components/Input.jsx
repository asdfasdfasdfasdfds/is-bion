import React from "react";
import "../assets/styles/components/Input.css"

function Input({ placeholder, type, handleChange }) {
  return (
    <>
      <input placeholder={placeholder} type={type} onChange={handleChange} />
    </>
  );
}

export default Input;
