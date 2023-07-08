import React from "react";
import AdminRefundRequest from "../../Components/RefundAdminSide/AdminRefundRequest";
import Header from "../../Components/Header/Header";
import "../../styles/PageContainer.css";
import Sidebar from "../../Components/Sidebar/Sidebar";

const AdminRefundRequestPage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="page-container">
        <AdminRefundRequest />
      </div>
    </div>
  );
};

export default AdminRefundRequestPage;
