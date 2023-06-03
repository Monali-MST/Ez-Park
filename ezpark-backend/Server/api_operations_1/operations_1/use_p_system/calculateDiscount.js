// need to calculate discount rate(using discount_details table) for the badge_level and discount amount for a payment 

const connection = require('../../../service/connection');
const queries = require("../../../sql/sql");

async function calculateDiscount(req, res) {
  const { badge_id, badge_name } = req.body;
  connection.query(
    queries.get_discount_by_badge_id,
    [badge_id],
    function (err, data) {
      if (err) throw err;
      const discount_data = data[0];
      const discount = { discount_name: null, discount_precentage: 0 };
      if (discount_data.ExpDate != null) {
        if (discount_data.ExpDate < new Date()) {
          discount.discount_precentage = discount_data.DefaultDiscount;
          discount.discount_name = badge_name;
        } else {
          discount.discount_precentage = discount_data.Discount;
          discount.discount_name = discount_data.Discounts_Name;
        }
      } else {
        discount.discount_precentage = discount_data.DefaultDiscount;
        discount.discount_name = badge_name;
      }
      res.status(200).send(discount);
    }
  );
}

module.exports = {calculateDiscount}