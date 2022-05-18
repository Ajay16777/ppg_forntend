import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Footer = (props) => (
  <div className="footer">
    <Container fluid>
      <Row>
        <Col lg="4">
          <div className="footer_wrap">
            <div className="footer_logo">
              <img
                alt="logo"
                src={require("../../assets/img/logo.png")}
                width="200"
              />
            </div>
          </div>
          <div className="footer_wrap">
            <div className="footer_head">
              <h2>Join Newsletters</h2>
            </div>
            <div className="newsletter_form">
              <div className="content_form">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Email address"
                  required=""
                  className="form-control"
                />
                <div className="form_action">
                  <Button color="amber">
                    <i className="fas fa-paper-plane" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4">
          <div className="footer_wrap">
            <div className="footer_head">
              <h2>Our Products</h2>
            </div>
            <div className="footer_links">
              <ul>
                <li>
                  <a href="#!">
                    <i className="lnr lnr-chevron-right" /> Home{" "}
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="lnr lnr-chevron-right" /> About Us
                  </a>
                </li>
                {/* <li>
                  <a href="#!">
                    <Icon icon="chevron-right" /> Products
                  </a>
                </li> */}
                <li>
                  <a href="#!">
                    <i className="lnr lnr-chevron-right" /> Poja Booking
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="lnr lnr-chevron-right" /> Blog{" "}
                  </a>
                </li>
                <li>
                  <a href="/ContactUS">
                    <i className="lnr lnr-chevron-right" /> Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col lg="4">
          <div className="footer_wrap">
            <div className="footer_head">
              <h2>Contact</h2>
            </div>
            <div className="footer_contact">
              <ul>
                <li>
                  <div className="icons">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="box_content">
                    <h3>Phone Number</h3>
                    <p>
                      <a href="tel:+918385842313">+91-8385842313</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icons">
                    <i className="fas fa-envelope-open" />
                  </div>
                  <div className="box_content">
                    <h3>Email Address</h3>
                    <p>
                      <a href="mailto:info@pujyapanditg.com">
                        info@pujyapanditg.com
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icons">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="box_content">
                    <h3>Address</h3>
                    <p>Head office Jaipur , 2nd Branch Bhadra , India</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col lg="12">
          <div className="copyright">
            <p>Copyright ©️ 2022 pujyapanditg. All Right Reserved.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
export default Footer;
