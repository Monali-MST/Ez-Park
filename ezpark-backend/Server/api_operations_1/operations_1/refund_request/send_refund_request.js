// need to code here for a sending refund request to database (get request with a reason from user)

var connection = require("../../../service/connection");
const queries = require("../../../sql/sql");

module.exports = async function send_refund_request(req, res, next) {
   console.log(req.body);

  const values = [
    req.body.Reason,
    req.body.Date,
    req.body.Booking_id,
  ];
  connection.query(queries.insert_refund_requests, [values], (err, data) => {
    if (err) return res.status(500).send(err);
    return next();//res.json("book has been added successfully");
  });
};
