import { useState } from "react";

const HeroSearch = () => {
  const [type, setType] = useState("Buy");
  const [homeType, setHomeType] = useState("Home");
  const [query, setQuery] = useState("");

  return (
    <section className="hero-search">
      <div className="container">
        <h1>SEARCH ANYWHERE</h1>

        <div className="search-box">
          {/* Buy / Rent */}
          <div className="toggle">
            <button
              className={type === "Buy" ? "active" : ""}
              onClick={() => setType("Buy")}
            >
              Buy
            </button>
            <button
              className={type === "Rent" ? "active" : ""}
              onClick={() => setType("Rent")}
            >
              Rent
            </button>
          </div>

          {/* Dropdown */}
          <select
            value={homeType}
            onChange={(e) => setHomeType(e.target.value)}
          >
            <option>Home</option>
            <option>Apartment</option>
            <option>Villa</option>
          </select>

          {/* Search input */}
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

         
          <button className="search-btn">Search</button>

         
          <div className="last-search">
            Your last Search: <span>Homes in marbella malaga</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
