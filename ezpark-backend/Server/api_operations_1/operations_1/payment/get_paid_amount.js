var connection = require("../../../service/connection");
const queries = require("../../../sql/sql");

module.exports = async function get_paid_amount(req, res) {
  const { booking_id } = req.body;
  console.log(booking_id);

  connection.query(
    queries.get_paid_amount_by_bookID,
    [booking_id],
    (err, data) => {
      if (err) return res.json(err);

      return res.send(data[0]);
    }
  );
};
