import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import baseUrl from "../../Apis/baseUrl";

const ClientRefundRequest = (props) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const today = new Date();
  const date =
    today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate();

  const [request, setrequest] = useState({
    Booking_id: props.bookingid,
    Reason: "",
    Date: date,
  });

  const handleChange = (e) => {
    setrequest((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!request.Booking_id || !request.Reason) {
      alert("Please fill out all fields");
      return;
    }

    try {
      const { status } = await baseUrl.post(
        "/user/cancel_and_refund",
        request
      );
      console.log(status);
    } catch (err) {
      props.onHide();
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Refunds Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontStyle: "italic",
              fontFamily: "Arial, sans-serif",
              fontSize: "20px",
            }}
          >
            <br />
            you are not in the required time duration to get a refund. but you
            can still request a refund.
            <br />
            <br />
          </div>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Reason for the Booking Cancelation:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                onChange={handleChange}
                name="Reason"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a reason.
              </Form.Control.Feedback>
              <Form.Text muted>
                Your Reason must be a reasonable reason to get the refunds. As
                soon as the admin accepts your request, refunds will be
                transfered to your bank account.
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClick}>
            Cancel & Send Request
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ClientRefundRequest;
