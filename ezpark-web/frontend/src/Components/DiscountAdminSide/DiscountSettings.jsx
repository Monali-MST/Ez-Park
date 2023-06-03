import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const DiscountSettings = () => {
  return (
    <div style= {{margin:"5rem"}}>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Exp. Date
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="date" placeholder="Enter exp. date" />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Discount Name:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="ex: Gold Christmas Discounts"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Badge Owner:
          </Form.Label>
          <Col sm={10}>
            <Form.Select defaultValue="Choose...">
              <option>1- Gold Badge</option>
              <option>2- Silver Badge</option>
              <option>3- Bronze Badge</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Discount Precentage:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="ex: 15%" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default DiscountSettings;
