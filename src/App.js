import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketPage from "./pages/TicketPrices";
import AnimalProfilePage from "./pages/AnimalProfiles";
import NewsPage from "./pages/NewsPage";
import Header from "./components/Header"; 
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Welcome to the Zoo!</h2>} />
        <Route path="/tickets" element={<TicketPage />} />
        <Route path="/animals" element={<AnimalProfilePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
