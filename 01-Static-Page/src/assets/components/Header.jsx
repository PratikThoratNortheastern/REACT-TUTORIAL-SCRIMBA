import React from "react";
function Header() {
  return (
    <>
      <header className="header">
        <img
          src="src\assets\images\react-icon-small.png"
          width="40px"
          alt="React Logo"
        />
        <nav>
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Content</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
