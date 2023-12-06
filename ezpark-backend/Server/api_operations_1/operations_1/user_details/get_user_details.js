var connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");

// Export a function to handle GET requests for badge data
module.exports = async function get_user_details(req, res) {
  const { id } = req.body;

  // Execute the SQL query and return the results
  connection.query(queries.get_user_details, [id], (err, data) => {
    if (err) return res.json(err);
    // const user = {
    //   userID: id,
    //   firstName: data[0].FirstName,
    //   lastName: data[0].LastName,
    //   addFLine: data[0].AddFLine,
    //   addSLine: data[0].AddSLine,
    //   street: data[0].Street,
    //   city: data[0].City,
    //   postCode: data[0].PostCode,
    //   mobileNo: data[0].MobileNo,
    //   fixedLine: data[0].FixedLine,
    //   NIC: data[0].NIC,
    //   email: data[0].Email,
    // };

    // // Send the user data as the response
    // return res.json(user);

    return res.json(data);
  });
};
