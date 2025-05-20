import React from 'react'

export function ServiceSection({pageData}) {
  return (

    <div>
     <div className="service-section">
          {/* Services Section */}
          {
          pageData.services &&   <section className="child-two p-8 mb-10 border-2 border-gray-300 relative after:content-[''] after:absolute after:left-[10%] after:bottom-0 after:h-[3px] after:w-[80%] after:bg-[#EE3E77]">
          {/* <h3 className="sm:2xl md:text-3xl lg:text-4xl font-semibold pb-5 text-[#2d2d2d]">Our Search engine optimization methodology includes:</h3> */}
          {pageData.services && pageData.services.map((service, index) => (
            <div key={index}>
              {service.simpleText &&  <p className="mb-5">{service.simpleText}</p> }
              {
                service.description1 && <p className="text-[#777] md:text-[18px] leading-7 font-[400]">{service.description1}</p>

              }
              {
                   service.title1 && <h1 className="text-2xl md:text-3xl py-[30px] text-[#2d2d2d] font-medium">{service.title1}</h1>

              }
              {
                 service.description2 &&  <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description2}</p>

              }
          
          {
           service.listOne && service.listOne.map((list,index)=>(
              <ul key={index} className='about-whychoose text-[#A0A0A0] leading-9 text-sm lg:text-[15px]'>
              <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">{list}</li>
          </ul>
            ))
          }
          {
            service.description3 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description3}</p>

          }
          {
            service.title2 && <h1 className="text-[1.3rem] md:text-3xl py-[30px] text-[#2d2d2d] font-medium">{service.title2}</h1>

          }
          {
            service.description4 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description4}</p>

          }
          {
              service.para1 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.para1}</p>

          }
      {
            service.listTwo && service.listTwo.map((list,index)=>(
              <ul key={index} className='about-whychoose text-[#A0A0A0] leading-9 text-sm lg:text-[15px]'>
              <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">{list}</li>
          </ul>
            ))
          }
          {
            service.title3 && <h1 className="text-[1.3rem] md:text-3xl py-[30px] text-[#2d2d2d] font-medium">{service.title3}</h1>

          }
          {
            service.subtitle1 && <strong className='text-[#2d2d2d] text-[14px]'>{service.subtitle1}</strong>
          }
          {
            service.description5 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description5}</p>

          }
                 {
            service.listThree && service.listThree.map((list,index)=>(
              <ul key={index} className='about-whychoose text-[#A0A0A0] leading-9 text-sm lg:text-[15px]'>
              <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">{list}</li>
          </ul>
            ))
          }
          {
            service.subtitle2 && <strong className='text-[#2d2d2d] text-[14px]'>{service.subtitle2}</strong>
          }
          {
            service.description6 &&  <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description6}</p>

          }
           {
            service.subtitle3 && <strong className='text-[#2d2d2d] text-[14px]'>{service.subtitle3}</strong>
          }
          {
              service.description7 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description7}</p>
          }
          {
            service.subtitle4 && <strong className='text-[#2d2d2d] text-[14px]'>{service.subtitle4}</strong>
          }
            {
              service.description8 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description8}</p>
          }
          
            {
              service.description9 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description9}</p>
          }
            {
              service.description10 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description10}</p>
          }
              {
            service.listFour && service.listFour.map((list,index)=>(
              <ul key={index} className='about-whychoose text-[#A0A0A0] leading-9 text-sm lg:text-[15px]'>
              <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">{list}</li>
          </ul>
            ))
          }
          
           {
              service.description11 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description11}</p>
          }
           {
            service.subtitle5 && <strong className='text-[#2d2d2d] text-[14px]'>{service.subtitle5}</strong>
          }
           {
              service.description12 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description12}</p>
          }
           {
            service.subtitle6 && <strong className='text-[#2d2d2d] text-[14px]' >{service.subtitle6}</strong>
          }
           {
              service.description13 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description13}</p>
          }
           {
            service.subtitle7 && <strong className='text-[#2d2d2d] text-[14px]'>{service.subtitle7}</strong>
          }
            {
              service.description14 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description14}</p>
          }
          {
            service.simpleText2 && <p> <i>{service.simpleText2}</i></p>
          }
              {/* <strong className="text-[#2d2d2d] text-[14px]">{service.title}</strong> */}
            </div>
          ))}
        </section>
        }
      

       {/* Services 2 Section */}
       {
        pageData.services2 &&  <section className="child-two p-8 mb-10 border-2 border-gray-300 relative after:content-[''] after:absolute after:left-[10%] after:bottom-0 after:h-[3px] after:w-[80%] after:bg-[#EE3E77]">
        {/* <h3 className="sm:2xl md:text-3xl lg:text-4xl font-semibold pb-5 text-[#2d2d2d]">Our Search engine optimization methodology includes:</h3> */}
        {pageData.services2 && pageData.services2.map((service, index) => (
          <div key={index}>
        
            {
                 service.title1 && <h1 className="text-[1.3rem] md:text-3xl py-[30px] text-[#2d2d2d] font-medium">{service.title1}</h1>

            }
        
        {
         service.listOne && service.listOne.map((list,index)=>(
            <ul key={index} className='about-whychoose text-[#A0A0A0] leading-9 text-sm lg:text-[15px]'>
            <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">{list}</li>
        </ul>
          ))
        }
        {
          service.title2 && <h1 className="text-[1.3rem] md:text-3xl py-[30px] text-[#2d2d2d] font-medium">{service.title2}</h1>

        }
        {
          service.description1 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description1}</p>

        }
         
    {
          service.listTwo && service.listTwo.map((list,index)=>(
            <ul key={index} className='about-whychoose text-[#A0A0A0] leading-9 text-sm lg:text-[15px]'>
            <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">{list}</li>
        </ul>
          ))
        }
        {
          service.description2 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description2}</p>
        }
        
            {/* <strong className="text-[#2d2d2d] text-[14px]">{service.title}</strong> */}
          </div>
        ))}
      </section>
       }

        {/* Services 3 Section */}
        {
        pageData.services3 &&  <section className="child-two mb-10 p-8 border-2 border-gray-300 relative after:content-[''] after:absolute after:left-[10%] after:bottom-0 after:h-[3px] after:w-[80%] after:bg-[#EE3E77]">
        {/* <h3 className="sm:2xl md:text-3xl lg:text-4xl font-semibold pb-5 text-[#2d2d2d]">Our Search engine optimization methodology includes:</h3> */}
        {pageData.services3 && pageData.services3.map((service, index) => (
          <div key={index}>
        
            {
                 service.title1 && <h1 className="text-[1.3rem] md:text-4xl py-[30px] text-[#2d2d2d] font-medium">{service.title1}</h1>

            }
        
        {
         service.listOne && service.listOne.map((list,index)=>(
            <ul key={index} className='about-whychoose text-[#A0A0A0] leading-9 text-sm lg:text-[15px]'>
            <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">{list}</li>
        </ul>
          ))
        }
      
        {
          service.description1 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description1}</p>

        }
            {/* <strong className="text-[#2d2d2d] text-[14px]">{service.title}</strong> */}
          </div>
        ))}
      </section>
       }

         {/* Services 4 Section */}
         {
        pageData.services4 &&  <section className="child-two mb-10 p-8 border-2 border-gray-300 relative after:content-[''] after:absolute after:left-[10%] after:bottom-0 after:h-[3px] after:w-[80%] after:bg-[#EE3E77]">
        {/* <h3 className="sm:2xl md:text-3xl lg:text-4xl font-semibold pb-5 text-[#2d2d2d]">Our Search engine optimization methodology includes:</h3> */}
        {pageData.services4 && pageData.services4.map((service, index) => (
          <div key={index}>
        
            {
                 service.title1 && <h1 className="text-[1.3rem] md:text-3xl py-[30px] text-[#2d2d2d] font-medium">{service.title1}</h1>

            }
        
       
      
        {
          service.description1 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description1}</p>

        }
         {
          service.description2 && <p className="text-[#777] md:text-[18px] leading-7 font-[400] mb-3">{service.description2}</p>

        }
          </div>
        ))}
      </section>
       }

</div>


        {/* bottom text */}
        {
        pageData.bottomText && <p className="my-7 text-[#2d2d2d] text-[14px] leading-6" dangerouslySetInnerHTML={{ __html:  pageData.bottomText }} />
       }
     
        {/* bottom list */}
        {
          pageData.bottomList &&  pageData.bottomList.map((list,index)=>(
            <ul key={index} className='about-whychoose text-[#A0A0A0] leading-9 text-sm lg:text-[15px]'>
            <li className="bg-[url(/images/choose_listicon.jpg)] bg-no-repeat bg-left flex items-center pl-6">{list}</li>
          </ul>
          ))
        }


    </div>


  )
}

export default ServiceSection