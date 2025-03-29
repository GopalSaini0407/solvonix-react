import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabData = [
    { id: "tab1", name: "Print Designs", img: "images/dca.png" },
    { id: "tab2", name: "App Designs", img: "images/dca.png" },
    { id: "tab3", name: "Websites", img: "images/dca.png" },
    { id: "tab4", name: "Logos", img: "images/dca.png" },
    { id: "tab5", name: "CMS", img: "images/dca.png" },
    { id: "tab6", name: "Brochure", img: "images/dca.png" },
    { id: "tab7", name: "Pamphlet", img: "images/dca.png" },
    { id: "tab8", name: "Card", img: "images/dca.png" },
  ];

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 7 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="shadow-lg rounded-lg bg-white">
      {/* Tabs with Slider */}
      <div className="border-b-2 border-gray-200 px-4 bg-[#01012B] pb-[10rem]">
        <Slider {...sliderSettings}>
          {tabData.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-4 text-sm font-medium transition-all duration-300 whitespace-nowrap 
                ${activeTab === tab.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-blue-500"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </Slider>
      </div>

      {/* Tab Content */}
      <div className="p-6 flex flex-col-reverse md:flex-row md:ms-20 bg-[#FCC81C] relative top-[-50px]">
        <div className="w-full md:w-1/2">

          {activeTab === "tab1" && <TabContent title1="Delhi Collage of Art" title2="The domain of <br/>
           art is ever fascinating" 
           btn="Go to Project" />}
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={tabData.find((tab) => tab.id === activeTab)?.img}
            alt="Design"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

// Left Arrow Component
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 hover:bg-gray-900"
    >
      <MdArrowBackIos size={20} />
    </button>
  );
}

// Right Arrow Component
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10 hover:bg-gray-900"
    >
      <MdArrowForwardIos size={20} />
    </button>
  );
}

// Tab Content Component
function TabContent({ title1,title2,btn }) {
  return (
    <div className="text-right md:space-y-10 space-y-2 flex flex-col justify-start md:justify-center items-center md:items-end md:h-100">
      <h2 className="md:text-2xl text-base font-semibold border-b-2 border-[#F58D31]">{title1}</h2>
      <h2 className="md:text-2xl text-base font-semibold" dangerouslySetInnerHTML={{ __html: title2 }} />
       
       {
        btn && <button className="px-3 py-2 font-light border rounded text-base border-[F48E32] md:text-3xl flex items-center">{btn} <IoIosArrowForward /></button>

       }
       
     
    </div>
  );
}


