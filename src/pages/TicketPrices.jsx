import React from "react";
import tickets from "./tickets.json"; 
import TicketCard from "../components/TicketCard";

const TicketPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "16px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Ticketpreise</h2>
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
          <div key={index} style={{ marginBottom: "20px" }}> {/* Added space between the cards */}
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
