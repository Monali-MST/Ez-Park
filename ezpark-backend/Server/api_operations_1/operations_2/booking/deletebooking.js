const connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");


async function deleteBookings(req, res) {
    const {id} = req.params
    console.log(id)
  

  
        connection.query(queries.delete_booking_details, [id], (err, data)=>{
  
          if(err){
            console.log(err);
            res.status(400).send({ err });
          }else{
            return res.status(200).send("Removed SuccessFully");
          }
          console.log("deleted");
        });
};

module.exports = {deleteBookings}