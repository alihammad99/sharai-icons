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
      <g fill={color} clipPath="url(#clip0_1282_499)">
        <path
          d="M14.26 1.883a4.25 4.25 0 00-4.52 0l-5.5 3.453a4.25 4.25 0 00-1.99 3.6v6.129a4.25 4.25 0 001.99 3.6l5.5 3.452a4.25 4.25 0 004.52 0l5.5-3.453a4.25 4.25 0 001.99-3.6V8.936a4.25 4.25 0 00-1.99-3.6l-5.5-3.452z"
          opacity="0.4"
        ></path>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1282_499">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
