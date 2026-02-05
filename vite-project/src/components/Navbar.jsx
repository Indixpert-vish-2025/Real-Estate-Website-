import logo from "../assets/logo/myhousinghunt-logo.png";
import menuIcon from "../assets/icon/menu.svg";
import addListingIcon from "../assets/icon/add-listing.svg";

const Navbar = () => {
  return (
    <header style={{ background: "var(--primary)" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "72px",
        }}
      >
        {/* LEFT : LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={logo} alt="MyHousingHunt" height="40" />
        </div>

        {/* RIGHT : MENU + ADD LISTING */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          
          {/* Menu */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            <img src={menuIcon} alt="Menu" height="18" />
            <span>Menu</span>
          </div>

          {/* Add Listing */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "#fff",
              color: "var(--primary)",
              border: "none",
              padding: "6px 14px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            <img src={addListingIcon} alt="Add Listing" height="14" />
            Add Listing
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
