const dotenv = require("dotenv");
const connection = require("../service/connection");
const queries = require("../mysql/sql");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

module.exports = async function stripe_api_custom(req, res) {
  const { price, date } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: "usd",
   // payment_method_types: ['card'],
    automatic_payment_methods: {
      enabled: true,
    },
  });

  console.log(paymentIntent);


  res.send({
    clientSecret: paymentIntent.client_secret,
    paymentId: paymentIntent.id,
  });
};
