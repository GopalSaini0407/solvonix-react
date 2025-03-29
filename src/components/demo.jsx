import React from "react";
import Slider from "react-slick";

export default function Demo() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
      <div className="">
                <div className="img-box size-full pt-15 px-5">
                  <img src="images/service_icon.png" className="size-full" alt="" />
                </div>
                <h3 className="font-medium text-[20px] text-white pt-8 w-full px-5">ram</h3>
              </div>
      </div>
     
      <div className="bg-black">
      <img src="images/service_icon.png" className="size-full" alt="" />

      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}