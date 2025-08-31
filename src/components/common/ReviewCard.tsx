import React from 'react';
import { Star, Quote } from 'lucide-react';
import RatingStars from './RatingStars';

const ReviewCard = ({ review }) => {
  return (
    <div className="glass-card rounded-2xl p-8 h-full flex flex-col relative overflow-hidden group">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Quote className="w-12 h-12 text-primary-400" />
      </div>
      
      <div className="relative z-10">
        {/* User Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img
              src={review.user?.avatar}
              alt="student-avatar"
              className="w-16 h-16 rounded-full object-cover border-2 border-primary-500/30 group-hover:border-primary-500/60 transition-colors duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-secondary-400 transition-all duration-300">
              {`${review.user?.firstName} ${review.user?.lastName}`}
            </h4>
            <p className="text-sm text-primary-400 font-medium">{review.course.title}</p>
          </div>
        </div>

        {/* Review Text */}
        <div className="flex-grow mb-6">
          <p className="text-base-content/80 leading-relaxed italic">
            "{review.review}"
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold gradient-text">{review.rating.toFixed(1)}</span>
            <RatingStars Review_Count={review.rating} Star_Size={20} />
          </div>
          <div className="flex items-center gap-1 text-xs text-base-content/60">
            <Star className="w-3 h-3 fill-current text-yellow-400" />
            <span>Verified Review</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;