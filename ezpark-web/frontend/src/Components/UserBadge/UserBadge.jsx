import React, { useEffect, useState } from "react";
import axios from "axios";

import Bronze from "../../Assets/bronze.png";
import Gold from "../../Assets/gold.png";
import Silver from "../../Assets/silver.png";
import userBadgeImg from "../../Assets/point_picture.png";
import { getUser } from "../../helper/getUser";

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
    <div className="userBadge">
      <div>
        <div className="badge-level" style={{ textAlign: "center" }}>
          <img src={badgeImgList[userBadge.badge_id - 1]} width={"250px"} />
          <h3>{userBadge.badge_name}</h3>
          <h3>{userBadge.badge_id} </h3>
        </div>
      </div>
    </div>
  );
};

export default UserBadge;
