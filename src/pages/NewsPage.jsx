import React from "react";
import news from "./news.json";
import NewsCard from "../components/NewsCard";

const NewsPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "16px",
        backgroundImage: "url('https://png.pngtree.com/background/20230611/original/pngtree-some-animals-are-at-a-zoo-looking-at-rocks-and-water-picture-image_3168879.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", 
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "black" }}>News im Zoo!</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {news.map((news, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <NewsCard
              newstitle={news.newstitle}
              news={news.news}
              imageUrl={news.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
  };
  
    export default NewsPage;