import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to the Zoo!</h1>
        <nav>
          <ul className="dropdown-nav">
            <li className="dropdown">
              <button className="dropbtn">Categories</button>
              <div className="dropdown-content">
                <Link to="/animal-profiles">Animal Profiles</Link>
                <Link to="/zoo-news">Zoo News</Link>
                <Link to="/ticket-prices">Ticket Prices</Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <section className="home-content">
        <p>Explore a variety of animals, read the latest zoo news, and learn about ticket prices!</p>
      </section>
    </div>
  );
}

export default HomePage;
