import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HistogramChart from './Histogram';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <HistogramChart />
      </div>
      <div>
        <HistogramChart />
      </div>
      <div>
        <HistogramChart />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;