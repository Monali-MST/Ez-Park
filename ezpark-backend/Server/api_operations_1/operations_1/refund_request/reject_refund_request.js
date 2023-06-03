var connection = require("../../../service/connection");
const queries = require("../../../sql/sql");

module.exports = async function send_refund_request(req, res) {
    const Refund_Request_id = req.params.id;
  
    connection.query(queries.delete_refund_requests, [Refund_Request_id], (err, data) => {
      if (err) return res.json(err);
      return res.json("Request has been Removed Successfully");
    });
};