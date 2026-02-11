import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AddListing = () => {
  return (
    <>
      <Navbar />

      <div style={{ background: "#f5f5f5", padding: "40px 0" }}>
        <div className="container">

          {/* ================= Add A Listing ================= */}
          <div className="listing-card">
            <h3>Add A Listing</h3>

            <div className="form-row">
              <select>
                <option>Select Property Type</option>
              </select>

              <select>
                <option>Select Plan</option>
              </select>

              <button className="primary-btn">View Plans Charts</button>
            </div>

            <textarea placeholder="Description"></textarea>
          </div>

          {/* ================= Common ================= */}
          <div className="listing-card">
            <h3>Common</h3>

            <div className="form-grid">
              <input placeholder="Title" />
              <input placeholder="Price" />
              <input placeholder="Bedrooms" />
              <input placeholder="Bathrooms" />
              <input placeholder="Built Area" />
              <input placeholder="Year of Construction" />
            </div>
          </div>

          
<div className="listing-card">
  <h3>Location</h3>

  <div className="location-grid">

  
    <div className="map-box">
      <img src="/src/assets/images/map.jpg" alt="Map" />
    </div>


    <div className="form-grid">
      <input placeholder="Country" />
      <input placeholder="State / Region" />
      <input placeholder="City" />
      <input placeholder="Address" />
      <input placeholder="ZIP Code" />
      <input placeholder="Phone Number" />
    </div>

  </div>
</div>


          {/* ================= Additional Info ================= */}
          <div className="listing-card">
            <h3>Additional Information</h3>

            <div className="checkbox-grid">
              <label><input type="checkbox" /> Swimming Pool</label>
              <label><input type="checkbox" /> Lift</label>
              <label><input type="checkbox" /> Garden</label>
              <label><input type="checkbox" /> Terrace</label>
              <label><input type="checkbox" /> Air Conditioning</label>
              <label><input type="checkbox" /> Storage Room</label>
            </div>
          </div>

          {/* ================= Authorization ================= */}
          <div className="listing-card">
            <h3>Authorization</h3>

            <div className="form-grid">
              <input placeholder="Full Name" />
              <input placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input placeholder="Phone" />
            </div>

            <button className="primary-btn" style={{ marginTop: "20px" }}>
              Publish Listing
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddListing;
