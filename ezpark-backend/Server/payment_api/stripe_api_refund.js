const express = require('express');
const stripe = require('stripe')('sk_test_51MdZNYKdpK5vl1Ge54rWkf669MHtdkiCz9isReAA1R0NUY2OT1vKNx5hEvkP5tIjLsF1pswgSv7hI646h4uHsyt500h4xGIM0Q');
var cors = require("cors"); 

const app = express();

app.use(express.json());
app.use(cors());


module.exports = async function stripe_api_refund(req, res) {
  let refundAmount = 0;
  const cancellationDuration = 5;

  if (cancellationDuration >= 5 && cancellationDuration <= 7) {
    refundAmount = 1000; // Full refund
  } else if (cancellationDuration >= 3 && cancellationDuration < 5) {
    refundAmount = 1000 * 0.5; // 50% refund
  }
  // No refund for cancellation duration less than 3


  try {
    // const paymentMethodId = req.body.paymentMethodId;

    // // Confirm payment intent
    // const { paymentIntent } = await stripe.paymentIntents.confirm(paymentMethodId);

    // Initiate refund
    const refund = await stripe.refunds.create({
      payment_intent: "pi_3MtWLiKdpK5vl1Ge0DwRqG0z", //should not be hard cord
      amount: refundAmount,
      reason: "requested_by_customer", // specify the reason for the refund
    });

    // Handle successful refund
    res.status(200).json({ success: true, refundId: refund.id });
  } catch (error) {
    // Handle refund error
    console.error('Error refunding payment:', error);
    res.status(500).json({ error: error.message });
  }
}