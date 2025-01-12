import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <header style={headerStyles}>
      <div style={logoStyles}>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Logo_Zoo_Z%C3%BCrich.svg/800px-Logo_Zoo_Z%C3%BCrich.svg.png"
            alt="Zoo Logo"
            style={logoImgStyles}
          />
        </Link>
      </div>
      <div style={menuStyles}>
        <img
          src="https://cdn1.iconfinder.com/data/icons/the-basics/100/menu-drop_down-settings-512.png"
          alt="Menu Icon"
          onClick={toggleDropdown}
          style={menuIconStyles}
        />
        {isDropdownOpen && (
          <select onChange={(e) => window.location.href = e.target.value} style={dropdownStyles}>
            <option value=""> </option>
            <option value="/tickets">Tickets</option>
            <option value="/animals">Tiere</option>
            <option value="/news">News</option>
          </select>
        )}
      </div>
    </header>
  );
};

const headerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 40px",
  backgroundColor: "rgba(224, 224, 224, 0.0)",
  color: "#333",
  border: "1px solid rgba(0, 0, 0, 0.0)",
  borderRadius: "8px",
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  zIndex: "1000",
};

const logoStyles = {
  flex: "0 1 auto",
};

const logoImgStyles = {
  width: "70px",
  height: "auto",
};

const menuStyles = {
  position: "relative",
};

const menuIconStyles = {
  width: "40px",
  cursor: "pointer",
};

const dropdownStyles = {
  position: "absolute",
  top: "40px",
  right: "0",
  padding: "10px",
  fontSize: "16px",
};

export default Header;
