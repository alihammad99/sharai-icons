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
      <g clipPath="url(#clip0_501_26837)">
        <path
          fill={color}
          fillRule="evenodd"
          d="M1.25 5.5A4.25 4.25 0 015.5 1.25h13a4.25 4.25 0 014.25 4.25v13a4.25 4.25 0 01-4.25 4.25h-13a4.25 4.25 0 01-4.25-4.25v-13zm10 10.5a.75.75 0 001.5 0V8a.75.75 0 00-1.5 0v8zM8 16.75a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zm7.25-.75a.75.75 0 001.5 0v-6a.75.75 0 00-1.5 0v6z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_501_26837">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
