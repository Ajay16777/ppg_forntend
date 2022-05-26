import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

// Core components
import HeaderBreadcrumb from "../components/BreadCrumb";
import WrapContainer from "../components/container";

// APi
import Dataservices from "../services/requestApi";


const About = (props) => {
  const [, setProduct] = useState([]);
  const [mounted, setMounted] = useState(true);
  const token = sessionStorage.getItem("Authtoken");
  useEffect(() => {
    const getData = async (e) => {
      try {
        if (token) {
          const productRes = await Dataservices.GetCartAll();
          if (mounted) {
            setProduct(productRes.data.data);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
    return () => {
      getData();
      setMounted(false);
    };
  }, [mounted, token]);
  return (
    <div className="ashis" >
    
    <WrapContainer>
      <HeaderBreadcrumb title="About" />
       
      <div className="about_us" style={{padding:"10px",margin:"15px",opacity:0.7,height:"70vh"}}>
      <Container  style={{paddingTop:"60px"}}>
        <Row className="align-items-center" >
          <Col lg="4">
            <img 
              src="https://pujyapanditg.com/static/media/abt.5dda3a2e846abd4bc113.png"
              alt="about"
              className="img-fluid"
            />
          </Col>
          <Col lg="8">
            <div className="abt_content">
              <h3>
                About <span>Us</span>
              </h3>
              <p>
                पंडितजी डॉट कॉम हम पंडित जी डॉट कॉम एक ऐसा मंच है जो पूरे
                भारतवर्ष के धार्मिक लोगो को ज्योतिष कुंडली भाग्य व वैदिक विधि से
                पूजा सम्पन्न करवाने के लिए ऑनलाइन मंच प्रदान करता है। यहां हम
                आपके लिए अनुभवी विद्वान आचार्य शास्त्री पंडित वर्ग को आपकी
                विधिवत पूजा के लिए व साथ मे सभी पूजन सामग्री उपलब्ध करवाते है।
                हमारे यहां प्रत्येक पंडित जी हमारी वर्षो से चली आ रही ऋषि
                परम्परा से गुरुकुल पाठशाला में पढ़े हुए ज्ञान अर्जित किये हुए है।
                पंडित जी डॉट कॉम हमारा लक्ष्य है के विद्वान पंडित जी के साथ ही
                सम्पूर्ण पूजन सामग्री आपको उपलब्ध करवाए जिसे आप बाकी सभी चिंताओं
                से मुक्त होकर आंनद के साथ पूजा कर पूण्य प्राप्त कर भाग्यशाली
                बने। पंडित जी डॉट कॉम आपके कामनाओ की पूर्ति के लिए संकल्पित है
                आज ही बुक करें pujyapanditG.com
              </p>
              {/* <a href="#!" className="btn btn-outline-amber btn-rounded">
                Know More
              </a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </WrapContainer>
    </div>
  );
};
export default About;
