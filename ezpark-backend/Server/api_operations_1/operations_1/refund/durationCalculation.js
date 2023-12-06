const connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");

function durationCalculation(req, res) {
  const { BookingID } = req.body;
  connection.query(queries.get_booking_by_bookID, [BookingID], (err, data) => {
    console.log(data);

    // Specify the two dates
    const bookedDate = new Date(data[0].BookedDate);
    const today = new Date();

    console.log(bookedDate);
    console.log(today);


    // Calculate the difference in milliseconds
    const durationInMs = bookedDate.getTime() - today.getTime();

    // Convert milliseconds to days
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const durationInDays = Math.floor(durationInMs / millisecondsInADay);

    console.log("Duration in days:", durationInDays);

    if (err) return res.json(err);
    return res.json(durationInDays+1);
  });
}

module.exports = { durationCalculation };
