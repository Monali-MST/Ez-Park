import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

import "../../styles/PaymentScreen.css";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

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
