import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header style={headerStyles}>
      <div style={logoStyles}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3kjf6LkGXxffpY9gv1wNHqc60idWxK1Jdg&s"
          alt="Zoo Logo"
          style={logoImgStyles}
        />
      </div>
      <h1 style={titleStyles}>Welcome to the Zoo!</h1>
      <div style={menuStyles}>
        <img
          src="https://cdn1.iconfinder.com/data/icons/the-basics/100/menu-drop_down-settings-512.png"
          alt="Menu Icon"
          onClick={toggleDropdown}
          style={menuIconStyles}
        />
        {isDropdownOpen && (
          <select
            onChange={(e) => window.location.href = e.target.value}
            style={dropdownStyles}
          >
            <option value="">Navigate to...</option>
            <option value="/tickets">Tickets</option>
            <option value="/animals">Animals</option>
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
  backgroundColor: "#e0e0e0",
  color: "#333",
};

const logoStyles = {
  flex: "0 1 auto",
};

const logoImgStyles = {
  width: "50px",
  height: "auto",
};

const titleStyles = {
  fontSize: "36px",
  fontWeight: "bold",
  flex: 1,
  textAlign: "center",
};

const menuStyles = {
  position: "relative",
};

const menuIconStyles = {
  width: "30px",
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
