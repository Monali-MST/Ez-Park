var connection = require("../../../service/connection");
const queries = require("../../../sql/sql");

module.exports = async function save_payment_details(req, res) {
  // console.log(body);
  
  const values = [ 
    req.body.date,
    req.body.amount,
    req.body.bookingId,
    req.body.payment_intent_id
  ];
  connection.query(queries.insert_payment_details, [values], (err, data) => {
    if (err) return res.json(err);
    return res.status(201).send("Payment details has been saved successfully");
  });
};
