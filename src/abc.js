import React, { useRef } from 'react';
import Slider from 'react-slick';

function MySlider() {
  const sliderRef = useRef();

  const handleClickNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <Slider ref={sliderRef}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Slider>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
}

export default MySlider