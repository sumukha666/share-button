import React from "react";

const SelectedOption = (props) => {
  const { label, onClose, className } = props;

  return (
    <div className={`dsp-flex ${className}`}>
      <div>{label}</div>
      <button className="selected-optn-btn" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default SelectedOption;
