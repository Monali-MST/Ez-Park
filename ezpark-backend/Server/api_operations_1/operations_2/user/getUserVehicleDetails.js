const connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");


module.exports = async function getUserVehicleDetails(req, res) {
    console.log(req.params);
  const { email } = req.params;
 
  connection.query(queries.get_vehicleNo_by_email, [email], (err, data) => {
    if (err) {
      return res.status(500).send("Internal Server Error");
    } else {
      if (data.length === 0) {
        return res.status(400).send("No any vehicle");
      } else {
        return res.status(200).send(data);
      }
    }
  });
};