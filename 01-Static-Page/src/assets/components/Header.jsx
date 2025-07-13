import React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <img
          src="src\assets\images\react-icon-small.png"
          className="nav-img"
          alt="React Logo"
        />
        <nav>
          <ul className="nav-list">
            <li className="nav-list-items">Pricing</li>
            <li className="nav-list-items">About</li>
            <li className="nav-list-items">Content</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
