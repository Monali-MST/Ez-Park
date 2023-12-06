import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import discountMan from "../../Assets/discount-man.jpg";
import Header from "../Header/Header";
import SidebarAdmin from "../Sidebar/SidebarAdmin";
import AdminHeader from "../Header/AdminHeader";
import SharedToast from "../../helper/SharedToast";

const DiscountSettings = () => {
  const [showToast, setShowToast] = useState(false);

  const [discountDetails, setDiscountDetails] = useState({
    exp_date: "",
    discount_name: "",
    gold_discount_precentage: 0,
    silver_discount_precentage: 0,
    bronze_discount_precentage: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const discountData = {
      exp_date: discountDetails.exp_date,

      discount_data: [
        {
          discount_name: "Gold " + discountDetails.discount_name,
          badge_id: 1,
          discount_percentage: discountDetails.gold_discount_precentage,
        },
        {
          discount_name: "Silver " + discountDetails.discount_name,
          badge_id: 2,
          discount_percentage: discountDetails.silver_discount_precentage,
        },
        {
          discount_name: "Bronze " + discountDetails.discount_name,
          badge_id: 3,
          discount_percentage: discountDetails.bronze_discount_precentage,
        },
      ],
    };

    try {
      axios
        .put("http://localhost:8800/api/user/updateDiscount", discountData)
        .then((res) => {
          setShowToast(!showToast);
          handleReset();
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiscountDetails({ ...discountDetails, [name]: value });
  };

  const handleReset = () => {
    setDiscountDetails({
      exp_date: "",
      discount_name: "",
      gold_discount_precentage: 0,
      silver_discount_precentage: 0,
      bronze_discount_precentage: 0,
    });
  };

  return (
    <div>
      <AdminHeader />
      <SidebarAdmin />
      <div className="page-container">
        <div>
          <Row>
            <Col>
              <div
                className="center-content"
                style={{
                  marginLeft: "5rem",
                  marginTop: "2rem",
                  maxWidth: "500px",
                }}
              >
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalExpDate"
                  >
                    <Form.Label column sm={6}>
                      Exp. Date<span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="date"
                        placeholder="Enter exp. date"
                        value={discountDetails.exp_date}
                        onChange={handleChange}
                        name="exp_date"
                        autoFocus
                        required
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={6}>
                      Discount Name:<span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="text"
                        placeholder="Enter discount name"
                        value={discountDetails.discount_name}
                        onChange={handleChange}
                        name="discount_name"
                        required
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={6}>
                      Gold badge Percentage (%):
                      <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="number"
                        placeholder="Enter discount percentage"
                        value={
                          discountDetails.gold_discount_precentage > 0
                            ? discountDetails.gold_discount_precentage
                            : ""
                        }
                        onChange={handleChange}
                        name="gold_discount_precentage"
                        required
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={6}>
                      Silver badge Percentage (%):
                      <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="number"
                        placeholder="Enter discount percentage"
                        value={
                          discountDetails.silver_discount_precentage > 0
                            ? discountDetails.silver_discount_precentage
                            : ""
                        }
                        onChange={handleChange}
                        name="silver_discount_precentage"
                        required
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={6}>
                      Bronze badge Percentage (%):
                      <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="number"
                        placeholder="Enter discount percentage"
                        value={
                          discountDetails.bronze_discount_precentage > 0
                            ? discountDetails.bronze_discount_precentage
                            : ""
                        }
                        onChange={handleChange}
                        name="bronze_discount_precentage"
                        required
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 9, offset: 3 }}>
                      <Button
                        variant="secondary"
                        onClick={handleReset}
                        style={{ marginLeft: "4rem" }}
                      >
                        Reset
                      </Button>{" "}
                      <Button
                        variant="warning"
                        type="submit"
                        style={{ marginLeft: "1rem" }}
                      >
                        Set Discounts
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              </div>
            </Col>
            <Col>
              <div>
                <img
                  style={{
                    height: "400px",
                    width: "400px",
                    marginTop: "6rem",
                  }}
                  src={discountMan}
                  alt="discountMan"
                />
              </div>
            </Col>
          </Row>
          {showToast ? (
            <SharedToast
              title="Discount Settings"
              description="Seasonal Discounts has Updated successfully!"
              show={showToast}
              onHide={() => {
                setShowToast(false);
              }}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscountSettings;
