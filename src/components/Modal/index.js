import React from "react";
import { Modal } from "antd";
import Interweave from "interweave";
const DummyModal = ({
  visible,
  children,
  title,
  rules,
  handlemodal,
  width,
  hidefooter,
  closable,
}) => {
  return (
    <Modal
      title={title}
      centered
      visible={visible}
      width={width ? width : "100%"}
      destroyOnClose
      onOk={(e) => handlemodal(e, false)}
      onCancel={(e) => handlemodal(e, false)}
      cancelButtonProps={{ hidden: true }}
      footer={hidefooter}
      closable={closable ? false : true}
      maskClosable={closable ? false : true}
    >
      {rules && <Interweave content={rules} />}
      {children}
    </Modal>
  );
};
export default DummyModal;
