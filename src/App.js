import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AnimalProfile from './pages/AnimalProfiles';
import TicketPrices from './pages/TicketPrices';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/animal/:id" component={AnimalProfile} />
          <Route path="/ticket-prices" component={TicketPrices} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
