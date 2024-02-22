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
      viewBox="0 0 24 25"
    >
      <g fill={color} clipPath="url(#clip0_1282_475)">
        <path
          d="M5.5 1.75A4.25 4.25 0 001.25 6v13a4.25 4.25 0 004.25 4.25h13A4.25 4.25 0 0022.75 19V6a4.25 4.25 0 00-4.25-4.25h-13z"
          opacity="0.4"
        ></path>
        <path d="M12 17.25a.75.75 0 01-.75-.75v-8a.75.75 0 011.5 0v8a.75.75 0 01-.75.75zM8 17.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM15.25 16.5a.75.75 0 001.5 0v-6a.75.75 0 00-1.5 0v6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1282_475">
          <path
            fill="#fff"
            d="M0 0H24V24H0z"
            transform="translate(0 .5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
