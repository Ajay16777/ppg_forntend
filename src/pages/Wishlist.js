import React, { useEffect, useState } from "react";

// Core components
import HeaderBreadcrumb from "../components/BreadCrumb";
import WrapContainer from "../components/container";

// APi
import Dataservices from "../services/requestApi";
import WishListAll from "../components/WishList";

const WishList = (props) => {
  const [product, setProduct] = useState([]);
  const [mounted, setMounted] = useState(true);
  const token = sessionStorage.getItem("Authtoken");
  useEffect(() => {
    const getData = async (e) => {
      try {
        if (token) {
          const productRes = await Dataservices.GetWishlistAll();
          var result = productRes.data.data;
          // result.filter((item) => {
          //   return data.push(item.product);
          // });
          if (mounted) {
            setProduct(result);
          }
        }
        // console.log(productRes);
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
    <WrapContainer>
      <HeaderBreadcrumb title="All Wishlist" />
      <div className="cart_details">
        <WishListAll data={product} />
      </div>
    </WrapContainer>
  );
};
export default WishList;
