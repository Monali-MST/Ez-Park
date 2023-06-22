var express = require("express");
var cors = require("cors");
var app = express();
const dotenv = require("dotenv");
const random_id_genarate = require("../controller/random_id_genarate");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };
  
module.exports = async function stripe_api_custom(req, res) {
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
};
