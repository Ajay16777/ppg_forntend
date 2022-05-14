import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

const WishCard = ({ product, remove }) => {
  return (
    <div className="cart_info">
      <Row>
        <Col lg="3">
          <div className="pro_detail">
            <div className="pro_thumb">
              <Link to={`/product/${product.product._id}`}>
                <img
                  src={product.product.image}
                  className="img-fluid"
                  alt={product.product.name}
                />
              </Link>
            </div>
          </div>
        </Col>
        <Col lg="9">
          <div className="pro_detail">
            <p className="pro_material">Product Id: #pro{product._id}</p>
            <h4 className="pro_title">
              <Link to={`/product.product/${product.product._id}`}>
                {product.product.name}
              </Link>
            </h4>
            <p className="pro_material">Material: {product.product.material}</p>
            <p className="pro_material">Design: {product.product.design}</p>
            {/* <h4 className="pro_price">
              ₹ {PRODUCT.product[0].price} <span>₹ {PRODUCT.product[0].mrp}</span>
            </h4> */}
            {/* <div className="pro_quantity mb-2">
              <InputNumber defaultValue={product.product.quantity} status="warning" />
            </div> */}
            <div className="pro_action">
              <Button
                color="danger"
                className="btn-rounded"
                onClick={(e) => remove(e, product._id)}
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
export default WishCard;
