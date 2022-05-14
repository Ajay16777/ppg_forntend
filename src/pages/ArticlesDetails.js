import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Interweave from "interweave";

// Core components
import HeaderBreadcrumb from "../components/BreadCrumb";
import WrapContainer from "../components/container";
// APi
import Dataservices from "../services/requestApi";
import ProductLoading from "../components/loader/Animating/ProductLoading";
const ArticlesDetails = (props) => {
  const mainContent = useRef(null);
  const [data, setData] = useState([]);
  const [ready, setReady] = useState(false);
  let { id } = useParams();
  const location = useLocation();
  useEffect(() => {
    const getData = async () => {
      setReady(true);
      try {
        const res = await Dataservices.GetArticleById(id);
        setData(res.data.data);

        setReady(false);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
    return () => {
      getData();
    };
  }, [id]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);
  return (
    <WrapContainer>
      <HeaderBreadcrumb title="Articles details" />
      <div className="product_details" ref={mainContent}>
        <Container fluid>
          {!ready ? (
            <Row className="justify-content-center">
              <Col lg="7">
                <div className="product_desc">
                  <h1>{data.title}</h1>
                </div>
                <div className="product_thumb">
                  <img
                    src={data.image}
                    className="img-fluid shadow"
                    alt={data.name}
                    loading="lazy"
                  />
                </div>
                <div className="product_desc">
                  <Interweave content={data.description} tagName="p" />
                </div>
              </Col>
            </Row>
          ) : (
            <ProductLoading />
          )}
        </Container>
      </div>
    </WrapContainer>
  );
};
export default ArticlesDetails;
