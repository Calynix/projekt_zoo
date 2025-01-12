import React from 'react';

function HomePage() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <header style={{ textAlign: "center" }}>
        <img 
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }} 
          src="https://zoo-live.rokka.io/header_half_md_1x/66a4e1002b74d1cd71493ae16ceb6c7b4e196fbb/0014359.jpg?h=8f9c3751&itok=bdvJ2iQ-" 
          alt="Zoo Header" 
        />
      </header>
      <h1 style={{
        fontSize: "36px",
        fontWeight: "bold",
        color: "#000",
        marginTop: "20px",  
        textAlign: "center",  
      }}>
        Wilkommen im Zoo Zürich!
      </h1>
    </div>
  );
}

export default HomePage;
