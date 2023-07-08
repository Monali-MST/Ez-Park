import React, { useEffect, useState } from "react";
import axios from "axios";

import Bronze from "../../Assets/bronze.png";
import Gold from "../../Assets/gold.png";
import Silver from "../../Assets/silver.png";
import userBadgeImg from "../../Assets/point_picture.png";
import { getUser } from "../../helper/getUser";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import { Col, Row } from "react-bootstrap";

const UserBadge = () => {
  const [userBadge, setuserBadge] = useState([]);
  const { id } = getUser();

  useEffect(() => {
    const fetchAllPoints = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8800/api/user/assignBadge",
          { id }
        );
        console.log(res.data);
        setuserBadge(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPoints();
  }, []);
  const badgeImgList = [Gold, Silver, Bronze];

  return (
    <div>
      <Header />
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <div className="userBadge">
            <div>
              <div className="badge-level" style={{ textAlign: "center" }}>
                <img
                  src={badgeImgList[userBadge.badge_id - 1]}
                  width={"250px"}
                />
                <h3>{userBadge.badge_name}</h3>
                <h5>User Points: {userBadge.points} </h5>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserBadge;
