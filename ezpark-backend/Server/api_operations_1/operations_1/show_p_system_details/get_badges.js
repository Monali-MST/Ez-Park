
var connection = require('../../../service/connection')
const queries = require("../../../sql/sql");

// Export a function to handle GET requests for badge data
module.exports = async function get_badges(req, res) {

  // Execute the SQL query and return the results
  connection.query(queries.get_badge_details, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
}
