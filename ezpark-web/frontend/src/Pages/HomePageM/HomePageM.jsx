import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const HomePageM = () => {
  return (
    <div>
      <h3>Client Side functions</h3>
      <br></br>

      <h5>Point_System Details (in nav bar, user profile)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/pointsystem">to point details</Link>
      </Button>

      <h5>Show Badge of the logged user (in user profile)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/showbadge"> To user profile</Link>
      </Button>

      <h5>Payment (in booking page)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/bookingpageb"> To booking page</Link>
      </Button>

      <h5>Refund, Refund Requests(with cancel booking button)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/cancelbooking">To cancel booking page</Link>
      </Button>

            
      <h5>Refund Requests (in client side cancel booking)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/clientrefundrequest">To Send Request page</Link>
      </Button>

      <hr></hr>

      {/* <h5>(In testing level)</h5> */}
      <h3>Admin Side functions</h3>
      <br></br>
      {/* <h5>
        points adding function (register, booking, review, rate, cancel booking,
        panalty)
      </h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/pointsaddbutton"> points add</Link>
      </Button> */}

      <h5>Discount Settings (in admin panal)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/discountsettings"> to Set Discounts page</Link>
      </Button>

      <h5>Refund Requests (in admin panal)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/adminrefundrequest">Refund Requests</Link>
      </Button>

      {/* <h5>Refund Requests (in admin panal)</h5>
      <Button variant="outline-primary" size="sm">
        <Link to="/adminrefundrequest">to Refund Requests page</Link>
      </Button> */}
    </div>
  );
};

export default HomePageM;
