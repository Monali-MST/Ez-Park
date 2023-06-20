import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SharedToast from "../../helper/SharedToast";
import baseUrl from "../../Apis/baseUrl";

const AdminRefundRequest = () => {
  const [showR, setShowR] = useState(false);
  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);

  const [showA, setShowA] = useState(false);
  const handleCloseA = () => setShowA(false);
  const handleShowA = () => setShowA(true);

  const [toastShow, setToastShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [requests, setRequests] = useState([]);
  const [id, setId] = useState();
  const [bookingId, setBookingId] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    const fetchAllRequests = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/user/get_refund_request"
        );
        setRequests(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllRequests();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        "http://localhost:8800/api/user/reject_refund_request" + id
      );
      setToastShow(!toastShow);
      //window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Something went wrong while deleting requests.");
    }
  };
  async function handleAcceptRefund() {
    try {
      const { status } = await baseUrl.post("/user/refund_and_save_refund_details", {
        Booking_id: bookingId,
        amount: amount,
        redundLevel: 2
      });
      if (status === 201) {
        console.log("Refunded successfully");
      }
      setShowToast(!showToast);
      //window.history.reload();
    } catch (err) {
      alert("Something went wrong while refunding.");
    }
  }

  const ModelReject = () => {
    return (
      <Modal
        show={showR}
        onHide={handleCloseR}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Refund Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this Refund Request?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseR}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete(id);
              handleCloseR();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const ModelAccept = () => {
    return (
      <Modal
        show={showA}
        onHide={handleCloseA}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Accept Refund Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          50% of the paid amount will be Refunded. Are you sure you want to
          Accept this Refund Request?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseA}>
            Close
          </Button>
          <Button
            variant="warning"
            onClick={() => {
              handleAcceptRefund();
              handleCloseA();
            }}
          >
            Refund
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className="Refund-requests">
      <Accordion defaultActiveKey={0}>
        {requests.map((request, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>
              Refund Request #{request.Refund_Request_id}
            </Accordion.Header>
            <Accordion.Body>
              <b>Reason :</b>
              <p>{request.Reason}</p>
              <b>Booking ID :</b>
              <p>{request.Booking_id}</p>
              <b>Requested Date :</b>
              <p>{new Date(request.Requested_date).toDateString()}</p>
              <b>Paid Amount :</b>
              <p>$ {request.PaymentAmount}</p>
              <Button
                variant="danger"
                onClick={() => {
                  handleShowR();
                  setId(request.Refund_Request_id);
                }}
              >
                Reject Reqest
              </Button>{" "}
              <Button
                variant="warning"
                onClick={() => {
                  handleShowA();
                  setBookingId(request.Booking_id);
                  setAmount(request.PaymentAmount / 2);
                }}
              >
                Accept Refund
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <ModelReject />
      <ModelAccept />
      {toastShow ? (
        <SharedToast
          title="Reject Refund Request"
          description="Refunded successfully!"
          show={toastShow}
          onHide={() => {
            setToastShow(false);
          }}
        />
      ) : (
        <div></div>
      )}
      {showToast ? (
        <SharedToast
          title="Accept Refund Request"
          description="Refunded successfully!"
          show={showToast}
          onHide={() => {
            setShowToast(false);
          }}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AdminRefundRequest;
