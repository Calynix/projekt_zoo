import React from "react";
import tickets from "./tickets.json";
import TicketCard from "../components/TicketCard";

const TicketPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "16px",
        backgroundImage: "url('https://t3.ftcdn.net/jpg/07/73/83/00/360_F_773830001_nk8haVKgKavcmn2ViydKfBKdx5XtdAV6.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "white" }}>Ticketpreise</h2>
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
              description={ticket.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketPage;
