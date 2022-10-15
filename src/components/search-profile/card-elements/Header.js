import React from "react";
import TextField from "../../common/TextField";

const Header = (props) => {
  const onInput = (event) => {
    console.log(event);
  };
  
  return (
    <div>
      <TextField
        name="userProfile"
        placeholder="Search emails, names or groups"
        onInput={onInput}
        className="plain-text-input"
      />
    </div>
  );
};

export default Header;
