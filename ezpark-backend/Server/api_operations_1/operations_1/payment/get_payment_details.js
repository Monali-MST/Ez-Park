var connection = require("../../../service/connection");
const queries = require("../../../sql/sql");

module.exports = async function get_payment_details(req, res) {

  connection.query(queries.get_payment_details, (err, data) => {
    if (err) return res.json(err);
    
    return res.json(data);
  });
};
