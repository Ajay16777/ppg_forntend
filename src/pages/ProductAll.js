import React, { useEffect, useState } from "react";

// Core components
import AllProduct from "../components/sections/Home/AllProduct";
import HeaderBreadcrumb from "../components/BreadCrumb";
import WrapContainer from "../components/container";

// APi
import Dataservices from "../services/requestApi";

const ProductAll = (props) => {
  const [product, setProduct] = useState([]);
  const [mounted, setMounted] = useState(true);
  useEffect(() => {
    const getData = async (e) => {
      try {
        const productRes = await Dataservices.GetProductAll();
        if (mounted) {
          setProduct(productRes.data.data);
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
  }, [mounted]);
  return (
    <WrapContainer>
      <HeaderBreadcrumb title="All Product" />
      <AllProduct data={product} slider={false} wishlist={true} />
    </WrapContainer>
  );
};
export default ProductAll;
