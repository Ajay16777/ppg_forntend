import { InputNumber } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

const CartCard = ({ data, remove }) => {
  const PRODUCT = JSON.parse(data.variant_data);
  return (
    <div className="cart_info">
      <Row>
        <Col lg="3">
          <div className="pro_detail">
            <div className="pro_thumb">
              <Link to={`/product/${data.product._id}`}>
                <img
                  src={data.product.image}
                  className="img-fluid"
                  alt={data.product.name}
                />
              </Link>
            </div>
          </div>
        </Col>
        <Col lg="9">
          <div className="pro_detail">
            <h5 className="pro_brand">{data.product.brand}</h5>
            <h4 className="pro_title">
              <Link to={`/product/${data.product._id}`}>
                {data.product.name}
              </Link>
            </h4>
            <p className="pro_material">Material: {data.product.material}</p>
            <h4 className="pro_price">
              ₹ {PRODUCT.price} <span>₹ {PRODUCT.mrp}</span>
            </h4>
            <div className="pro_quantity mb-2">
              <InputNumber defaultValue={data.quantity} status="warning" />
            </div>
            <div className="pro_action">
              <Button
                color="danger"
                className="btn-rounded"
                onClick={(e) => remove(e, data._id)}
              >
                <span className="lnr lnr-cross"></span>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default CartCard;
