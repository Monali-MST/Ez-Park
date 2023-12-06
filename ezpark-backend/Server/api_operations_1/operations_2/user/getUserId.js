const connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");


module.exports = async function getUserId(req, res) {
  console.log(req.params);

  const { email } = req.params;
  connection.query(queries.get_userID_by_email, [email], (err, data) => {
    if (err) {
      return res.status(500).send("Internal Server Error");
    } else {
      if (data.length === 0) {
        return res.status(400).send("User not exist");
      } else {
        const userID = data[0].UserID;
        return res.status(200).send(`${userID}`);
      }
    }
  });
};
