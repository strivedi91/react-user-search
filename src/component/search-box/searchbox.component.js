import React from "react";

export default function SearchBox({ handleChange, placeholder, className }) {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
      className={className}
    ></input>
  );
}
