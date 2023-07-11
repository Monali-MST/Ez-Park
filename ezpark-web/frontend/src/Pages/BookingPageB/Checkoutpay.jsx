import React from "react";
import CheckoutPayButton from "../../Components/Payment/CheckoutPayButton";
import PaymentDetails from "../../Components/Payment/PaymentDetails";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import { Col, Row } from "react-bootstrap";
import backgroundImg from "../../Assets/backgroundImg";

const BookingPageb = () => {
  return (
    <div>
      <Header />
      <img
        className="background-pic"
        src={backgroundImg}
        alt="background-img"
        style={{
          marginLeft: "200px",
          position: "absolute",
          width: "85.3vw",
          height: "87.9vh",
        }}
      />
      <Sidebar />

      <div
        className="page-container"
        // style={{ backgroundImage: `url(${backgroundImg})`}}
      >
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
