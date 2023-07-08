var connection = require("../../../service/connection");
const queries = require("../../../sql/sql");

module.exports = async function save_cancel_booking(req, res, next) {
  const today = new Date();
  const date =
    today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate();

  const values = [date, req.body.Booking_id];

  connection.query(
    queries.insert_booking_cancelation_details,
    [values],
    (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      } else {
        connection.query(queries.update_cancel_booking_status,[req.body.Booking_id], (error, result) => {
          if (error) {
            console.log(error);
            return res.json(error);
          } else {
            next();
          }
        });
      }
      return res.status(201).send("Booking has been canceled successfully");
    }
  );
};
