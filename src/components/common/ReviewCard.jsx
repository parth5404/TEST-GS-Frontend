import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';

const ReviewCard = ({ review }) => {
  const [readMore, setReadMore] = useState(false);

  const MAX_NO_OF_WORDS = 15;
  const truncatedReview =
    review.review.split(' ').length > MAX_NO_OF_WORDS
      ? `${review.review.split(' ').slice(0, MAX_NO_OF_WORDS).join(' ')} ...`
      : review.review;

  return (
    <div className="bg-base-300 bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg text-white transition-all duration-300 hover:bg-opacity-50">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={review.user?.avatar}
          alt="student-avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-semibold">{`${review.user?.firstName} ${review.user?.lastName}`}</p>
          <p className="text-sm text-base-content">{review.course.title}</p>
        </div>
      </div>
      <div className="text-base-content font-medium text-sm mb-4">
        {review.review.split(' ').length > MAX_NO_OF_WORDS ? (
          <div>
            {readMore ? review.review : truncatedReview}
            <span
              className="ml-2 text-primary cursor-pointer"
              onClick={() => setReadMore((prev) => !prev)}
            >
              {readMore ? 'Read Less' : 'Read More'}
            </span>
          </div>
        ) : (
          <p>{review.review}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <p className="text-yellow-500 font-semibold">{review.rating.toFixed(1)}</p>
        <ReactStars
          count={5}
          value={review.rating}
          size={20}
          edit={false}
          activeColor="#ffd700"
          emptyIcon={<FaStar />}
          fullIcon={<FaStar />}
        />
      </div>
    </div>
  );
};

export default ReviewCard;
