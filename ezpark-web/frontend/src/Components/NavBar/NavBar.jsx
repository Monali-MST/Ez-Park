import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Header from "../../Components/Header/Header";
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
          <Header />
        </div>
        <nav ref={navRef}>
          <a href="/#">HOME</a>
          <a href="/<about">ABOUT US</a>
          <a href="/supoort">SUPPORT</a>
          <a href="/#">CONTACT US</a>
          <a href="/login">SIGN IN</a>
          <a href="/signup">SIGN UP</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
