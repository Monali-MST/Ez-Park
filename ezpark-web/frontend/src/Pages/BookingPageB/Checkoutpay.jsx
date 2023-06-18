import React from "react";
import CheckoutPayButton from "../../Components/Payment/CheckoutPayButton";
import PaymentDetails from "../../Components/Payment/PaymentDetails";

const BookingPageb = () => {
  return (
    <div>
      <PaymentDetails slotPrice={10} startTime={"18:30:00"} endTime={"20:00:00"}/>
      <CheckoutPayButton />
    </div>
  );
};

export default BookingPageb;
