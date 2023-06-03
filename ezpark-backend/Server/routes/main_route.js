const express = require("express");
const router = express.Router();

var stripe_api = require("../payment_api/stripe_api");
var stripe_api_refund = require("../payment_api/stripe_api_refund");

router.post("/create-checkout-session", async (req, res) => {
  stripe_api(req, res);
});

router.post("/refund", async (req, res) => {
  stripe_api_refund(req, res);
});

// router.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
//   stripe_api_webhook(req, res);
// });

module.exports = router;
