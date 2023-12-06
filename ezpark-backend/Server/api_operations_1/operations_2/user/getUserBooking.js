const connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");


module.exports = async function getUserBooking(req, res) {
const {email} = req.params;

  console.log("loggg", {email});

  connection.query(queries.get_user_Bookings, [email], (err, data) => {
    if (err) {
      console.log(err);

      return res.status(400).send("Internal Server Error");
    } else {
      console.log(data.length);
      if (data.length === 0) {
        return res.status(400).send("No any Bookings");
      } else {
        return res.status(200).send(data);
      }
    }
  });
};
