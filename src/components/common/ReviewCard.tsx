import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Star } from 'lucide-react';
import RatingStars from './RatingStars';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-base-content h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={review.user?.avatar}
          alt="student-avatar"
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/50"
        />
        <div>
          <p className="text-lg font-semibold">{`${review.user?.firstName} ${review.user?.lastName}`}</p>
          <p className="text-sm text-primary">{review.course.title}</p>
        </div>
      </div>
      <p className="text-base-content/80 text-sm mb-4 flex-grow">
        "{review.review}"
      </p>
      <div className="flex items-center gap-2 mt-auto">
        <span className="text-primary font-bold">{review.rating.toFixed(1)}</span>
        <RatingStars Review_Count={review.rating} />
      </div>
    </div>
  );
};

export default ReviewCard;
