import React, { useEffect, useState } from "react";
import HeaderBreadcrumb from "../components/BreadCrumb";
import WrapContainer from "../components/container";

// Core components
import AllArticles from "../components/sections/Home/AllArticles";
// APi
import Dataservices from "../services/requestApi";
const ArticleAll = (props) => {
  const [articles, setArticle] = useState([]);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const getData = async (e) => {
      try {
        const articlesRes = await Dataservices.GetArticleAll();
        if (mounted) {
          setArticle(articlesRes.data.data);
        }
        // console.log(articlesRes);
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
      <HeaderBreadcrumb title="All Articles" />
      <AllArticles data={articles} slider={false} />
    </WrapContainer>
  );
};
export default ArticleAll;
