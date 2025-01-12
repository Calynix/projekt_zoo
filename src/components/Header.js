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
          <div style={dropdownMenuStyles}>
            <Link to="/tickets" style={dropdownItemStyles}>
              Tickets
            </Link>
            <Link to="/animals" style={dropdownItemStyles}>
              Tiere
            </Link>
          </div>
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

const dropdownMenuStyles = {
  position: "absolute",
  top: "50px",  
  right: "0",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",
  padding: "10px",
  minWidth: "150px",
  zIndex: "1001",
};

const dropdownItemStyles = {
  padding: "10px",
  textDecoration: "none",
  color: "#333",
  fontSize: "18px",
  display: "block", 
};

export default Header;
