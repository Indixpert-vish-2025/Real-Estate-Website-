import logo from "../assets/logo/myhousinghunt-logo-2.png";
import appDownload from "../assets/icon/app-download.png";
import currencyIcon from "../assets/icon/currency.svg";
import languageIcon from "../assets/icon/language.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Column 1 */}
        <div>
          <img src={logo} className="footer-logo" />
          <ul>
            <li>About Us</li>
            <li>Press Room</li>
            <li>Work with Us</li>
            <li>Market Analytics</li>
            <li>Professional Features</li>
            <li>News</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4>Help</h4>
          <ul>
            <li>Frequently asked question (FAQ)</li>
            <li>Contact MyHouseHunt</li>
            <li>Privacy</li>
            <li>Cookies Policy</li>
            <li>General Conditions</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4>Search</h4>
          <ul>
            <li>Search By Distance</li>
            <li>Search On Map</li>
            <li>Specify Search</li>
            <li>Search For Reservations</li>
            <li>Search By Reference Number</li>
          </ul>
        </div>

        {/* Column 4 — RIGHT SIDE */}
        <div className="footer-app">

          {/* icons row */}
          <div className="footer-select-icons">
            <div className="footer-select">
              <img src={currencyIcon} />
              <span>EUR</span>
            </div>

            <div className="footer-select">
              <img src={languageIcon} />
              <span>English</span>
            </div>
          </div>

          <h4>Get The App</h4>

          <img
            src={appDownload}
            alt="Download App"
            className="app-download"
          />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
