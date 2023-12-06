const connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");

async function saveTbookings(req, res) {
  const inputData = req.body;
  var tempSlot = 1;

  console.log(inputData.BookinData.StartTime.length);

  var sTime = inputData.BookinData.StartTime;
  var eTime = inputData.BookinData.EndTime;

  if (inputData.BookinData.StartTime.length < 8) {
    sTime = sTime + ":00";
  }

  if (inputData.BookinData.EndTime.length < 8) {
    eTime = eTime + ":00";
  }

  const query =
    "SELECT * FROM booking WHERE slot = '" +
    tempSlot +
    "' AND BookedDate = '" +
    inputData.BookinData.BookedDate +
    "' AND '" +
    sTime +
    "' BETWEEN StartTime AND EndTime AND '" +
    sTime +
    "' BETWEEN StartTime AND EndTime";
  connection.query(query, function (err, result, fields) {
    console.log("dataa", result.length);
    console.log("error", err);
    if (err) {
      console.log(err);

      return res.status(400).send("Internal Server Error");
    } else {
      console.log(result.length);
      if (result.length > 0) {
        return res
          .status(400)
          .send("Another booking available for your time slot");
      } else {
        const sql =
          "INSERT INTO `ezpark`.`temp_booking` (`BookedDate`, `StartTime`, `EndTime`, `VehicleNo`, `BookingMethod`,`slot`,`user_email`) VALUES (?);";
        const values = [
          inputData.BookinData.BookedDate,
          inputData.BookinData.StartTime,
          inputData.BookinData.EndTime,
          inputData.BookinData.VehicleNo,
          inputData.BookinData.BookingMethod,
          1,
          inputData.BookinData.UserEmail,
        ];
        connection.query(sql, [values], function (err, result, fields) {
          if (err) {
            console.log(err);
            res.status(400).send({ err });
          } else {
            return res.status(200).send("Data saved temporaral successfully!");
          }
        });
      }
    }
  });
}
module.exports = { saveTbookings };
