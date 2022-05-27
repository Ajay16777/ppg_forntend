import React, { useState, useEffect } from "react";
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
import { Redirect } from "react-router-dom";
import { message } from "antd";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogedin, setIsLogedin] = React.useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("Authtoken");
    if (token === null) {
      setIsLogedin(false);
    } else if (token!==null) {
      setIsLogedin(true);
    }
  }, []);
  const AuthLogin = async (e) => {
    e.preventDefault();
    try {
      const Data = {
        email,
        password,
      };
      const response = await Dataservices.Login(queryString.stringify(Data));
      const data = response.data;
      // console.log(data);
      if (response.data.status_code === 400) {
        message.error(response.data.message);
      } else if (response.data.status_code === 500) {
        message.error(response.data.message);
      } else {
        sessionStorage.setItem("Authtoken", JSON.stringify(data));
        window.location.reload(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  if (isLogedin) {
    return <Redirect to="/" />;
  }
  return (
    <WrapContainer>
      <HeaderBreadcrumb title="Login" />
      <div className="login">
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <Card className="mb-3">
                <CardHeader>Login</CardHeader>
                <CardBody>
                  <Form>
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
                      <Button
                        type="submit"
                        color="amber"
                        className="btn-rounded text-white"
                        block
                        onClick={AuthLogin}
                      >
                        Login
                      </Button>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <Row className="justify-content-end">
                <Col lg="6" className="text-right">
                  <Link to="/register" className="text-amber">
                    Create a new account
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
export default Login;
