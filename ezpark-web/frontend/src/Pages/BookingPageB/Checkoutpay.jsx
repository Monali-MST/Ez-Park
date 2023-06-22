import React from "react";
import CheckoutPayButton from "../../Components/Payment/CheckoutPayButton";
import PaymentDetails from "../../Components/Payment/PaymentDetails";

const BookingPageb = () => {
  return (
    <div>
      <center>
        <PaymentDetails
          slotPrice={10}
          startTime={"18:30:00"}
          endTime={"20:00:00"}
        />
        {/* <CheckoutPayButton /> */}
      </center>
    </div>
  );
};

export default BookingPageb;
