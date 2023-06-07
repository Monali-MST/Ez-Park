import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const DiscountSettings = () => {
  const navigate = useNavigate();

  const [discountDetails, setDiscountDetails] = useState({
    exp_date: "",
    discount_data: [
      {
        discount_name: "",
        badge_id: 1,
        discount_percentage: 0,
      },
      {
        discount_name: "",
        badge_id: 2,
        discount_percentage: 0,
      },
      {
        discount_name: "",
        badge_id: 3,
        discount_percentage: 0,
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "exp_date") {
      setDiscountDetails((prev) => ({
        ...prev,
        exp_date: value,
      }));
    } else {
      const updatedDiscountData = discountDetails.discount_data.map(
        (discount, index) => {
          if (name.startsWith(`discount_name_${index}`)) {
            return {
              ...discount,
              discount_name: value,
            };
          } else if (name.startsWith(`discount_percentage_${index}`)) {
            return {
              ...discount,
              discount_percentage: parseFloat(value),
            };
          }
          return discount;
        }
      );

      setDiscountDetails((prev) => ({
        ...prev,
        discount_data: updatedDiscountData,
      }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
    //   axios
    //     .put("http://localhost:8800/api/user/updateDiscount", discountDetails)
    //     .then((res) => {
    //       console.log(res);
    //       navigate("/");
    //     });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ margin: "5rem" }}>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Exp. Date
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
        {discountDetails.discount_data.map((discount, index) => (
          <div key={index}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId={`discountName${index}`}
            >
              <Form.Label column sm={2}>
                Discount Name:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Enter discount name"
                  value={discount.discount_name}
                  onChange={handleChange}
                  name={`discount_name_${index}`}
                  autoFocus
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId={`discountPercentage${index}`}
            >
              <Form.Label column sm={2}>
                Percentage:
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Enter discount percentage"
                  value={discount.discount_percentage}
                  onChange={handleChange}
                  name={`discount_percentage_${index}`}
                  autoFocus
                  required
                />
              </Col>
            </Form.Group>
          </div>
        ))}
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="primary" onClick={handleClick}>
              Update Discounts
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default DiscountSettings;
