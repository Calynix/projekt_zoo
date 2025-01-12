import React from "react";

const AnimalCard = ({ name, age, species, description, imageUrl }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      maxWidth: "300px",
      backgroundColor: "#f9f9f9",
    }}>
      <h3 style={{ fontSize: "20px", color: "#4CAF50" }}>{name}</h3>
      <img 
        src={imageUrl} 
        alt={name} 
        style={{ width: "100%", borderRadius: "8px", marginBottom: "8px" }} 
      />
      <p><strong>Alter:</strong> {age}</p>
      <p><strong>Art:</strong> {species}</p>
      <p><strong>Über die Art:</strong> {description}</p>
    </div>
  );
};

export default AnimalCard;
