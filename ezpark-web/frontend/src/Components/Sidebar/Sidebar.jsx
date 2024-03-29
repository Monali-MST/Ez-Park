import React from "react";
import "../../styles/Sidebar.css";
// import { Navbar } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <section>
      <nav className="navsidebar">
        <div className="navbar-container">
          <div className="item-list">
            <ul className="menu">
              <li className="navbar-item">
                <a href="/userdashboard/:id" className="menu-btn active">
                  Dashboard
                </a>
              </li>
              <li className="navbar-item">
                <a href="/myaccount/:id" className="menu-btn">
                  Profile
                </a>
              </li>
              <li className="navbar-item">
                <a href="/bookingpageb" className="menu-btn">
                  Bookings
                </a>
              </li>
              <li className="navbar-item">
                <a href="/cancelbooking" className="menu-btn">
                  My Bookings
                </a>
              </li>
              <li className="navbar-item">
                <a href="/vehicledetails" className="menu-btn">
                  Vehicle Details
                </a>
              </li>
              <li className="navbar-item">
                <a href="/about" className="menu-btn">
                  About Us
                </a>
              </li>
              <li className="navbar-item">
                <a href="/supoort" className="menu-btn">
                  Support
                </a>
              </li>
              <li className="navbar-item">
                <a href="/rating" className="menu-btn">
                  Review & Rating
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Sidebar;
