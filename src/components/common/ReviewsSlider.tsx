import React from 'react';
import ReviewCard from './ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsSlider = ({ reviews }: { reviews: any[] }) => {
  return (
    <div className="relative w-full">
      {reviews && reviews.length ? (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-white/30 !w-3 !h-3',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-gradient-to-r !from-primary-500 !to-secondary-500',
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="w-full pb-16"
          >
            {reviews.map((review, ind) => (
              <SwiperSlide key={ind} className="h-auto">
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="swiper-button-prev-custom group p-3 rounded-full glass-card border-white/20 hover:border-primary-500/50 transition-all duration-300 hover:scale-110">
              <ChevronLeft className="w-6 h-6 text-base-content group-hover:text-primary-400 transition-colors" />
            </button>
            <button className="swiper-button-next-custom group p-3 rounded-full glass-card border-white/20 hover:border-primary-500/50 transition-all duration-300 hover:scale-110">
              <ChevronRight className="w-6 h-6 text-base-content group-hover:text-primary-400 transition-colors" />
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <div className="glass-card rounded-2xl p-12 max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
              <ChevronRight className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">No Reviews Yet</h3>
            <p className="text-base-content/70">Be the first to share your learning experience!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsSlider;