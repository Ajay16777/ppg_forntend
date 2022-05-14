import React from "react";
import { Col, Container, Row } from "reactstrap";
import { SwiperSlide } from "swiper/react";

// Core components
import ProductCards from "../../Cards/ProductCard";
import SliderWrapper from "../../Slider";

const AllProduct = ({ data, slider, wishlist, title }) => (
  <div className="all_product">
    <Container>
      <Row>
        <Col lg="12">
          <div className="heading">
            <h1>
              {title ? (
                <>
                  <span>{title}</span>
                </>
              ) : (
                <>
                  Our <span>Product</span>
                </>
              )}
            </h1>
          </div>
        </Col>

        {slider ? (
          <Col lg="12">
            <SliderWrapper
              type="single"
              slides={4}
              row={1}
              spacebetween={30}
              colors="#c74a2d"
              mobile="2"
              tablet="2"
              desktop="4"
            >
              {data.map((item) => (
                <SwiperSlide key={item._id}>
                  <ProductCards data={item} wishlist={wishlist} />
                </SwiperSlide>
              ))}
            </SliderWrapper>
          </Col>
        ) : (
          <>
            {data.map((item, index) => (
              <Col lg="3" key={Math.random(index + 1) * 520}>
                <ProductCards data={item} wishlist={wishlist} />
              </Col>
            ))}
          </>
        )}
      </Row>
    </Container>
  </div>
);
export default AllProduct;
