import React from "react";
import UserProfile from "../../common/UserProfile";

const DispItems = (props) => {
  const { list, title, onClick } = props;
  return (
    <>
      {list && list.length > 0 && (
        <div>
          <div className="sub-header">{title}</div>
          <div className="dsp-flex-col">
            {list.map((e, i) => (
              <div
                key={e.name || i}
                className="select-item"
                onClick={() => onClick(e)}
              >
                <UserProfile title={e.name} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DispItems;
