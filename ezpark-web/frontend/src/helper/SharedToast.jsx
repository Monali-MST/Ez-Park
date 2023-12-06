import React from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import LOGO from "../Assets/logo_without_text.png";
const SharedToast = (props) => {
  return (
    <ToastContainer
      {...props}
      className="position-static"
      position="bottom-end"
    >
      <Toast onClose={props.onHide} show={props.show} delay={6000}>
        <Toast.Header>
          <img src={LOGO} width={"25px"} className="rounded me-2" alt="" />
          <strong className="me-auto">Ez Park</strong>
          <small className="text-muted">{props.title}</small>
        </Toast.Header>
        <Toast.Body>{props.description}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default SharedToast;
