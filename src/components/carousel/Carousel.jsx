import Slider from "react-slick";
import "./carousel.css";
import Image1 from "/assets/carousel/1.jpg";
import Image2 from "/assets/carousel/2.jpg";
import Image3 from "/assets/carousel/3.jpg";
import Image4 from "/assets/carousel/4.jpg";
import Image5 from "/assets/carousel/5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Fade() {
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
        <div>
          <img src={Image1} />
          <div className="text-overlay">
            <h1>Luxury Towels, Redefined</h1>
            <p>
              Our premium towels combine timeless design with unmatched
              softness, ensuring every use feels like a spa experience.
            </p>
          </div>
        </div>
        <div>
          <img src={Image2} />
          <div className="text-overlay">
            <h1>Where Quality Meets Elegance</h1>
            <p>
              Thoughtfully designed to provide durability, absorbency, and a
              touch of luxury to your everyday life.
            </p>
          </div>
        </div>
        <div>
          <img src={Image3} />
          <div className="text-overlay">
            <h1>Unwind in Unparalleled Comfort</h1>
            <p>
              Meticulously woven with care, our towels reflect a commitment to
              style and functionality.
            </p>
          </div>
        </div>
        <div>
          <img src={Image4} />
          <div className="text-overlay">
            <h1>Luxury You Can Feel</h1>
            <p>
              Crafted from the finest materials, each towel is designed to
              elevate your everyday routine while offering exceptional
              absorbency and long-lasting quality.
            </p>
          </div>
        </div>
        <div>
          <img src={Image5} />
          <div className="text-overlay">
            <h1>Sustainable Sophistication</h1>
            <p>
              Experience the perfect blend of style, durability, and softness
              with our collection of premium towels.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
