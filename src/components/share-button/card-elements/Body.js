import React from "react";
import SearchField from "../../common/SearchField";

const Body = () => {
  const inputClick = () => {
    console.log("input clicked");
  };

  return (
    <div>
      <SearchField
        name="search"
        placeholder="People, emails, groups"
        onClick={inputClick}
        btnLabel="Invite"
      />
    </div>
  );
};

export default Body;
