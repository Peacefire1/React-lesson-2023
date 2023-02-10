import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import images from "../data/images";

const SwiperUI = () => {
  const swiperRef = useRef(null);
  const [thumbSwiper, setThumbSwiper] = useState(null);

  const sliders = images.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={image.url} alt="slider image" />
      </SwiperSlide>
    );
  });
  return (
    <div>
      <h1>Day-60 Swiper JS with React</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={{ thumbSwiper }}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        // modules={[Thumbs]}
      >
        {sliders}
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        // modules={[Thumbs]}
        // watchSlidesProgress
        // onSwiper={setThumbSwiper}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
      >
        {sliders}
        ...
      </Swiper>
    </div>
  );
};

export { SwiperUI };
