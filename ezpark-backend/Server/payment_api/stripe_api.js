var express = require("express");
var cors = require("cors");
var app = express();
const dotenv = require("dotenv");
const random_id_genarate = require("../controller/random_id_genarate");
dotenv.config();


module.exports = async function stripe_api(req, res) {
  const ramdomId= random_id_genarate();

  // Set up CORS for the stripe API endpoint
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );

  var price = req.body.price;
  var name = req.body.name;

  // Initialize Stripe with the private API key
  const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

  // Define slots for the Stripe payment
  const slots = new Map([[1, { priceInCents: price, name: name }]]);

  //Define a route handler for creating a Stripe checkout session
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // Accept card payments
      mode: "payment", // Charge the customer immediately
      line_items: req.body.items.map((item) => {
        const slot = slots.get(item.id); // Get the slot based on the ID
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: slot.name, // Use the name of the slot
            },
            unit_amount: slot.priceInCents, // Use the price of the slot
          },
          quantity: item.quantity, // Use the quantity requested by the customer
        };
      }),
      success_url: `http://localhost:3000/successpay?id=${ramdomId}`, // Include the randomId in the success URL
      cancel_url: `http://localhost:3000/closepay`, // Redirect URL after a canceled payment
    });
    res.json({ url: session.url }); // Return the checkout URL to the client
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
