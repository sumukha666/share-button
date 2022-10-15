import React from "react";

const Card = (props) => {
  const { headerComp, footerComp, mainComp } = props;

  return (
    <>
      <div className="card">
        <header className="card-header">{headerComp}</header>
        <main className="card-body">{mainComp}</main>
        <footer className="card-footer">{footerComp}</footer>
      </div>
    </>
  );
};

export default Card;
