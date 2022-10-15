import React from "react";

const Button = (props) => {
  const { label, onClick, type = "primary" } = props;
  return (
    <button className={`btn-${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
