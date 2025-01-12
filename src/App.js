import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketPage from "./pages/TicketPrices";
import AnimalProfilePage from "./pages/AnimalProfiles";
import HomePage from "./pages/HomePage"; 
import Header from "./components/Header"; 

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/tickets" element={<TicketPage />} />
        <Route path="/animals" element={<AnimalProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
