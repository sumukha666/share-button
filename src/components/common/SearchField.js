import React from "react";

const TextField = (props) => {
  const { onClick, name, placeholder, btnLabel, onInputClick } = props;
  return (
    <div className="dsp-flex">
      <input
        className="search-input"
        name={name}
        placeholder={placeholder}
        onClick={onInputClick}
      ></input>
      <button onClick={onClick} className="search-btn">
        {btnLabel}
      </button>
    </div>
  );
};

export default TextField;
