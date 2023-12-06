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
    "UPDATE User_Details SET `UserPoints`='?', `Badge`= ? WHERE UserID = '?';",
  update_discount_data:
    "UPDATE `ezpark`.`discounts_details` SET `Discounts_Name` = ?, `Discount` = ?, `ExpDate` = ? WHERE (`BadgeId` = ? );",

  //point system details get
  get_badge_details: "SELECT * FROM Badge_Details;",
  get_discount_details: "SELECT * FROM Discounts_Details;",
  get_point_details: "SELECT * FROM Point_Details;",
  get_refund_level_details: "SELECT * FROM Refund_Level;",
  get_badge_details_by_userid:
    "SELECT Badge_ID, Badge_Name, Minimum_Points FROM user_details JOIN badge_details ON user_details.Badge = badge_details.Badge_ID WHERE UserID = '?';",

  //refund request
  get_refund_requests:
    "SELECT Refund_Request.Refund_Request_id, Refund_Request.Reason, Refund_Request.Requested_date, Refund_Request.Requested_date, Refund_Request.Booking_id, Payment_Details.PaymentAmount ,Payment_Details.Payment_intent_id FROM Payment_Details JOIN Booking ON Payment_Details.Booking_id = Booking.BookingID JOIN Refund_Request ON Booking.BookingID = Refund_Request.Booking_id;",
  delete_refund_requests:
    "DELETE FROM `EzPark`.`Refund_Request` WHERE (`Refund_Request_id` = ?);",
  insert_refund_requests:
    "INSERT INTO `EzPark`.`Refund_Request` (`Reason`, `Requested_date`, `Booking_id`) VALUES (?);",

  //payment
  insert_payment_details:
    "INSERT INTO `EzPark`.`payment_details` (`PaymentDate`, `PaymentTime` , `PaymentAmount`, `Booking_id`, `Payment_intent_id`) VALUES (?);",
  get_payment_details: "SELECT * FROM ezpark.payment_details;",
  get_paid_amount_by_bookID:
    "SELECT * FROM ezpark.payment_details WHERE Booking_id =?;",

  //temp booking
  get_data_by_temp_booking_id:
    "SELECT * FROM ezpark.temp_booking WHERE BookingID='?';",
  get_slot_price_by_slot_id:
    "SELECT slot_price FROM ezpark.slot WHERE slot_id = '?';",

  //booking
  insert_booking_cancelation_details:
    "INSERT INTO `ezpark`.`bookingcancellation` (`CancelDate`, `BookingID`) VALUES (?);",
  update_cancel_booking_status:
    "UPDATE `ezpark`.`booking` SET `cancel` = '1' WHERE (`BookingID` = '?');",

  //refund
  get_booking_by_bookID: "SELECT * FROM ezpark.booking WHERE BookingID= ?;",
  insert_refund_details:
    "INSERT INTO `ezpark`.`refund_details` (`Refund_amount`, `Refund_level_id`, `RefundDate`, `Booking_id`) VALUES (?);",
  //user_details
  get_user_details: "SELECT * FROM ezpark.user_details WHERE UserID = '?';",






  

  //userregister
  insert_user_details:
    "INSERT INTO `EzPark`.`User_Details` (`FirstName`, `LastName`, `AddFLine`, `AddSLine`, `Street`, `City`, `PostCode`, `MobileNo`, `FixedLine`, `NIC`, `Email`,`Password`) VALUES (?)",

  //userlogin
  get_user_UN_PW:
    "SELECT*FROM `EzPark`.`User_Details` WHAERE `Fname`=? AND `Pword`=?",

  get_user_by_email:
    "SELECT * from ezpark.user_details where Email =?",

  //vehicle
  save_vehicle_details:
    "INSERT INTO `EzPark`.`Vehicle` (`VehicleNo`, `VehicleType`,`Email`) VALUES (?);",
  get_vehicleNo_by_email:
    "SELECT VehicleNo FROM ezpark.vehicle WHERE Email =?;",
  get_vehicles_by_email:
    "SELECT VehicleType,VehicleNo FROM ezpark.vehicle WHERE Email =?;",
  //otp
  delete_otp: "DELETE FROM ezpark.otp WHERE identifier=(?)",
  insert_otp:
    "INSERT INTO `ezpark`.`otp` (`identifier`, `otp_val`) VALUES ((?), (?));",
  get_otp_by_id: "SELECT otp_val FROM ezpark.otp WHERE identifier=(?)",

  //booking
  set_temp_booking_endtime:
    "UPDATE ezpark.temp_booking SET EndTime = ? WHERE BookingID = ?",

  search_userdetails_by_email:
    "SELECT * FROM ezpark.user_details where Email = ?",
  save_booking:
    "INSERT INTO `ezpark`.`booking` (`BookingID`, `BookedDate`, `StartTime`, `EndTime`, `VehicleNo`, `BookingMethod`) VALUES (?);",
  get_user_Bookings: "SELECT * FROM ezpark.booking where user_email=?;",

  save_tempto_bookings:
    "INSERT INTO `ezpark`.`booking` (`BookingID`,`BookedDate`, `StartTime`, `EndTime`, `VehicleNo`, `BookingMethod`,`slot`,`user_email`) VALUES (?);",
  delete_booking_details: "DELETE FROM ezpark.temp_booking WHERE BookingID=(?)",
  get_booking_from_temp:
    "SELECT * FROM ezpark.temp_booking where user_email=?;",
  //user
  get_userID_by_email: "SELECT UserID FROM ezpark.user_details WHERE Email =?;",
  get_userDetails_by_email:
    "SELECT FirstName,LastName,City,MobileNo,Email,Password FROM ezpark.user_details WHERE Email =(?);",
};

module.exports = queries;
