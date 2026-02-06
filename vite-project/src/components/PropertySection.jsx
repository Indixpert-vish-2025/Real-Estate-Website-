import propertyImg from "../assets/images/property-1.jpg";

import bedIcon from "../assets/icon/bed.svg";
import bathIcon from "../assets/icon/bath.svg";
import sizeIcon from "../assets/icon/size.svg";

const PropertySection = ({ title }) => {
  return (
    <section className="property-section">
      <div className="container">

        <div className="section-header">
          <h3>{title}</h3>
          <div className="arrow">← →</div>
        </div>

        <div className="property-grid">
          {[1, 2, 3].map((item) => (
            <div className="property-card" key={item}>

              {/* IMAGE */}
              <div className="property-img">
                <img src={propertyImg} alt="Property" />
                <span className="fav">❤</span>
              </div>

              {/* OVERLAY CARD */}
              <div className="property-body">
                <div className="property-head">
                  <h4>Hilltruck Valley</h4>
                  <span className="price">$375,000</span>
                </div>

                <p className="location">
                  1187 Lake Forest City, TN
                </p>

                <div className="property-info">
                  <span>
                    <img src={bathIcon} /> 2 Baths
                  </span>
                  <span>
                    <img src={bedIcon} /> 4 Beds
                  </span>
                  <span>
                    <img src={sizeIcon} /> 2980 sqft
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PropertySection;
