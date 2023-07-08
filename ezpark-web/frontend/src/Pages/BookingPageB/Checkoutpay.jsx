import React from "react";
import CheckoutPayButton from "../../Components/Payment/CheckoutPayButton";
import PaymentDetails from "../../Components/Payment/PaymentDetails";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import { Col, Row } from "react-bootstrap";

const BookingPageb = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="page-container">
        <center>
          <PaymentDetails
            slotPrice={10}
            startTime={"18:30:00"}
            endTime={"20:00:00"}
            bookedDate={"2023-07-20"}
          />
          {/* <CheckoutPayButton /> */}
        </center>
      </div>
    </div>
  );
};

export default BookingPageb;
