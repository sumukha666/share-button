import React from "react";
import SearchField from "../../common/SearchField";

const Body = (props) => {
  const { dispSearch } = props;
  const inputClick = () => {
    dispSearch(true);
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
