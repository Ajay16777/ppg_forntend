import React from "react";
import { Col, Container, Row } from "reactstrap";

// APi
import Dataservices from "../../services/requestApi";
import WishCard from "../Cards/WishCard";
const WishListAll = ({ data }) => {
  const RemoveCart = async (e, id) => {
    e.preventDefault();
    try {
      const res = await Dataservices.CartDelete(id);
      console.log(res);
      if (res.data.status_code === 200) {
        window.location.reload(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col lg="7">
          <div className="all_cart">
            <div className="heading">
              <h1>
                My <span>Wishlist ({data && data.length})</span>
              </h1>
            </div>
            {data &&
              data.map((item, index) => (
                <WishCard product={item} key={index + 1} remove={RemoveCart} />
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default WishListAll;
