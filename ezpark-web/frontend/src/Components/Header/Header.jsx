import React from "react";
import Logo from "../../Assets/logo_without_text.png";
import "../../styles/Header.css";
import { getUser } from "../../helper/getUser";

export default function Header() {
  const { name } = getUser();
  const { type } = getUser();

  const getPageName = () => {
    const path = window.location.pathname;
    const pageName = path.substring(1); // Remove leading "/"
    if (pageName === "showbadge") {
      return "User Profile";
    }
    if (pageName === "bookingpageb") {
      return "User Booking";
    }
    if (pageName === "cancelbooking") {
      return "My Bookings";
    }
    if (pageName === "refundpage") {
      return "Cancel Booking";
    }
    if (pageName === "discountsettings") {
      return "Discount Settings";
    }
    if (pageName === "adminrefundrequest") {
      return "Refund Requests View";
    }
    return pageName || "Home"; // Default to "Home" if no page name found
  };

  const pageName = getPageName();

  return (
    <div className="header-details">
      <header>
        <div className="logo-section">
          <div className="logo-img">
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <div className="logo-name">
            <span className="yell">EZ </span>
            <span className="blk">Park</span>
          </div>
        </div>
        <div className="page-name">{pageName}</div>
        <div className="current-user">
          {name}
          {/* <div className="user-type">- {type}</div> */}
        </div>
      </header>
    </div>
  );
}
