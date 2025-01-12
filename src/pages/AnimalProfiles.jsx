import React from "react";
import animals from "./animals.json"; 
import AnimalCard from "../components/AnimalCard"; 

const AnimalProfilesPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "16px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Tierprofile</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
        {animals.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            age={animal.age}
            species={animal.species}
            description={animal.description}
            imageUrl={animal.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimalProfilesPage;
