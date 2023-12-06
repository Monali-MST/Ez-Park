const connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");


module.exports = async function savebooking(req, res) {
  const data = req.body;
  const values = [
    data.BookingID,
    data.BookedDate,
    data.StartTime,
    data.EndTime,
    data.VehicleNo,
    data.BookingMethod,
  ];
  connection.query(queries.save_booking, [values], function (err, result, fields) {
    if (err) {
      console.log(err);
      res.status(500).send({ err });
    } else {
      return res.status(201).send("Data saved successfully!");
    }
  });
};
