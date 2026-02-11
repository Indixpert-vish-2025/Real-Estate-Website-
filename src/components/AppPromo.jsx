import phoneImg from "../assets/images/mobile-app.png";
import googlePlay from "../assets/icon/google-play.svg";
import appleStore from "../assets/icon/apple-store.svg";

const AppPromo = () => {
  return (
    <section className="app-promo">
      <div className="container app-promo-grid">

        {/* LEFT CONTENT */}
        <div className="app-promo-content">
          <h2>
            Buy or sell property anytime <br />
            from anywhere
          </h2>

          <p>
            There are many variations of passages of Lorem Ipsum available
            but the majority have suffered alteration in some form by
            injected humour.
          </p>

          <div className="store-buttons">
            <img src={googlePlay} alt="Google Play" />
            <img src={appleStore} alt="Apple Store" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="app-promo-image">
          <img src={phoneImg} alt="Mobile App" />
        </div>

      </div>
    </section>
  );
};

export default AppPromo;
