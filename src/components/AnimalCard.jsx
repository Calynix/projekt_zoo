import React from "react";

const AnimalCard = ({ name, age, species, description, imageUrl }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        width: "350px",
        backgroundColor: "#b9c6c7",
        fontFamily: "Arial, sans-serif",
        textAlign: "left", 
      }}
    >
      <h3 style={{ fontSize: "20px", color: "black", marginBottom: "10px" }}>
        {name}
      </h3>

      <img
        src={imageUrl}
        alt={name}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "8px",
        }}
      />

      <p style={{ color: "black", marginBottom: "8px" }}>
        <strong>Alter:</strong> {age}
      </p>
      <p style={{ color: "black", marginBottom: "8px" }}>
        <strong>Art:</strong> {species}
      </p>
      <p style={{ color: "black" }}>
        <strong>Über die Art:</strong> {description}
      </p>
    </div>
  );
};

export default AnimalCard;
