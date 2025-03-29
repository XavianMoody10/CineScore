import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
// import { motion, AnimatePresence } from "motion/react";
// import ClipLoader from "react-spinners/ClipLoader";

export const LargeMediaSlider = ({ data }) => {
  const mediaSlides = data?.results.map((d) => {
    const imageUrl = `https://image.tmdb.org/t/p/original${d.backdrop_path}`;

    return (
      <SwiperSlide key={d.id}>
        <div
          className=" h-[750px] text-white bg-top bg-cover rounded-sm"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/45">
            <div className=" w-[90%] max-w-[700px] absolute bottom-5 left-5 space-y-3 lg:bottom-10 lg:left-10">
              <h3 className=" text-3xl font-bold">
                {d.name || d.title || d.original_name}
              </h3>
              <p className=" hidden text-lg sm:block">{d.overview}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper autoplay={{ delay: 8000 }} modules={[Autoplay]}>
      {mediaSlides}
    </Swiper>
  );
};
