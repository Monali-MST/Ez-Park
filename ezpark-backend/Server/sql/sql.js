const queries = {

  //point system get data
  get_no_of_points_by_action_id:
    "SELECT NoOfPoints_PerHour FROM EzPark.Point_Details WHERE Action_ID = '?';",
  get_no_of_points_by_user_id:
    "SELECT UserPoints FROM User_Details WHERE UserID = '?';",
  get_badge_data: "SELECT * FROM Badge_Details;",
  get_discount_by_badge_id:
    "SELECT * FROM Discounts_Details WHERE BadgeId = '?'",



  //point system update data
  update_no_of_points_in_user:
    "UPDATE User_Details SET `UserPoints`='?' WHERE UserID = '?';",
  update_discount_data:
    "UPDATE `ezpark`.`discounts_details` SET `Discounts_Name` = ?, `Discount` = '?', `ExpDate` = ? WHERE (`BadgeId` = ? );",



  //point system details get
  get_badge_details: "SELECT * FROM Badge_Details;",
  get_discount_details: "SELECT * FROM Discounts_Details;",
  get_point_details: "SELECT * FROM Point_Details;",
  get_refund_level_details: "SELECT * FROM Refund_Level;",



  //refund request
  get_refund_requests:
    "SELECT Refund_Request.Refund_Request_id, Refund_Request.Reason, Refund_Request.Requested_date, Refund_Request.Requested_date, Refund_Request.Booking_id, Payment_Details.PaymentAmount FROM Payment_Details JOIN Booking ON Payment_Details.Booking_id = Booking.BookingID JOIN Refund_Request ON Booking.BookingID = Refund_Request.Booking_id;",
  delete_refund_requests:
    "DELETE FROM `EzPark`.`Refund_Request` WHERE (`Refund_Request_id` = ?);",
  insert_refund_requests:
    "INSERT INTO `EzPark`.`Refund_Request` (`Reason`, `Requested_date`, `Booking_id`) VALUES (?);",



  //payment
  insert_payment_details:
    "INSERT INTO `EzPark`.`payment_details` (`PaymentDate`, `PaymentAmount`, `Booking_id`, `Payment_intent_id`) VALUES (?);",



  //refund

};




module.exports = queries;
