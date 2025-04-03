import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PortfolioContent from "./PortfolioContent";
import Footer from './Footer';

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabData = [
    { id: "tab1", name: "Print Designs" , content:<PortfolioContent/>},
    { id: "tab2", name: "App Designs" },
    { id: "tab3", name: "Websites" },
    { id: "tab4", name: "Logos" },
    { id: "tab5", name: "CMS" },
    { id: "tab6", name: "Brochure" },
    { id: "tab7", name: "Pamphlet" },
    { id: "tab8", name: "Card" },
  ];

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="shadow-lg rounded-lg bg-white">
      {/* Tabs Section with Slick Slider */}
      <div className="border-b-2 border-gray-200 px-10 bg-[#01012B] py-4 pb-50 ">
        <Slider {...sliderSettings}>
          {tabData.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-4 text-sm font-medium transition-all duration-300 whitespace-nowrap 
                ${activeTab === tab.id ? "text-[#ED3E75] bg-white border-b-2 border-[#ED3E75]" : "text-white hover:text-[#ED3E75]"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </Slider>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Render active tab content */}
        {tabData.find((tab) => tab.id === activeTab)?.content}
      </div>
      <section className="child-four bg-[#ED3E75] text-white p-10 text-center
      
      md:pb-30 
    relative md:top-[160px]
     z-10 md:z-0
    
    ">
      <p className="text-base md:text-2xl">Whatever be your web designing need, <br /> call us at +918826822211 or write to us at info@solvonix.com</p>
      <button className="px-3 py-2 md:px-4 md:py-3 rounded bg-white text-[#ED3E75] mt-3">Work With Us</button>
    </section>
    <div class="footer relative top-[0px] z-0 md:z-10 md:top-[0px]">
    <Footer/>
    </div>
    </div>
  );
}
