//need to update user's badge(badge_level) according to no_of_points with the help of badge_levels table

const connection = require("../../../service/connection");
const queries = require("../../../sql/sql");

async function assignBadges(req, res) {
  const { user_id } = req.body;

  connection.query(
    queries.get_no_of_points_by_user_id,
    [user_id],
    function (err, result) {
      if (err) throw err;
      const points = result[0].UserPoints;

      connection.query(queries.get_badge_data, function (err, badgeData) {
        if (err) throw err;
        const sendData = {
          status: 0,
          msg: { badge_name: "", badge_id: 0 },
          err: null,
        };
        badgeData.forEach((element) => {
          if (points >= element.Minimum_Points) {
            sendData.status = 200;
            sendData.msg.badge_name = element.Badge_Name;
            sendData.msg.badge_id = element.Badge_ID;
            return;
          }
        });
        if (points < badgeData[2].Minimum_Points) {
          sendData.status = 404;
          sendData.msg = null;
          sendData.err =
            "You don't have enough points to earn a badge. You need to earn more " +
            (badgeData[2].Minimum_Points - points) +
            " points";
        }

        return !sendData.err
          ? res.status(sendData.status).send(sendData.msg)
          : res.status(sendData.status).send({ err: sendData.err });
      });
    }
  );
}

module.exports = { assignBadges };
