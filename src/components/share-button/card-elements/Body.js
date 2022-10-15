import React from "react";
import SearchField from "../../common/SearchField";
import UserProfile from "../../common/UserProfile";

const Body = (props) => {
  const { dispSearch, accessUsers } = props;
  const inputClick = () => {
    dispSearch(true);
  };

  return (
    <>
      <SearchField
        name="search"
        placeholder="People, emails, groups"
        onClick={inputClick}
        btnLabel="Invite"
      />
      <div>
        {accessUsers.map((user) => (
          <div className="mr-t-1-r" key={user.name}>
            <UserProfile title={user.name} info={user.info || user.email} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;
