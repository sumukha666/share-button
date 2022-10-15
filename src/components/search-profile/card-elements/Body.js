import React from "react";
import DispItems from "./DispItems";

const Body = (props) => {
  const { users, groups } = props;

  return (
    <div>
      <DispItems list={users} title="Select a person" />
      <div className="mr-t-1-r">
        <DispItems list={groups} title="Select a group" />
      </div>
    </div>
  );
};

export default Body;
