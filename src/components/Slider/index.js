import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderWrapper = ({
  children,
  slides,
  row,
  spacebetween,
  colors,
  mobile,
  tablet,
  desktop,
}) => {
  return (
    <Swiper
      navigation={true}
      grid={{ rows: row }}
      slidesPerView={slides}
      spaceBetween={spacebetween}
      modules={[Navigation]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: mobile,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: tablet,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: desktop,
          spaceBetween: 30,
        },
      }}
      style={{
        "--swiper-navigation-color": colors,
      }}
    >
      {children}
    </Swiper>
  );
};
export default SliderWrapper;
