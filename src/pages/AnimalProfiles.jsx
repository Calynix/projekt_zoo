import React from "react";
import animals from "./animals.json"; 
import AnimalCard from "../components/AnimalCard"; 

const AnimalProfilesPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "16px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Unsere Tiere</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center", 
          margin: "0 auto",
        }}
      >
        {animals.map((animal, index) => (
          <div key={index} style={{ marginBottom: "20px" }}> {/* Added space between the cards */}
            <AnimalCard
              name={animal.name}
              age={animal.age}
              species={animal.species}
              description={animal.description}
              imageUrl={animal.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalProfilesPage;
