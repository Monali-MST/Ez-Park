import React from "react";
import AdminRefundRequest from "../../Components/RefundAdminSide/AdminRefundRequest";
import Header from "../../Components/Header/Header";
import "../../styles/PageContainer.css";
import SidebarAdmin from "../../Components/Sidebar/SidebarAdmin";
import AdminHeader from "../../Components/Header/AdminHeader";

const AdminRefundRequestPage = () => {
  return (
    <div>
      <AdminHeader />
      <SidebarAdmin />
      <div className="page-container">
        <AdminRefundRequest />
      </div>
    </div>
  );
};

export default AdminRefundRequestPage;
