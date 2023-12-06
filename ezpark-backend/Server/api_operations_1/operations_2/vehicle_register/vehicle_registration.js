const connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");



module.exports = async function vehicle_registration(req, res) {
  console.log(req.body);
    const vehicles = req.body.Vehical;

    vehicles.forEach((Vehical) => {
      const values =[
        Vehical.VehicleNo,
        Vehical.VehicleType,
        req.body.Email,
      ];

      connection.query(queries.save_vehicle_details, [values], (err, data) => {
        if (err) return res.status(500).send(err);
      }); 
    });
    return res.json("Success");
};
