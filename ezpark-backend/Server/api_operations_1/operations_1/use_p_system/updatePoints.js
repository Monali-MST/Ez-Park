// Function to update the points for a user based on an action

const connection = require('../../../service/connection');
const queries = require("../../../sql/sql");

async function updatePoints(req, res) {
  const { user_id, action_id } = req.body;

  // Get the current points of the user from the database
  connection.query(
    queries.get_no_of_points_by_user_id,
    [user_id],
    function (err, result) {
      if (err) throw err;
      const current_points = result[0].UserPoints;

      // Get the number of points to be added for the specified action from the database
      connection.query(
        queries.get_no_of_points_by_action_id,
        [action_id],
        function (err, result) {
          if (err) throw err;
          const newPoints = result[0].NoOfPoints_PerHour + current_points;
          

          // Update the points for the user in the database
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

  // res.send({user_id, action_id })
}

module.exports = { updatePoints };
