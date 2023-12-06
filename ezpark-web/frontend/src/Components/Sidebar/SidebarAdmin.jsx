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
                <a href="/admindashboard/:id" className="menu-btn active">
                  Dashboard
                </a>
              </li>
              <li className="navbar-item">
                <a href="/adminmyaccount/:id" className="menu-btn">
                  Profile
                </a>
              </li>
              <li className="navbar-item">
                <a href="/usermanagement" className="menu-btn">
                  User Managment
                </a>
              </li>
              <li className="navbar-item">
                <a href="/soltmanagement" className="menu-btn">
                  Slot Managemnt
                </a>
              </li>
              <li className="navbar-item">
                <a href="/manualbookingpage" className="menu-btn">
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
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default SidebarAdmin;
