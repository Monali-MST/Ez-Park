import React, { useEffect, useState } from "react";
import baseUrl from "../../Apis/baseUrl";
import { getUser } from "../../helper/getUser";

const PaymentDetails = ({ slotPrice, startTime, endTime }) => {
  const discountPercentage = 20;
  const [discountData, setDiscountData] = useState({
    discount_name:"",
    discount_precentage:0
  });
  const { id } = getUser();

  // Convert start and end times to valid date strings
  const startDateString = `1970-01-01 ${startTime}`;
  const endDateString = `1970-01-01 ${endTime}`;

  // Create Date objects using the valid date strings
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
  const netAmount = paymentAmount - discountAmount;

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
    <div>
      <h2>Payment Details</h2>
      <p>Payment Amount: Rs.{paymentAmount}</p>
      <p>Discount Name: {discountData.discount_name}</p>
      <p>Discount Amount: Rs.{discountAmount}</p>
      <p>Net Amount: Rs.{netAmount}</p>
    </div>
  );


};

export default PaymentDetails;
