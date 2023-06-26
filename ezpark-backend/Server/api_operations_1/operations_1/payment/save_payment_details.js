var connection = require("../../../service/connection");
const queries = require("../../../sql/sql");

module.exports = async function save_payment_details(req, res) {
  console.log(req.body);
  
  const values = [ 
    req.body.date,
    req.body.time,
    req.body.amount,
    req.body.bookingId,
    req.body.payment_intent_id
  ];
  console.log(values)
  connection.query(queries.insert_payment_details, [values], (err, data) => {
    if (err) {
      console.log(err)
      return res.json(err)};
    return res.status(201).send("Payment details has been saved successfully");
  });
};
