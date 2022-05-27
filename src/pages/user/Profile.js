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

// Core components
import HeaderBreadcrumb from "../../components/BreadCrumb";
import WrapContainer from "../../components/container";

// APi
import Dataservices from "../../services/requestApi";
// import queryString from "query-string";
const Profile = (props) => {
  //eslint-disable-next-line
  const [userdata, setuserData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await Dataservices.GetProfileData();
        console.log(res.data);
      } catch (e) {
        console.log(e.error);
      }
    };
    getData();
    return () => {
      getData();
    };
  }, []);
  //eslint-disable-next-line
  const user = userdata.data;
  return (
    <WrapContainer>
      <HeaderBreadcrumb title="My Profile" />
      <div className="profile">
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg="4">
              <Card className="mb-3">
                <CardHeader>Update Profile</CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="number">Phone</Label>
                      <Input
                        type="tel"
                        name="tel"
                        id="number"
                        placeholder="Enter your number"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        disabled
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Your Password"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Button
                        type="submit"
                        color="amber"
                        className="btn-rounded text-white"
                        block
                      >
                        Update Profile
                      </Button>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </WrapContainer>
  );
};
export default Profile;
