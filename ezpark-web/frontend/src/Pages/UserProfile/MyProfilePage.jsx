import React, { useEffect } from "react";
import Logo from "../../Assets/logo_without_text.png";
import "../../styles/MyProfilePage.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import { useNavigate, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import Image1 from "../../Assets/profile.webp";
import { getUser } from "../../helper/getUser";
import UserBadge from "../../Components/UserBadge/UserBadge";

export default function MyProfilePage() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNo, setContact] = useState("");
  const [Password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [dataSet, setDataSet] = useState([
    {
      FirstName: "",
      LastName: "",
      Email: "",
      MobileNo: "",
      Password: "",
    },
  ]);
  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.clear();
    alert("logout successfully");
    navigate("/");
  };

  useEffect(() => {
    var Email = localStorage.getItem("Email");
    const { id } = getUser();
    axios
      .post("http://localhost:8800/api/user/get_user", { id })
      .then((res) => {
        if (res.data === "not valid") {
          localStorage.clear();
          window.location = "/";
        }
        if (res.status === 200) {
          setDataSet({
            FirstName: res.data[0].FirstName,
            LastName: res.data[0].LastName,
            Email: res.data[0].Email,
            MobileNo: res.data[0].MobileNo,
            Password: res.data[0].Password,
          });
        } else {
          alert("something went wrong");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      FirstName == "" &&
      LastName == "" &&
      Email == "" &&
      MobileNo == "" &&
      Password == ""
    ) {
      alert("All fields can't empty");
      return;
    }

    if (
      MobileNo != "" &&
      (MobileNo.length != 10 || !/^\d+$/.test(MobileNo) || MobileNo[0] != "0")
    ) {
      alert("mobile number not valide");
      return false;
    }

    if (
      Email != "" &&
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi.test(
        Email
      )
    ) {
      alert("Error format Email");
      return;
    }

    // if (Password != "" && Password != confirmPassword) {
    //   alert("password dosen't match");
    // }

    if (FirstName == "") {
      setFirstName(dataSet.FirstName);
    }

    if (LastName == "") {
      setLastName(dataSet.LastName);
    }

    if (Email == "") {
      setEmail(dataSet.Email);
    }

    if (MobileNo == "") {
      setContact(dataSet.MobileNo);
    }

    if (Password == "") {
      setPassword(dataSet.Password);
    }

    console.log(FirstName, LastName, Email, Password, MobileNo);
  };
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="page-container">
        <Row>
          <Col>
            {/* <img className="profile" src={Image1} alt="profile picture" /> */}
            <UserBadge />
          </Col>
          <Col>
            <div className="wrapper">
              <div className="form">
                <div className="inputfield">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder={dataSet.FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="inputfield">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder={dataSet.LastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="inputfield">
                  <label>Email Address</label>
                  <input
                    type="text"
                    className="input"
                    placeholder={dataSet.Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="inputfield">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="input"
                    placeholder={dataSet.MobileNo}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>

                <div className="inputfield">
                  <label>Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="*****"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Link style={{ textDecoration: "none", marginLeft: "22rem" }}>
                  chanage password
                </Link>

                <div className="inputfield">
                  <input
                    type="submit"
                    value="submit"
                    className="btn"
                    onClick={handleSubmit}
                  />
                </div>
                {/* <button class="logout" onClick={handleLogOut}>
                 LOG OUT
                </button> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
