import React from "react";
import { Modal, Result } from "antd";
const DisplayOrderDetails = ({ visible, paymentid, ordername }) => (
  <Modal
    visible={visible}
    okText="Ok"
    destroyOnClose
    footer={false}
    centered
    onCancel={() => window.location.reload(true)}
    width="600px"
  >
    <Result
      status="success"
      title={`Successfully Purchased ${ordername}`}
      subTitle={`Your Order number: ${paymentid}`}
    />
  </Modal>
);
export default DisplayOrderDetails;
