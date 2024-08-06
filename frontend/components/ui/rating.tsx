// components/Rating.tsx
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

interface RatingProps {
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({
  initialRating = 0,
  onRatingChange,
}) => {
  const [rating, setRating] = useState<number>(initialRating);

  const handleRating = (value: number) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={`w-8 h-8 cursor-pointer ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => handleRating(index + 1)}
        />
      ))}
    </div>
  );
};

export default Rating;
