import React from "react";
import SearchField from "../../common/SearchField";

const Body = (props) => {
  const inputClick = () => {
    console.log( props);
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
