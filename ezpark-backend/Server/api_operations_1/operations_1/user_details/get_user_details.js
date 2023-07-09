var connection = require('../../../service/connection')
const queries = require("../../../sql/sql");

// Export a function to handle GET requests for badge data
module.exports = async function get_user_details(req, res) {
    const { id } = req.body;

    const user = {
        userID: id,
        firstName: "John",
        lastName: "Doe",
        addFLine: "123 Main Street",
        addSLine: "Apt 4B",
        street: "Some Street",
        city: "New York",
        postCode: "12345",
        mobileNo: "555-1234",
        fixedLine: "555-5678",
        NIC: "1234567890",
        email: "johndoe@example.com",
      };
    
      // Send the user data as the response
      res.json(user);

  // Execute the SQL query and return the results
//   connection.query(queries.get_badge_details, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
}
