import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {BASEURL} from '../../services/http-common';

//bootstrap
import { Button, Card, CardBody, CardTitle } from "reactstrap";

// APi
import Dataservices from "../../services/requestApi";
import queryString from "query-string";
import { message } from "antd";
const ProductCards = ({ data, wishlist }) => {
  const [userdata, setuserData] = useState([]);
  const [isLogedin, setIsLogedin] = useState(false);
  const [mounted, setMounted] = useState(true);
  let history = useHistory();
  useEffect(() => {
    const getData = async () => {
      try {
        const token = sessionStorage.getItem("Authtoken");
        if (token == null) {
          setIsLogedin(false);
        } else if (token) {
          const res = await Dataservices.GetProfileData();
          if (mounted) {
            setuserData(res.data.data);
            setIsLogedin(true);
          }
        }
      } catch (e) {
        console.log(e.error);
      }
    };
    getData();
    return () => {
      getData();
      setMounted(true);
    };
  }, [mounted]);
  const Wishlist = async (e, id) => {
    e.preventDefault();
    try {
      const Data = {
        user: userdata.id,
        product: id,
        status: 0,
      };
      if (isLogedin) {
        const res = await Dataservices.CartCreate(queryString.stringify(Data));
        // console.log(res.data);
        if (res.data.status_code === 200) {
          message.success(res.data.message);
          history.push("/wishlist");
        } else {
          message.error(res.data.message);
        }
      } else {
        message.error("You have to login first");
        history.push("/login");
      }
    } catch (e) {
      // console.log(e);
    }
  };
  console.log(data);
  return (
    <Card className="product_cards">
      <div className="img_wraped" style={{overflowX:'scroll'}}>
        <img
          className="img-fluid rounded"
          src={BASEURL.ENDPOINT_URL+data.image[0].image_link}
          alt={BASEURL.ENDPOINT_URL+data.image[0].image_name}
          loading="lazy"

          />
          {/* {console.log(data.image)} */}
      </div>
      {wishlist && (
        <div className="wishlist">
          <Button onClick={(e) => Wishlist(e, data._id)}>
            <i className="lnr lnr-heart" />
          </Button>
        </div>
      )}
      <CardBody>
        <CardTitle className="text-truncate">{data.name}</CardTitle>
        {data.price && (
          <h5>
            Rs. {data.price} - <del>( Rs. {data.discount_price} )</del>
          </h5>
        )}
        <div className="actions">
          <Button
            className="btn-rounded"
            to={`/product/${data._id}`}
            tag={Link}
            outline color="amber"
          >
            Buy Product
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
export default ProductCards;
