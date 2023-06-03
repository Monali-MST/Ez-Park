// Import required packages
var express = require("express"); // Express web framework
var bodyparser = require("body-parser"); // Parse request bodies
var cors = require("cors"); // Cross-origin resource sharing middleware
var path = require("path"); // Path manipulation utility
const dotenv = require("dotenv"); // Load environment variables from a .env file

// Create a new Express application
var app = express();

// Import route handlers
const operations_1_route = require("./routes/operations_1_route");
const main_route = require("./routes/main_route");
const random_id_genarate = require("./controller/random_id_genarate");

// Load environment variables from a .env file
dotenv.config();

// Set up middleware
app.use(cors()); // Enable cross-origin resource sharing
app.use(bodyparser.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the 'public' directory

// Register route handlers
app.use("/api/user", operations_1_route);
app.use("/", main_route);

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.json("Hello this is backend of EzPark");
});

// Start the server and listen for incoming requests
app.listen(process.env.PORT, () => {
  console.log("server started in port : ", process.env.PORT);
});
