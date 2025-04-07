import React from 'react';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import {motion} from "framer-motion"
import SeoComponent from '../components/SeoComponent';

export default function WhoWeAre() {
  return (

    <>
       <SeoComponent page="about"/>
       <div className='about'>
      <div className='max-w-[1200px] mx-auto'>
        <motion.section className='about-solvonix p-3 lg:pt-65 lg:mx-25'
          initial={{ opacity:0, y:200}}
          whileInView={{ opacity:1, y:0}}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
            >
          <div className="title text-center lg:text-left">
          <h5 className='text-[#EA3E70] lg:text-1xl'>About Solvonix Technologies</h5>
          <h2 className='text-[#000022] lg:text-5xl  font-light lg:my-4'>We Develop <br /> More than Mobile Apps</h2>
          </div>
        <p className='text-[#A0A0A0] text-sm lg:text-[17px] font-light leading-6 mb-3'> Solvonix Technologies was established in 2009 with a customer centric approach to provide affordable solutions for organizations seeking web designing companies in India for offshore outsourcing, web development outsourcing, web design outsourcing, print design, multimedia presentation.</p>
        <p className='text-[#A0A0A0] text-sm lg:text-[17px] font-light leading-6 mb-3'>Our clientele includes multinational corporations, small &amp; medium enterprises, NGOs &amp; development sector organizations. We have partnered with a variety of organizations including NGOs &amp; charitable and commercial organizations.</p>
        <p className='text-[#A0A0A0] text-sm lg:text-[17px] font-light leading-6 mb-3'>Approach towards work at Solvonix Technologies has always been customer and market communication centric, aimed at providing unique and innovative solutions keeping in mind your target consumer / audience. As a small company we are flexible and work in partnership with our client to build a long lasting relationship.</p>
        <p className='text-[#A0A0A0] text-sm lg:text-[17px] font-light leading-6 mb-3'> Winning solutions requires the domain expertise of techno-professionals from various disciplines. The core team at Solvonix technologies comprises of technical, designs, marketing specialists as well as advisory consultants who help us in evolving web and digital solution strategies. Our partners have to access to highly qualified professionals at all times but pay only for the expertise they need. Solvonix presently is providing offshore outsourcing solution for web services , web marketing and online marketing for various web development companies based in USA, UK and other European countries. Outsourcing of web development and design work has resulted in greater cost saving for web design and development companies based in USA, Canada, UK and other countries. </p>
        <p className='text-[#A0A0A0] text-sm lg:text-[17px] font-light leading-6 mb-3'>Our Main Designing and development Services includes: </p>
        <ul className='about-whychoose text-[#A0A0A0] leading-8 text-sm lg:text-[15px]'>
                            <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">Search Engine Optimization</li>
                            <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">Social Media Optimization</li>
                            <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">Website Designing</li>
                            <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">Content Writing</li>
                            <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">Software Development</li>
                            <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">Link Building Services</li>
                        </ul>
        </motion.section>
        <section className="solvonix-about-block grid justify-center pt-3">
        <div className="flex justify-center md:hidden py-5">
        <motion.div className="about-work flex px-5 md:hidden md:p-4 text-center text-base md:text-3xl lg:text-5xl font-bold 
        bg-[url('/images/about_diamond.png')] bg-no-repeat bg-cover w-[300px] max-w-[500px] h-[300px] items-center justify-center"
        initial={{ opacity:0, scale:0}}
        whileInView={{ opacity:1, scale:1}}
        transition={{ duration:0.8, ease:"easeInOut" }}
        viewport={{ once:true }}
        >
        Solvonix
      </motion.div>
        </div>
      
        <div className="md:grid md:grid-cols-3 flex  md:gap-6 text-[#EE3E77] lg:relative flex-wrap">
    
    {/* Row 1 */}
    <div className=" md:gap-6 md:col-span-3 lg:absolute md:w-full top-10 left-2">
      <div className='flex md:justify-around items-center'>
      <div className="about-work md:p-4 p-2 text-center text-base md:text-2xl lg:text-3xl">Innovation</div>
      <div className="about-work md:p-4 p-2 text-center text-base md:text-2xl lg:text-3xl">Expertise</div>
      </div>
    </div>

    {/* Row 2 */}
    <div className="flex md:justify-center md:gap-6 md:col-span-3 items-center">
      <div className="about-work md:p-4 p-2 text-center text-base md:text-2xl lg:text-3xl">Efficiency</div>
      
      <motion.div className="about-work hidden md:flex md:p-4 text-center text-base md:text-3xl lg:text-5xl font-bold 
        bg-[url('/images/about_diamond.png')] bg-no-repeat bg-cover size-[200px] lg:w-[498px] max-w-[500px] lg:h-[500px] items-center justify-center"
       
        initial={{ opacity:0, scale:0}}
        whileInView={{ opacity:1, scale:1}}
        transition={{ duration:0.8, ease:"easeInOut" }}
        viewport={{ once:true }}
        
        >
        Solvonix
      </motion.div>

      <div className="about-work p-2 md:p-4 text-center text-base md:text-2xl lg:text-3xl">Support</div>
    </div>

    {/* Row 3 */}
    <div className=" gap-6 md:col-span-3 lg:absolute md:w-full bottom-10 right-2">
      <div className='flex md:justify-around'>
      <div className="about-work p-2 md:p-4 text-center text-base md:text-2xl lg:text-3xl">Creativity</div>
      <div className="about-work p-2 md:p-4 text-center text-base md:text-2xl lg:text-3xl">Agility</div>
      </div>
    </div>
  </div>
  <p className='text-[#A0A0A0] text-sm lg:text-[17px] font-light leading-6 lg:mx-25 lg:mt-10 px-3'>Winning solutions requires the domain expertise of techno-professional from various disciplines. The core team at Solvonix technologies comprises of technical, designs, marketing specialists as well as advisory consultants who help us in evolving web and digital solution strategies. Our partners have to access to highly qualified  professionals at all times but pay only for the expertise they need.</p>

       </section>
      </div>
      <section className='md:relative md:h-100 mt-10'>
      <div className='about-bottom-box bg-[#EE3E77] md:absolute md:top-20 pt-20 left-0 md:pb-30 z-10 md:z-0 w-[100%]'>
      <Counter borderColor="white"/>
      </div>
       </section>
       <div className="footer relative  z-0 md:z-10 md:top-[0px]">
       <Footer/>

       </div>
    </div>
    
    </>
   
  )
}
