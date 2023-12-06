const queries = require("../../../mysql/sql");
var connection = require("../../../service/connection");
const { calculateDiscount } = require("../use_p_system/calculateDiscount");
const { assignBadges } = require("../use_p_system/assignBadges");

// Function to calculate the time duration between two time values
function getTimeDuration(start, end) {
  const startTime = new Date(`1970-01-01 ${start}`);
  const endTime = new Date(`1970-01-01 ${end}`);

  // Calculate the difference in milliseconds
  const duration = endTime - startTime;
  console.log(duration);

  // Convert the duration from milliseconds to desired units (e.g., hours, minutes)
  const hours = Math.floor(duration / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duration % (1000 * 60)) / 1000);

  // Return the duration as an object or in a desired format
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

// Handler function to get temporary booking details
async function get_temp_booking_details(req, res) {
  const { temp_booking_id } = req.body;
  const temp_booking_data = {
    book_id: temp_booking_id,
    slot_name: -1,
    amount: 0,
    email: "",
    netamount: 0,
  };

  // Query the database to retrieve data based on temp_booking_id
  connection.query(
    queries.get_data_by_temp_booking_id,
    [temp_booking_id],
    (err, data) => {
      if (err) return res.json(err);
      const temp_data = data[0];
      console.log(temp_data);
      temp_booking_data.slot_name = temp_data.slot;
      temp_booking_data.email = temp_data.user_email;
      console.log();

      // Extract slot data from the retrieved data
      let slot_rows = Object.values(JSON.parse(JSON.stringify(data)));
      const slot_data = slot_rows[0].slot;

      // Query the database to get the slot price based on the slot ID
      connection.query(
        queries.get_slot_price_by_slot_id,
        [slot_data],
        (error, result) => {
          if (error) return res.json(error);
          let rows = Object.values(JSON.parse(JSON.stringify(result)));

          const slot_price = rows[0].slot_price;
          console.log(slot_price);

          // Calculate the duration and multiply it with the slot price to get the total amount
          const duration = getTimeDuration(
            temp_data.StartTime,
            temp_data.EndTime
          );
          console.log(temp_data.EndTime, temp_data.StartTime, duration);
          temp_booking_data.amount = slot_price * duration.hours;
          console.log(temp_booking_data.amount);
        //   let user_Badge = assignBadges(124);
        //   let netamt_discount_precentage = calculateDiscount(user_Badge);
        //   temp_booking_data.netamount = temp_booking_data.amount-(temp_booking_data.amount*netamt_discount_precentage);

          // Send the temporary booking data as the response
          return res.send(temp_booking_data);
        }
      );
    }
  );
}

// Export the handler function
module.exports = { get_temp_booking_details };
