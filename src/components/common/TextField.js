import React from "react";

const TextField = (props) => {
  const { name, onInput, className, placeholder } = props;
  return (
    <input
      name={name}
      onInput={onInput}
      className={className}
      placeholder={placeholder}
    ></input>
  );
};

export default TextField;
