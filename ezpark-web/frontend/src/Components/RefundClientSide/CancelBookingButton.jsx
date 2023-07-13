import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const CancelBookingButton = () => {
  const [show, setShow] = useState(false);
  const [button, setButton] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (button) => {
    setButton(button);
    setShow(true);
  };

  const navigate = useNavigate();

  const bookingData1 = {
    BookingID: 140,
    BookedDate: "2023-07-16",
    StartTime: "10:07:00",
    EndTime: "16:00:00",
    VehicleNo: "CBJ5566",
    BookingMethod: "online",
    slot: 8,
    user_email: "monalithennakoon2@gmail.com",
  };

  const bookingData2 = {
    BookingID: 141,
    BookedDate: "2023-07-21",
    StartTime: "10:07:00",
    EndTime: "12:00:00",
    VehicleNo: "WBJ5566",
    BookingMethod: "online",
    slot: 8,
    user_email: "monalithennakoon2@gmail.com",
  };

  const handleClick = () => {
    const bookingData = button === 1 ? bookingData1 : bookingData2;
    navigate("/refundpage", { state: bookingData });
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="page-container">
        <Button
          className="m-4 center"
          variant="primary"
          onClick={() => handleShow(1)}
        >
          Cancel Booking
        </Button>
        <hr />
        <Button
          className="m-4 center"
          variant="primary"
          onClick={() => handleShow(2)}
        >
          Cancel Booking
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Cancellation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Would you like to continue with canceling your booking?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClick}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CancelBookingButton;
