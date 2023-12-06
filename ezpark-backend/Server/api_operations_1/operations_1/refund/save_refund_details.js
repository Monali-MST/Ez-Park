var connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");

module.exports = async function save_refund_details(req, res) {  
  const today = new Date();
  const date =
    today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate();
  const values = [ 
    req.body.amount,
    req.body.redundLevel,
    date,
    req.body.Booking_id,
  ];
  console.log(values)
  connection.query(queries.insert_refund_details, [values], (err, data) => {
    if (err) {
      console.log(err)
      return res.json(err)
    };

    connection.query("",[], (updateErr, updateData)=>{
      if (err) {
        console.log(err)
        return res.json(err)
      };
      return res.status(201).send("Refund details has been saved successfully");
    })


   // 
  });
};
