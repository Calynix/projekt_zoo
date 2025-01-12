import React from "react";
import tickets from "./tickets.json";
import TicketCard from "../components/TicketCard";

const TicketPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "16px",
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fw800/background/20240522/pngtree-a-view-of-chester-zoo-image_15680393.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "black" }}>Ticketpreise</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {tickets.map((ticket, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <TicketCard
              name={ticket.name}
              price={ticket.price}
              additionalInfo={ticket.additionalInfo} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketPage;
