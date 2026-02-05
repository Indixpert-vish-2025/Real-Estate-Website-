import { useState } from "react";

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
    <div
      style={{
        background: "#f7f7f7",
        borderBottom: "1px solid #eee",
        color: "var(--primary)", 
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "42px",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
        {/* LEFT */}
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <img src={langIcon} alt="Language" height="14" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={selectStyle}
            >
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <img src={locationIcon} alt="Location" height="14" />
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={selectStyle}
            >
              <option>Marbella</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>
          </div>

          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <img src={currencyIcon} alt="Currency" height="14" />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={selectStyle}
            >
              <option>EUR</option>
              <option>INR</option>
              <option>USD</option>
            </select>
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            alignItems: "center",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          <img src={userIcon} alt="User" height="14" />
          <span>Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
