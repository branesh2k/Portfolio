import "./navbar.css";
// import logo from "../../assets/logo.svg";
import nav_underline from "../../assets/nav_underline.svg";
import { Link, useLocation } from "react-router-dom";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef, useState } from "react";
import theme_pattern from "../../assets/theme_pattern.svg";

const getMenuFromPath = (path: string) => {
  switch (path) {
    case "/":
      return "home";
    case "/about":
      return "about";
    case "/projects":
      return "projects";
    case "/contact":
      return "contact";
    default:
      return "";
  }
};

const Navbar = () => {
  const { pathname } = useLocation();
  const activePath = getMenuFromPath(pathname);

  const menuRef = useRef<HTMLUListElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
    setMenuOpen(true);
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logo-wrapper">
        <Link to="/" className="logo-text">
          Branesh
        </Link>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      {!menuOpen && (
        <img
          src={menu_open}
          onClick={openMenu}
          alt=""
          className="nav-mob-open"
        />
      )}
      <ul ref={menuRef} className="nav-menu">
        {menuOpen && (
          <img
            src={menu_close}
            onClick={closeMenu}
            alt=""
            className="nav-mob-close"
          />
        )}
        <li>
          <Link className="link-button" to="/" onClick={closeMenu}>
            Home
          </Link>
          {activePath === "home" ? (
            <img src={nav_underline} alt="" style={{ width: "30px" }} />
          ) : (
            <></>
          )}
        </li>
        <li>
          <Link className="link-button" to="/about" onClick={closeMenu}>
            About Me
          </Link>
          {activePath === "about" ? (
            <img src={nav_underline} alt="" style={{ width: "30px" }} />
          ) : (
            <></>
          )}
        </li>
        <li>
          <Link className="link-button" to="/projects" onClick={closeMenu}>
            Projects
          </Link>
          {activePath === "projects" ? (
            <img src={nav_underline} alt="" style={{ width: "30px" }} />
          ) : (
            <></>
          )}
        </li>
        {/* <li>
            <Link className="link-button" to="/works"> Works </Link>{" "}

          {activePath === "works" ? <img src={nav_underline} alt="" /> : <></>}
        </li> */}
        <li>
          <Link className="link-button" to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          {activePath === "contact" ? (
            <img src={nav_underline} alt="" style={{ width: "30px" }} />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <Link className="contact-link-button nav-connect" to="/contact">
        Connect with Me
      </Link>
    </div>
  );
};

export default Navbar;
