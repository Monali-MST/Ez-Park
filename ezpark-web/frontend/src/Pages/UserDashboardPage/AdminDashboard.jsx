import React from "react";
import UserBoard from "./UserBoard";
import { Col, Row } from "react-bootstrap";
import "../../styles/UserDashboardPage.css";
import SidebarAdmin from "../../Components/Sidebar/SidebarAdmin";
import AdminHeader from "../../Components/Header/AdminHeader";

const AdminDashboard = () => {
  return (
    <div>
      <AdminHeader />
      <SidebarAdmin />
      <div className="page-container">
        <UserBoard />
      </div>
    </div>
  );
};

export default AdminDashboard;
