import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const SmallMediaSlider = ({ data }) => {
  const mediaSlides = data?.results.map((d) => {
    const imageUrl = `https://image.tmdb.org/t/p/original${d.poster_path}`;

    return (
      <SwiperSlide key={d.id}>
        <div>
          <div>
            <img src={imageUrl} alt="" loading="lazy" />
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.2}
      breakpoints={{
        500: {
          slidesPerView: 2.2,
        },

        800: {
          slidesPerView: 3.2,
        },

        1280: {
          slidesPerView: 4.2,
        },
      }}
    >
      {mediaSlides}
    </Swiper>
  );
};
