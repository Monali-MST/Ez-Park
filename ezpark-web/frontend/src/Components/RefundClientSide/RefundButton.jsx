// // Import the required libraries
// import React from "react";
// import { useState } from 'react';
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// const RefundButton = () => {
//   const [show, setShow] = useState(true);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleRefund = async () => {
//     // Send payment method ID to backend for refund
//     const response = await fetch("http://localhost:8800/refund", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ paymentMethodId: "pm_1MtWLhKdpK5vl1GehhxGDK5e" }),
//     });

//     if (response.ok) {
//       // Handle successful refund
//       console.log("Refund successful");
//     } else {
//       // Handle refund error
//       console.error("Error refunding payment:", response.statusText);
//     }
//   };

//   return (
//     <div
//       className="modal show"
//       style={{ display: "block", position: "initial" }}
//     >
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Refund</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you are able to refund! Would you like to?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="warning" onClick={handleRefund}>
//             Get Refund
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
    
//   );
// };
// export default RefundButton;
