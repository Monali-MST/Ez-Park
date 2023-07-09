import React, { useEffect, useState } from "react";
import axios from "axios";
import Bronze from "../../Assets/bronze.png";
import Gold from "../../Assets/gold.png";
import Silver from "../../Assets/silver.png";
import userBadgeImg from "../../Assets/point_picture.png";
import userImg from "../../Assets/point_picture.png";
import { getUser } from "../../helper/getUser";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import { Button, Col, Row } from "react-bootstrap";

const UserBadge = () => {
  const [userBadge, setUserBadge] = useState({});
  const { id } = getUser();

  useEffect(() => {
    const fetchUserBadge = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8800/api/user/assignBadge",
          { id }
        );
        console.log(res.data);
        setUserBadge(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserBadge();
  }, []);

  const badgeImgList = [Gold, Silver, Bronze];

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { id } = getUser();
        const res = await axios.post(
          "http://localhost:8800/api/user/get_user",
          { id }
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="page-container">
        <div className="userBadge">
          <div>
            <div className="badge-level text-center">
              <img src={badgeImgList[userBadge.badge_id - 1]} width={100} />
              <h3>{userBadge.badge_name}</h3>
              <h5>User Points: {userBadge.points} </h5>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="profile-details">
            <div className="profile-picture">
              <img
                src={userImg}
                alt="Profile"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="profile-data">
              <p>User ID: {user.userID}</p>
              <p>First Name: {user.firstName}</p>
              <p>Last Name: {user.lastName}</p>
              <p>Address Line 1: {user.addFLine}</p>
              <p>Address Line 2: {user.addSLine}</p>
              <p>Street: {user.street}</p>
              <p>City: {user.city}</p>
              <p>Post Code: {user.postCode}</p>
              <p>Mobile No: {user.mobileNo}</p>
              <p>Fixed Line: {user.fixedLine}</p>
              <p>NIC: {user.NIC}</p>
              <p>Email: {user.email}</p>
              <Button>Change Password</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBadge;
