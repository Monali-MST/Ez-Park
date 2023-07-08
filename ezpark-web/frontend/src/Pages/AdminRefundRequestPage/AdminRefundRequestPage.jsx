import React from "react";
import AdminRefundRequest from '../../Components/RefundAdminSide/AdminRefundRequest';
import Header from "../../Components/Header/Header";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar/Sidebar";

const AdminRefundRequestPage = () => {
  return (

    <div>

<Header />
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
        <AdminRefundRequest />
        </Col>
      </Row>
     
    </div>
  );
};

export default AdminRefundRequestPage;
