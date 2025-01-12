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
          "url('https://t4.ftcdn.net/jpg/01/34/09/39/360_F_134093991_0YDT4XoEbiFONVRGMz79n6PKJv1KpAFg.jpg')",
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
              additionalInfo={ticket.additionalInfo} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketPage;
