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
      <g fill={color} clipPath="url(#clip0_501_26496)">
        <path d="M11.25 16a.75.75 0 001.5 0V8a.75.75 0 00-1.5 0v8zM8 16.75a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM15.25 16a.75.75 0 001.5 0v-6a.75.75 0 00-1.5 0v6z"></path>
        <path
          fillRule="evenodd"
          d="M5.5 1.25A4.25 4.25 0 001.25 5.5v13a4.25 4.25 0 004.25 4.25h13a4.25 4.25 0 004.25-4.25v-13a4.25 4.25 0 00-4.25-4.25h-13zM2.75 5.5A2.75 2.75 0 015.5 2.75h13a2.75 2.75 0 012.75 2.75v13a2.75 2.75 0 01-2.75 2.75h-13a2.75 2.75 0 01-2.75-2.75v-13z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_501_26496">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
