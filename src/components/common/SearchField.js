import React from "react";

const SearchField = (props) => {
  const { onClick, name, placeholder, btnLabel, onInputClick, disabled } =
    props;
  return (
    <div className="dsp-flex">
      <div onClick={onInputClick} className="wd-100-per">
        <input
          className="search-input"
          name={name}
          placeholder={placeholder}
          disabled={disabled}
        ></input>
      </div>
      <button onClick={onClick} className="search-btn">
        {btnLabel}
      </button>
    </div>
  );
};

export default SearchField;
