import React from "react";
import Logo from "../../Assets/logo_without_text.png";
import pointImg from "../../Assets/point_picture.png";
import "../../styles/Header.css";
import { getUser, getUserAdmin } from "../../helper/getUser";

export default function Header() {
  const pageNameMap = {
    showbadge: "User Profile",
    bookingpageb: "User Booking",
    cancelbooking: "My Bookings",
    refundpage: "Cancel Booking",
    discountsettings: "Discount Settings",
    adminrefundrequest: "Refund Requests View"
  };

  const userMap = {
    showbadge: getUser,
    bookingpageb: getUser,
    cancelbooking: getUser,
    refundpage: getUser,
    discountsettings: getUserAdmin,
    adminrefundrequest: getUserAdmin
  };

  const getCurrentUser = () => {
    const path = window.location.pathname.substring(1);
    const userFn = userMap[path] || getUser; // Default to getUser if no mapping found
    return userFn();
  };

  const getPageName = () => {
    const path = window.location.pathname.substring(1);
    return pageNameMap[path] || path || "Home"; // Default to "Home" if no mapping found
  };

  const pageName = getPageName();
  const user = getCurrentUser();

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
          <a href="/showbadge">{user.name}</a>
          <a href="/pointsystem">
            <img
              alt=""
              src={pointImg}
              width="40"
              height="35"
              className="d-inline-block align-center pointimg"
            />
          </a>
          <div className="user-type">{user.type}</div>
        </div>
      </header>
    </div>
  );
}
