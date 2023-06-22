import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import baseUrl from "../../Apis/baseUrl";
import Button from "react-bootstrap/Button";
import "../../styles/refund.css";
import ClientRefundRequest from "./ClientRefundRequest";
import SharedToast from "../../helper/SharedToast";

const Refund = () => {
  const [showToast, setShowToast] = useState(false);

  const location = useLocation();
  const bookingData = location.state;
  const [payamount, setPayamount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [action, setAction] = useState(0);

  const [modalShow, setModalShow] = useState(false);

  function getDuration() {
    const bookday = new Date(bookingData.BookedDate);
    const today = new Date();

    const bDate =
      bookday.getFullYear() +
      "-" +
      (bookday.getMonth() + 1) +
      "-" +
      bookday.getDate();
    const tDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    const BookingDate = new Date(bDate);
    const CurrentDate = new Date(tDate);

    // Calculate the difference in milliseconds
    const durationInMs = BookingDate.getTime() - CurrentDate.getTime();

    // Convert milliseconds to days
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const durationInDays = Math.floor(durationInMs / millisecondsInADay);

    console.log("Duration in days:", durationInDays);
    return durationInDays;
  }

  const ShowModel = () => {
    if (action === 1) {
      return <div></div>;
    } else if (action === 2) {
      return <div></div>;
    } else if (action === 3) {
      return (
        <ClientRefundRequest
          bookingid={bookingData.BookingID}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      );
    } else {
      return <div></div>;
    }
  };

  useEffect(() => {
    async function getamount() {
      try {
        baseUrl
          .post("/user/get_paid_amount", { Booking_id: bookingData.BookingID })
          .then((res) => {
            setPayamount(res.data.PaymentAmount);
          });
      } catch (err) {
        console.log(err);
      }
    }
    getamount();
    setDuration(getDuration());
  }, []);

  async function handleCancelBook() {
    try {
      const { status } = await baseUrl.post("/user/save_cancel_booking", {
        Booking_id: bookingData.BookingID,
      });
      if (status === 201) {
        console.log("Booking canceled successfully");
      }
      setShowToast(!showToast);
      //window.history.back();
    } catch (err) {
      alert("Something went wrong.");
    }
  }
  async function handleCancelAndRefund() {
    try {
      const { status } = await baseUrl.post("/user/cancel_and_refund", {
        Booking_id: bookingData.BookingID,
        amount: duration >= 3 ? (duration >= 5 ? payamount : payamount / 2) : 0,
        redundLevel: duration >= 3 ? (duration >= 5 ? 1 : 2) : 3
      });
      if (status === 201) {
        console.log("Refunded and Booking canceled successfully");
      }
      setShowToast(!showToast);
      window.history.back();
    } catch (err) {
      alert("Something went wrong.");
    }
  }
  return (
    <div className="container p-5" style={{ maxWidth: "800px" }}>
      <h1 style={{ fontFamily: "Arial, sans-serif" }}>Cancel Booking</h1>
      <table className="table refund-table" style={{ borderRadius: "8px" }}>
        <tbody>
          <tr>
            <th>Booking ID:</th>
            <td>{bookingData.BookingID}</td>
          </tr>
          <tr>
            <th>Booked Date:</th>
            <td>{bookingData.BookedDate}</td>
          </tr>
          <tr>
            <th>Start Time:</th>
            <td>{bookingData.StartTime}</td>
          </tr>
          <tr>
            <th>End Time:</th>
            <td>{bookingData.EndTime}</td>
          </tr>
          <tr>
            <th>Vehicle No:</th>
            <td>{bookingData.VehicleNo}</td>
          </tr>
          <tr>
            <th>Booking Method:</th>
            <td>{bookingData.BookingMethod}</td>
          </tr>
          <tr>
            <th>Slot:</th>
            <td>{bookingData.slot}</td>
          </tr>
          <tr>
            <th>User Email:</th>
            <td>{bookingData.user_email}</td>
          </tr>
        </tbody>
      </table>
      <table
        className="table refund-table"
        style={{ borderRadius: "8px", marginTop: "2.5rem" }}
      >
        <tbody>
          <tr>
            <th>Paid Amount:</th>
            <td>{payamount}</td>
          </tr>
          <tr>
            <th>Refund Level:</th>
            <td>
              {duration >= 3
                ? duration >= 5
                  ? "Fully Refund"
                  : "Partially Refund"
                : "No Refund"}
            </td>
          </tr>
          <tr>
            <th>Refund:</th>
            <td>
              {duration >= 3
                ? duration >= 5
                  ? `${payamount}`
                  : `${payamount / 2}`
                : 0}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="action-btns">
        {duration >= 3 ? (
          <Button
            variant="warning"
            onClick={() => {
              setAction(1);
              handleCancelAndRefund();
            }}
          >
            Cancel Booking and Refund
          </Button>
        ) : (
          <div>
            <Button
              variant="warning"
              onClick={() => {
                setAction(2);
                handleCancelBook();
              }}
            >
              Cancel Booking
            </Button>
            <Button
              variant="warning"
              onClick={() => {
                setAction(3);
                setModalShow(true);
              }}
            >
              Cancel & Refund Request
            </Button>
          </div>
        )}
      </div>
      <ShowModel />
      {showToast ? (
        <SharedToast
          title="Cancel Booking"
          description="Booking has canceled successfully!"
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

export default Refund;
