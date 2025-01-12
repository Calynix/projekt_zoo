import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: "rgba(0, 0, 0, 0)",  
      padding: "10px",                       
      position: "fixed",                     
      bottom: 0,
      width: "100%",
      textAlign: "center",
    }}>
      <p style={{
        color: "rgba(169, 169, 169, 0.8)",   
        fontSize: "14px",                     
        margin: 0,
      }}>
        &copy; 2025 Zoo App. Alle Rechte liegen beim Zürich Zoo.
      </p>
    </footer>
  );
}

export default Footer;
