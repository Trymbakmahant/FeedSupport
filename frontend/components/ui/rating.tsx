// components/Rating.tsx
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaSadCry } from "react-icons/fa";
import { ImSad } from "react-icons/im";
import {
  RiEmotionNormalFill,
  RiEmotionHappyFill,
  RiEmotionLaughFill,
  RiEmotionSadFill,
  RiEmotionUnhappyFill,
} from "react-icons/ri";

interface RatingProps {
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
  size: number;
  ratingflag: boolean; // Use this to decide what to show the user
}

const Rating: React.FC<RatingProps> = ({
  initialRating = 0,
  onRatingChange,
  ratingflag,
  size,
}) => {
  const [rating, setRating] = useState<number>(initialRating);

  const handleRating = (value: number) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  // Define color for the stars based on selected rating
  const getStarColor = (index: number) => {
    if (index <= rating) {
      switch (rating) {
        case 1:
          return "text-red-500"; // Red for 1
        case 3:
          return "text-orange-500"; // Orange for 2
        case 4:
          return "text-yellow-500"; // Light green for 4
        case 5:
          return "text-green-500"; // Dark green for 5

        default:
          return "text-gray-300";
      }
    } else {
      return "text-gray-300"; // Gray for unselected stars
    }
  };

  return (
    <div className={`flex ${ratingflag ? "space-x-1" : "gap-4"} mb-7`}>
      {ratingflag ? (
        Array.from({ length: 5 }, (_, index) => (
          <FaStar
            size={size}
            key={index}
            className={`cursor-pointer ${getStarColor(index + 1)}`}
            onClick={() => handleRating(index + 1)}
          />
        ))
      ) : (
        <>
          <div
            className={`size-14 border-2 rounded-xl flex items-center justify-center cursor-pointer`}
            onClick={() => handleRating(1)}
          >
            <RiEmotionSadFill
              size={size}
              style={{ color: rating === 1 ? "#F56565" : "#E2E8F0" }} // Red color for sad
            />
          </div>
          <div
            className={`size-14 border-2 rounded-xl flex items-center justify-center cursor-pointer`}
            onClick={() => handleRating(2)}
          >
            <RiEmotionUnhappyFill
              size={size}
              style={{ color: rating === 2 ? "#F56565" : "#E2E8F0" }} // Red color for sad
            />
          </div>
          <div
            className={`size-14 border-2 rounded-xl flex items-center justify-center cursor-pointer`}
            onClick={() => handleRating(3)}
          >
            <RiEmotionNormalFill
              size={size}
              style={{ color: rating === 3 ? "#ECC94B" : "#E2E8F0" }} // Yellow color for normal
            />
          </div>
          <div
            className={`size-14 border-2 rounded-xl flex items-center justify-center cursor-pointer`}
            onClick={() => handleRating(4)}
          >
            <RiEmotionHappyFill
              size={size}
              style={{ color: rating === 4 ? "#38B2AC" : "#E2E8F0" }} // Teal color for happy
            />
          </div>
          <div
            className={`size-14 border-2 rounded-xl flex items-center justify-center cursor-pointer`}
            onClick={() => handleRating(5)}
          >
            <RiEmotionLaughFill
              size={size}
              style={{ color: rating === 5 ? "#48BB78" : "#E2E8F0" }} // Green color for laughing
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Rating;
