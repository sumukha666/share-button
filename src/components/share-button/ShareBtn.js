import React, { useState } from "react";
import Button from "../common/Button";
import SearchProfile from "../search-profile/SearchProfile";
import ShareCard from "./ShareCard";

const ShareBtn = (props) => {
  
  const [showCard, setShowCard] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleShare = () => setShowCard(!showCard);
  const onInvite = () => {
    setShowSearch(false);
  }


  return (
    <>
      <Button label="Share" onClick={toggleShare} />
      {showCard && <ShareCard dispSearch={()=> setShowSearch(true)} accessUsers={props.accessUsers} />}
      {
        showSearch && <SearchProfile onInvite={onInvite} {...props} />
       }
    </>
  );
};

export default ShareBtn;
