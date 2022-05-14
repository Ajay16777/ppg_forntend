import React, { useState, useEffect, useCallback } from "react";

// ReactStrap
import { Button, Col, Input, FormGroup, Row, Form } from "reactstrap";
// Antd
import { DatePicker, Popconfirm } from "antd";

// Moment
import moment from "moment";

// Api
import Dataservices from "../../services/requestApi";
import queryString from "query-string";
// Core Component
import DisplayOrderDetails from "./OrderDetails";
import DummyModal from "../../components/Modal";
// React router
import { useHistory } from "react-router-dom";
import Loader from "../loader/Loader";

const ProductPayment = ({
  material,
  price,
  samagriprice,
  samagristatus,
  packageid,
  packagedata,
}) => {
  const AuthToken = sessionStorage.getItem("Authtoken");
  const [user, setUser] = useState([]);
  const [orderdisplay, setOrderDisplay] = useState(false);
  const [paymentid, setPaymentId] = useState("");
  const [ready, setReady] = useState(false);
  const [alternatephone, setAlternatePhone] = useState("");
  const [puja_date, setPujaDate] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(true);
  const history = useHistory();
  const getUserData = useCallback(async () => {
    try {
      if (AuthToken) {
        const userdata = await Dataservices.GetProfileData();
        if (mounted) {
          setUser(userdata.data.data);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, [AuthToken, mounted]);
  useEffect(() => {
    getUserData();
    return () => {
      getUserData();
      setMounted(true);
    };
  }, [getUserData]);

  // Load script in dom
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  // Payment gateway
  const razorPayPaymentHandler = async (e) => {
    e.preventDefault();

    setReady(true);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const puja_amount = samagristatus
      ? parseInt(price) + parseInt(samagriprice)
      : price;
    const Data = {
      currency: "INR",
      receipt: material.name,
      payment_capture: 1,
      amount: puja_amount,
    };
    const response = await Dataservices.PurchaseItem(
      queryString.stringify(Data)
    );

    const { data } = response;
    const options = {
      key: "rzp_test_lTf2h44v9i9IK2",
      name: material.name,
      description: "Pooja Booking",
      order_id: data.id,
      prefill: {
        contact: user.phone,
        email: user.email,
        name: user.name,
      },
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const result = await Dataservices.FetchPayment(paymentId);
          const successObj = JSON.parse(result.data);
          console.log(successObj);
          const payment_data = JSON.stringify({
            id: successObj.id,
            payment_id: paymentId,
            amount: successObj.amount / 100,
          });

          let pujaData = material;
          pujaData.package_data = packagedata;
          // console.log("captured", successObj);
          if (successObj.status === "captured") {
            const Data = {
              user: user,
              puja_id: material._id,
              package_id: packageid,
              puja_amount: puja_amount,
              samagri_status: samagristatus,
              samagri_amount: samagriprice,
              amount: price,
              puja_data: JSON.stringify(pujaData),
              payment_id: paymentId,
              payment_data: payment_data,
              puja_date,
              contact_name: name,
              contact_address: address,
              contact_phone: alternatephone,
              status: "success",
            };
            console.log(Data);
            const pujares = await Dataservices.BookPooja(
              queryString.stringify(Data)
            );
            console.log(pujares.data);
            if (pujares.data.status_code === 200) {
              setTimeout(() => {
                setReady(false);
                setPaymentId(paymentId);
                setOrderDisplay(true);
              }, 3000);
            }
            return null;
          } else {
            alert("Your Transaction Failed");
            setReady(false);
          }
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#e9963e",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  // Check user login or not
  const AuthentiCate = () => {
    return (
      <>
        {AuthToken ? (
          <>
            {/* <Button
              color="amber"
              className="btn-rounded shadow"
              onClick={handleModal}
            >
              Book Pooja
            </Button> */}
            <Button color="amber" outline className="btn-rounded shadow mr-3">
              Add to Cart
            </Button>
            <Button color="amber" className="btn-rounded shadow">
              Buy Now
            </Button>
          </>
        ) : (
          <>
            <Popconfirm
              title="Before this You have to login First !"
              okText="Login"
              placement="bottomLeft"
              onConfirm={() => history.push("/login")}
            >
              <Button color="amber" outline className="btn-rounded shadow mr-3">
                Add to Cart
              </Button>
            </Popconfirm>
            <Popconfirm
              title="Before this You have to login First !"
              okText="Login"
              placement="bottomLeft"
              onConfirm={() => history.push("/login")}
            >
              <Button color="amber" className="btn-rounded shadow">
                Buy Now
              </Button>
            </Popconfirm>
          </>
        )}
      </>
    );
  };

  const handleModal = () => {
    setVisible(!visible);
  };
  const onHandleDate = (date, dateString) => {
    setPujaDate(dateString);
    console.log(dateString);
  };
  return (
    <>
      {!material.order_status ? (
        <AuthentiCate />
      ) : (
        <>
          <i className="far fa-calendar-alt mr-1" /> Valid Till :{" "}
          {material.order_data &&
            moment(material.order_data[0].to_date).format("ll")}
        </>
      )}
      <DisplayOrderDetails
        visible={orderdisplay}
        paymentid={paymentid}
        ordername={material.name}
      />
      <Loader show={ready} />
      <DummyModal
        visible={visible}
        width="650px"
        title="Enter Your address before purchase this"
        hidefooter={null}
        handlemodal={handleModal}
      >
        <Form onSubmit={razorPayPaymentHandler}>
          <Row className="justify-content-end">
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="address">
                  Name
                </label>
                <Input
                  className="form-control-alternative"
                  id="address"
                  placeholder="Enter your name"
                  value={name}
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="address">
                  Phone Number
                </label>
                <Input
                  className="form-control-alternative"
                  id="address"
                  placeholder="Alternate Number"
                  value={alternatephone}
                  type="text"
                  required
                  onChange={(e) => setAlternatePhone(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col lg="12">
              <FormGroup>
                <label className="form-control-label d-block" htmlFor="address">
                  Select Pooja Date
                </label>
                <DatePicker onChange={onHandleDate} className="w-100" />
              </FormGroup>
            </Col>
            <Col lg="12">
              <FormGroup>
                <label className="form-control-label" htmlFor="address">
                  Address
                </label>
                <Input
                  className="form-control-alternative"
                  id="address"
                  placeholder="City/Area/Locatlity"
                  value={address}
                  type="textarea"
                  rows="5"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col lg="4">
              <FormGroup className="mb-0">
                <Button
                  className="py-2 btn-rounded text-white"
                  color="amber"
                  type="submit"
                  block
                >
                  Continue to proceed
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </DummyModal>
    </>
  );
};
export default ProductPayment;
