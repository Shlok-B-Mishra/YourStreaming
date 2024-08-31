import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css'; // Ensure this file exists

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        <div><img src="/path/to/image1.jpg" alt="Slide 1" className={styles.slideImage} /></div>
        <div><img src="/path/to/image2.jpg" alt="Slide 2" className={styles.slideImage} /></div>
        <div><img src="/path/to/image3.jpg" alt="Slide 3" className={styles.slideImage} /></div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;



