const nodemailer = require("nodemailer");
const Mailgen  = require("mailgen")
const dotenv = require("dotenv");
dotenv.config(); //npm i dotenv

let nodeConfig = {
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
    tls: {rejectUnauthorized: false}
}

let transporter = nodemailer.createTransport(nodeConfig );

let MailGenerator = new Mailgen({
    theme:"default",
    product:{
        name:"Ez Park",
        link:"http://localhost:3000/"
    }
})

const registerMail = async (req,res)=>{
   // console.log(req.body)
    const {username, userEmail, text, subject} = req.body;
  //  console.log(process.env.USER_EMAIL, process.env.PASSWORD)
    //email body
    var email = {
        body:{
            name:username,
            intro : text || 'Welcome to Ez Park! We\'re very excited to have you on board.',
            action: {
                instructions: 'To go with EZ park, please click here:',
                button: {
                    color: '#22BC66', // action button color
                    text: 'View on dashboard',
                    link: 'http://localhost:3000/'
                }
            },
            outro: 'This is a generated mail. Please do not reply to this.'       
         }
    }
    var emailBody = MailGenerator.generate(email);

    let message = {
        from: process.env.USER_EMAIL,
        to: userEmail,
        subject: subject || "subject",
        html: emailBody
    }

    //send mail
    transporter.sendMail(message)
    .then(()=>{
        return res.status(200).send({msg: "You should recieved an email from us"})
    })
    .catch(error=>{
        console.log(error)
        res.status(500).send({error})})
}


module.exports = {registerMail}