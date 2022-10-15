import React from "react";
import TextField from "../../common/SearchField";

const Body = () => {
  const inputClick = () => {
    console.log("input clicked");
  };

  return (
    <div>
      <TextField
        name="search"
        placeholder="People, emails, groups"
        onClick={inputClick}
        btnLabel="Invite"
      />
    </div>
  );
};

export default Body;
