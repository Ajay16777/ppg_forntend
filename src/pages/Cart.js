import React, { useEffect, useState } from "react";

// Core components
import HeaderBreadcrumb from "../components/BreadCrumb";
import CartAll from "../components/Cart";
import WrapContainer from "../components/container";

// APi
import Dataservices from "../services/requestApi";

const Cart = (props) => {
  const [product, setProduct] = useState([]);
  const [mounted, setMounted] = useState(true);
  const token = sessionStorage.getItem("Authtoken");
  useEffect(() => {
    const getData = async (e) => {
      try {
        if (token) {
          const productRes = await Dataservices.GetCartAll();
          if (mounted) {
            setProduct(productRes.data.data);
          }
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
  }, [mounted, token]);
  return (
    <WrapContainer>
      <HeaderBreadcrumb title="My Cart" />
      <div className="cart_details">
        <CartAll data={product} />
      </div>
    </WrapContainer>
  );
};
export default Cart;
