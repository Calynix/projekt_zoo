import React from "react";

const TicketCard = ({ name, price, additionalInfo }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        width: "350px",
        backgroundColor: "rgb(230, 167, 167)",
        fontFamily: "Arial, sans-serif",
        textAlign: "left", 
      }}
    >
      <h3 style={{ fontSize: "20px", color: "black", marginBottom: "10px" }}>
        {name}
      </h3>

      <p style={{ fontSize: "18px", color: "black", marginBottom: "8px" }}>
        <strong>Price:</strong> {price}
      </p>

      <p style={{ fontSize: "16px", color: "black", marginBottom: "8px" }}>
        <strong>Additional Information:</strong> {additionalInfo}
      </p>
    </div>
  );
};

export default TicketCard;
