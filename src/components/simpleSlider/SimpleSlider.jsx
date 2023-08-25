import React from "react";
import Slider from "react-slick";
import Card from "../card/Card";
import styles from "./SimpleSlider.module.css";
import { cars } from "../cars.data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider className={styles.sliderBox} {...settings}>
        {cars.map((cars) => (
          <div className={styles.slide}>
            <Card className={styles.slide} key={cars.id} cars={cars} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
