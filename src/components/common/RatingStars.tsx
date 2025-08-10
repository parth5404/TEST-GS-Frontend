import React, { useState, useEffect } from 'react';
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti';

interface RatingStarsProps {
  rating: number;
  starSize?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, starSize = 20 }) => {
  const [starCounts, setStarCounts] = useState({ full: 0, half: 0, empty: 0 });

  useEffect(() => {
    setStarCounts({
      full: Math.floor(rating),
      half: Number.isInteger(rating) ? 0 : 1,
      empty: 5 - Math.floor(rating) - (Number.isInteger(rating) ? 0 : 1),
    });
  }, [rating]);

  return (
    <div className="flex gap-1 text-yellow-500">
      {[...new Array(starCounts.full)].map((_, ind) => (
        <TiStarFullOutline key={`full-${ind}`} size={starSize} />
      ))}
      {[...new Array(starCounts.half)].map((_, ind) => (
        <TiStarHalfOutline key={`half-${ind}`} size={starSize} />
      ))}
      {[...new Array(starCounts.empty)].map((_, ind) => (
        <TiStarOutline key={`empty-${ind}`} size={starSize} />
      ))}
    </div>
  );
};

export default RatingStars;
