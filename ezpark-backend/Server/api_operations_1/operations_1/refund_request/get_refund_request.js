//   need to code here for a retriving refund requests from database( show in admin panal)

var connection = require("../../../service/connection");
const queries = require("../../../sql/sql");

module.exports = async function get_refund_request(req, res) {

  connection.query(queries.get_refund_requests, (err, data) => {
    if (err) return res.json(err);
    
    return res.json(data);
  });
};
