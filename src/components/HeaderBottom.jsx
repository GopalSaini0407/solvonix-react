import React from 'react'
import { useLocation,Link } from "react-router-dom";
import {motion} from "framer-motion"
import { h1 } from 'framer-motion/client';
import  TouchUsForm  from './TouchUsForm';


const contentData = {
  "/home": {
    heading1: `Hello folks, We are`,
    heading2: `digital creative agency`,
    para1: "We create stunning digital experience that will",
    para2: "help your business stand out",
    btn: "Case Studies",
    arrorIcon:"images/slide_arrow.png",
    headerClass:"home-header"
  },
  "/about": {
    heading1: `Solvonix Technologies`,
    heading2: `was established in 2009`,
    aboutImg:"images/about_banner.jpg",
    headerClass:"about-header"
  },
  "/careers": {
    heading1: `Be a part of this`,
    heading2: ` unforgettable journey`,
    text:"See Open Positions",
    downIcon:"images/carrow.png",
    careerImg:{
      careerImg1:'images/cimg1.png',
      careerImg2:'images/cimg2.png',
      careerImg3:'images/cimg3.png',
      careerImg4:'images/cimg4.png',
      careerImg5:'images/cimg5.png',
    },
        headerClass:"careers-header"

    
  },
   "/shopify": {
    // heading1: `Solvonix Technologies Providers`,
    shopifyHeading:'Get in Touch',
     headerClass:"shopify-header"
  
  },
  "/portfolio": {
    heading1: `Our Work Doesn’t fit`,
    heading2: ` fit into any Drawer`,
    headerClass:"portfolio-header"
   
  },
  "/reach-us": {
    heading1: `Every Client Brings`,
    heading2: ` New Inspiration`,
    headerClass:"reachUs-header"

  },
  "/seo-services": {
    heading1: `SEO Services`,
    headerClass:"seoServices-header"

    
  },
  "/sem-services": {
    heading1: `SEM Service`,
    headerClass:"sem-header"

  },
  "/link-building": {
    heading1: `Link Building Services`,
    headerClass:"linkBuliding-header"

  },
  "/ppc-services": {
    heading1: `PPC Management Services India`,
    headerClass:"ppc-header"

  },
  "/blog-marketing": {
    heading1: `Blog Marketing`,
    headerClass:"blog-header"

  },
  "/article-syndication": {
    heading1: `Article Syndication`,
    headerClass:"article-header"

  },
  "/web-design": {
    heading1: `Website Designing`,
    headerClass:"webDesign-header"

  },
  "/logo-design": {
    heading1: `Logo Designing`,
    headerClass:"logo-design-header"

  },
  "/psd-to-html": {
    heading1: `PSD to HTML`,
    headerClass:"psd-header"

  },
  "/brochure-designing": {
    heading1: `Brochure Designing`,
    headerClass:"brochure-header"

  },
  "/flyer-designing": {
    heading1: `Flyer Designing`,
    headerClass:"flyer-header"

  },
  "/image-cutout": {
    heading1: `Image Cutout`,
    headerClass:"imageCutout-header"

  },
  "/website-development": {
    heading1: `Web Development`,
    headerClass:"websiteDevelopment-header"

  },
  "/facebook-application": {
    heading1: `Facebook Application Development`,
    headerClass:"facebook-header"

  },
  "/php-development": {
    heading1: `PHP Development`,
    headerClass:"php-header"

  },
  "/cms-development": {
    heading1: `CMS Development Company`,
    headerClass:"cms-header"

  },
  "/e-commerce": {
    heading1: `E-Commerce Development`,
    headerClass:"eCommerce-header"

  },
  "/content-creation": {
    heading1: `Content Creation Service`,
    headerClass:"contentCreation-header"

  },
  
};


export default function HeaderBottom() {
  const { pathname } = useLocation(); // Correct way to get the current path  
  const content = contentData[pathname] || contentData["/home"]; // Correct fallback

  return (
    <>
      <div className={`bottom-header ${content.headerClass}  text-center text-white p-4 md:pt-16 bg-[#01012B]`}>
        {
          content.heading1 && (
            <motion.h6 className='text-2xl sm:text-5xl lg:text-7xl font-thin'
            initial={{ opacity:0,x:-100}}
            whileInView={{ opacity:1, x:0}}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}
           >
             {content.heading1} <br /> {content.heading2}
           </motion.h6>
          )
        }
    
        {content.para1 && (
          <motion.p className='text-base font-thin sm:text-2xl lg:text-3xl py-6 '
          
          initial={{ opacity:0,x:550}}
          whileInView={{ opacity:1, x:0}}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}

          >
            {content.para1} <br /> {content.para2} 
          </motion.p>
        )}
        
        {content.btn && (
          <button className='btn bg-[#EC3E73] text-white px-4 py-2 sm:px-6 sm:py-3 rounded'>
            {content.btn}
          </button>
  
        )}

        {content.arrorIcon && (
          
          
            <motion.div className='justify-center flex mt-10'
            initial={{ opacity:0, y:100}}
            whileInView={{ opacity:1, y:0}}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}
  
            >
            <div onClick={()=> <Link to="/about">ram</Link>} className='bg-white rounded-[50%] flex size-[50px] sm:size-[65px] justify-center items-center'>
            <img src={content.arrorIcon} alt="img" loading="lazy" />    
            </div>
            </motion.div>
           
          )
        }

        {
          content.aboutImg && (
            <div className='lg:py-20 lg:relative'>
              <div className="header-about-img pt-2 lg:pb-60">
              <img src={content.aboutImg} className='lg:absolute' alt="img" loading="lazy" />
            </div>
            </div>

          )
        }
    
    
    {
      content.text && (
        <div className='flex flex-col items-center py-5 text-[#EE3E77]'>
          <p className='pb-3'>{content.text}</p>
          <img src={content.downIcon} alt="img" loading="lazy" />
        </div>

      )
    }
          
        {
          content.careerImg &&(
              <div className='pt-5 lg:pb-70 md:pb-50 lg:relative mx-0 px-0'> 
                <div className="careerGallary lg:absolute grid grid-flow-col grid-cols-1 grid-rows-5 md:grid-rows-3 md:grid-cols-3  gap-3 sm:h-100">
              <motion.div className="careerImg md:row-span-3"
               initial={{ opacity:0, x:-100}}
               whileInView={{ opacity:1, x:0}}
               transition={{ duration:0.5 }}
               viewport={{ once:true }}
              >
                <img src={content.careerImg.careerImg1} className='object-cover size-full' alt="img"  loading="lazy"/>
                </motion.div>
              <motion.div className="careerImg md:row-span-2 "
               initial={{ opacity:0, y:-300}}
               whileInView={{ opacity:1, y:0}}
               transition={{ duration:0.5 }}
               viewport={{ once:true }}
              >
                <img src={content.careerImg.careerImg2} className='object-cover size-full' alt="img" loading="lazy"/>
                </motion.div>
              <motion.div className="careerImg"
               initial={{ opacity:0, y:100}}
               whileInView={{ opacity:1, y:0}}
               transition={{ duration:0.5 }}
               viewport={{ once:true }}>
                <img src={content.careerImg.careerImg3} className='object-cover size-full' alt="img" loading="lazy"/>
                </motion.div>
              <motion.div className="careerImg"
               initial={{ opacity:0, x:100}}
               whileInView={{ opacity:1, x:0}}
               transition={{ duration:0.5 }}
               viewport={{ once:true }}>
                <img src={content.careerImg.careerImg4} className='object-cover size-full' alt="img" loading="lazy"/>
                </motion.div>
              <motion.div className="careerImg md:row-span-2"
               initial={{ opacity:0, x:100}}
               whileInView={{ opacity:1, x:0}}
               transition={{ duration:0.5 }}
               viewport={{ once:true }}>
                <img src={content.careerImg.careerImg5} className='object-cover size-full' alt="img" loading="lazy"/>
                </motion.div>
                </div>
              </div>
            
          )
        }
       
       {
        content.shopifyHeading && (
          <>
           <div className='flex w-full flex-col lg:flex-row gap-5'>
      {/* Left Side */}
      <motion.div
        className='w-full lg:w-[60%]'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div className="flex flex-wrap w-full">
          <div className="w-full lg:p-4">
            <motion.div
              className="hero-wrapper"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-lg lg:text-4xl font-bold mb-4 text-start">
                Shopify Development Services
              </h1>
              <p className="text-md lg:text-lg text-gray-100 mb-6 text-start">
                Say hello to Hassle-Free, Promising Web management
              </p>

              {/* Divider */}
              <div className="h-1 w-16 bg-[#ed3d76] mb-6"></div>

              {/* List with staggered animation */}
              <motion.ul
                className="space-y-4 text-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {[
                  'Go-To for Premium Shopify Development services.',
                  'Experience Professional Design, SEO Optimized, and',
                  'Budget-Friendly Shopify Solutions',
                  'Tailor-made Shopify development to your needs with our experts!',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start text-left text-sm lg:text-md"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <img src="./images/right-icon.png" alt="" className="w-5 h-5 mr-2 mt-1" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Partner Section */}
              <motion.div
                className="flex flex-wrap items-center justify-between gap-6 mt-8 bg-white px-4 py-2 rounded-lg shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {['micorosoft_icon.png', 'cmmi-level.png', 'cluth.png', 'aws.png'].map((img, idx) => (
                  <div
                    key={idx}
                    className="flex-1 min-w-[50px] max-w-[100px]"
                  >
                    <img
                      className="w-full h-auto object-contain"
                      src={`./images/${img}`}
                      alt={`Partner ${idx + 1}`}
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        className='w-full lg:w-[40%] lg:px-4 flex justify-center lg:justify-end'
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TouchUsForm />
      </motion.div>
    </div>

          </>
        
        )
       }
      </div>
    </>
  );
}
