import React from 'react'

const footerData=[
    {class:"footer-internet-marketing", title:"Internet Marketing", content:["SEO Services","PPC","SMO","Link Building","Guest Blogging"]},
    {class:"footer-web-development", title:"Web Development", content:["PHP Development","Facebook Application","CMS Development","Ecommerce Development","Content writing"]},
    {class:"footer-wesign", title:"Design", content:["Web Designing Services","Logo Designing","Website Redisigning","Flash Designing","Brochure Designing"]},
    {class:"footer-link-bulding", title:"Link Bulding", content:["Reciprocal Link Building","Bulk Link Building","One Way Link Building","Link Building Package","Custom Link Building Package"]}
    ]
export function Footer() {
  return (
    <>
      <footer className='w-full bg-[url("images/footer_bg.png")] bg-no-repeat pt-[300px] bg-cover'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 max-w-[1200px] mx-auto px-5'>
         {
         footerData.map((footerdata,index)=>(
         <div key={index} className={`${footerdata.class}`}>
            <h1 className='text-white text-[17px] font-medium'>{footerdata.title}</h1>
            <ul className='lg:mt-[30px] leading-loose'>
               { footerdata.content.map((item,index)=>(
               <li key={index} className='text-white font-extralight text-[15px]'>
                  {item}
               </li>
               ))
               }
            </ul>
         </div>
         ))
         }
      </div>
      <p className='text-white px-5 pt-[60px] pb-[50px] text-center font-extralight opacity-[0.8]'>© Copyright 2024 Solvonix Technologies. All rights reserved. A parent company of <strong>TeFe Information Technology</strong></p>
   </footer>
    </>
  )
}

export default Footer