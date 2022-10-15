import React, { useState } from "react";
import Card from "../common/Card";
import Body from "./card-elements/Body";
import Header from "./card-elements/Header";

const SearchProfile = (props) => {
  const { users, groups, onInvite } = props;
  const [searchStr, setSearchStr] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);

  const getFilterVal = (val) => setSearchStr(val);
  const getFilteredList = (list) =>
    list.filter((obj) =>
      obj.name.toLowerCase().includes(searchStr.toLowerCase())
    );

  const itemSelect = (profileInfo) => {
    setSelectedProfile(profileInfo);
  };

  return (
    <div className="mr-t-1-r wd-30-r">
      <Card
        headerComp={
          <Header
            getFilterVal={getFilterVal}
            selectedProfile={selectedProfile}
            setSelectedProfile={setSelectedProfile}
            onInvite={onInvite}
          />
        }
        mainComp={
          <Body
            users={getFilteredList(users)}
            groups={getFilteredList(groups)}
            onItemSelect={itemSelect}
          />
        }
      />
    </div>
  );
};

export default SearchProfile;
