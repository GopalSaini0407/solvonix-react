import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import seoData from "./seoData";
const SeoComponent = ({title,description,keywords}) => {
  const location = useLocation();
  const path = location.pathname.substring(1); // Remove leading "/"
  const meta = seoData[path] || seoData["home"]; // Default to home if not found
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="canonical" content="https://solvonix.netlify.app/"></meta>
    </Helmet>
  );
};

export default SeoComponent;
