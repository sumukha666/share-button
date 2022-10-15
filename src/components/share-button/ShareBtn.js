import React, { useState } from "react";
import Button from "../common/Button";
import ShareCard from "./ShareCard";

const ShareBtn = (props) => {
  
  const [showCard, setShowCard] = useState(false);
  const toggleShare = () => setShowCard(!showCard);

  return (
    <>
      <Button label="Share" onClick={toggleShare} />
      {showCard && <ShareCard {...props} />}
    </>
  );
};

export default ShareBtn;
