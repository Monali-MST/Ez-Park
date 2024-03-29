import React from "react";
import Button from "react-bootstrap/Button";
import {
  FaRegEdit,
  FaRegCheckSquare,
  FaRegCreditCard,
  FaUserCircle,
  FaCarAlt,
  FaRegQuestionCircle,
} from "react-icons/fa";

const UserBoard = () => {
  return (
    <div
      className="container userdashboard"
      style={{ marginLeft: "50px", marginBottom: "10px" }}
    >
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderColor: "#FAA41E" }}>
            <div className="card-body">
              <h5 className="card-title">Book a Parking Spot</h5>
              <p className="card-text">
                <FaRegEdit />
              </p>
              <Button href="/SlotSelection" className="btn-dark">
                Go to Booking
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderColor: "#FAA41E" }}>
            <div className="card-body">
              <h5 className="card-title">My Bookings</h5>
              <p className="card-text">
                <FaRegCheckSquare />
              </p>
              <Button href="/mybooking" className="btn-dark">
                Go to My Booking
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderColor: "#FAA41E" }}>
            <div className="card-body">
              <h5 className="card-title">Payment History</h5>
              <p className="card-text">
                <FaRegCreditCard />
              </p>
              <Button href="/mybooking" className="btn-dark">
                Go to My Booking
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderColor: "#FAA41E" }}>
            <div className="card-body">
              <h5 className="card-title">Profile Settings</h5>

              <p className="card-text">
                <FaUserCircle />
              </p>

              <Button href="/myaccount/:id" className="btn-dark">
                Go to Profile
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderColor: "#FAA41E" }}>
            <div className="card-body">
              <h5 className="card-title">Support</h5>
              <p className="card-text">
                <FaRegQuestionCircle />
              </p>

              <Button href="/support" className="btn-dark">
                Support
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderColor: "#FAA41E" }}>
            <div className="card-body">
              <h5 className="card-title">My Vehicle Details</h5>
              <p className="card-text">
                <FaCarAlt />
              </p>

              <Button href="/vehicledetails" className="btn-dark">
                Vehicle Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBoard;
