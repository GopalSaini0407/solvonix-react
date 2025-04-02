import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import seoData from "./seoData";
const SEO = () => {
  const location = useLocation();
  const path = location.pathname.substring(1); // Remove leading "/"
  const meta = seoData[path] || seoData["home"]; // Default to home if not found

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
    </Helmet>
  );
};

export default SEO;
