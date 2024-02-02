import "./footer.css";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";

const Footer = ({ languages, currencies }) => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="section selection">
          <label htmlFor="language">Language</label>
          <select name="language" id="language">
            {languages.map((e) => {
              return <option key={e.id}>{e.value} </option>;
            })}
          </select>
          <label htmlFor="currency">Currency</label>
          <select name="currency" id="currency">
            {currencies.map((e) => {
              return <option key={e.id}>{e.value} </option>;
            })}
          </select>
        </div>
        <div className="section">
          <h3>Support</h3>
          <ul>
            <li>Contact</li>
            <li>Legal Notice</li>
            <li>Privacy Policy</li>
            <li>General Terms</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Gift Cards</li>
            <li>Magazine</li>
            <li>Travel Guides</li>
          </ul>
        </div>
        <div className="section">
          <h3>Work With Us</h3>
          <ul>
            <li>Become a Supplier</li>
            <li>Become an Affiliate Partner</li>
            <li>
              <ul className="social-media">
                <li>
                  <img src={instagram} alt="instagram" />
                </li>
                <li>
                  <img src={facebook} alt="facebook" />
                </li>
                <li>
                  <img src={twitter} alt="twitter" />
                </li>
                <li>
                  <img src={linkedin} alt="linkedin" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy-right">Copyright &copy; 2024 Dubai Safari</div>
    </footer>
  );
};

export default Footer;
