import React,{useRef} from 'react';
import { Helmet } from "react-helmet-async";
import Footer from '../components/Footer';
import SeoComponent from '../components/SeoComponent';
import {
  TrendingUp,
  Settings
} from 'lucide-react';


import { motion } from "framer-motion";
import {  ShoppingCart, ArrowUp, Code,  Smartphone,  Zap,  Shield,  BarChart2,  ArrowRight , Rocket,Layout, Cpu,Globe, Clock, Server} from "lucide-react";
import { FaSmile, FaCalendarAlt, FaRocket, FaRedo, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const About = () => {
  const stats = [
    {
      icon: <FaSmile className="text-pink-500 text-4xl" />,
      value: "500+",
      label: "Happy Clients",
    },
    {
      icon: <FaCalendarAlt className="text-blue-500 text-4xl" />,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: <FaRocket className="text-yellow-400 text-4xl" />,
      value: "1000+",
      label: "Projects Completed",
    },
    {
      icon: <FaSearch className="text-orange-400 text-4xl" />,
      value: "75+",
      label: "SEO Projects",
    },
    {
      icon: <FaRedo className="text-green-500 text-4xl" />,
      value: "78%",
      label: "Repeat Customers",
    },
  ];
}
const projects = [
    {
      title: "Artify Home Textile",
      image: "./images/skill-img-2.png",
      desc: "A visually rich Shopify store for a leading home textile brand, featuring custom product configurators and integrated reviews for higher conversions."
    },
    {
      title: "EcoTrendy Apparel",
      image: "./images/skill-img-1.png",
      desc: "Eco-friendly clothing brand with advanced filtering, loyalty program, and smooth mobile experience, built from scratch on Shopify."
    },
    {
      title: "TechGizmo Gadgets",
      image: "./images/skill-img-1.png",
      desc: "High-conversion electronics store with custom upsells, real-time inventory syncing, and Shopify Plus integration."
    },
    {
      title: "Glowify Skincare",
      image: "./images/skill-img-2.png",
      desc: "A beauty-focused store with subscription features, influencer landing pages, and Instagram shop integration."
    },
    {
      title: "PetLuxe Supplies",
      image: "./images/skill-img-2.png",
      desc: "Custom pet accessories store with multilingual support, bundle builder, and fast checkout UX design."
    }
  ];


const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};


export default function Shopify() {

  const handleScrollToContact = () => {
   window.scrollTo({
    top:0,
    behavior:'smooth'
   });
  };

  return (

    <>
       <SeoComponent page="shopify"
         title="Solvonix Shopify"
         description="Solvonix Technologies a well known SEO Company of India providing SEO services. Wanna reasonable SEO services in India? Professional SEO Company in India to help you. Call us for SEO services, PPC services, Link Building services and SMO services in India."
         keywords="SEO India , SEO Company India , ROI Based SEO Services India&lrm , SEO Services In India, Best SEO company, SEO company in India"
      
       />
       <div className='shopify'>
      <div className='max-w-[1200px] mx-auto'>
           {/* Services Section with Floating Cards */}
          <section className=" pt-10 lg:py-20 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute inset-0 bg-[url('/assets/dots.svg')]"></div>
            </div>
            
            <div className="container mx-auto px-6 relative pb-5">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-5 lg:mb-20"
              >
                <span className="text-sm font-medium text-[#ed3d76] bg-blue-50 px-4 py-1 rounded-full">
                  Our Services
                </span>
                <h2 className="text-lg lg:text-3xl md:text-4xl font-bold my-2 lg:my-4  text-gray-900">
                  Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed3d76] to-[#bf456c]">Shopify Solutions</span>
                </h2>
                <p className="text-md lg:text-xl text-gray-600 max-w-2xl mx-auto">
                End-to-End services to build optimize and scale your eCommerce store.
                                </p>
              </motion.div>
    
              <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[
                  {
                    icon: <Layout className="w-10 h-10" />,
                    title: "Shopify Custom Theme Development",
                    desc: "We create fully custom Shopify themes that are visually stunning, mobile-responsive, and optimized for conversions. Tailored to your brand and user journey, our themes enhance the customer experience while ensuring fast performance and seamless navigation across all devices.",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: <Cpu className="w-10 h-10" />,
                    title: "Shopify App Development",
                    desc: "Enhance your store’s capabilities with custom Shopify app development. Whether you need private apps, public apps, or unique functionality, we build secure, scalable apps that integrate smoothly with your store and improve both backend operations and customer engagement.",
                    color: "from-purple-500 to-purple-600"
                  },
                  {
                    icon: <Globe className="w-10 h-10" />,
                    title: "Headless Commerce",
                    desc: "Unlock complete flexibility and performance with headless Shopify development. We decouple the frontend from the backend, allowing you to deliver lightning-fast, omnichannel shopping experiences using modern frameworks like React, Vue, or Next.js—all while still leveraging Shopify’s powerful eCommerce backend.",
                    color: "from-indigo-500 to-indigo-600"
                  },
                  {
                    icon: <Zap className="w-10 h-10" />,
                    title: "Performance Optimization",
                    desc: "Speed and performance are critical for conversions. We optimize your Shopify store by minimizing load times, compressing assets, improving code quality, and implementing best practices for SEO and mobile performance—ensuring a smooth and fast experience for your users.",
                    color: "from-cyan-500 to-cyan-600"
                  },
                  {
                    icon: <Server className="w-10 h-10" />,
                    title: "Store Migration",
                    desc: "Seamlessly migrate your existing store to Shopify from platforms like WooCommerce, Magento, or BigCommerce. We handle everything—from product and customer data to SEO settings and design replication—ensuring zero downtime and a smooth transition with no data loss.",
                    color: "from-violet-500 to-violet-600"
                  },
                  {
                    icon: <Clock className="w-10 h-10" />,
                    title: "Shopify Store Maintenance",
                    desc: "Keep your Shopify store secure, updated, and running flawlessly with our ongoing maintenance services. From fixing bugs and updating themes to monitoring performance and implementing new features, we ensure your store continues to operate efficiently as your business grows.",
                    color: "from-fuchsia-500 to-fuchsia-600"
                  }
                ].map((service, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                    <div className="p-8">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} text-white flex items-center justify-center mb-6`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.desc}</p>
                      <button className="flex items-center text-[#ed3d76] font-medium hover:text-[#eb7ab4] transition">
                        Learn more <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className='flex justify-center relative z-10'>
      <button
       onClick={handleScrollToContact}
        className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 mt-5 rounded-md font-semibold flex items-center space-x-2"
      >
        <span>Contact Us</span>
        <span className="text-lg"><ArrowUp /></span>
      </button>
    </div>
          
          </section>
             {/* <div className='flex justify-center'>
      <button
       onClick={handleScrollToContact}
        className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 mt-5 rounded-md font-semibold flex items-center space-x-2"
      >
        <span>Contact Us</span>
        <span className="text-lg"><ArrowUp /></span>
      </button>
    </div> */}
    
{/* Technology Stack Section with Framer Motion */}
<section className="py-5 lg:pb-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-6">
    <motion.h2
      className="text-lg lg:text-4xl font-extrabold text-center mb-5 lg:mb-16 text-gray-800"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Our Shopify Technology Stack
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        {
          name: "Shopify Liquid",
          icon: <Zap className="w-10 h-10 text-pink-500" />,
          bg: "bg-pink-50",
        },
        {
          name: "React.js",
          icon: <Code className="w-10 h-10 text-sky-600" />,
          bg: "bg-sky-50",
        },
        {
          name: "Node.js",
          icon: <Globe className="w-10 h-10 text-green-600" />,
          bg: "bg-green-50",
        },
        {
          name: "GraphQL",
          icon: <BarChart2 className="w-10 h-10 text-purple-600" />,
          bg: "bg-purple-50",
        },
        {
          name: "Shopify Polaris",
          icon: <Shield className="w-10 h-10 text-indigo-600" />,
          bg: "bg-indigo-50",
        },
        {
          name: "REST APIs",
          icon: <Smartphone className="w-10 h-10 text-orange-500" />,
          bg: "bg-orange-50",
        },
        {
          name: "HTML5/CSS3",
          icon: <Code className="w-10 h-10 text-red-500" />,
          bg: "bg-red-50",
        },
        {
          name: "JavaScript ES6+",
          icon: <Code className="w-10 h-10 text-yellow-500" />,
          bg: "bg-yellow-50",
        },
      ].map((tech, index) => (
        <motion.div
          key={index}
          className={`${tech.bg} p-6 rounded-xl text-center shadow-sm hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">{tech.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800">{tech.name}</h3>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      
{/* Why Choose Us Section with Framer Motion */}
<section className="lg:p-0">
  <div className="container mx-auto px-6">
    <motion.h2
      className="text-lg lg:text-4xl font-extrabold text-center mb-2 lg:mb-16 text-gray-800"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
     Why Choose <span className="text-[#ed3d76]">Our</span> Shopify Development Services?
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          icon: <ShoppingCart className="w-10 h-10 text-white" />,
          title: "eCommerce Experts",
          desc: "Our certified Shopify developers have years of experience crafting successful stores from scratch or optimizing existing ones for maximum performance.",
          color: "bg-blue-600"
        },
        {
          icon: <Code className="w-10 h-10 text-white" />,
          title: "Custom Features & App Integrations",
          desc: "From third-party apps to custom plugin development, we ensure your store has the features you need to streamline operations and boost sales.",
          color: "bg-green-600"
        },
        {
          icon: <Smartphone className="w-10 h-10 text-white" />,
          title: "Mobile-First Approach",
          desc: "We design Shopify stores with a mobile-first approach, ensuring fast, responsive, and seamless shopping experiences across all devices for maximum user engagement.",
          color: "bg-indigo-600"
        },
        {
          icon: <Shield className="w-10 h-10 text-white" />,
          title: "Security and Compliance",
          desc: "Our Shopify solutions prioritize security and compliance, implementing best practices to protect customer data and ensure your store meets industry standards and regulations.",
          color: "bg-red-500"
        },
        {
          icon: <TrendingUp className="w-10 h-10 text-white" />,
          title: "Conversion-Focused Design",
          desc: "We design user-friendly, mobile-optimized, and conversion-centric Shopify stores to help you turn visitors into loyal customers.",
          color: "bg-yellow-500"
        },
        {
          icon: <Settings className="w-10 h-10 text-white" />,
          title: "Ongoing Support",
          desc: "Whether you’re migrating from another platform or launching a brand-new store, we provide complete Shopify solutions including development, design, and ongoing support.",
          color: "bg-purple-600"
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-xl transition transform hover:scale-105 duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className={`w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center ${item.color}`}>
            {item.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


       {/* Our Skills Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 pt-7 lg:py-16 px-4">
           <h2 className="font-bold text-lg lg:text-3xl text-[#465463] mb-5 flex justify-center flex-col items-center">
            <span className="mr-3 w-14 h-1 bg-[#ed3d76] rounded"></span>Our Skills
          </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
          className='order-2 lg:order-1'
        >
         

          <h3 className="font-bold text-lg lg:text-3xl text-[#465463] mb-3">
          Shopify Development, Customization & Technical Support Services
          </h3>
          <p className="mb-6 text-[#465463] text-md leading-relaxed">
          We offer a full suite of Shopify development services to help businesses launch, grow, and scale their eCommerce stores. Our services include custom Shopify store development, where we build fully tailored and branded online stores from the ground up, and theme customization, delivering responsive, conversion-optimized designs that reflect your brand identity. We provide Shopify app integration and development, adding advanced functionality and connecting your store with essential third-party tools. For businesses moving platforms, our Shopify migration services ensure smooth, secure transfers without data loss. We also specialize in Shopify Plus development for enterprise-grade solutions, and offer ongoing maintenance and support to keep your store updated, secure, and running at peak performance.
                  </p>

        </motion.div>

        {/* Right Column: Image or Illustration */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="">
            
            <img src="./images/skill-img-1.png" alt="img"/>
          </div>
        </motion.div>
      </div>




         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
      
        {/* left Column: Image or Illustration */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          className="flex justify-center"
        >
          <div className="">
       
            <img src="./images/skill-img-2.png" alt="img"/>
          </div>
        </motion.div>

          {/* right Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
         

          <h3 className="font-bold text-lg lg:text-3xl text-[#465463] mb-3">
          Affordable & Creative Shopify Ecommerce Website Design Services
          </h3>
          <p className="mb-6 text-[#465463] text-md leading-relaxed">
          Looking for an affordable yet creative Shopify eCommerce website design service? We specialize in building visually stunning, conversion-focused Shopify stores that align with your brand and budget. Our design approach blends creativity with user experience, ensuring your store looks professional, performs seamlessly on all devices, and drives sales. Whether you're launching a new business or revamping an existing store, we deliver custom themes, intuitive layouts, and mobile-first designs tailored to your goals. With transparent pricing and a commitment to quality, we make high-end Shopify design accessible to businesses of all sizes. Let us help you stand out in the crowded eCommerce space with a store that’s not only beautiful but built to convert.
    </p>

         
          
        </motion.div>

      </div>
      <div className='flex justify-center'>
      <button
       onClick={handleScrollToContact}
        className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 lg:mt-5 rounded-md font-semibold flex items-center space-x-2"
      >
        <span>Touch Us</span>
        <span className="text-lg"><ArrowUp /></span>
      </button>
    </div>
    </section>

  
   

         <section className="relative bg-white py-4 lg:pb-16 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg lg:text-3xl font-bold text-[#465463] mb-4"
        >
          Our Latest <span className="text-[#ed3d76]">Shopify Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-[#465463] mb-3 lg:mb-10 max-w-2xl mx-auto text-sm"
        >
          We deliver unique, scalable and impactful e-commerce solutions. Here are a few highlights from our recent work.
          <br />
          All projects are tailored for modern branding, marketing, and seamless customer experience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-[#f9f8f5] rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-32 h-32 object-contain rounded-md bg-white"
              />
              <div className="flex-1 text-left">
                <h4 className="font-bold text-lg text-[#465463] mb-1">
                  {project.title}
                </h4>
                <p className="text-[#99a0ac] text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  <section className="bg-white py-5 lg:py-16 px-6 md:px-20 relative">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col items-center justify-center"
    >
      <img src="./images/about_info.png" alt="About Solvonix" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center md:text-left"
      >
        IT'S ABOUT <span className="block text-[#ed3d76] text-lg lg:text-4xl font-bold mt-2">SOLVONIX TECHNOLOGIES</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-gray-700 font-semibold mb-4"
      >
        “We are a leading web development, SEO & digital marketing services provider based in Faridabad-Delhi-Ambala & serving a global clientele”
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-gray-600 mb-4"
      >
        Since our inception 12 years back, we have been working with a vision of delivering our services equipped with latest technologies and great expertise...
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-gray-600 mb-6"
      >
        We have a dedicated team that takes every project with great expertise and give its 100%...
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md font-semibold flex items-center space-x-2"
      >
        <span>Read More</span>
        <span className="text-lg">→</span>
      </motion.button>
    </motion.div>
  </div>
</section>

 

       </div>
    </div>
           <Footer/>

    </>
   
  )
}
