import React from "react";

interface CircularProgressBarProps {
  percent: number;
  radius: number;
  strokeWidth: number;
  color?: string;
  text: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percent,
  radius,
  strokeWidth,
  color = "#0000ff",
  text,
}) => {
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  const cx = radius + strokeWidth / 2;
  const cy = radius + strokeWidth / 2;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width={2 * (radius + strokeWidth / 2)}
        height={2 * (radius + strokeWidth / 2)}
        className="transform -rotate-90"
      >
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="dark:text-gray-400 text-gray-300"
        />
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={`text-${color}-500`}
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          transform={`rotate(90, ${cx}, ${cy})`}
          className="text-2xl"
          fill={color}
        >
          {`${text}`}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
