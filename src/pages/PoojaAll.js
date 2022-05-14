import React, { useEffect, useState } from "react";
import HeaderBreadcrumb from "../components/BreadCrumb";
import WrapContainer from "../components/container";

// Core components
import AllPooja from "../components/sections/Home/AllPooja";

// APi
import Dataservices from "../services/requestApi";
const PoojaAll = (props) => {
  const [pooja, setPooja] = useState([]);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const getData = async (e) => {
      try {
        const poojaRes = await Dataservices.GetPoojaAll();
        if (mounted) setPooja(poojaRes.data.data);
        // console.log(poojaRes);
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
      <HeaderBreadcrumb title="All Pooja" />
      <AllPooja data={pooja} slider={false} />
    </WrapContainer>
  );
};
export default PoojaAll;
