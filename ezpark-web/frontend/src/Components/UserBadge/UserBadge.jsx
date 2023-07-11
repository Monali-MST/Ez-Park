import React, { useEffect, useState } from "react";
import axios from "axios";
import Bronze from "../../Assets/bronze.png";
import Gold from "../../Assets/gold.png";
import Silver from "../../Assets/silver.png";
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

  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const { id } = getUser();
  //       const res = await axios.post(
  //         "http://localhost:8800/api/user/get_user",
  //         { id }
  //       );
  //       setUser(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  return (
    <div className="userBadge">
      <div>
        {!userBadge.err ? (
          <div className="badge-level text-center m-5">
            <img src={badgeImgList[userBadge.badge_id - 1]} width={200} />
            <h3>{userBadge.badge_name}</h3>
            <h5>User Points: {userBadge.points} </h5>
          </div>
        ) : (
          // <div className="text-center m-5 p-5">
          //   <i><center>{userBadge.err}</center></i>
          // </div>
          <div className="badge-level text-center m-5">
            <img src={userImg} width={200} />
            <h3>{userBadge.err}</h3>
            <h5>User Points: {userBadge.points} </h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBadge;
