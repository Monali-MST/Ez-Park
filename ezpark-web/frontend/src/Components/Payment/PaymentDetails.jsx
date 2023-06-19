import React, { useEffect, useState } from "react";
import baseUrl from "../../Apis/baseUrl";
import { getUser } from "../../helper/getUser";
import CheckoutPayButton from "./CheckoutPayButton";

const PaymentDetails = ({ slotPrice, startTime, endTime }) => {
  const [discountData, setDiscountData] = useState({
    discount_name:"",
    discount_precentage:0
  });
  const { id } = getUser();

  // Convert start and end times to valid date strings
  const startDateString = `1970-01-01 ${startTime}`;
  const endDateString = `1970-01-01 ${endTime}`;

  // Create Date objects using the valid date strings
  const today = new Date();
  const optionsDate = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', optionsDate);
  const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedTime = today.toLocaleTimeString('en-US', optionsTime);
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  // Calculate the difference in milliseconds
  const duration = endDate - startDate;

  // Convert the duration from milliseconds to desired units (e.g., hours, minutes)
  const hours = Math.floor(duration / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duration % (1000 * 60)) / 1000);

  // Calculate the total booking time in hours
  const totalBookingHours = hours + minutes / 60 + seconds / 3600;

  // Calculate payment amount
  const paymentAmount = slotPrice * totalBookingHours;

  // Calculate discount amount
  const discountAmount = (paymentAmount * discountData.discount_precentage) / 100;

  // Calculate net amount
  const netAmount = (paymentAmount - discountAmount);


  
  // Calculate payment amount in cents
  const paymentAmountCents = Math.round(paymentAmount * 100);

  // Calculate discount amount in cents
  const discountAmountCents = Math.round(discountAmount * 100);

  // Calculate net amount in cents
  const netAmountCents = paymentAmountCents - discountAmountCents;

  useEffect(() => {
    async function getDiscount() {
      try {
        const { status, data } = await baseUrl.post("/user/calculateDiscount", {
          id,
        });
        if (status === 200) {
          setDiscountData({ ...discountData, discount_name: data.discount_name,
            discount_precentage: data.discount_precentage });
          //window.history.back();
        }
      } catch (err) {
        alert("Something went wrong.");
      }
    }
    getDiscount();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h2>Your Payment Details!</h2>
          <div className="card mt-4 border-0 shadow">
            <div className="card-body text-center" style={{ fontFamily: "Georgia, serif" }}>
              <b><p>{formattedDate}</p></b>
              <p>{formattedTime}</p>              
              <p style={{ fontFamily: "Georgia, serif", fontSize: "25px" }}>{discountData.discount_name}</p>
              <p>Payment Amount: $ {paymentAmount}</p>
              <p>Discount Amount: $ {discountAmount}</p>
              <div style={{padding: "5px 160px 0px 160px" }}><p className="special-amount" style={{ border: "2px solid orange", borderRadius: "50px", padding: "0px 0px 0px 0px" }}>$ {netAmount}</p></div>
            </div>
          </div>
        </div>
      </div>
      <CheckoutPayButton amount={netAmountCents}/>
    </div>
  );
  
};

export default PaymentDetails;
