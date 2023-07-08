const express = require("express");
var cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(cors());

function calculate_refund_amount(amount, duration) {
  if (duration >= 5) return amount;
  else if (duration >= 3) return amount/2;
  else return 0;
}

module.exports = async function stripe_api_refund(req, res, next) {
  const { paymentID, amount } = req.body;
  console.log(req.body)
  const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
  const cancellationDuration = 5;

  const refundAmount = calculate_refund_amount(amount, cancellationDuration);
  console.log(refundAmount)

  try {
    // Initiate refund
    const refund = await stripe.refunds.create({
      payment_intent: paymentID, //should not be hard cord   //remember to use a id that has paid more than pamymentAmount that booking belong
      amount: Math.round(refundAmount*100),
      reason: "requested_by_customer",
    });

    // Handle successful refund
    // res.status(200).json({ success: true, refundId: refund.id });

    return next();
  } catch (error) {
    // Handle refund error
    console.error("Error refunding payment:", error);
    res.status(500).json({ error: error.message });
  }
};
