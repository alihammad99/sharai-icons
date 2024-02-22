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
      <g clipPath="url(#clip0_501_26995)">
        <path
          fill={color}
          fillRule="evenodd"
          d="M1.25 18.5a4.25 4.25 0 004.25 4.25h14.25a3 3 0 003-3V13.5c0-.69-.56-1.25-1.25-1.25h-3.25V4.498A3.248 3.248 0 0015 1.25H4.5A3.25 3.25 0 001.25 4.5v14zm18.5 2.75a1.5 1.5 0 01-1.5-1.5v-6h3v6a1.5 1.5 0 01-1.5 1.5zM5 8a1 1 0 112 0 1 1 0 01-2 0zm3.25 0A.75.75 0 019 7.25h5a.75.75 0 010 1.5H9A.75.75 0 018.25 8zM5 12a1 1 0 112 0 1 1 0 01-2 0zm3.25 0a.75.75 0 01.75-.75h5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM5 16a1 1 0 112 0 1 1 0 01-2 0zm3.25 0a.75.75 0 01.75-.75h5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_501_26995">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
