import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  centerMode: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: false,
      },
    },
  ],
};

const Carousel = ({ children }) => {
  return (
    <Slider {...settings} className="carousel">
      {children}
    </Slider>
  );
};

export default Carousel;
