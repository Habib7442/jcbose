import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.scss";

// import required modules
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src="./img22.jfif" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./home.jfif"
            className="d-block w-full carousel__img"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./img23.jfif"
            className="d-block w-full carousel__img"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./img24.jfif"
            className="d-block w-full carousel__img"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./img31.jfif"
            className="d-block w-full carousel__img"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./img1.jfif"
            className="d-block w-full carousel__img"
            alt="Slide 6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./img3.jfif"
            className="d-block w-full carousel__img"
            alt="Slide 7"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./img4.jfif"
            className="d-block w-full carousel__img"
            alt="Slide 8"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./img5.jfif"
            className="d-block w-full carousel__img"
            alt="Slide 9"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
