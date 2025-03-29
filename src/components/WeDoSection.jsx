import React from 'react'

function WeDoSection({pageData}) {
  return (
    <section className="child-three pt-[80px] flex">
          <div className="child-three-left flex-1/2">
          {
            pageData.weDoTitle && <h2 className="font-extralight text-[#000022] md:text-6xl py-4">{pageData.weDoTitle}</h2>

          }
          {
            pageData.weDoDescription && <p className="text-[#777] md:text-[18px] leading-8 font-[300]">{pageData.weDoDescription}</p>

          }
            <button className="rounded py-3 px-5 bg-[#EC3E73] text-white my-8">Explore More</button>
          </div>

          <div className="child-three-right flex-1/2 bg-[#F2F5F8] p-8">
            {pageData.weDoItems && pageData.weDoItems.map((item, index) => (
              <div key={index} className="box-one">
                <img src={item.image} className="py-4" alt={item.title} />
                <h4 className="text-[#214371] font-bold text-3xl">{item.title}</h4>
                <ul className="py-5 leading-6 font-light text-[#2d2d2d] text-[18px]">
                  {item.items.map((li, idx) => (
                    <li key={idx}>{li}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
  )
}

export default WeDoSection