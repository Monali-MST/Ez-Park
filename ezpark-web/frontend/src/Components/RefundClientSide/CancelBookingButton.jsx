import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CancelBookingButton = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const bookingData = {
    BookingID: 1,
    BookedDate: "2023-07-01",
    StartTime: "10:07:00",
    EndTime: "16:00:00",
    VehicleNo: "CBJ5566",
    BookingMethod: "online",
    slot: 8,
    user_email: "pramoddilshan470@gmail.com",
  };
  const handleClick = () => {
    navigate("/refundpage", { state: bookingData });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cancel Booking
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Cancellation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Would you like to continue with cancel your booking?
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
    </>
  );
};

export default CancelBookingButton;
