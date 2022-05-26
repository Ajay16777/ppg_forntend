// import React from "react";
// // Import Swiper React components
// // import { SwiperSlide } from "swiper/react";
// // import SliderWrapper from "../Slider";
// import { Carousel } from 'react-bootstrap';

// const Banner = ({ data }) => {
//  return (

//     <Carousel fade>
//         <Carousel.Item> 
//          <a href="./all-product"> <img style={{height: "60vh"
//       ,objectFit: "cover"
//      , width: "1450px"}}
//             className="d-block"
//             src="https://ppg.fra1.digitaloceanspaces.com/1646896539514Hindu_Festival_BG_Image_03-1.jpg"
//             alt="First slide" /></a>
//         </Carousel.Item>
//         <Carousel.Item r-ad>
//         <a href="./all-product">  <img style={{height: "60vh"
//      , width: "1450px"}}
//             className="d-block"
//             src="https://ppg.fra1.digitaloceanspaces.com/1647954174814Sanatan%20Dharma%20Kya%20hai.jpeg"
//             alt="Second slide" /></a>
//         </Carousel.Item>
//     </Carousel>
    
//  )
// };
// export default Banner;
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