import React from 'react';
import HomeSlider from '../components/HomeSlider';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
export default function Home() {
const ServiceData=[
{ img: 'images/offer_icon.png', title: 'Website Design and Development',para:"We develop web applications that appeal and reach to the end users delivering the desired result for our clients." },
{ img: 'images/mobile_application.png', title: 'Mobile Application Development', para:"Developing apps that perform, without compromising on the design and interactivity." },
{ img: 'images/custom_development.png', title: 'Custom Development',para:"We offer custom software development and consulting services to help you pull off your next project with less stress and less cost." },
{ img: 'images/cms_development.png', title: 'CMS Development' , para:"Solvonix offers the best CMS Development Services India for better Management and Control over your entire Your Business Processes." },
{ img: 'images/ecommerce_development.png', title: 'E-commerce Development', para:"Are you in search of a dynamic e-commerce development service provider?" },
{ img: 'images/app_web_maintenance.png', title: 'App & Web Maintenance' , para:"We offer annual maintenance services for existing mobile and web applications." }
]
const solvonixWorkData=[
{img:"images/education.png", title:"Education"},
{img:"images/hospitality.png", title:"Hospitality"},
{img:"images/hotels.png", title:"Hotels"},
{heading:"What Solvonix done?"},
{img:"images/gaming.png", title:"iGaming"},
{img:"images/healthcare.png", title:"Healthcare"},
{img:"images/real_estate.png", title:"Real Estate"},
]
const choosePlanData=[
{
title:"SEO Process",subTitle:"Plan-Processed",para:"Customized, targeted, structured, and perfect SEO process can do miracle to your online business…"
},
{
title:"Strategy",subTitle:"Strategy SEO", para:"Intelligence combined with a well-planned process is the beginning of a perfect SEO strategy. That is…."
},
{
title:"SEO Standard", subTitle:"Create Benchmark", para:"Solvonix is such an SEO company in India, which always goes by only standard SEO practices. We are not…"
},
{
title:"Pricing" , subTitle:"Maximize You ROI", para:"Choose from a range of SEO service packages from Bronze, Silver, Gold, Platinum & Unlimited SEO offers…"
}
]
const clientImges=[
{img:"images/client1.jpg"},
{img:"images/client2.jpg"},
{img:"images/client3.jpg"},
{img:"images/client4.jpg"},
{img:"images/client5.jpg"},
{img:"images/client6.jpg"},
{img:"images/client7.jpg"},
{img:"images/client8.png"},
{img:"images/client9.png"}
]

return (
<div className="home-container">
   <div className='home max-w-[1200px] mx-auto'>
      {/* Who We Are Section */}
      <div className='home-who-we-are flex p-4 flex-col-reverse md:flex-row md:py-20'>
         <div className='flex-1'>
            <h5 className='text-[#EA3E70] font-light text-base '>Who We Are</h5>
            <h2 className='text-2xl md:text-6xl py-3 leading-none font-extralight'>
               India's Leading Internet Marketing Service Provider
            </h2>
            <p className='font-extralight text-base text-[#A0A0A0] leading-[25px]'>
               Solvonix is a professional SEO company in India. We provide expert SEO services to our
               domestic as well as international clients at an affordable price. We have carved a
               niche in the internet marketing industry for our skills and commitment to providing the
               best Search Engine Optimization services to our esteemed clients.
            </p>
         </div>
         <div className='flex-1 px-3'>
            <img src='images/who_we.png' alt='Who We Are' className='w-full' />
         </div>
      </div>
      {/* Counter Section */}
         <Counter borderColor="#EA3E70"/>
      {/* Services Section */}
      <section className='home-services md:pt-[80px] pb-[50px] text-center'>
         <h6 className='text-[#EA3E70] text-[18px]'>Services</h6>
         <h4 className='text-[#000022] font-extralight text-3xl lg:text-[54px]'>What We Offer</h4>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-9 md:mt-[60px]'>
            {ServiceData.map((service, index) => (
            <div key={index} className='home-services-content grid justify-center md:px-9'>
               <div className='service-img-box flex justify-center'>
                  <img src={service.img} alt={service.title} />
               </div>
               <h3 className='text-[#323232] text-md lg:text-xl mt-[20px] font-semibold text-center'>
                  {service.title}
               </h3>
               <p className='text-white'>{service.para}</p>
            </div>
            ))}
         </div>
      </section>
      {/* Work Section */}
      <section className='solvonix-work grid justify-center pb-[100px]'>
         <div className="grid md:grid-rows-3 grid-rows-1 justify-center">
            <div className="flex justify-center gap-9 flex-col items-center md:flex-row">
            <div className="solvonix-work-box size-[175px] items-center justify-center md:hidden text-[#EE3E77] border-[#EE3E77] p-4 rounded-full text-center">
                  <h1 className='text-[2rem]  font-bold'>What Solvonix done?</h1>
               </div>
               <div className="solvonix-work-box size-[175px] items-center justify-center flex flex-col border duration-500 border-dashed border-[#EE3E77] p-4 rounded-full text-center hover:text-white hover:bg-[#EE3E77]">
                  <img src="images/education.png" alt="img"/>
                  <h3 className='mt-[20px]'>Education</h3>
               </div>
               <div className="solvonix-work-box size-[175px] items-center justify-center flex flex-col border duration-500 border-dashed border-[#EE3E77] p-4 rounded-full text-center hover:text-white hover:bg-[#EE3E77]">
                  <img src="images/hospitality.png" alt="img"/>
                  <h3 className='mt-[20px]'>Hospitality</h3>
               </div>
            </div>

            <div className="flex justify-center gap-9 flex-col items-center md:flex-row">
               <div className="solvonix-work-box size-[175px] mt-[36px] md:mt-0 items-center justify-center flex flex-col border duration-500 border-dashed border-[#EE3E77] p-4 rounded-full text-center hover:text-white hover:bg-[#EE3E77]">
                  <img src="images/hotels.png" alt="img"/>
                  <h3 className='mt-[20px]'>Hotels</h3>
               </div>
               <div className="solvonix-work-box size-[175px] items-center justify-center md:flex flex-col hidden  text-[#EE3E77] border-[#EE3E77] p-4 rounded-full text-center">
                  <h1 className='text-[2rem]  font-bold'>What Solvonix done?</h1>
               </div>
               <div className="solvonix-work-box size-[175px] items-center justify-center flex flex-col border duration-500 border-dashed border-[#EE3E77] p-4 rounded-full text-center hover:text-white hover:bg-[#EE3E77]">
                  <img src="images/gaming.png" alt="img"/>
                  <h3 className='mt-[20px]'>iGamin</h3>
               </div>
            </div>
            <div className="flex justify-center gap-9 flex-col items-center md:flex-row">
               <div className="solvonix-work-box size-[175px] mt-[36px] md:mt-0 items-center justify-center flex flex-col border duration-500 border-dashed border-[#EE3E77] p-4 rounded-full text-center hover:text-white hover:bg-[#EE3E77]">
                  <img src="images/healthcare.png" alt="img"/>
                  <h3 className='mt-[20px]'>Healthcare</h3>
               </div>
               <div className="solvonix-work-box size-[175px] items-center justify-center flex flex-col border duration-500 border-dashed border-[#EE3E77] p-4 rounded-full text-center hover:text-white hover:bg-[#EE3E77]">
                  <img src="images/real_estate.png" alt="img"/>
                  <h3 className='mt-[20px]'>Education</h3>
               </div>
            </div>
         </div>
      </section>
   </div>
   {/* portfolio Section */}
   <section className='home-portfolio flex flex-col md:flex-row gap-5'>
      <div className="portfolio-left-box w-100% md:w-[50%] lg:w-[30%] px-3 md:ps-[50px] my-auto">
         <h4 className='text-[#EA3E70]'>Recent Work</h4>
         <h2 className='text-[#000022] font-extralight mt-1 mb-4 text-[3rem]'>Portfolio</h2>
         <p className='text-[#777]  text-[17px] md:pe-[150px]'>If you have been looking to deploy quality, affordable web design company in India, Solvonix assures that we will live up to your expectation. !</p>
         <button className='bg-[#EA3E70] text-white px-4 py-2 rounded mt-3'>Let's Get Started</button>
      </div>
      <div className='portfolio-right-box  w-100% md:w-[50%] lg:w-[65%]'>
         <HomeSlider/>
      </div>
   </section>
   <div className='middle-container max-w-[1200px] mx-auto'>
      {/* why-choose Section */}
      <section className='why-choose flex py-[5rem] px-5 flex-col md:flex-row'>
         <div className='why-choose-left-box flex-1'>
            <h5 className='text-[#EA3E70]'>Why Choose</h5>
            <h2 className='text-[#000022]  text-4xl lg:text-[54px] font-extralight'>Solvonix</h2>
            <ul className="md:leading-[36px] leading-[20px] text-[#8F8F8F] text-[15px]">
               <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left bg-postision top-[10px] flex lg:items-center pl-6">Targeted, Concise, Measurable and Unique Approach</li>
               <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left bg-postision flex lg:items-center pl-6">Transparent, Trustworthy, Timely SEO Services</li>
               <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left bg-postision flex lg:items-center pl-6">Highly Competitive, Affordable &amp; Cost-Effective Pricing</li>
               <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left bg-postision flex lg:items-center pl-6">Industry benchmark SEO Service by Leader &amp; Experts</li>
               <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left bg-postision flex lg:items-center pl-6">One- stop solution for All tour Internet Marketing Needs</li>
            </ul>
         </div>
         <div className='why-choose-right-box flex-1 flex lg:justify-end'>
            <img src="images/choose_img.png" alt="img" />
         </div>
      </section>
      {/* choose-plains Section */}
      <section className='choose_plans grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-9 mx-5'>
         {
         choosePlanData.map((plan, index) => (
         <div key={index} className="plans-box  border-t-3 border-t-[#EA3E70] md:p-5 p-0 relative font-bold hover:text-[white]
            before:absolute before:top-0 before:left-0 before:w-full before:h-0 
            before:bg-[#EA3E70] before:transition-all before:duration-700 hover:before:h-full 
            before:mix-blend-multiply">
            <h3 className='relative z-10 text-[#EA3E70]'>{plan.title}</h3>
            <small className='relative z-10 text-[#777]'>{plan.subTitle}</small>
            <p className='relative z-10 text-[#777] text-[14px] leading-[21px]'>{plan.para}</p>
         </div>
         ))
         }
      </section>
      {/* our-client Section */}
      <section className='our-client flex mt-9 relative flex-col lg:flex-row px-5 pb-[50px] bg-white z-10'>
         <div className='client-left-box flex-1 bg-[#F7F7F7]'>
            <h4 className='text-[#EA3E70]'>Happy Customers</h4>
            <h2 className='text-[#000022] font-extralight mt-1 mb-4 text-4xl lg:text-[3rem]'>Our Clients</h2>
            <p className='text-[#777] text-base lg:text-[20px] lg:pe-[200px] '>Solvonix is known as a quality and affordable logo designing company and has helped numerous big and small companies with their unique Business logo designing. </p>
         </div>
         <div className='client-right-box flex-1 columns-3  lg:ps-[120px]'>
            {
            clientImges.map((clientImg,index)=>(
            <div className="clinet-img-box" key={index}>
               <img src={clientImg.img} alt="img"/>
            </div>
            ))
            }
         </div>

         <div className="client-middle-box hidden lg:block absolute left-1/3 top-1/3 ">
            <div className='bg-[#EE3E77;] w-[205px] h-[205px] relative rounded-[50%]'>
               <img src="images/clients_man.png" className='relative left-[33px] top-[-42px]' alt="img"/>
            </div>
         </div>
      </section>
   </div>
   {/* footer Section */}
   <div
    className='home-footer relative top-[-295px] z-0 md:z-10 md:top-[0px]'>
   <Footer/>

    </div>
</div>
);
}
