const connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");

async function getbookingfromtemp(req, res) {
const email = req.params.email;
console.log("test", email);


connection.query(queries. get_booking_from_temp, email, (err, data) => {
  if (err) {
    console.log(err);

    return res.status(400).send("Internal Server Error");
  } else {
    console.log(data);
    return res.status(200).send(data);
  }
});
}
module.exports = {getbookingfromtemp}