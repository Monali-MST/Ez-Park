const connection = require('../../../service/connection');
const queries = require("../../../sql/sql");


async function updatePoints(req, res) {
  const { user_id, action_id } = req.body;

  connection.query(
    queries.get_no_of_points_by_user_id,
    [user_id],
    function (err, result) {
      if (err) throw err;
      const current_points = result[0].UserPoints;

      connection.query(
        queries.get_no_of_points_by_action_id,
        [action_id],
        function (err, result) {
          if (err) throw err;
          const newPoints = result[0].NoOfPoints_PerHour + current_points;

          connection.query(
            queries.update_no_of_points_in_user,
            [newPoints, user_id],
            function (err, result) {
              if (err) throw err;
              return res.status(201).json("Point updated");
            }
          );
        }
      );
    }
  );

  //  res.send({user_id, action_id })
}

module.exports = {updatePoints}