import React from "react";
import animals from "./animals.json";
import AnimalCard from "../components/AnimalCard";

const AnimalProfilesPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "16px",
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20240522/pngtree-a-view-of-chester-zoo-image_15680392.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", 
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "black" }}>Unsere Tiere</h2>
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
          <div key={index} style={{ marginBottom: "20px" }}>
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
