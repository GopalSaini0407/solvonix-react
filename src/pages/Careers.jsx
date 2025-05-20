import React from 'react';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';

import SeoComponent from '../components/SeoComponent'

const weAre=[
  {icon:"images/hand.png", heading:"Pasionate & Committed", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis leo vel velit luctus, id feugiat magna euismod."},
  {icon:"images/hand.png", heading:"Pasionate & Committed", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis leo vel velit luctus, id feugiat magna euismod."},
  {icon:"images/hand.png", heading:"Pasionate & Committed", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis leo vel velit luctus, id feugiat magna euismod."},
  {icon:"images/hand.png", heading:"Pasionate & Committed", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis leo vel velit luctus, id feugiat magna euismod."}
]



export default function Careers() {
  return (

    <>
   <SeoComponent page="career"   title="careers"/>

<div className='careers'>
      <div className='max-w-[1200px] mx-auto'>
      <section className='value-info p-3 lg:pt-35'>
      <div className="value-info-title text-center lg:text-left">
                    <h5 className='text-[#EA3E70] lg:text-1xl'>Our Value</h5>
                    <h2 className='text-[#000022] lg:text-5xl  font-light lg:my-4'>Why work with us</h2>
                </div>
                <p className='text-[#A0A0A0] text-sm lg:text-[17px] font-light leading-6 mb-3'>Suspendisse dignissim ipsum non orci gravida, non tristique justo sollicitudin. In eros ligula, cursus ac leo vitae, convallis finibus massa. Nam imperdiet nisl erat, sit amet laoreet lectus accumsan vel. Maecenas a velit faucibus nunc
                    aliquet laoreet nec at magna. Proin eget eros nec urna iaculis auctor vitae ac felis. Donec vitae lorem ultricies, rutrum ipsum et, mollis justo.</p>
             <div className="we-are grid grid-cols-1 sm:grid-cols-2 sm:gap-x-20">
          {
              weAre.map((data,index)=>(
                <div className='we-are-box flex px-5 flex-col md:flex-row justify-center items-center md:justify-start' key={index}>
            <div className="icons md:size-[100px] size-[66px] me-3">
              <img src={data.icon} className='w-full' alt="img" loading="lazy" />
            </div>
            <div>
            <h3 className='font-medium text-center md:text-left'>{data.heading}</h3> 
            <p className='text-[#A0A0A0] text-base lg:text-[17px] font-light leading-6 mb-3 text-center md:text-left'>
              {data.para}
              </p>         
              </div>
           </div>
              ))
            }
          
          
          </div>
          
      </section>

      <section className='open-position relative z-50 md:z-0 pb-10 bg-white'>
      <div className="open-position-title text-center">
                    <h5 className='text-[#EA3E70] lg:text-1xl'>Our Value</h5>
                    <h2 className='text-[#000022] lg:text-5xl  font-light lg:my-4'>Why work with us</h2>
                </div>
            <Accordion/>
      </section>
      </div>
       <div className="career-footer relative  z-0 md:z-10 md:top-[0px]">
        <Footer/>
       </div>
    </div>
    
    </>
   
  )
}
