const SearchTools = () => {
  return (
    <section className="search-tools">
      <div className="container">

        <div className="tools-grid">

          {/* Card 1 */}
          <div className="tool-card">
            <h3>Search By Distance</h3>

            <select>
              <option>Span</option>
            </select>

            <div className="row">
              <select>
                <option>KM</option>
              </select>
              <input type="text" placeholder="Distance" />
            </div>

            <button className="primary-btn">Search</button>
          </div>

          {/* Card 2 */}
          <div className="tool-card">
            <h3>Search By Reservation</h3>

            <select>
              <option>Property</option>
            </select>

            <div className="row">
              <input type="text" placeholder="Check In" />
              <input type="text" placeholder="Check Out" />
            </div>

            <button className="primary-btn">Search</button>
          </div>

          {/* Card 3 */}
          <div className="tool-card">
            <h3>Search By ReferenceNumber</h3>

            <input type="text" placeholder="References Number" />

            <button className="primary-btn">Search</button>
          </div>

          {/* Card 4 */}
          <div className="tool-card highlight">
            <h3>Publishing Your Listing For Free</h3>
            <p>
              Everything you need for a professional listing. <br />
              is right here and there are no limits!
            </p>

            <button className="primary-btn">
              Add Your Listing For Free
            </button>
          </div>

        </div>

        {/* Bottom Button */}
        <div className="map-btn-wrap">
          <button className="map-btn">Draw Area on Map</button>
        </div>

      </div>
    </section>
  );
};

export default SearchTools;
