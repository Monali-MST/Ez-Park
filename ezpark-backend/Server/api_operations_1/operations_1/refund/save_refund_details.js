var connection = require("../../../service/connection");
const queries = require("../../../sql/sql");

module.exports = async function save_refund_details(req, res) {  
  const values = [ 
    // req.body.date,
    // req.body.amount,
    // req.body.bookingId,
  ];
  console.log(values)
  connection.query(queries.insert_refund_details, [values], (err, data) => {
    if (err) {
      console.log(err)
      return res.json(err)};
    return res.status(201).send("Refund details has been saved successfully");
  });
};
