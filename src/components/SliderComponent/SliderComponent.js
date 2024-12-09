import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderComponent.css"; // Import the CSS file

const SliderComponent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets and small laptops
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hides arrows for a cleaner mobile view
        },
      },
    ],
  };

  const sliderImages = [
    "https://m.media-amazon.com/images/I/61nct-2C6XL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71q+30pYhdL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71TJ4nu+mgL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/6162VGXl4xL._SX3000_.jpg",
  ];

  return (
    <div className="slider-container">
      <Slider {...sliderSettings}>
        {sliderImages.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
