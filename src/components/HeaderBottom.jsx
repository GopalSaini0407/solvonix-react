import React from 'react'
import { useLocation,Link } from "react-router-dom";

const contentData = {
  "/home": {
    heading1: `Hello folks, We are`,
    heading2: `digital creative agency`,
    para1: "We create stunning digital experience that will",
    para2: "help your business stand out",
    btn: "Case Studies",
    arrorIcon:"images/slide_arrow.png"
  },
  "/about": {
    heading1: `Solvonix Technologies`,
    heading2: `was established in 2009`,
    aboutImg:"images/about_banner.jpg"
  },
  "/careers": {
    heading1: `Be a part of this`,
    heading2: ` unforgettable journey`,
    careerImg:{
      careerImg1:'images/cimg1.png',
      careerImg2:'images/cimg2.png',
      careerImg3:'images/cimg3.png',
      careerImg4:'images/cimg4.png',
      careerImg5:'images/cimg5.png',
    }
    
  },
  "/portfolio": {
    heading1: `Our Work Doesn’t fit`,
    heading2: ` fit into any Drawer`,
  },
  "/reach-us": {
    heading1: `Every Client Brings`,
    heading2: ` New Inspiration`,
  },
  "/seo-services": {
    heading1: `SEO Services`,
    
  },
  "/sem-services": {
    heading1: `SEM Service`,
  },
  "/link-building": {
    heading1: `Link Building Services`,
  },
  "/ppc-services": {
    heading1: `PPC Management Services India`,
  },
  "/blog-marketing": {
    heading1: `Blog Marketing`,
  },
  "/article-syndication": {
    heading1: `Article Syndication`,
  },
  "/web-design": {
    heading1: `Website Designing`,
  },
  "/logo-design": {
    heading1: `Logo Designing`,
  },
  "/psd-to-html": {
    heading1: `PSD to HTML`,
  },
  "/brochure-designing": {
    heading1: `Brochure Designing`,
  },
  "/flyer-designing": {
    heading1: `Flyer Designing`,
  },
  "/image-cutout": {
    heading1: `Image Cutout`,
  },
  "/website-development": {
    heading1: `Web Development`,
  },
  "/facebook-application": {
    heading1: `Facebook Application Development`,
  },
  "/php-development": {
    heading1: `PHP Development`,
  },
  "/cms-development": {
    heading1: `CMS Development Company`,
  },
  "/e-commerce": {
    heading1: `E-Commerce Development`,
  },
  "/content-creation": {
    heading1: `Content Creation Service`,
  },
  
};
export default function HeaderBottom() {
  const { pathname } = useLocation(); // Correct way to get the current path  
  const content = contentData[pathname] || contentData["/home"]; // Correct fallback

  return (
    <>
      <div className='bottom-header text-center text-white p-4 mt-12 bg-[#01012B]'>
        <h6 className='text-2xl sm:text-7xl font-thin'>
          {content.heading1} <br /> {content.heading2}
        </h6>
        {content.para1 && (
          <p className='text-base font-thin sm:text-3xl py-6 '>
            {content.para1} <br /> {content.para2} 
          </p>
        )}
        {content.btn && (
          <button className='btn bg-[#EC3E73] text-white px-4 py-2 sm:px-6 sm:py-3 rounded'>
            {content.btn}
          </button>
  
        )}

        {content.arrorIcon && (
          
          
            <div className='justify-center flex mt-10'>
            <div onClick={()=> <Link to="/about">ram</Link>} className='bg-white rounded-[50%] flex size-[50px] sm:size-[65px] justify-center items-center'>
            <img src={content.arrorIcon} alt="img" />    
            </div>
            </div>
           
          )
        }

        {
          content.aboutImg && (
            <div className='lg:py-20 lg:relative'>
              <div className="header-about-img pt-2 lg:pb-60">
              <img src={content.aboutImg} className='lg:absolute' alt="img" />
            </div>
            </div>

          )
        }

        {
          content.careerImg &&(
              <div className='lg:py-20 lg:pb-70 md:pb-50 lg:relative mx-0 px-0'> 
                <div className="careerGallary lg:absolute grid grid-flow-col grid-cols-1 grid-rows-5 md:grid-rows-3 md:grid-cols-3  gap-3 sm:h-100">
              <div className="careerImg md:row-span-3">
                <img src={content.careerImg.careerImg1} className='object-cover size-full' alt="img" />
                </div>
              <div className="careerImg md:row-span-2 ">
                <img src={content.careerImg.careerImg2} className='object-cover size-full' alt="img" />
                </div>
              <div className="careerImg">
                <img src={content.careerImg.careerImg3} className='object-cover size-full' alt="img" />
                </div>
              <div className="careerImg">
                <img src={content.careerImg.careerImg4} className='object-cover size-full' alt="img" />
                </div>
              <div className="careerImg md:row-span-2">
                <img src={content.careerImg.careerImg5} className='object-cover size-full' alt="img" />
                </div>
                </div>
              </div>
            
          )
        }

      </div>
    </>
  );
}
