import React from "react";
// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import SliderWrapper from "../Slider";

const Banner = ({ data }) => {
  return (
    <div className="banner">
      <SliderWrapper
        slides={1}
        row={1}
        spacebetween={0}
        colors="#c74a2d"
        mobile="1"
        tablet="1"
        desktop="1"
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="banner_wrap">
                <img src={item.image} alt={item.title} className="img-fluid" />
              </div>
            </SwiperSlide>
          ))}
      </SliderWrapper>
    </div>
  );
};
export default Banner;
