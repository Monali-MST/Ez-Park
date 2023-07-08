import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import UserBoard from "./UserBoard";
import { Col, Row } from "react-bootstrap";
import "../../styles/UserDashboardPage.css";

const UserDashboard = () => {
  return (
    <div>
      <Header />
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <UserBoard />
        </Col>
      </Row>
    </div>
  );
};

export default UserDashboard;
