import React, { useState, useEffect } from 'react';
import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti';

interface RatingStarsProps {
  Review_Count: number;
  Star_Size?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ Review_Count, Star_Size = 20 }) => {
  const [starCounts, setStarCounts] = useState({
    full: 0,
    half: 0,
    empty: 0,
  });

  useEffect(() => {
    const fullStars = Math.floor(Review_Count) || 0;
    const halfStars = Review_Count % 1 >= 0.5 ? 1 : 0;
    const emptyStars = Math.max(0, 5 - fullStars - halfStars);
    
    setStarCounts({
      full: fullStars,
      half: halfStars,
      empty: emptyStars,
    });
  }, [Review_Count]);

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(starCounts.full)].map((_, i) => (
        <TiStarFullOutline key={`full-${i}`} size={Star_Size} />
      ))}
      {[...Array(starCounts.half)].map((_, i) => (
        <TiStarHalfOutline key={`half-${i}`} size={Star_Size} />
      ))}
      {[...Array(starCounts.empty)].map((_, i) => (
        <TiStarOutline key={`empty-${i}`} size={Star_Size} />
      ))}
    </div>
  );
};

export default RatingStars;
