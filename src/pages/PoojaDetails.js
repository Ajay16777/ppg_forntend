import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Interweave from "interweave";
import { Radio, Tabs } from "antd";

// Core components
import HeaderBreadcrumb from "../components/BreadCrumb";
import WrapContainer from "../components/container";
// APi
import Dataservices from "../services/requestApi";
import ProductLoading from "../components/loader/Animating/ProductLoading";
import MasterCardPayment from "../components/MasterCardDetailsPayment";
const PoojaDetails = (props) => {
  const mainContent = useRef(null);
  const [data, setData] = useState([]);
  const [packages, setPackages] = useState([]);
  const [packagesList, setPackagesList] = useState([]);
  const [price, setPrice] = useState("");
  const [samagri_price, setSamagriPrice] = useState("");
  const [samagri_status, setSamagriStatus] = useState(false);
  const [value, setValue] = useState("");
  const [packageid, setPackageId] = useState("");
  const [packagedata, setPackageData] = useState([]);
  const [ready, setReady] = useState(false);
  const [mounted, setMounted] = useState(true);
  let { id } = useParams();
  const location = useLocation();
  const { TabPane } = Tabs;
  useEffect(() => {
    const getData = async () => {
      setReady(true);
      try {
        const [resPooja, resPackages] = await Promise.all([
          Dataservices.GetPoojaById(id),
          Dataservices.GetPoojaPackagesByPoojaId(id),
        ]);
        if (mounted) {
          setData(resPooja.data.data);
          setPackages(resPackages.data.data);
          if (resPooja.data.data.package_type === "multiple") {
            const list = [];
            const datas = resPackages.data.data;
            const price = datas[0].price;
            const samagriprice = datas[0].samagri_price;
            const packageid = datas[0]._id;
            setPackageData(datas[0]);
            setPrice(price);
            setSamagriPrice(samagriprice);
            setPackageId(packageid);
            setValue(datas[0].title);
            for (let item of datas) {
              list.push({ label: item.title, value: item.title });
            }
            setPackagesList(list);
          } else {
            setPrice(resPooja.data.data.price);
            setPackageId(resPooja.data.data._id);
            setSamagriPrice(resPooja.data.data.samagri_price);
          }
          setReady(false);
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
  }, [id, mounted]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const onChangeFilter = (e) => {
    const value = e.target.value;
    setValue(value);
    const data = packages;
    const final = data.find((item) => item.title === value);
    // console.log(final);
    if (final) {
      console.log(final);
      setPackageData(final);
      setPackageId(final._id);
      setPrice(final.price);
      setSamagriPrice(final.samagri_price);
    }
  };

  const onChangeSamagri = () => {
    setSamagriStatus(!samagri_status);
  };

  return (
    <WrapContainer>
      <HeaderBreadcrumb title="Pooja details" />
      <div className="product_details" ref={mainContent}>
        <Container fluid>
          {!ready ? (
            <Row>
              <Col lg="5">
                <div className="product_thumb">
                  <img
                    src={data.image}
                    className="img-fluid shadow"
                    alt={data.name}
                    loading="lazy"
                  />
                </div>
              </Col>
              <Col lg="7">
                <div className="product_desc">
                  <h1>{data.name}</h1>
                  <Interweave content={data.short_description} tagName="p" />

                  <div className="product_prices">
                    <h3>₹ {price}</h3>
                  </div>
                  {data.package_type === "multiple" && (
                    <div className="variants">
                      <h5>Select Packages</h5>
                      <Radio.Group
                        options={packagesList}
                        value={value}
                        optionType="button"
                        buttonStyle="solid"
                        onChange={onChangeFilter}
                        className="size"
                      />
                      <div className="variants_samagri">
                        <h5>Samagri Price</h5>

                        <div
                          className={`pricediv ${samagri_status && "active"}`}
                          onClick={onChangeSamagri}
                        >
                          ₹ {samagri_price}
                        </div>
                      </div>
                    </div>
                  )}
                  <MasterCardPayment
                    material={data}
                    price={price}
                    samagriprice={samagri_price}
                    samagristatus={samagri_status}
                    packageid={packageid}
                    packagedata={packagedata}
                  />
                </div>
              </Col>

              <Col lg="12">
                <div className="more_desc">
                  <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Description" key="1">
                      <Interweave content={data.description} tagName="div" />
                    </TabPane>
                    <TabPane tab="Review" key="2">
                      Content of Tab Pane 2
                    </TabPane>
                  </Tabs>
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
export default PoojaDetails;
