const express = require('express');
const router = express.Router()

const { register, verifyUser, login, getUser, resetPassword } = require('../api_operations_1/operations_2/login/register');
const vehicle_registration = require('../api_operations_1/operations_2/vehicle_register/vehicle_registration');

const savebooking = require('../api_operations_1/operations_2/booking/savebooking');

const getUserVehicleDetails = require('../api_operations_1/operations_2/user/getUserVehicleDetails');

const getUserProfile=require('../api_operations_1/operations_2/user/userProfile')
const { registerMail } = require('../controller/mailer');

const { deleteBookings } = require('../api_operations_1/operations_2/booking/deletebooking');
const { localVariables } = require('../middleware/Auth');
const { generateOTP, verifyOTP } = require('../api_operations_1/operations_2/OTP/otp');
const { sendSMS } = require('../controller/sms');
const { getbookingfromtemp } = require('../api_operations_1/operations_2/booking/getbookingfromtemp');
const { saveTbookings } = require('../api_operations_1/operations_2/booking/saveTbookings');
const { saveTobooking } = require('../api_operations_1/operations_2/booking/saveTobooking');
const { Extendtime } = require('../api_operations_1/operations_2/booking/Extendtime');
const getUserId = require('../api_operations_1/operations_2/user/getUserId');
const getUserBooking = require('../api_operations_1/operations_2/user/getUserBooking');
const getVehicles = require('../api_operations_1/operations_2/user/getVehicles');


router.route('/register').post(register); // register user
router.route('/login').post(verifyUser, login); // login in app
router.route('/verifyEmail').post(getUser);
router.route('/generateOTP').get( localVariables, generateOTP) // generate random OTP
router.route('/verifyOTP').get(verifyOTP) // verify generated OTP
router.route('/resetPassword').put(resetPassword); // register user



router.route('/vehicles').post(vehicle_registration);



router.route('/sendMail').post(registerMail);
router.route('/sendSMS').post(sendSMS);

router.route('/timeExtend').put(Extendtime);
router.route('/savebooking').post(savebooking);

router.route('/getUserId/:email').get(getUserId);

router.route('/getUserVehicleDetails/:email').get(getUserVehicleDetails);
router.route('/getVehicles/:email').get(getVehicles);

//bookings
router.route('/getUserBookings/:email').get(getUserBooking);
router.route('/savetemptobooking').post(saveTobooking);
 router.route('/savetempbooking').post(saveTbookings);
router.route('/getbookingfromtemp/:email').get(getbookingfromtemp);
router.route('/deletebooking/:id"').delete(deleteBookings);


router.route('/getUserProfile/:email').get(getUserProfile);

module.exports = router;