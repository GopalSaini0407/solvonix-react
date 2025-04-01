import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Ek baar me 3 slides dikhengi
    slidesToScroll: 1,
    autoplay: true, // Auto slide enable
    autoplaySpeed: 2000, // 2 second me slide change hoga
   
  };

  return (
    <div className="max-w-[1200px] relative bg-[#000022F2] ps-9 pt-9 size-full">
      <Slider {...settings}>
        <div className="size-full">
          <img src="images/portfolio_img.png" alt="Slide 1" />
        </div>
        <div className="size-full">
          <img src="images/dca.png" alt="Slide 2" />
        </div>
        <div className="size-full">
          <img src="images/multi_flat.png" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}
