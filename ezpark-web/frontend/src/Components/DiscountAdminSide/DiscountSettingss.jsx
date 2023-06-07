// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";

// const DiscountSettingss = () => {
//   const navigate = useNavigate();

//   const [discountDetails, setdiscountDetails] = useState({
//     exp_date: "2023-07-15",
//     discount_data: [],
//   });

//   const [discount_data, setdiscount_data] = useState(
//     {
//       discount_name: "Gold Sales discount",
//       badge_id: 1,
//       discount_precentage: 65,
//     },
//     {
//       discount_name: "Silver Sales discount",
//       badge_id: 2,
//       discount_precentage: 45,
//     },
//     {
//       discount_name: "Bronze Sales discount",
//       badge_id: 3,
//       discount_precentage: 35,
//     }
//   );

//   // const handleDiscountData = (e, i) => {
//   //   const discountClone = [...discountDetails.discount_data]

//   //   discountClone[i] = e.target.value

//   //   setdiscountDetails({
//   //     ...discountDetails,
//   //     discount_data: discountClone
//   //   })

//   // }

//   const handleChange = (name, value) => {
//     console.log(name);
//     setdiscount_data((prev) => ({...prev,[name]: value}));
//     console.log(discount_data[0])
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();

//     // if (
//     //   !discountDetails.exp_date ||
//     //   !discountDetails.discount_data[0].discount_name ||
//     //   !discountDetails.discount_data[0].badge_id ||
//     //   !discountDetails.discount_data[0].discount_precentage
//     // ) {
//     //   alert("Please fill out all fields");
//     //   return;
//     // }

//     try {
//       // axios
//       //   .post("http://localhost:8800/api/user/updateDiscount", discountDetails)
//         // .then((res) => {
//         //   console.log(res);
//         //   navigate("/");
//         // });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div style={{ margin: "5rem" }}>
//       <Form>
//         <Form.Group as={Row} className="mb-3" controlId="formHorizontal">
//           <Form.Label column sm={2}>
//             Exp. Date
//           </Form.Label>
//           <Col sm={10}>
//             <Form.Control
//               type="date"
//               placeholder="Enter exp. date"
//               onChange={handleChange}
//               name="exp_date"
//               autoFocus
//               required
//             />
//           </Col>
//         </Form.Group>
//         <Form.Group
//           as={Row}
//           className="mb-3"
//           controlId="formHorizontalPassword"
//         >
//           <Form.Label column sm={2}>
//             Discount Name:
//           </Form.Label>
//           <Col sm={10}>
//             <Form.Control
//               type="text"
//               placeholder="ex: Gold Christmas Discounts"
//               onChange={(value) => handleChange("discount_data[0].discount_name", value)}
//               name="discount_data[0].discount_name"
//               autoFocus
//               required
//             />
//           </Col>
//         </Form.Group>
//         {/* <Form.Group
//           as={Row}
//           className="mb-3"
//           controlId="formHorizontalPassword"
//         >
//           <Form.Label column sm={2}>
//             Badge Owner:
//           </Form.Label>
//           <Col sm={10}>
//             <Form.Select defaultValue="Choose...">
//               <option>1- Gold Badge</option>
//               <option>2- Silver Badge</option>
//               <option>3- Bronze Badge</option>
//             </Form.Select>
//           </Col>
//         </Form.Group> */}
//         <Form.Group
//           as={Row}
//           className="mb-3"
//           controlId="formHorizontalPassword"
//         >
//           <Form.Label column sm={2}>
//             Discount Precentage Gold:
//           </Form.Label>
//           <Col sm={10}>
//             <Form.Control
//               type="text"
//               placeholder="ex: 15%"
//               onChange={handleChange}
//               name="discount_data[0].discount_percentage"
//               autoFocus
//               required
//             />
//           </Col>
//         </Form.Group>
//         <Form.Group
//           as={Row}
//           className="mb-3"
//           controlId="formHorizontalPassword"
//         >
//           <Form.Label column sm={2}>
//             Discount Precentage Silver:
//           </Form.Label>
//           <Col sm={10}>
//             <Form.Control
//               type="text"
//               placeholder="ex: 10%"
//               onChange={handleChange}
//               name="discount_data[0].discount_percentage"
//               autoFocus
//               required
//             />
//           </Col>
//         </Form.Group>
//         <Form.Group
//           as={Row}
//           className="mb-3"
//           controlId="formHorizontalPassword"
//         >
//           <Form.Label column sm={2}>
//             Discount Precentage Browns:
//           </Form.Label>
//           <Col sm={10}>
//             <Form.Control
//               type="text"
//               placeholder="ex: 5%"
//               onChange={handleChange}
//               name="discount_data[0].discount_percentage"
//               autoFocus
//               required
//             />
//           </Col>
//         </Form.Group>
//         <Form.Group as={Row} className="mb-3">
//           <Col sm={{ span: 10, offset: 2 }}>
//             <Button variant="primary" onClick={handleClick}>
//               Update
//             </Button>
//           </Col>
//         </Form.Group>
//       </Form>
//     </div>
//   );
// };

// export default DiscountSettingss;
