import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { images } from '../../helper/data';
import './slider.css';
import './custom-dots.css';

const SliderComponent = () => {
  const settings = {
    dots: true, // Отключаем стандартные точки
    infinite: true,
    speed: 500,
    arrows: false, // Включаем пользовательские полоски (стрелки)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {images.map((img, id) => {
          return (
            <img className="swiper-slide" src={img} key={id} alt={`Slide`} />
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
