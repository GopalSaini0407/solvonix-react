import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

// Lazy Load Pages
const Home = lazy(() => import("./pages/Home"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre"));
const Careers = lazy(() => import("./pages/Careers"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ReachUs = lazy(() => import("./pages/ReachUs"));
const SubComponent = lazy(() => import("./components/SubComponent"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

const Shopify = lazy(() => import("./pages/shopify"));


// Non-Lazy Components (Navbar & Header should always load fast)
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <HelmetProvider>
      <Router>
      <ScrollToTop /> 
        <Navbar />
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<Home />} />
            <Route path="/about" element={<WhoWeAre />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/reach-us" element={<ReachUs />} />
            <Route path="/shopify" element={<Shopify/>} />


            {/* Sub Components Lazy Loaded */}
            <Route path="/seo-services" element={<SubComponent />} />
            <Route path="/sem-services" element={<SubComponent />} />
            <Route path="/link-building" element={<SubComponent />} />
            <Route path="/ppc-services" element={<SubComponent />} />
            <Route path="/blog-marketing" element={<SubComponent />} />
            <Route path="/article-syndication" element={<SubComponent />} />
            <Route path="/web-design" element={<SubComponent />} />
            <Route path="/logo-design" element={<SubComponent />} />
            <Route path="/psd-to-html" element={<SubComponent />} />
            <Route path="/brochure-designing" element={<SubComponent />} />
            <Route path="/flyer-designing" element={<SubComponent />} />
            <Route path="/image-cutout" element={<SubComponent />} />
            <Route path="/website-development" element={<SubComponent />} />
            <Route path="/facebook-application" element={<SubComponent />} />
            <Route path="/php-development" element={<SubComponent />} />
            <Route path="/cms-development" element={<SubComponent />} />
            <Route path="/e-commerce" element={<SubComponent />} />
            <Route path="/content-creation" element={<SubComponent />} />

            <Route path="/guest-blogging" element={<SubComponent />} />
            <Route path="/smo-services" element={<SubComponent />} />
            <Route path="/content-writing" element={<SubComponent />} />
            <Route path="/website-redesigning" element={<SubComponent />} />
            <Route path="/flash-designing" element={<SubComponent />} />
            <Route path="/reciprocal-link-building" element={<SubComponent />} />
            <Route path="/bulk-link-building" element={<SubComponent />} />
            <Route path="/one-way-link-building" element={<SubComponent />} />
            <Route path="/custom-link-building-package" element={<SubComponent />} />


          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
