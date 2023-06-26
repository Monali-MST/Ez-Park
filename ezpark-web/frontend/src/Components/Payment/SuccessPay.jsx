import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import checkmarkImage from "../../Assets/pay_success_pic.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SuccessPay = () => {
  //const data = load_localStorage(localStorage_keys.temp_payment);
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const navigate = useNavigate();
  const [billingInfo, setBillingInfo] = useState({
    billNo: 1,
    amount: new URLSearchParams(window.location.search).get("amount") / 100,
    date: date,
    time: time,
    bookingId: 130,
    slotName: "12 C",
    email: new URLSearchParams(window.location.search).get("email"),
    payment_intent_id: new URLSearchParams(window.location.search).get(
      "payment_intent"
    ),
  });

  // const payment_intent = new URLSearchParams(window.location.search).get(
  //   "payment_intent"
  // );
  // setBillingInfo((prev) => ({ ...prev, payment_intent_id: payment_intent }));

  useEffect(() => {
    console.log(billingInfo.payment_intent_id);

    try {
      axios
        .post(
          "http://localhost:8800/api/user/save_payment_details",
          billingInfo
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.errno) {
            navigate("/");
            // alert("Something went wrong")
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

    // let isPaymentDuplicated = true;
    // try {
    //   const payment_key = localStorage.getItem("PAYMENT_INTENT_ID")
    //   console.log(payment_key)
    //   if (payment_key) {
    //     isPaymentDuplicated = false;
    //   }
    // } catch (error) {
    //   console.log("error: no data to load in local storage ");
    //   isPaymentDuplicated = false;
    // }

    // // if (!isPaymentDuplicated) {
    // //   try {
    // axios
    //   .post(
    //     "http://localhost:8800/api/user/save_payment_details",
    //     billingInfo
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     save_localStorage(localStorage_keys.payment_RandomId, randomId);
    //     console.log("locally stoerd");
    //   });
    // //   } catch (err) {
    // //     console.log(err);
    // //   }
    // // }
  }, []);

  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col md={6} className="bg-white p-5">
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
          <div className="bg-light p-3 rounded mb-3">
            <p className="m-0">
              <strong>Bill Number:</strong> {billingInfo.billNo}
            </p>
            <p className="m-0">
              <strong>Amount:</strong> {billingInfo.amount}
            </p>
            <p className="m-0">
              <strong>Date:</strong> {billingInfo.date}
            </p>
            <p className="m-0">
              <strong>Time:</strong> {billingInfo.time}
            </p>
            <p className="m-0">
              <strong>Booking ID:</strong> {billingInfo.bookingId}
            </p>
            <p className="m-0">
              <strong>Slot Number:</strong> {billingInfo.slotName}
            </p>
            <p className="m-0">
              <strong>Email:</strong> {billingInfo.email}
            </p>
          </div>
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
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessPay;
