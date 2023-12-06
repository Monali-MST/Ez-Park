const jwt = require('jsonwebtoken');
const otpGenerator =require("otp-generator")


/** GET: http://localhost:8000/api/generateOTP */
 async function generateOTP(req,res){
    req.app.locals.OTP =  otpGenerator.generate(4, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false})
  res.status(201).send({ code: req.app.locals.OTP, msg:"OTP" })   
}


/** GET: http://localhost:8000/api/verifyOTP */
 async function verifyOTP(req,res){
    const { code } = req.query;
    console.log(req.app.locals.OTP, code);
    if (parseInt(req.app.locals.OTP) === parseInt(code)) {
      req.app.locals.OTP = null; // reset the OTP value
      req.app.locals.otpSession = true; // start session for reset password
      return res.status(201).send({ msg: "Verify Successsfully!" });
    }
    return res.status(400).send({ error: "Invalid OTP" });
}

module.exports = { generateOTP, verifyOTP}
