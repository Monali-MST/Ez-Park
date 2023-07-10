import React from "react";
import Header from "../../Components/Header/Header";
import UserBoard from "./UserBoard";
import { Col, Row } from "react-bootstrap";
import "../../styles/UserDashboardPage.css";
import SidebarAdmin from "../../Components/Sidebar/SidebarAdmin";

const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <SidebarAdmin />
      <div className="page-container">
        <UserBoard />
      </div>
    </div>
  );
};

export default AdminDashboard;
