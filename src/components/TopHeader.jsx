import { useState } from "react";
import { Link } from "react-router-dom";

import langIcon from "../assets/icon/language.svg";
import locationIcon from "../assets/icon/location.svg";
import currencyIcon from "../assets/icon/currency.svg";
import userIcon from "../assets/icon/user.svg";

const TopHeader = () => {
  const [language, setLanguage] = useState("English");
  const [city, setCity] = useState("Marbella");
  const [currency, setCurrency] = useState("EUR");

  const selectStyle = {
    color: "var(--primary)",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "14px",
  };

  return (
    <div style={{ background: "#f7f7f7", borderBottom: "1px solid #eee" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "42px",
          alignItems: "center",
          fontSize: "14px",
          color: "var(--primary)",
        }}
      >
        {/* LEFT */}
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <img src={langIcon} height="14" />
            <select value={language} onChange={(e) => setLanguage(e.target.value)} style={selectStyle}>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <img src={locationIcon} height="14" />
            <select value={city} onChange={(e) => setCity(e.target.value)} style={selectStyle}>
              <option>Marbella</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>
          </div>

          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <img src={currencyIcon} height="14" />
            <select value={currency} onChange={(e) => setCurrency(e.target.value)} style={selectStyle}>
              <option>EUR</option>
              <option>INR</option>
              <option>USD</option>
            </select>
          </div>
        </div>

        {/* RIGHT */}
        <Link
  to="/signin"
  className="signin-hover"
  style={{
    display: "flex",
    gap: "6px",
    alignItems: "center",
    fontWeight: 600,
    textDecoration: "none",
  }}
>
  <img src={userIcon} height="14" />
  Sign In
</Link>

      </div>
    </div>
  );
};

export default TopHeader;
