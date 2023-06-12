const connection = require('../../../service/connection');
const queries = require("../../../sql/sql");


async function updateDiscount(req,res){
  const {exp_date,  discount_data } = req.body;
  for(const discount of discount_data){
    
    const values = [
      discount.discount_name,
      discount.discount_percentage,
      exp_date,
      discount.badge_id,
      
    ];

    console.log(discount, values);
    connection.query(
      queries.update_discount_data,
      values,
      function (err, result) {
        if (err) throw err;
       
      }
    );
  }

  // discount_data.forEach((discount)=>{
  //   const values = [
  //     discount.discount_name,
  //     discount.discount_precentage,
  //     exp_date,
  //     discount.badge_id,
      
  //   ]

  //   connection.query(
  //     queries.update_discount_data,
  //     values,
  //     function (err, result) {
  //       if (err) throw err;
       
  //     }
  //   );
  // })
  return res.status(201).json("Discount updated");
}

module.exports = { updateDiscount };