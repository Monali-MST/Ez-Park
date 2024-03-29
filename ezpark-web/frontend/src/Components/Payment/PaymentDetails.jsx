import React, { useEffect, useState } from "react";
import baseUrl from "../../Apis/baseUrl";
import { getUser } from "../../helper/getUser";
import CheckoutPayButton from "./CheckoutPayButton";
import PaymentScreen from "../PaymentCustom/PaymentScreen";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import getBookingHours from "../../helper/cal_totalBookingHours";

const PaymentDetails = ({ slotPrice, startTime, endTime, bookedDate }) => {
  const [discountData, setDiscountData] = useState({
    discount_name: "",
    discount_precentage: 0,
  });
  const { id } = getUser();
  const today = new Date();
  const optionsDate = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", optionsDate);
  const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedTime = today.toLocaleTimeString("en-US", optionsTime);
  const navigate = useNavigate();

 const totalBookingHours = getBookingHours(startTime, endTime);

  // Calculate payment amount
  const paymentAmount = slotPrice * totalBookingHours;

  // Calculate discount amount
  const discountAmount =
    (paymentAmount * discountData.discount_precentage) / 100;

  // Calculate net amount
  const netAmount = paymentAmount - discountAmount;

  // Calculate payment amount in cents
  const paymentAmountCents = Math.round(paymentAmount * 100);

  // Calculate discount amount in cents
  const discountAmountCents = Math.round(discountAmount * 100);

  // Calculate net amount in cents
  const netAmountCents = paymentAmountCents - discountAmountCents;

  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  useEffect(() => {
    async function getDiscount() {
      try {
        const { status, data } = await baseUrl.post("/user/calculateDiscount", {
          id,
        });
        console.log(data);
        if (status === 200) {
          setDiscountData({
            ...discountData,
            discount_name: data.discount_name,
            discount_precentage: data.discount_precentage,
          });
          //window.history.back();
        }
      } catch (err) {
        alert("Something went wrong.");
      }
    }
    const durationData = { startTime, endTime, totalBookingHours, bookedDate };
    console.log(durationData);
    localStorage.setItem("startTime", startTime);
    localStorage.setItem("endTime", endTime);
    localStorage.setItem("totalBookingHours", totalBookingHours);
    localStorage.setItem("bookedDate", bookedDate);
    getDiscount();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card mt-4 mb-4 border-0 shadow p-3">
            <h2>Your Payment Details!</h2>
            <div
              className="card-body text-center"
              style={{ fontFamily: "Georgia, serif" }}
            >
              <b>
                <p>{formattedDate}</p>
              </b>
              <p>{formattedTime}</p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "25px" }}>
                {discountData.discount_name}
              </p>
              <p>Payment Amount: $ {paymentAmount}</p>
              <p>Discount Amount: $ {discountAmount}</p>
              <div style={{ padding: "5px 160px 0px 160px" }}>
                <p
                  className="special-amount"
                  style={{
                    border: "2px solid orange",
                    borderRadius: "50px",
                    padding: "0px 0px 0px 0px",
                  }}
                >
                  $ {netAmount}
                </p>
              </div>
            </div>
            <Button
        variant="warning"
        onClick={() => {
          navigate("/custompayment", { state: { netAmountCents, date } });
        }}
      >
        Pay now
      </Button>
          </div>
        </div>
      </div>
      {/* <CheckoutPayButton amount={netAmountCents}/> */}

    </div>
  );
};

export default PaymentDetails;
