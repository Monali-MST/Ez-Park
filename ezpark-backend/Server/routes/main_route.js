const express = require("express");
const router = express.Router();

var stripe_api_refund = require("../payment_api/stripe_api_refund");
const stripe_api_custom = require("../payment_api/stripe_api_custom");
const { registerMail } = require("../controller/mailer");


router.post("/create-payment-intent", async (req, res) => {
  stripe_api_custom(req, res);
});

router.post("/refund", async (req, res) => {
  stripe_api_refund(req, res);
});

router.post("/sendMail", async (req, res) => {
  registerMail(req, res);
});


// router.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
//   stripe_api_webhook(req, res);
// });

module.exports = router;
