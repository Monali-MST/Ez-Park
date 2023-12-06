const connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");



async function saveTobooking(req, res) {
  const data = req.body;
  console.log(data);
  const values = [
    data.BookinData.TempId,
    data.BookinData.BookedDate,
    data.BookinData.StartTime,
    data.BookinData.EndTime,
    data.BookinData.VehicleNo,
    data.BookinData.BookingMethod,
    data.BookinData.slotId,
    data.BookinData.UserEmail,
  ];
  connection.query(queries. save_tempto_bookings, [values], function (err, result, fields) {
    if (err) {
      console.log(err);
      res.status(400).send({ err });
    } else {
      // return res.status(200).send("Data saved temporaral successfully!");
      //console.log("success");


      connection.query(queries.delete_booking_details, [data.BookinData.TempId], (err, data) => {
        if (err) {
          console.log(err);
          res.status(400).send({ err });
        } else {
          return res.status(200).send("Removed SuccessFully");
        }
        console.log("added and deleted");
      });
    }
  });
}
module.exports = {saveTobooking}