import React from "react";
import Card from "../common/Card";
import Body from "./card-elements/Body";
import Header from "./card-elements/Header";

const SearchProfile = (props) => {
  
  return (
    <div className="mr-t-1-r wd-30-r">
      <Card headerComp={<Header />} mainComp={<Body {...props}/>} />
    </div>
  );
};

export default SearchProfile;
