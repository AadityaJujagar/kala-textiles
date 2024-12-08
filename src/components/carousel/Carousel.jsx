import Slider from "react-slick";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideComponent } from "../slideComponent/SlideComponent";
import { carouselSlideData } from "../../data/data";

export const Carousel = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {carouselSlideData.map((singleData) => (
          <SlideComponent key={singleData.id} {...singleData} />
        ))}
      </Slider>
    </div>
  );
};
