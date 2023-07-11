import React, { useEffect, useState } from "react";
import axios from "axios";
import Bronze from "../../Assets/bronze.png";
import Gold from "../../Assets/gold.png";
import Silver from "../../Assets/silver.png";
import userImg from "../../Assets/blue-badge";
import { getUser } from "../../helper/getUser";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import { Button, Col, ProgressBar, Row } from "react-bootstrap";

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
  const now = userBadge.points / userBadge.minpoint * 100;

  return (
    <div className="userBadge">
      <div>
        {!userBadge.err ? (
          <div className="badge-level text-center m-5 p-4">
            <a href="/pointsystem">
              <img src={badgeImgList[userBadge.badge_id - 1]} width={200} />
            </a>
            <h3>{userBadge.badge_name}</h3>
            <h5>User Points: {userBadge.points} </h5>
            <div className="text-center mx-5 px-5 d-flex align-items-center">
              <ProgressBar
                striped
                now={now}
                label={`${now}%`}
                visuallyHidden
                className="flex-grow-1"
              />
              <img
                src={badgeImgList[userBadge.badge_id - 2]}
                width={50}
                className="ml-0"
              />
            </div>
          </div>
        ) : (
          <div className="badge-level text-center m-4 p-4">
            <a href="/pointsystem">
              <img src={userImg} width={300} />
            </a>
            <i>
              <h5 className="fw-900 text-danger" style={{ fontSize: "15px" }}>
                {userBadge.err}
              </h5>
            </i>
            <div className="text-center mx-5 px-5 d-flex align-items-center">
              <ProgressBar
                striped
                now={now}
                label={`${now}%`}
                visuallyHidden
                className="flex-grow-1"
              />
              <img
                src={badgeImgList[userBadge.badge_id - 2]}
                width={50}
                className="ml-0"
              />
            </div>
            <h5>User Points: {userBadge.points} </h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBadge;
