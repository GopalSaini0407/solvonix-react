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
import SeoComponent from '../components/SeoComponent'

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
     <SeoComponent
          title={pageData.title}
          description="Solvonix Technologies a well known SEO Company of India providing SEO services. Wanna reasonable SEO services in India? Professional SEO Company in India to help you. Call us for SEO services, PPC services, Link Building services and SMO services in India."
          keywords="SEO India , SEO Company India , ROI Based SEO Services India&lrm , SEO Services In India, Best SEO company, SEO company in India"       
      />
      <div className={`sub-component ${pageData.cls}`}>
      <div className="parent-div max-w-[1200px] mx-auto px-5 my-10">
        {/* Title & Description */}
      <motion.div
       initial={{ opacity:0, y:100}}
       whileInView={{ opacity:1, y:0}}
       transition={{ duration:0.8}}
       viewport={{ once:true }}
      >

     
      {
        pageData.title && <h2 className="font-extralight text-[#000022] md:text-5xl py-4">{pageData.title}</h2>

      }
       
       {
        pageData.subtitle && <p className="relative pink_txt  py-4 mt-5 md:text-2xl text-[#EE3E77]">{pageData.subtitle}</p>
       }
        

          
        {pageData.description && pageData.description.map((para, index) => (
          <p key={index} className={`text-[${index === 0 ? "#2d2d2d" : "#A0A0A0"}] md:text-[17px] text-[14px] opacity-70`}>
            {para}
          </p>
        ))}
          {
            pageData.descriptionList && pageData.descriptionList.map((list,index)=>(
              <ul key={index} className='about-whychoose text-[#A0A0A0] leading-9 text-sm lg:text-[15px]'>
              <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">{list}</li>
          </ul>
            ))
          }
 </motion.div>
        {/* Expertise Section */}
        <section className="child-one flex py-7 flex-col md:flex-row">
          <motion.div className="child-one-left flex-[0.3] md:px-10"
          
          initial={{ opacity:0, y:100}}
         whileInView={{ opacity:1, y:0}}
         transition={{ duration:0.8}}
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
