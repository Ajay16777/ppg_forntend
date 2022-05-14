import React, { useState, useEffect } from "react";
// Core components
import Banner from "../../banner";
import AboutSection from "./About";
import AllArticles from "./AllArticles";
import AllPooja from "./AllPooja";
import AllProduct from "./AllProduct";

// APi
import Dataservices from "../../../services/requestApi";

const HomeSections = (props) => {
  const [banner, setBanner] = useState([]);
  const [product, setProduct] = useState([]);
  const [pooja, setPooja] = useState([]);
  const [articles, setArticle] = useState([]);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const getData = async (e) => {
      try {
        const [bannerRes, productRes, poojaRes, articlesRes] =
          await Promise.all([
            Dataservices.GetBannerAll("homepage"),
            Dataservices.GetProductAll(),
            Dataservices.GetPoojaAll(),
            Dataservices.GetArticleAll(),
          ]);
        if (mounted) {
          setBanner(bannerRes.data.data);
          setProduct(productRes.data.data);
          setPooja(poojaRes.data.data);
          setArticle(articlesRes.data.data);
        }
        // console.log(productRes.data.data);
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
    <>
      <Banner data={banner} />
      <AboutSection />
      <AllProduct data={product} slider={true} wishlist={true} />
      <AllPooja data={pooja} slider={true} />
      <AllArticles data={articles} slider={true} />
    </>
  );
};
export default HomeSections;
