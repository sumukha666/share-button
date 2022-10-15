import React from "react";

const Card = (props) => {
  const { headerComp, footerComp, mainComp } = props;

  return (
    <>
      <div>
        <header>{headerComp}</header>
        <main>{mainComp}</main>
        <footer>{footerComp}</footer>
      </div>
    </>
  );
};

export default Card;
