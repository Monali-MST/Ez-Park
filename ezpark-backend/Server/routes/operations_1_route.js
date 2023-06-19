const express = require("express");
const router = express.Router();

//import files
const get_badges = require("../api_operations_1/operations_1/show_p_system_details/get_badges");
const get_pointActions = require("../api_operations_1/operations_1/show_p_system_details/get_pointActions");
const get_discounts = require("../api_operations_1/operations_1/show_p_system_details/get_discounts");
const get_Refund_Level = require("../api_operations_1/operations_1/refund/get_Refund_Level");
const get_refund_request = require("../api_operations_1/operations_1/refund_request/get_refund_request");
const send_refund_request = require("../api_operations_1/operations_1/refund_request/send_refund_request");
const reject_refund_request = require("../api_operations_1/operations_1/refund_request/reject_refund_request");
const get_payment_details = require("../api_operations_1/operations_1/payment/get_payment_details");
const save_payment_details = require("../api_operations_1/operations_1/payment/save_payment_details");
const {
  updatePoints,
} = require("../api_operations_1/operations_1/use_p_system/updatePoints");
const {
  assignBadges,
} = require("../api_operations_1/operations_1/use_p_system/assignBadges");
const {
  calculateDiscount,
} = require("../api_operations_1/operations_1/use_p_system/calculateDiscount");
const {
  updateDiscount,
} = require("../api_operations_1/operations_1/use_p_system/updateDiscount");
const {
  get_temp_booking_details,
} = require("../api_operations_1/operations_1/payment/get_temp_book_details");
const {
  durationCalculation,
} = require("../api_operations_1/operations_1/refund/durationCalculation");
const get_paid_amount = require("../api_operations_1/operations_1/payment/get_paid_amount");
const save_cancel_booking = require("../api_operations_1/operations_1/cancel_booking/save_cancel_booking");
const save_refund_details = require("../api_operations_1/operations_1/refund/save_refund_details");
const stripe_api_refund = require("../payment_api/stripe_api_refund");

//point system functions
router.route("/updateUserPoints").put(updatePoints);
router.route("/assignBadge").post(assignBadges);
router.route("/calculateDiscount").post(calculateDiscount);
router.route("/updateDiscount").put(updateDiscount);

//point system details show page
router.route("/getbadges").get(get_badges);
router.route("/getpointActions").get(get_pointActions);
router.route("/getdiscounts").get(get_discounts);
router.route("/getrefund_level").get(get_Refund_Level);

//refund requests
router.route("/get_refund_request").get(get_refund_request);
router.route("/send_refund_request").post(send_refund_request);
router.route("/reject_refund_request:id").delete(reject_refund_request);

//payment
router.route("/save_payment_details").post(save_payment_details);
router.route("/get_payment_details").get(get_payment_details);
router.route("/get_paid_amount").post(get_paid_amount);

//temp booking
router.route("/get_temp_book_details").post(get_temp_booking_details);

//bookingcancelation
router.route("/save_cancel_booking").post(save_cancel_booking);
router
  .route("/cancel_and_refund_req")
  .post(send_refund_request, save_cancel_booking);
router.route("/cancel_and_refund").post(stripe_api_refund, save_cancel_booking);

//refund
router.route("/refundcalculation").post(durationCalculation);
router.route("/save_refund_details").post(save_refund_details);

module.exports = router;
