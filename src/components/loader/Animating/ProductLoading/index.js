import React from "react";
import { Col, Row } from "reactstrap";
import { Skeleton } from "antd";

const ProductLoading = (props) => (
  <Row>
    <Col lg="5">
      <Skeleton.Image />
    </Col>
    <Col lg="7">
      <Skeleton paragraph={{ rows: 6 }} />
    </Col>
  </Row>
);
export default ProductLoading;
