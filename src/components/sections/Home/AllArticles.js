import React from "react";
import { Col, Container, Row } from "reactstrap";
import { SwiperSlide } from "swiper/react";

// Core components
import ArticleCards from "../../Cards/ArticleCard";
import SliderWrapper from "../../Slider";

const AllArticles = ({ data, slider }) => (
  <div className="all_product">
    <Container>
      <Row>
        <Col lg="12">
          <div className="heading">
            <h1>
              Our <span>Articles</span>
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
                  <ArticleCards data={item} />
                </SwiperSlide>
              ))}
            </SliderWrapper>
          </Col>
        ) : (
          <>
            {data.map((item) => (
              <Col lg="3" key={item._id}>
                <ArticleCards data={item} />
              </Col>
            ))}
          </>
        )}
      </Row>
    </Container>
  </div>
);
export default AllArticles;
