import React from 'react'
import Form from 'react-bootstrap/Form';

const DiscountSettings = () => {
  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Exp. Date</Form.Label>
        <Form.Control type="date" placeholder="Enter exp. date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="discount" placeholder="discount name" />
      </Form.Group>
    </Form>
    </div>
  )
}

export default DiscountSettings
