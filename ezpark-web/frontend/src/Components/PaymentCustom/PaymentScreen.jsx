import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

import "../../styles/PaymentScreen.css";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe("pk_test_51MdZNYKdpK5vl1GeDp6R8Jj1G6CW0kOrMJ7Ab1eY5QDlEePNRdvvFiLLmdgCoHv0dZ85dqhAO6q1OnEYRGaQ6El400gTt2vNIB");

const PaymentScreen = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [id, setId] = useState();
  const location = useLocation();
  const amount = location.state.netAmountCents;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8800/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: amount }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((err) => console.log(err));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm amount={amount} />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default PaymentScreen;
