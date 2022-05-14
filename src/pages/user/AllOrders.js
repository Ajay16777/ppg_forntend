import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";

// Core components
import HeaderBreadcrumb from "../../components/BreadCrumb";
import WrapContainer from "../../components/container";

// APi
import Dataservices from "../../services/requestApi";
import { Link } from "react-router-dom";
// import queryString from "query-string";
const AllOrder = (props) => {
  const [orderall, setAllOrder] = useState([]);
  const [mounted, setMounted] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await Dataservices.GetAllPoojaOrder();
        if (mounted) {
          setAllOrder(res.data.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
    return () => {
      setMounted(false);
      getData();
    };
  }, [mounted]);
  return (
    <WrapContainer>
      <HeaderBreadcrumb title="My Order" />
      <div className="profile">
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg="12">
              <Card className="mb-3">
                <CardHeader>All Pooja Order</CardHeader>
                <CardBody>
                  <Table>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment Id</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderall &&
                        orderall.map((item, index) => (
                          <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>
                              <Link
                                to={`/pooja/${item.puja_id._id}`}
                                tag={Link}
                              >
                                {item.puja_id.name}
                              </Link>
                            </td>
                            <td>{item.puja_amount}</td>
                            <td>{moment(item.puja_date).format("ll")}</td>
                            <td>{item.payment_id}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </WrapContainer>
  );
};
export default AllOrder;
