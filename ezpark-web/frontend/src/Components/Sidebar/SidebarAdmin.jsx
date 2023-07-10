import React from "react";
import "../../styles/Sidebar.css";
// import { Navbar } from 'react-bootstrap';

const SidebarAdmin = () => {
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
                  Manual Booking
                </a>
              </li>
              <li className="navbar-item">
                <a href="/adminrefundrequest" className="menu-btn">
                  Refund Requests
                </a>
              </li>
              <li className="navbar-item">
                <a href="/discountsettings" className="menu-btn">
                  Discount Settings
                </a>
              </li>
              <li className="navbar-item">
                <a href="/staticalview" className="menu-btn">
                  Statical View
                </a>
              </li>
              <li className="navbar-item">
                <a href="/about" className="menu-btn">
                  About
                </a>
              </li>
              <li className="navbar-item">
                <a href="/supoort" className="menu-btn">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default SidebarAdmin;
