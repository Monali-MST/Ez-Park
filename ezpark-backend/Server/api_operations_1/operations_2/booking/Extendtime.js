const connection = require("../../../service/connection");
const queries = require("../../../mysql/sql");

async function sendRemainderMessage(mobileNo,slotId){
  const apiURL = "https://cloud.websms.lk/smsAPI?sendsms";
  const apiKey = "hB8Y73E2OTVPBfEGhfBk9ddi95MOFDf7";
  const apiToken = "sxX51677694785";
  const type = "sms";
  const from = "EzPark";
  const text = "Your new booking slot is ";
  const to = mobileNo; // Replace with the actual phone number
  const url = `${apiURL}&apikey=${apiKey}&apitoken=${apiToken}&type=${type}&from=${from}&to=${to}&text=${text}${slotId}`;


  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log("Data:", data);

    if (data.status === "queued") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
    
}

async function Extendtime(req, res) {
  console.log(req.body);

  const query = "SELECT * FROM booking WHERE slot = '"+req.body.Slot+"' AND BookedDate = '"+req.body.BookedDate+"' AND '"+req.body.Time+"' BETWEEN StartTime AND EndTime";


  connection.query(query, async function (err, result, fields) {
    //if (err) res.send(err)
    console.log(err);
    console.log(result.length);
    if(result.length > 0){
      console.log("result0",result[0]);
      var crashBookingID = result[0].BookingID;
      const searchQuery = "SELECT * FROM ezpark.user_details where Email = ?";

      connection.query(searchQuery, result[0].user_email, async (err, data) => {
        if (err) return res.json(err);
    
        var mobileNo = data[0].MobileNo;
       // console.log("datataa",data[0]);

        var sql = "SELECT s.slot_id FROM ezpark.slot s WHERE s.availability = true AND NOT EXISTS (SELECT 1 from ezpark.booking b where s.slot_id = b.slot and b.BookedDate = '"+req.body.BookedDate+"' and '"+req.body.Time+"' BETWEEN b.StartTime AND b.EndTime)";

        connection.query(sql, async function (err, result, fields) {
          if (err) console.log(err);


          if(result.length > 0){

            var slotId = result[0].slot_id;
            console.log(slotId);

          const crashQuery = "UPDATE ezpark.booking SET slot = ? WHERE BookingID = ?";
          const crashvalues = [slotId, crashBookingID];

          connection.query(crashQuery, crashvalues, async (err, data) => {
            if (err) {
            return res.status(400).send(err);
            }
            var response = await sendRemainderMessage(mobileNo,slotId)
            console.log("responsesms",response);

            if(response == true){

            const updatquery = "UPDATE ezpark.booking SET EndTime = ? WHERE BookingID = ?";
            const updatevalues = [req.body.Time, req.body.BookID];

            connection.query(updatquery, updatevalues, (err, data) => {
            if (err) {
            return res.status(400).send(err);
            }
            return res.status(200).send("Updated");
            });
            console.log("true",true);

          }else{
            return res.status(400).send("server error");
          }


            });

          }else{
            const updatquery = "UPDATE ezpark.booking SET EndTime = ? WHERE BookingID = ?";
            const updatevalues = [req.body.Time, req.body.BookID];

            connection.query(updatquery, updatevalues, (err, data) => {
            if (err) {
            return res.status(400).send(err);
            }
            return res.status(200).send("Updated");
            });
          }
      });
      });
    }else{
      const updatquery = "UPDATE ezpark.booking SET EndTime = ? WHERE BookingID = ?";
            const updatevalues = [req.body.Time, req.body.BookID];

            connection.query(updatquery, updatevalues, (err, data) => {
            if (err) {
            return res.status(400).send(err);
            }
            return res.status(200).send("Updated");
            });
            console.log("true",true);
    }
    //res.send(result)
    console.log("all good");
});
};
module.exports = { Extendtime};
