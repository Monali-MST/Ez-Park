const connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");

// Function to calculate the discount rate for a badge level and discount amount for a payment
async function calculateDiscount(req, res) {
  // Extract badge ID and badge name from the request body
  const { id } = req.body;
  connection.query(
    queries.get_badge_details_by_userid,
    [id],
    function (user_err, user_data) {
      if (user_err) throw user_err;
      const badge_data = Object.values(
        JSON.parse(JSON.stringify(user_data))
      )[0];
      const badge_id = badge_data.Badge_ID;
      const badge_name = badge_data.Badge_Name;

      // Retrieve discount details from the database based on the badge ID
      connection.query(
        queries.get_discount_by_badge_id,
        [badge_id],
        function (err, data) {
          if (err) throw err;
          const discount_data = Object.values(
            JSON.parse(JSON.stringify(data))
          )[0];
          const discount = { discount_name: null, discount_precentage: 0 };

          // Check if the discount has an expiration date
          if (discount_data.ExpDate != null) {
            if (new Date(discount_data.ExpDate) < new Date()) {
              // Use default discount if expired
              discount.discount_precentage = discount_data.DefaultDiscount;
              discount.discount_name = badge_name;
            } else {
              // Use specific discount if not expired
              discount.discount_precentage = discount_data.Discount;
              discount.discount_name = discount_data.Discounts_Name;
            }
          } else {
            // Use default discount if no expiration date
            discount.discount_precentage = discount_data.DefaultDiscount;
            discount.discount_name = badge_name;
          }
          return res.status(200).send(discount); // Send the calculated discount to the client
        }
      );
    }
  );
}

module.exports = { calculateDiscount };
