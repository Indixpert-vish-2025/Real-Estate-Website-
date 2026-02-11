import propertyImg from "../assets/images/property-1.jpg";

import bedIcon from "../assets/icon/bed.svg";
import bathIcon from "../assets/icon/bath.svg";
import sizeIcon from "../assets/icon/size.svg";
import heartIcon from "../assets/icon/heart.svg";

const PropertySection = ({ title, isFirst }) => {
  return (
    <section className={`property-section ${isFirst ? "first" : ""}`}>
      <div className="container">

        {/* SMALL TOP HEADING */}
        <h2 className="featured-heading">{title}</h2>

        {/* TITLE + ARROWS */}
        <div className="section-header ">
          
          <div className="arrow">← →</div>
        </div>

        {/* PROPERTY GRID */}
        <div className="property-grid">
          {[1, 2, 3].map((item) => (
            <div className="property-card" key={item}>

              {/* IMAGE */}
              <div className="property-img">
                <img src={propertyImg} alt="Property" />
                <span className="fav">
                  <img src={heartIcon} alt="Wishlist" />
                </span>
              </div>

              {/* WHITE OVERLAY CARD */}
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
                    <img src={bathIcon} alt="" /> 2 Baths
                  </span>
                  <span>
                    <img src={bedIcon} alt="" /> 4 Beds
                  </span>
                  <span>
                    <img src={sizeIcon} alt="" /> 2980 sqft
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
