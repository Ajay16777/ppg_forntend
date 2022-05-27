import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";

// Custom Components
import CartCard from "../Cards/CartCard";

// APi
import Dataservices from "../../services/requestApi";
const CartAll = ({ data }) => {
  const [total_amount, setTotalAmount] = useState("");
  useEffect(() => {
    const getTotalAmount = () => {
      let Data = data;
      var amount = 0;
      for (let item of Data) {
        amount += ~~item.total_amount;
      }
      setTotalAmount(amount);
    };
    getTotalAmount();
  }, [data]);
  const RemoveCart = async (e, id) => {
    e.preventDefault();
    try {
      const res = await Dataservices.CartDelete(id);
      if (res.data.status_code === 200) {
        window.location.reload(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col lg="7">
          <div className="all_cart">
            <div className="heading">
              <h1>
                My <span>Cart ({data && data.length})</span>
              </h1>
            </div>
            {data &&
              data.map((item) => (
                <CartCard data={item} key={item._id} remove={RemoveCart} />
              ))}
          </div>
        </Col>
        <Col lg="5">
          <div className="all_cart price_details ">
            <div className="heading">
              <h1>Price Details</h1>
            </div>
            <div className="checkout_details">
              <div className="lists">
                <span>Price ({data && data.length} items)</span>
                <span className="text-success"> ₹ {total_amount}</span>
              </div>
            </div>
            <div className="total_amount text-right mb-4">
              <h5 className="font-weight-bold text-muted">
                Total Amount :{" "}
                <span className="ml-3 text-dark"> ₹ {total_amount}</span>
              </h5>
            </div>
            <Button color="amber" block size="lg" className="text-white" >
              Place Order
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default CartAll;
