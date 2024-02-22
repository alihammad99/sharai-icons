import React from "react";

function Icon({
  color = "#6E6D99",
  size = 24,
}: {
  color: string;
  size: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g fill={color} clipPath="url(#clip0_1282_479)">
        <path
          d="M5.5 6.25a4.25 4.25 0 00-4.25 4.25v8a4.25 4.25 0 004.25 4.25h12a4.25 4.25 0 004.25-4.25v-8a4.25 4.25 0 00-4.25-4.25h-12z"
          opacity="0.4"
        ></path>
        <path d="M14.162 1.252a2.25 2.25 0 011.343.36c.267.173.46.402.63.647.16.232.33.527.528.87l1.877 3.25a4.259 4.259 0 00-1.04-.129h-12a4.29 4.29 0 00-.546.035L12.4 1.986c.342-.198.638-.368.892-.489.27-.127.552-.228.87-.245z"></path>
        <path
          fillRule="evenodd"
          d="M14.75 14.5a2.75 2.75 0 012.75-2.75h3.395c.748 0 1.355.607 1.355 1.355v2.79c0 .748-.607 1.355-1.355 1.355H17.5a2.75 2.75 0 01-2.75-2.75zm3.75 0a1 1 0 11-2 0 1 1 0 012 0z"
          clipRule="evenodd"
        ></path>
        <path d="M5.25 18a.75.75 0 01.75-.75h4a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1282_479">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
