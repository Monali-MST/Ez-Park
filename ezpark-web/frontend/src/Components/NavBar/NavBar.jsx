import { useRef } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../Assets/logo_without_text.png";
import pointImg from "../../Assets/point_picture.png";
import "../../styles/NavBar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbar-header">
      <header>
        <div>
          <div className="header-details">
            <div className="logo-section">
              <div className="logo-name">
                <span className="yell">EZ </span>
                <span className="blk">Park</span>
              </div>
            </div>
          </div>
        </div>
        <nav ref={navRef}>
          <a href="/">HOME</a>
          <a href="/about">ABOUT US</a>
          <a href="/supoort">SUPPORT</a>
          <a href="/contactus">CONTACT US</a>
          <a href="/login">SIGN IN</a>
          <a href="/signup">SIGN UP</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <Link to="/pointsystem">
          <img
            alt=""
            src={pointImg}
            width="30"
            height="30"
            className="d-inline-block align-center"
          />
        </Link>
      </header>
    </div>
  );
}

export default Navbar;
