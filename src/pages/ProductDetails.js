import React, { useState, useEffect, useRef } from "react";
import Interweave from "interweave";
import { Col, Container, FormGroup, Row, Button } from "reactstrap";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Tabs, Radio, InputNumber, message } from "antd";

// Core components
import HeaderBreadcrumb from "../components/BreadCrumb";
import WrapContainer from "../components/container";
import ProductLoading from "../components/loader/Animating/ProductLoading";

// APi
import Dataservices from "../services/requestApi";
import queryString from "query-string";
const ProductDetails = (props) => {
  const history = useHistory();
  const mainContent = useRef(null);
  const [data, setData] = useState([]);
  const [userdata, setuserData] = useState([]);
  const [colourValue, setColourValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [sizeOption, setSizeOption] = useState([]);
  const [variantData, setVariantData] = useState([]);
  const [image, setImage] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [mrp, setMrp] = useState(undefined);
  const [ready, setReady] = useState(false);
  const [mounted, setMounted] = useState(true);
  let { id } = useParams();
  const location = useLocation();
  const { TabPane } = Tabs;
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);
  useEffect(() => {
    setReady(true);
    const getData = async () => {
      try {
        const res = await Dataservices.GetProductById(id);
        const result = res.data.data;
        console.log(result);
        if (mounted) {
          setData(result);
          const token = sessionStorage.getItem("Authtoken");
          if (token) {
            const resUser = await Dataservices.GetProfileData();
            setuserData(resUser.data.data);
          }
          if (result.type === "multiple" && result.variants) {
            const proData = result.variants[0];
            if (proData.size) {
              const sizelist = [];
              let value = proData.size;
              const result = value.split(",");
              for (let item of result) {
                sizelist.push({ label: item, value: item });
              }
              setSizeOption(sizelist);
              setSizeValue(sizelist[0].value);
              setColourValue(proData.colour);
              setPrice(proData.price);
              setMrp(proData.mrp);
              setImage(proData.image);
              const Datas = {
                product_id: id,
                colour: proData.colour,
                image: proData.image,
                size: sizelist[0].value,
                mrp: proData.mrp,
                price: proData.price,
              };
              setVariantData(Datas);
            }
          } else {
            setImage(result.image);
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

  const onSizeChange = (e) => {
    let data = variantData;
    data.size = e.target.value;
    setVariantData(data);
    setSizeValue(e.target.value);
  };
  const onColourChange = (e, val) => {
    e.preventDefault();
    const Data = data.variants;
    const FilterData = Data.find((item) => item._id === val);
    const sizelist = [];
    let value = FilterData.size;
    const result = value.split(",");
    for (let item of result) {
      sizelist.push({ label: item, value: item });
    }
    setSizeOption(sizelist);
    setSizeValue(sizelist[0].value);
    // setSizeValue(e.target.value);
    setPrice(FilterData.price);
    setMrp(FilterData.mrp);
    setImage(FilterData.image);
    const Datas = {
      product_id: id,
      colour: FilterData.colour,
      image: FilterData.image,
      size: sizelist[0].value,
      mrp: FilterData.mrp,
      price: FilterData.price,
    };
    setColourValue(FilterData.colour);
    setVariantData(Datas);
  };
  const AddToCart = async () => {
    try {
      const Data = {
        user: userdata._id,
        product: id,
        amount: ~~price,
        quantity,
        total_amount: ~~price * quantity,
        status: 1,
        variant_data: JSON.stringify(variantData),
      };
      const res = await Dataservices.CartCreate(queryString.stringify(Data));
      if (res.data.status_code === 200) {
        message.success(res.data.message);
        history.push("/cart");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const BuyNow = async () => {
    try {
      const Data = {
        user: userdata._id,
        product: id,
        amount: ~~price,
        quantity,
        total_amount: ~~price * quantity,
        status: 1,
        variant_data: JSON.stringify(variantData),
      };
      const res = await Dataservices.CartCreate(queryString.stringify(Data));
      if (res.data.status_code === 200) {
        message.success(res.data.message);
        history.push("/buynow");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <WrapContainer>
      <HeaderBreadcrumb title="Product details" />
      <div className="product_details" ref={mainContent}>
        <Container fluid>
          {!ready ? (
            <Row>
              <Col lg="5">
                <div className="product_thumb">
                  <img
                    src={image}
                    className="img-fluid shadow"
                    alt={data.name}
                    loading="lazy"
                  />
                </div>
              </Col>
              <Col lg="7">
                <div className="product_desc">
                  <h1>{data.name}</h1>
                  {price && (
                    <h3>
                      ₹ {price}{" "}
                      <span className="text-muted small">
                        {" "}
                        ₹<del> {mrp} </del>
                      </span>
                    </h3>
                  )}
                  <Interweave content={data.short_description} tagName="p" />
                  {data.type === "multiple" && (
                    <>
                      <div className="variants">
                        <h5>Color:</h5>
                        <div className="color_filter">
                          {data.variants &&
                            data.variants.map((item) => (
                              <div
                                className={`color ${
                                  item.colour === colourValue ? "active" : ""
                                }`}
                                style={{ backgroundColor: item.colour }}
                                key={item._id}
                                onClick={(e) => onColourChange(e, item._id)}
                              ></div>
                            ))}
                        </div>
                      </div>
                      <div className="variants">
                        <h5>Size:</h5>
                        <Radio.Group
                          options={sizeOption}
                          onChange={onSizeChange}
                          value={sizeValue}
                          optionType="button"
                          buttonStyle="solid"
                          className="size"
                        />
                      </div>
                    </>
                  )}
                  <Row>
                    <Col lg="7">
                      <FormGroup className="mb-4">
                        <label
                          htmlFor="quantity"
                          className="form-control-label d-block"
                        >
                          Enter Quantity
                        </label>
                        <InputNumber
                          value={quantity === 0 ? 1 : quantity}
                          id="quantity"
                          defaultValue={1}
                          className="quantity"
                          onChange={(val) => setQuantity(val)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button
                    color="amber"
                    outline
                    className="btn-rounded shadow mr-3"
                    onClick={AddToCart}
                  >
                    Add to Cart
                  </Button>
                  <Button color="amber" className="btn-rounded shadow" onClick={BuyNow}>
                    Buy Now
                  </Button>
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
            <ProductLoading material={data} />
          )}
        </Container>
      </div>
    </WrapContainer>
  );
};
export default ProductDetails;
