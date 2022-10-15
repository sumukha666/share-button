import React from "react";
import UserProfile from "../../common/UserProfile";

const DispItems = (props) => {
  const { list, title } = props;
  return (
    <>
      <div className="sub-header">{title}</div>
      <div className="dsp-flex-col">
        {list.map((e) => (
          <div className="select-item">
            <UserProfile title={e.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default DispItems;
