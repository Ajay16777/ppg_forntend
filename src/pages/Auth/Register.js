import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

// APi
import Dataservices from "../../services/requestApi";
import queryString from "query-string";

// Core components
import WrapContainer from "../../components/container";
import HeaderBreadcrumb from "../../components/BreadCrumb";

// React  Router Dom
import { Link } from "react-router-dom";
const Register = (props) => {
  // const [otp, setOtp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const AuthRegister = async (e) => {
    e.preventDefault();
    try {
      const Data = {
        name,
        phone,
        email,
        password,
      };
      const response = await Dataservices.Register(queryString.stringify(Data));
      const data = response.data;
      console.log(data);
      if (response.data.token) {
        sessionStorage.setItem("Authtoken", JSON.stringify(data));
        window.location.reload(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  


  return (
    <WrapContainer>
      <HeaderBreadcrumb title="Register" />
      <div className="login">
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <Card className="mb-3">
                <CardHeader>Register</CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="phone">Phone Number</Label>
                      <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Your Password"
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <Label for="phone">Otp Verification</Label>
                      <Input
                        type="verify"
                        name="Otp"
                        id="otp"
                        // value={}
                        // onChange={(e) => auth(e.target.value)}
                        placeholder="Enter your otp"
                      />
                    </FormGroup>
                    {/* <FormGroup>
                      <Button
                        type="submit"
                        color="amber"
                        className="btn-rounded text-white"
                        block
                        onClick={verifyOtp}
                      >
                        Continue
                      </Button>
                    </FormGroup> */}
                   
                    <FormGroup>
                      <Button
                        type="submit"
                        color="amber"
                        className="btn-rounded text-white"
                        block
                        onClick={AuthRegister}
                      >
                        Login
                      </Button>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <Row className="justify-content-end">
                <Col lg="6" className="text-right">
                  <Link to="/login" className="text-amber">
                    Already have an account ?
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </WrapContainer>
  );
};
export default Register;
