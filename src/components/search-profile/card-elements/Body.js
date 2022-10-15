import React from "react";
import DispItems from "./DispItems";

const Body = (props) => {
  const { users, groups, onItemSelect } = props;

  return (
    <div>
      <DispItems list={users} title="Select a person" onClick={onItemSelect} />
      <div className="mr-t-1-r">
        <DispItems list={groups} title="Select a group" onClick={onItemSelect} />
      </div>
    </div>
  );
};

export default Body;
