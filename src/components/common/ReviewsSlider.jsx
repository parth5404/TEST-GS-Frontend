import React from 'react';
import ReviewCard from './ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const ReviewsSlider = ({ reviews }) => {
  return (
    <div className="my-12">
      {reviews && reviews.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {reviews.map((review, ind) => (
            <SwiperSlide key={ind}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-2xl font-semibold text-center text-base-content select-none">
          No Reviews Found
        </p>
      )}
    </div>
  );
};

export default ReviewsSlider;
