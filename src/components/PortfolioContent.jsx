import { div } from 'framer-motion/client';
import React from 'react';

export default function PortfolioContent() {
  return (
    <div>

    <div className="p-6 flex flex-col-reverse md:flex-row md:ms-20 bg-[#FCC81C] relative top-[-80px]">
      {/* Left Side Section */}
      <div className="w-full md:w-1/2">
        <div className="text-right md:space-y-10 space-y-2 flex flex-col justify-start md:justify-center items-center md:items-end md:h-100">
          <h2 className="md:text-2xl text-base font-semibold border-b-2 border-[#F58D31]">
            Delhi Collage of Art
          </h2>
          <h2 className="md:text-2xl text-base font-semibold">
            The domain of <br />
            art is ever fascinating
          </h2>
          <button className="px-3 py-2 font-light border rounded text-base border-[#F48E32] md:text-3xl flex items-center">
            Go to Project 
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Right Side Section with Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img alt="Design" className="w-full rounded-lg" src="images/dca.png" />
      </div>
    </div>

    <div className="p-6 pb-[80px] flex flex-col-reverse md:flex-row bg-[#FCC81C] md:me-20 mb-[80px]">
      {/* Left Side Section */}
      <div className="w-full md:w-1/2">
        <div className="text-right md:space-y-10 space-y-2 bg-[#FCC81C] flex flex-col justify-start md:justify-center items-center md:items-end md:h-100">
          <h2 className="md:text-2xl text-base font-semibold border-b-2 border-[#F58D31]">
            Delhi Collage of Art
          </h2>
          <h2 className="md:text-2xl text-base font-semibold">
            The domain of <br />
            art is ever fascinating
          </h2>
          <button className="px-3 py-2 font-light border rounded text-base border-[#F48E32] md:text-3xl flex items-center">
            Go to Project 
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Right Side Section with Image */}
      <div className="w-full md:w-1/2 flex justify-center ">
        <img alt="Design" className="w-full rounded-lg" src="images/portfolio_img.png" />
      </div>
    </div>

    <div className="p-6 flex flex-col-reverse md:flex-row md:ms-20 bg-[#031F51] text-white ">
      {/* Left Side Section */}
      <div className="w-full md:w-1/2">
        <div className="text-right md:space-y-10 space-y-2 bg-[##031F51] flex flex-col justify-start md:justify-center items-center md:items-end md:h-100">
          <h2 className="md:text-2xl text-base font-semibold border-b-2 border-[#F58D31]">
            Delhi Collage of Art
          </h2>
          <h2 className="md:text-2xl text-base font-semibold">
            The domain of <br />
            art is ever fascinating
          </h2>
          <button className="px-3 py-2 font-light border rounded text-base border-[#F48E32] md:text-3xl flex items-center">
            Go to Project 
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Right Side Section with Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img alt="Design" className="w-full rounded-lg" src="images/multi_flat.png" />
      </div>
    </div>
  </div>
  
  );
}
