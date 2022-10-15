import React from "react";

const UserProfile = (props) => {
  const { title, info } = props;
  return (
    <div className="dsp-flex ">
      <div>Icon</div>
      <div className="dsp-flex-col mr-l-1-r">
        <div className="sub-heading">{title}</div>
        <div className="text-para">{info}</div>
      </div>
    </div>
  );
};

export default UserProfile;
