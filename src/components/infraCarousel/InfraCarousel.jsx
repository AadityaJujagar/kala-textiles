import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./infracarousel.css";

export const InfraCarousel = ({ data }) => {
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
    <Slider className="infraSlider" {...settings}>
      {data?.infraSlideData.map((onlyData) => (
        <img src={onlyData.img} key={onlyData.id} alt="" />
      ))}
    </Slider>
  );
};
