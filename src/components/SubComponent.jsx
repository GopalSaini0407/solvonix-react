import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import subcontentData from "./subDataContent";
import { strong, ul } from "framer-motion/client";
import { List } from "lucide-react";

import Slider from "react-slick";
import ExpertiseCards from "./ExpertiseCards";
import ServiceSection from "./ServiceSection";
import WeDoSection from "./WeDoSection";
import {motion} from "framer-motion"
import { Helmet } from "react-helmet-async";

const SubComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const location = useLocation();
  const pageData = subcontentData[location.pathname];

  if (!pageData) return <h2>Page Not Found</h2>;
  
  return (

    <>
      <div className={`sub-component ${pageData.cls}`}>
      <div className="parent-div max-w-[1200px] mx-auto px-5 my-10">
        {/* Title & Description */}
      <motion.div
       initial={{ opacity:0, y:300}}
       whileInView={{ opacity:1, y:0}}
       transition={{ duration:0.5 }}
       viewport={{ once:true }}
      >

     
      {
        pageData.title && <h2 className="font-extralight text-[#000022] md:text-6xl py-4">{pageData.title}</h2>

      }
       
       {
        pageData.subtitle && <p className="relative pink_txt  py-4 mt-5 md:text-2xl text-[#EE3E77]">{pageData.subtitle}</p>
       }
        

          
        {pageData.description && pageData.description.map((para, index) => (
          <p key={index} className={`text-[${index === 0 ? "#2d2d2d" : "#A0A0A0"}] md:text-[17px] text-[14px] opacity-70`}>
            {para}
          </p>
        ))}
 </motion.div>
        {/* Expertise Section */}
        <section className="child-one flex py-7 flex-col md:flex-row">
          <motion.div className="child-one-left flex-[0.3] md:px-10"
          
          initial={{ opacity:0, y:300}}
         whileInView={{ opacity:1, y:0}}
         transition={{ duration:0.5 }}
         viewport={{ once:true }}
          
          >
          {
            pageData.expertiseTitle && <h2 className="md:text-6xl text-[#000022] font-extralight mb-4">{pageData.expertiseTitle}</h2>
          }
          {
            pageData.expertiseText && <p className="text-[#777] md:text-[17px]">{pageData.expertiseText}</p>

          }
            
          </motion.div>

          <div className="child-one-right flex-[0.7] grid grid-cols-1">

          <ExpertiseCards pageData={pageData}/>
         </div>

        </section>

     {/* service section */}
     <ServiceSection pageData={pageData}/>

        
        {/* We Do Section */}
         <WeDoSection pageData={pageData}/>
      </div>

      {/* Footer Section */}
      <section className="child-four bg-[#ED3E75] text-white p-10 text-center
      
        md:pb-30 
      relative md:top-[160px]
       z-10 md:z-0
      
      ">
        <p className="text-base md:text-2xl">Whatever be your web designing need, <br /> call us at +918826822211 or write to us at info@solvonix.com</p>
        <button className="px-3 py-2 md:px-4 md:py-3 rounded bg-white text-[#ED3E75] mt-3">Work With Us</button>
      </section>
      <div className="footer relative top-[0px] z-0 md:z-10 md:top-[0px]">
      <Footer />
      </div>
    </div>
    </>

   
  );
};

export default SubComponent;
