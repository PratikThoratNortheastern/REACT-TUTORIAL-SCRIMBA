import React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <img
            src="src\assets\images\react-icon-small.png"
            className="nav-img"
            alt="React Logo"
          />
          <span className="logo-text">ReactFacts</span>
        </nav>
      </header>
    </>
  );
}

export default Header;
