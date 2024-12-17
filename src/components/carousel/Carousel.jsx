import Slider from "react-slick";
import "./carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideComponent } from "../slideComponent/SlideComponent";

export const Carousel = ({ data }) => {
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
        {data?.carouselSlideData.map((singleData) => (
          <SlideComponent key={singleData.id} {...singleData} />
        ))}
      </Slider>
    </div>
  );
};
