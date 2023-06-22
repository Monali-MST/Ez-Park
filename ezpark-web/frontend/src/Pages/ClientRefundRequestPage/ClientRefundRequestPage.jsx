import React, { useState } from "react";
import ClientRefundRequest from "../../Components/RefundClientSide/ClientRefundRequest";

const ClientRefundRequestPage = () => {
  
  const [modalShow, setModalShow] = useState(true);
  
  return (
    <div>
      <ClientRefundRequest
        bookingid={1}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default ClientRefundRequestPage;
