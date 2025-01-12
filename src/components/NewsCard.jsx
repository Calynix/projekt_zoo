import React from "react";

const NewsCard = ({ newstitle, news, imageUrl }) => {
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
              <img
        src={imageUrl}
        alt={newstitle}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "8px",
        }}
      />

      <h3 style={{ fontSize: "20px", color: "black", marginBottom: "10px" }}>
        {newstitle}
      </h3>

      <p style={{ fontSize: "18px", color: "black", marginBottom: "8px" }}>
        <strong>New Story:</strong> {news}
      </p>
    </div>
  );
};

export default NewsCard;
