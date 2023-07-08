import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import checkmarkImage from "../../Assets/pay_success_pic.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sendMail } from "../../helper/helper";
import { getUser } from "../../helper/getUser";
import ReactToPrint from "react-to-print";

const SuccessPay = () => {
  //const data = load_localStorage(localStorage_keys.temp_payment);
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const componentRef = useRef();
  const navigate = useNavigate();
  const [billingInfo, setBillingInfo] = useState({
    // billNo: 1,
    user_id: getUser().id,
    action_id: 2,
    hours: 6,
    amount: new URLSearchParams(window.location.search).get("amount") / 100,
    date: date,
    time: time,
    bookingId: 1,
    slotName: "12 C",
    email: new URLSearchParams(window.location.search).get("email"),
    payment_intent_id: new URLSearchParams(window.location.search).get(
      "payment_intent"
    ),
    startTime: localStorage.getItem("startTime"),
    endTime: localStorage.getItem("endTime"),
    bookedDate: localStorage.getItem("bookedDate"),
  });

  useEffect(() => {
    console.log(billingInfo.payment_intent_id);

    try {
      axios
        .post(
          "http://localhost:8800/api/user/save_payment_details",
          billingInfo
        )
        .then(async (res) => {
          console.log(res.data);
          if (res.data.errno) {
            navigate("/");
            // alert("Something went wrong")
          } else {
            console.log(billingInfo.duration);
            const text = [
              `Thank you for booking the slot :'${billingInfo.slotName}' with EzPark`,
              `You have paid ${billingInfo.amount} USD for your booking`,
              `You can park your vehicle on ${billingInfo.bookedDate} from  ${billingInfo.startTime} to ${billingInfo.endTime}.`,
              ``,
              `This booking has been suceeded at ${billingInfo.time} on ${billingInfo.date}. `,
              `For future reference, use ${billingInfo.bookingId} as your booking ID.`,
            ];

            sendMail(
              billingInfo.email,
              billingInfo.email,
              text,
              "Successfully booked a slot"
            );
          }
          // console.log("locally stoerd");
        })
        .catch((err) => {
          alert("Something went wrong");
        });
    } catch (err) {
      navigate("/");
      console.log(err);
    }
  }, []);

  return (
    <div>
      <div ref={componentRef} className=" text-center">
        <Row className="justify-content-center">
          <Col md={6} className="bg-white px-5">
            <Image
              src={checkmarkImage}
              width={130}
              height={130}
              className="mb-3"
            />
            <h1 className="mb-3 text-dark">Payment Successful</h1>
            <p className="lead mb-4 text-dark">
              Thank you for your purchase! Your order will be processed and
              shipped shortly.
            </p>

            <div className="bg-light p-3 rounded mb-3 ">
              <p className="m-1">
                <strong>Amount:</strong> {billingInfo.amount} USD
              </p>
              <p className="m-1">
                <strong>Date:</strong> {billingInfo.date}
              </p>
              <p className="m-1">
                <strong>Time:</strong> {billingInfo.time}
              </p>
              <p className="m-1">
                <strong>Booking ID:</strong> {billingInfo.bookingId}
              </p>
              <p className="m-1">
                <strong>Slot Number:</strong> {billingInfo.slotName}
              </p>
              <p className="m-1">
                <strong>Booking Start time:</strong> {billingInfo.startTime}
              </p>
              <p className="m-1">
                <strong>Booking End time:</strong> {billingInfo.endTime}
              </p>
              <p className="m-1">
                <strong>Booked Date:</strong> {billingInfo.bookedDate}
              </p>
              <p className="m-1">
                <strong>Email:</strong> {billingInfo.email}
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className=" text-center">
        <Row className="justify-content-center">
          <Col md={6} className="bg-white">
            <div className="d-flex flex-column gap-4">
              <ReactToPrint
                trigger={() => <Button variant="primary">Print</Button>}
                content={() => componentRef.current}
              />
              <Button
                variant="warning"
                href="/"
                className="mb-3"
                onClick={() => {
                  //  delete_localStorage(localStorage_keys.temp_payment);
                }}
              >
                Back to Home
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SuccessPay;
