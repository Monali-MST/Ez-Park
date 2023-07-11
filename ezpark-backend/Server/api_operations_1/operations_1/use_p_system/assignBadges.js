// Function to update a user's badge level according to the number of points using the badge_levels table

const connection = require("../../../service/connection");
const queries = require("../../../sql/sql");

async function assignBadges(req, res) {
  const { id } = req.body;

  console.log(req.body);

  // Retrieve the number of points for the user from the database
  connection.query(
    queries.get_no_of_points_by_user_id,
    [id],
    function (err, result) {
      if (err) throw err;
      const points = result[0].UserPoints;

      // Retrieve badge data from the database
      connection.query(queries.get_badge_data, function (err, badgeData) {
        if (err) throw err;
        const sendData = {
          status: 0,
          badge_name: "",
          badge_id: 4,
          points,
          err: null,
          minpoint: 0,
        };

        // Iterate through each badge level to determine the appropriate badge for the user
        badgeData.forEach((element) => {
          if (points >= element.Minimum_Points && sendData.badge_id === 4) {
            sendData.status = 200;
            sendData.badge_name = element.Badge_Name;
            sendData.badge_id = element.Badge_ID;
            sendData.minpoint = element.Minimum_Points;
            return;
          }
        });

        // Check if the user has enough points to earn the lowest badge level
        if (points < badgeData[2].Minimum_Points) {
          sendData.status = 200;
          sendData.err =
            "You don't have enough points to earn a badge. You need to earn more " +
            (badgeData[2].Minimum_Points - points) +
            " points";
          sendData.minpoint = badgeData[2].Minimum_Points;
        }
        
        // Send the appropriate response based on the badge assignment status
        return res.status(sendData.status).send(sendData);
      });
    }
  );
}

module.exports = { assignBadges };
