import "./footer.css";
// import footer_logo from "../../assets/logo.svg";
import github_logo from "../../assets/github_logo.png";
import linkedin_logo from "../../assets/linkedin_logo.png";
import insta_logo from "../../assets/insta_logo.png";
import theme_pattern from "../../assets/theme_pattern.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="logo-wrapper">
            <span className="logo-text">Branesh</span>
            <img src={theme_pattern} alt="theme_pattern" />
          </div>
          <p>🏢 TerraFinn Technologies, Mumbai.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-logos">
            <a
              href="https://github.com/branesh2k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github_logo} alt="" className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/braneshp24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin_logo} alt="" className="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/ig_blacksoul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta_logo} alt="" className="insta" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Branesh. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
