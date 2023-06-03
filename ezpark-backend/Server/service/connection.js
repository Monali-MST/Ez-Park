// Import the 'mysql' module
var mysql = require('mysql');

// Create a connection to a MySQL database
var connection = mysql.createConnection({
  host: "ezpark-server.mysql.database.azure.com",
  user: "SuperAdmin",
  password: "ezPark@123",
  database: "ezpark",
});

// Attempt to connect to the database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Ezpark database.");
});

// Export the 'connection' object so that it can be used by other modules
module.exports = connection;
