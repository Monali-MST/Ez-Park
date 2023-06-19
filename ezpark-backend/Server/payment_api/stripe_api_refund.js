const express = require("express");
const stripe = require("stripe")(
  "sk_test_51MdZNYKdpK5vl1Ge54rWkf669MHtdkiCz9isReAA1R0NUY2OT1vKNx5hEvkP5tIjLsF1pswgSv7hI646h4uHsyt500h4xGIM0Q"
);
var cors = require("cors");
const save_refund_details = require("../api_operations_1/operations_1/refund/save_refund_details");

const app = express();

app.use(express.json());
app.use(cors());

function calculate_refund_amount(amount, duration) {
  if (duration >= 5) return amount;
  else if (duration >= 3) return amount / 2;
  else return 0;
}

module.exports = async function stripe_api_refund(req, res, next) {
  let amount = req.body.amount;
  const cancellationDuration = 5;

  const refundAmount = calculate_refund_amount(amount, cancellationDuration);
  console.log(amount)

  try {
    // Initiate refund
    const refund = await stripe.refunds.create({
      payment_intent: "pi_3NKn6pKdpK5vl1Ge0yX79eeh", //should not be hard cord   //remember to use a id that has paid more than pamymentAmount that booking belong
      amount: refundAmount,
      reason: "requested_by_customer",
    });

    // Handle successful refund
    // res.status(200).json({ success: true, refundId: refund.id });

    save_refund_details(req, res); //under development

    return next();
  } catch (error) {
    // Handle refund error
    console.error("Error refunding payment:", error);
    res.status(500).json({ error: error.message });
  }
};
