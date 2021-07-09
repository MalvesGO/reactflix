import React from "react";
import "./Header.css";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://avatars.githubusercontent.com/u/10326782?s=400&u=0657c674e06a4bd9f7d0be4a6fb950a75de66a1b&v=4"
            alt=""
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
