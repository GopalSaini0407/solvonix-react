import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ExpertiseSlider = ({ pageData }) => {
   
    const settings = {
        //   dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: pageData?.expertiseCards?.length >= 3 ? 3 : pageData.expertiseCards.length,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 400, settings: { slidesToShow: 1.5 } }

          ]
        };
  return (
    <div className="p-5">
      <Slider {...settings}>
        {pageData?.expertiseCards?.map((card, index) => (
          <div key={index} className="p-3 pe-0">
            {/* Nested div to apply background color properly */}
            <div 
              className="flex flex-col items-center justify-end max-w-[205px] min-h-[262px] rounded text-white p-5  w-full" 
              style={{ backgroundColor: card.bgColor }} // Remove !important
            >
              <div className="w-full">
                <img src={card.image} className="w-full h-auto" alt={card.title} />
              </div>
              <h3 className="font-medium text-[18px] pt-8 w-full">{card.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExpertiseSlider;
