var connection = require("../../../service/connection");
const queries = require("../../../sql/sql");

module.exports = async function cancel_booking(req, res, next) {
  const values = [req.body.Date, req.body.Booking_id];

  connection.query(
    queries.insert_booking_cancelation_details,
    [values],
    (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      else
        return res.status(201).send("Booking has been canceled successfully");
    }
  );
};
