import React from "react";
import styles from "./loadingdot.module.css";

interface LoadingDotsProps {
  size?: number;
}

const LoadingDots: React.FC<LoadingDotsProps> = ({ size = 20 }) => {
  const dotStyle = {
    height: `${size}px`,
    width: `${size}px`,
    marginRight: `${size / 2}px`,
  };

  return (
    <div className={styles.dotsContainer}>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={styles.dot}
          style={{
            ...dotStyle,
            marginRight: index !== 4 ? dotStyle.marginRight : "0",
            animationDelay: `${index * 0.2 - 0.3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default LoadingDots;
